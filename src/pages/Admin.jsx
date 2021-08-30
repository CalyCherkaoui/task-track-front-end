/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import styles from '../styles/Card.module.css';
import { getRoutines } from '../actions/routines';

const Admin = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const admin = useSelector((state) => state.authentication.admin);
  if (!currentUser || !sessionStorage.getItem('token') || !isLoggedIn) {
    return <Redirect to="/login" />;
  }

  if (!admin) {
    return <Redirect to="/home" />;
  }

  const routinesList = useSelector((state) => state.routines.routines);
  const loading = useSelector((state) => state.routines.loading);

  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch]);

  const display = (list) => {
    if (list.length === 0) {
      return (
        <div>
          <h3> No routine yet! Create one!</h3>
          <h3>
            <i className="fas fa-coffee fa-2x" />
          </h3>
        </div>
      );
    }

    const listRoutines = list.map(
      (element) => (
        <li className={styles.card_wrapper} key={`key_${element.id}`}>
          <Link to={`/routines/${parseInt(element.id, 10)}`}>
            <div className={styles.card_icon}>
              <i className="fas fa-coffee fa-2x" />
            </div>
            <div className={styles.card_title}>
              {element.attributes.name}
            </div>
            <div className={styles.card_title}>
              {element.attributes.priority}
            </div>
          </Link>
        </li>
      ),
    );

    return (
      <ul>
        { listRoutines }
      </ul>
    );
  };

  return (
    <div className="container">
      <h2>
        Admin Dashboard
      </h2>
      <div>
        {display(routinesList)}
      </div>
    </div>
  );
};

export default Admin;
