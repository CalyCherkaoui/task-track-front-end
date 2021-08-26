/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineAreaChart } from 'react-icons/ai';
import styles from '../styles/Home.module.css';
import getRoutines from '../actions/routines';
import routineCard from '../component/routineCard';

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  if (!currentUser || !sessionStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch]);

  const { routine: routinesList } = useSelector((state) => state.routines);

  console.log(routinesList);
  return (
    (
      <div className="container">
        <h2>
          My daily Routines
          <span className={styles.title_icon}>
            <IconContext.Provider value={{ className: 'footer_icon' }}>
              <AiOutlineAreaChart />
            </IconContext.Provider>
          </span>
        </h2>
        <routineCard name="myroutine" icon="fas fa-coffee" />
      </div>
    )
  );
};

export default Home;
