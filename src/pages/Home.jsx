/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineAreaChart } from 'react-icons/ai';
import homestyles from '../styles/Home.module.css';
import styles from '../styles/Card.module.css';
import { getRoutines } from '../actions/routines';
import RoutineCard from '../component/RoutineCard';

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  if (!currentUser || !sessionStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch]);

  const routinesList = useSelector((state) => state.routines.routines);
  const loading = useSelector((state) => state.routines.loading);

  const routineTest = {
    name: 'No routine yet! Make yourself a coffee!',
    icon: 'fas fa-coffee',
    priority: 1,
  };

  console.log(routinesList);

  if (loading) {
    return <h3>Loading data ...</h3>;
  }

  const display = (list) => {
    if (list.length === 0) {
      return (
        <div>
          <h3> No routine yet! Make yourself a coffee!</h3>
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
        My daily Routines
        <span className={homestyles.title_icon}>
          <IconContext.Provider value={{ className: 'footer_icon' }}>
            <AiOutlineAreaChart />
          </IconContext.Provider>
        </span>
      </h2>
      <div>
        <RoutineCard routine={routineTest} />
      </div>
      <div>
        {display(routinesList)}
      </div>
    </div>
  );
};

export default Home;
