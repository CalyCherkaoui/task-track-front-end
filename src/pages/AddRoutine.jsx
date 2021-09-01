/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { getRoutines } from '../actions/routines';
import { setRoutine, clearEditRoutineState } from '../actions/adminBoard';
import { setNotification, clearNotification } from '../actions/notifications';
import styles from '../styles/Form.module.css';

const AddRoutine = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const admin = useSelector((state) => state.authentication.admin);
  if (!currentUser || !sessionStorage.getItem('token') || !isLoggedIn) {
    return <Redirect to="/login" />;
  }

  if (!admin) {
    return <Redirect to="/home" />;
  }

  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [priority, setPriority] = useState();
  const [icon, setIcon] = useState();
  const edit_success = useSelector((state) => state.admin.edit_success);
  const error = useSelector((state) => state.admin.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setRoutine(name, priority, icon));
  };

  useEffect(() => {
    if (edit_success === true) {
      dispatch(setNotification('Routine was successfully added!'));
      document.getElementById('success_notif').style.display = 'block';
      dispatch(getRoutines());
      dispatch(clearEditRoutineState());
      setTimeout(() => {
        document.getElementById('success_notif').style.display = 'none';
        dispatch(clearNotification());
      }, 3000);
    }

    if (error) {
      document.getElementById('errors_notif').style.display = 'block';
      dispatch(clearEditRoutineState());
      setTimeout(() => {
        document.getElementById('errors_notif').style.display = 'none';
      }, 3000);
    }
  }, [edit_success, error]);

  return (
    <div className={`${styles.form_wrapper} box_flex_col_centered p-4`}>
      <Container className="g-0 shadowed_small">
        <Row className={`${styles.form_header_wrapper} g-0`}>
          <Col className="box_flex_col_centered g-0">
            <p className={styles.form_header_text}>
              <i className="fas fa-tools" />
              Admin Toolbox
            </p>
          </Col>
        </Row>
        <Row className={`${styles.form_form_wrapper} g-0`}>
          <Col className="box_flex_col_centered py-4">
            <form
              onSubmit={handleSubmit}
              className={`${styles.form_form} px-3`}
            >
              <label
                htmlFor="routine_name_input"
                className={`${styles.form_label} box_flex_col_centered`}
              >
                <input
                  id="routine_name_input"
                  type="text"
                  name="name"
                  placeholder="Routine name!"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <label
                htmlFor="routine_icon_input"
                className={`${styles.form_label} box_flex_col_centered`}
              >
                <p>Enter class name of free icon tag from fontawsome.com </p>
                <input
                  id="routine_icon_input"
                  type="text"
                  name="icon"
                  placeholder="Routine icon!"
                  onChange={(e) => setIcon(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <label
                htmlFor="routine_priority_input"
                className={`${styles.form_label} box_flex_col_centered`}
              >
                <input
                  id="routine_priority_input"
                  type="number"
                  name="priority"
                  min="1"
                  max="10"
                  placeholder="Set a priority"
                  onChange={(e) => setPriority(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <button
                type="submit"
                className={styles.form_submit}
              >
                Add Routine!
              </button>
            </form>
          </Col>
        </Row>
        <Row>
          <Link to="/admin">
            <i className="fas fa-arrow-left fa-2x" />
            Back to Routines
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default AddRoutine;
