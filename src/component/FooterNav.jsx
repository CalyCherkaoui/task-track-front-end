import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Navigation.module.css';

const FooterNav = () => {
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const { admin } = useSelector((state) => state.authentication);

  return (

    <Navbar className="justify-content-between">
      <Nav className={styles.footer_nav_wrapper}>
        {
            (isLoggedIn && !admin) && (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/addtask" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <i className="fas fa-plus" />
                    </span>
                    Track Task
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/myroutines" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <i className="fab fa-creative-commons-sampling" />
                    </span>
                    My Routines
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/measureup" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <i className="fas fa-pencil-ruler" />
                    </span>
                    Measure-up
                  </Link>
                </li>
              </div>
            )
        }
        {
            admin && isLoggedIn && (
              <div>
                <li className="nav-item">
                  <Link to="/addroutine" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <i className="fas fa-tools" />
                    </span>
                    add routine
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <i className="fas fa-flask" />
                    </span>
                    dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <i className="fas fa-th-list" />
                    </span>
                    Routines
                  </Link>
                </li>
              </div>
            )
          }
      </Nav>
    </Navbar>

  );
};

export default FooterNav;
