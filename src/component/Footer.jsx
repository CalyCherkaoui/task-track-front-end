import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/FooterNav.module.css';

const Footer = () => (

  <div className={`${styles.footer_wrapper} ${styles.footer_simple} box_flex_col_centered`}>
    <Container className="g-0">
      <Row className="g-0">
        <Col className="box_flex_col_centered g-0">
          <div>
            <a href="https://en.wikipedia.org/wiki/Copyright" className={styles.footer_simple_link}>
              Copyright
              &copy;
              2021
            </a>
            <span className={styles.footer_simple_separator}>|</span>
            <span className={styles.footer_simple_separator}>Made with</span>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
            <span className={styles.footer_simple_separator}>by:</span>
            <a href="https://www.linkedin.com/in/houda-cherkaoui-64106395/" className={styles.footer_simple_link}>
              Houda Cherkaoui
            </a>
          </div>
        </Col>
        <Col className="box_flex_col_centered" xs lg="4">
          <div>
            <span>Connect with us:</span>
            <a href="https://github.com/CalyCherkaoui" className={`${styles.footer_simple_separator} ${styles.footer_simple_accent}`}>
              <i className="fab fa-github" />
            </a>
            <a href="https://www.facebook.com/houdacherkaouicalypso/" className={styles.footer_simple_accent}>
              <i className="fab fa-facebook" />
            </a>
            <a href="https://twitter.com/Houda59579688" className={`${styles.footer_simple_separator} ${styles.footer_simple_accent}`}>
              <i className="fab fa-twitter" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>

);

export default Footer;
