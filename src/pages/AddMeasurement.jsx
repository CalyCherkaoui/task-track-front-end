/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap';
import { setMeasurement, clearEditMeasurementState } from '../actions/measurements';
import { setNotification, clearNotification } from '../actions/notifications';
import styles from '../styles/Form.module.css';

const AddMeasurement = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  if (!currentUser || !sessionStorage.getItem('token') || !isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState();
  const [task_id, setTask_id] = useState();
  const tasksList = useSelector((state) => state.measurement.taskslist);
  const loading = useSelector((state) => state.measurement.loading);
  const edit_success = useSelector((state) => state.measurement.edit_success);
  const error = useSelector((state) => state.measurement.error);

  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setMeasurement(quantity, task_id));
  };

  useEffect(() => {
    if (edit_success === true) {
      dispatch(setNotification('Measurement was successfully recorded!'));
      document.getElementById('success_notif').style.display = 'block';
      dispatch(clearEditMeasurementState());
      setTimeout(() => {
        document.getElementById('success_notif').style.display = 'none';
        dispatch(clearNotification());
      }, 3000);
    }

    if (error) {
      document.getElementById('errors_notif').style.display = 'block';
      dispatch(clearEditMeasurementState());
      setTimeout(() => {
        document.getElementById('errors_notif').style.display = 'none';
      }, 3000);
    }
  }, [edit_success, error]);

  const selectTask = (tasksList)
    ? (
      <select
        name="task"
        id="task_id"
        onChange={(e) => setTask_id(e.target.value)}
        className={styles.form_input}
      >
        <option
          key="key_"
        >
          Select the task you want to measure up!
        </option>
        {tasksList.map((elem) => (
          <option
            key={`key_${parseInt(elem.id, 10)}`}
            value={parseInt(elem.id, 10)}
          >
            {elem.name}
          </option>
        ))}
      </select>
    ) : (
      <select
        className={styles.form_input}
      >
        <option>
          No Tasks available yet! Create one!
        </option>
      </select>
    );

  return (
    <div className={`${styles.form_wrapper} box_flex_col_centered p-4`}>
      <Container className="g-0 shadowed_small bg-white">
        <Row className={`${styles.form_header_wrapper} g-0 d-flex align-items-baseline`}>
          <Col className={`box_flex_col_centered g-0 ${styles.form_header_icon}`} xs={2}>
            <span>
              <i className="fas fa-pencil-ruler" />
            </span>
          </Col>
          <Col className="box_flex_col_centered g-0" xs={10}>
            <p className={styles.form_header_text}>
              Record a measurement
            </p>
          </Col>
        </Row>
        <Row className={`${styles.form_form_wrapper} g-0`}>
          <Col className="box_flex_col_centered py-4">
            <form
              className={`${styles.form_form} px-3`}
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="measurement_quantity_input"
                className={`${styles.form_label} box_flex_col_centered`}
              >
                <input
                  id="measurement_quantity_input"
                  type="number"
                  name="quantity"
                  placeholder="Quantity: How much is your progress? "
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>

              <label
                className={`${styles.form_label} box_flex_col_centered`}
                htmlFor="measurement_task_input"
              >
                {selectTask}
              </label>
              <button
                className={styles.form_submit}
                type="submit"
              >
                Record Measurement!
              </button>
            </form>
          </Col>
        </Row>
        <Row>
          <Link to="/home" className="col d-flex justify-content-center align-items-center p-4 text-info">
            <i className="fas fa-angle-double-left fa-2x" />
            <span className="mx-2">Back to my routines!</span>
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default AddMeasurement;
