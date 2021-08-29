import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { CgExtensionAdd } from 'react-icons/cg';
import { GoDiffAdded } from 'react-icons/go';
import { ImLab } from 'react-icons/im';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Navigation.module.css';

const FooterNav = () => {
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const { admin } = useSelector((state) => state.authentication);

  return (

    <Navbar className="justify-content-between">
      <Nav className={styles.footer_nav_wrapper}>
        {
            (isLoggedIn) ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/addtask" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <IconContext.Provider value={{ className: 'footer_icon' }}>
                        <AiOutlineAreaChart />
                      </IconContext.Provider>
                    </span>
                    Track Task
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/timeline" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <IconContext.Provider value={{ className: 'footer_icon' }}>
                        <GoDiffAdded />
                      </IconContext.Provider>
                    </span>
                    Timeline
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/measureup" className="nav-link">
                    <span className={styles.nav_logo_emph}>
                      <IconContext.Provider value={{ className: 'footer_icon' }}>
                        <ImLab />
                      </IconContext.Provider>
                    </span>
                    Measure-up
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

  );
};

export default FooterNav;
