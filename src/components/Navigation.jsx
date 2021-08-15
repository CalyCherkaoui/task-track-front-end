import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsCircleFill } from 'react-icons/bs';
import styles from '../styles/Navigation.module.css';

const Navigation = () => (
  <div className={`${styles.navigation_bar} flex_row flex_space_between shadowed_small`}>
    <div className={`${styles.navigation_left} flex_row flex_start_bl`}>
      <p className={`${styles.nav_logo} bold_typography`}>
        Trackmy-habits|
        <span className={styles.nav_logo_emph}>
          <IconContext.Provider value={{ className: 'logo_icon' }}>
            <BsCircleFill />
          </IconContext.Provider>
        </span>
      </p>
      <ul className="flex_row flex_start_bl">
        <li className={styles.nav_item}>
          <Link to="/" className={`${styles.nav_link} spaced_typography`}>Home</Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/about" className={`${styles.nav_link} spaced_typography`}>About</Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/login" className={`${styles.nav_link} spaced_typography`}>Login</Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/signup" className={`${styles.nav_link} spaced_typography`}>Signup</Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/profile" className={`${styles.nav_link} spaced_typography`}>Profile</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
