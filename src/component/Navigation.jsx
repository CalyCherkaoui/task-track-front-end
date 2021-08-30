/* eslint-disable no-console */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Navigation.module.css';
import { logout } from '../actions/authentication';

const Navigation = () => {
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Navbar className="justify-content-between">
      <Navbar.Brand href="/">
        Task & Track
        <span className={styles.nav_logo_emph}>
          <i className="fab fa-creative-commons-sampling" />
        </span>
      </Navbar.Brand>
      <Nav className="">

        {
            isLoggedIn ? (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            )
        }
        {
            isLoggedIn ? (
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Sign-Up
                  </Link>
                </li>
              </div>
            )
          }
      </Nav>
    </Navbar>
  );
};

export default Navigation;
