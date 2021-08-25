/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useHistory, Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { CgExtensionAdd } from 'react-icons/cg';
import { GoDiffAdded } from 'react-icons/go';
import { GiCycle } from 'react-icons/gi';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Navigation.module.css';
// import history from '../helpers/history';

const FooterNav = () => {
  // const history = useHistory();

  // if (sessionStorage.length === 0 || sessionStorage.token === 'undefined') {
  //   return history.push('/logout');
  // }

  // const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const { admin } = useSelector((state) => state.authentication);

  // const dispatch = useDispatch();
  // const admin = currentUser ? currentUser.data.meta.admin : false;
  console.log(isLoggedIn);

  // useEffect(() => {
  //   history.listen((location) => {
  //     dispatch(clearMessage(location));
  //   });
  // }, [dispatch]);

  // const logOut = () => {
  //   dispatch(logout());
  // };

  return (

  // <Router history={history}>

    <Navbar className="justify-content-between">
      <Nav className={styles.footer_nav_wrapper}>
        {
            (isLoggedIn) ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/taskme" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <IconContext.Provider value={{ className: 'footer_icon' }}>
                        <AiOutlineAreaChart />
                      </IconContext.Provider>
                    </span>
                    add task
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/timeline" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <IconContext.Provider value={{ className: 'footer_icon' }}>
                        <GoDiffAdded />
                      </IconContext.Provider>
                    </span>
                    timeline
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/routines" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <IconContext.Provider value={{ className: 'footer_icon' }}>
                        <GiCycle />
                      </IconContext.Provider>
                    </span>
                    reoutines
                  </Link>
                </li>
              </div>
            ) : (
              <div />
            )
          }
        {
            (admin && isLoggedIn) ? (
              <li className="nav-item">
                <Link to="/routineform" className="nav-link">
                  <span className={styles.nav_logo_emph}>
                    <IconContext.Provider value={{ className: 'footer_icon' }}>
                      <CgExtensionAdd />
                    </IconContext.Provider>
                  </span>
                  add routine
                </Link>
              </li>
            )
              : <div />
          }
      </Nav>
    </Navbar>

  // </Router>
  );
};

export default FooterNav;
