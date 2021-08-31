/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useHistory } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import _ from 'lodash';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Card.module.css';
import { getRoutines } from '../actions/routines';
import { deleteRoutine, clearEditRoutineState } from '../actions/adminBoard';

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
  const deleted = useSelector((state) => state.admin.deleted);
  const history = useHistory();

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

  useEffect(() => {
    if (deleted) {
      dispatch(getRoutines());
      dispatch(clearEditRoutineState());
      history.push('/admin');
      document.getElementById('success_notif').style.display = 'block';
      setTimeout(() => {
        document.getElementById('success_notif').style.display = 'none';
      }, 3000);
    }
  }, [deleted]);

  const handleDelete = (routineid) => {
    console.log('delete');
    dispatch(deleteRoutine(routineid));
  };

  const display = (list) => {
    if (!_.isEmpty(list)) {
      return list.map(
        (element) => (
          <li className={styles.card_wrapper} key={`key_${element.id}`}>
            <Button
              variant="outline-danger"
            // size="lg"
              onClick={() => handleDelete(parseInt(element.id, 10))}
            >
              Delete Routine
            </Button>
            <div className={styles.card_icon}>
              <i className={element.attributes.icon} />
            </div>
            <div className={styles.card_title}>
              {element.attributes.name}
            </div>
            <div className={styles.card_title}>
              {element.attributes.priority}
            </div>
          </li>
        ),
      );
    }

    return (
      <div>
        <h3> No routine set yet! Create one!</h3>
        <h3>
          <i className="fas fa-coffee fa-2x" />
        </h3>
      </div>
    );
  };

  return (
    <div className="container">
      <h2>
        Admin Dashboard
      </h2>
      <div>
        <h3>
          <Link to="/addroutine">
            <i className="fas fa-tools" />
            Add new Routine
          </Link>
        </h3>
      </div>
      <div>
        {display(routinesList)}
      </div>
    </div>
  );
};

export default Admin;
