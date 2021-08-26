/* eslint-disable no-console */
import React from 'react';
import { PropTypes } from 'prop-types';
import styles from '../styles/Card.module.css';

const routineCard = ({ name, icon }) => {
  console.log('routines index');
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card_icon}>
        {icon}
      </div>
      <div className={styles.card_title}>
        {name}
      </div>
    </div>
  );
};

routineCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default routineCard;
