/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap';
import { setTask, clearEditTaskState } from '../actions/tasks';
import { getAllTasks } from '../actions/measurements';
import { setNotification, clearNotification } from '../actions/notifications';
import styles from '../styles/Form.module.css';

const AddTask = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  if (!currentUser || !sessionStorage.getItem('token') || !isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [priority, setPriority] = useState();
  const [goal, setGoal] = useState();
  const [unit, setUnit] = useState();
  const [routine_id, setRoutine_id] = useState();
  const routinesList = useSelector((state) => state.task.routineslist);
  const loading = useSelector((state) => state.task.loading);
  const edit_success = useSelector((state) => state.task.edit_success);
  const error = useSelector((state) => state.task.error);

  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTask(name, priority, goal, unit, routine_id));
  };

  useEffect(() => {
    if (edit_success === true) {
      dispatch(setNotification('Great! Task is now tracked! Dont forget to take a measurement'));
      document.getElementById('success_notif').style.display = 'block';
      dispatch(getAllTasks());
      dispatch(clearEditTaskState());
      setTimeout(() => {
        document.getElementById('success_notif').style.display = 'none';
        dispatch(clearNotification());
      }, 4000);
    }

    if (error) {
      document.getElementById('errors_notif').style.display = 'block';
      dispatch(clearEditTaskState());
      setTimeout(() => {
        document.getElementById('errors_notif').style.display = 'none';
      }, 4000);
    }
  });

  const selectRoutine = (routinesList)
    ? (
      <select
        name="routine"
        id="routine_id"
        onChange={(e) => setRoutine_id(e.target.value)}
        className={styles.form_input}
      >
        <option
          key="key_"
        >
          Select a Routine for your task!
        </option>
        {routinesList.map((elem) => (
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
        <option value={1}>
          No routine available yet!
        </option>
      </select>
    );

  return (

    <div className={`${styles.form_wrapper} box_flex_col_centered p-4`}>
      <Container className="g-0 shadowed_small">
        <Row className={`${styles.form_header_wrapper} g-0 d-flex align-items-baseline`}>
          <Col className={`box_flex_col_centered g-0 ${styles.form_header_icon}`} xs={3}>
            <span>
              <i className="fas fa-list" />
            </span>
          </Col>
          <Col className="box_flex_col_centered g-0" xs={9}>
            <p className={styles.form_header_text}>
              Set a Task to track
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
                htmlFor="task_name_input"
                className={`${styles.form_label} box_flex_col_centered`}
              >
                <input
                  id="task_name_input"
                  type="text"
                  name="name"
                  placeholder="Name a Task!"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <label
                className={`${styles.form_label} box_flex_col_centered`}
                htmlFor="task_priority_input"
              >
                <input
                  id="task_priority_input"
                  type="number"
                  name="priority"
                  min="1"
                  max="10"
                  placeholder="Give your task a priority from 1 to 10"
                  onChange={(e) => setPriority(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <label
                className={`${styles.form_label} box_flex_col_centered`}
                htmlFor="task_goal_input"
              >
                <input
                  id="task_goal_input"
                  type="number"
                  name="goal"
                  placeholder="Set your goals for this task"
                  onChange={(e) => setGoal(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <label
                className={`${styles.form_label} box_flex_col_centered`}
                htmlFor="task_unity_input"
              >
                <input
                  id="task_unity_input"
                  type="text"
                  name="Unity"
                  placeholder="Set a unity of measurement"
                  onChange={(e) => setUnit(e.target.value)}
                  required
                  className={styles.form_input}
                />
              </label>
              <label
                className={`${styles.form_label} box_flex_col_centered`}
                htmlFor="task_routine_input"
              >
                {selectRoutine}
              </label>
              <button
                className={styles.form_submit}
                type="submit"
              >
                Add Task to Track!
              </button>
            </form>
          </Col>
        </Row>
        <Row>
          <Link to="/home" className="col d-flex justify-content-center align-items-center p-3 text-info">
            <i className="fas fa-angle-double-left fa-2x" />
            <span className="mx-2">Back to my routines</span>
          </Link>
        </Row>
      </Container>
    </div>

  );
};

export default AddTask;
