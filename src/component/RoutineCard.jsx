/* eslint-disable no-console */
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from '../styles/Card.module.css';

const RoutineCard = ({ routine }) => {
  console.log('routines index');
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_icon}>
        <i className={`${routine.icon} fa-2x`} />
      </div>
      <div className={styles.card_title}>
        {routine.name}
      </div>
      <div className={styles.card_title}>
        {routine.priority}
      </div>
    </div>
  );
};

RoutineCard.propTypes = {
  routine: PropTypes.shape(
    {
      name: PropTypes.string,
      icon: PropTypes.string,
      priority: PropTypes.number,
    },
  ).isRequired,
};

export default RoutineCard;
