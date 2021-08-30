/* eslint-disable no-console */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link, useHistory, Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsCircleFill } from 'react-icons/bs';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Navigation.module.css';
// import history from '../helpers/history';
import { logout } from '../actions/authentication';

const Navigation = () => {
  // const history = useHistory();

  // if (sessionStorage.length === 0 || sessionStorage.token === 'undefined') {
  //   return history.push('/logout');
  // }

  const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const admin = useSelector((state) => state.authentication.admin);
  const dispatch = useDispatch();
  // const admin = currentUser ? currentUser.data.meta.admin : false;
  console.log(currentUser);

  const logOut = () => {
    dispatch(logout());
  };

  return (

  // <Router history={history}>

    <Navbar className="justify-content-between">
      <Navbar.Brand href="/">
        Task & Track
        <span className={styles.nav_logo_emph}>
          <IconContext.Provider value={{ className: 'logo_icon' }}>
            <BsCircleFill />
          </IconContext.Provider>
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
            admin && isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin-dashboard
              </Link>
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
                <div>|</div>
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

  // </Router>
  );
};

export default Navigation;
