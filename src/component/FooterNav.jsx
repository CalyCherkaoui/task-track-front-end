import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/FooterNav.module.css';

const FooterNav = () => {
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const { admin } = useSelector((state) => state.authentication);

  return (

    <div className={`${styles.footer_nav_wrapper} box_flex_col_centered`}>
      <Container className="g-0">
        {
            (isLoggedIn && !admin) && (
              <Row className="g-0">
                <Col className="box_flex_col_centered g-0">
                  <Link to="/addtask" className={`${styles.footer_nav_link} box_flex_col_centered`}>
                    <i className="fas fa-plus" />
                    <p className={styles.footer_nav_text}>Track Task</p>
                  </Link>
                </Col>
                <Col className="box_flex_col_centered g-0">
                  <Link to="/myroutines" className={`${styles.footer_nav_link} box_flex_col_centered`}>
                    <i className="fab fa-creative-commons-sampling" />
                    <p className={styles.footer_nav_text}>my routines</p>
                  </Link>
                </Col>
                <Col className="box_flex_col_centered g-0">
                  <Link to="/measureup" className={`${styles.footer_nav_link} box_flex_col_centered`}>
                    <i className="fas fa-pencil-ruler" />
                    <p className={styles.footer_nav_text}>Measure-up</p>
                  </Link>
                </Col>
              </Row>
            )
        }
        {
            admin && isLoggedIn && (
              <Row className="g-0">
                <Col className="box_flex_col_centered g-0">
                  <Link to="/addroutine" className={`${styles.footer_nav_link} box_flex_col_centered`}>
                    <i className="fas fa-tools" />
                    <p className={styles.footer_nav_text}>add routine</p>
                  </Link>
                </Col>
                <Col className="box_flex_col_centered g-0">
                  <Link to="/admin" className={`${styles.footer_nav_link} box_flex_col_centered`}>
                    <i className="fas fa-flask" />
                    <p className={styles.footer_nav_text}>dashboard</p>
                  </Link>
                </Col>
                <Col className="box_flex_col_centered g-0">
                  <Link to="/home" className={`${styles.footer_nav_link} box_flex_col_centered`}>
                    <i className="fas fa-th-list" />
                    <p className={styles.footer_nav_text}> Routines</p>
                  </Link>
                </Col>
              </Row>
            )
          }
      </Container>
    </div>
  );
};

export default FooterNav;
