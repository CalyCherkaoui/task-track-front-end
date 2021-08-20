import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsCircleFill } from 'react-icons/bs';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);

  return (
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
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">
            Profile
            { currentUser.username}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/home">home</Link>
        </li>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
