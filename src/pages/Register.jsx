import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { register } from '../actions/authentication';
import { getAllroutines } from '../actions/tasks';
import styles from '../styles/Form.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { isLoggedIn } = useSelector((state) => state.authentication);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(username, email, password));
  };

  if (isLoggedIn) {
    dispatch(getAllroutines());
    return <Redirect to="/home" />;
  }

  return (
    <div className={`${styles.form_wrapper} box_flex_col_centered p-4`}>
      <Container className="g-0 shadowed_small">
        <Row className={`${styles.form_header_wrapper} g-0`}>
          <Col className="box_flex_col_centered g-0">
            <p className={styles.form_header_text}>Sign-up</p>
          </Col>
        </Row>
        <Row className={`${styles.form_form_wrapper} g-0`}>
          <Col className="box_flex_col_centered py-4">
            <form
              className={`${styles.form_form} px-3`}
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="signup_username_input"
                className={`${styles.form_label} box_flex_col_centered`}
              >
                <input
                  id="signup_username_input"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <label
                htmlFor="signup_email_input"
                className={`${styles.form_label} box_flex_col_centered`}

              >
                <input
                  id="signup_email_input"
                  type="email"
                  name="email"
                  placeholder="Enter your email!"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <label
                htmlFor="signup_password_input"
                className={`${styles.form_label} box_flex_col_centered`}
              >
                <input
                  id="signup_password_input"
                  type="password"
                  name="password"
                  placeholder="Enter your password!"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <button
                type="submit"
                className={styles.form_submit}
              >
                Sign me up!
              </button>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Register;
