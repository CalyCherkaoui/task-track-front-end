import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { login } from '../actions/authentication';
import { getAllroutines } from '../actions/tasks';
import { getAllTasks } from '../actions/measurements';
import styles from '../styles/Form.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, email, password));
  };

  if (isLoggedIn) {
    dispatch(getAllroutines());
    dispatch(getAllTasks());
    return <Redirect to="/home" />;
  }

  return (
    <div className={`${styles.form_wrapper} box_flex_col_centered p-4`}>
      <Container className="g-0 shadowed_small">
        <Row className={`${styles.form_header_wrapper} g-0`}>
          <Col className="box_flex_col_centered g-0">
            <p className={styles.form_header_text}>Login</p>
          </Col>
        </Row>
        <Row className={`${styles.form_form_wrapper} g-0`}>
          <Col className="box_flex_col_centered py-4">
            <form
              className={`${styles.form_form} px-3`}
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="login_username_input"
                className={`${styles.form_label} box_flex_col_centered`}
              >
                <input
                  id="login_username_input"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <label
                htmlFor="login_email_input"
                className={`${styles.form_label} box_flex_col_centered`}

              >
                <input
                  id="login_email_input"
                  type="email"
                  name="email"
                  placeholder="Enter your email!"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <label
                htmlFor="login_password_input"
                className={`${styles.form_label} box_flex_col_centered`}
              >
                <input
                  id="login_password_input"
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
                Log me in!
              </button>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Login;
