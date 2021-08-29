/* eslint-disable camelcase */
/* eslint-disable no-console */
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { setTask, clearEditTaskState } from '../actions/tasks';
import { getAllTasks } from '../actions/measurements';
import AlertBox from '../component/AlertBox';

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
  // const history = useHistory();
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
    dispatch(getAllTasks());
  };

  useEffect(() => {
    if (edit_success === true) {
      document.getElementById('add_task_success_notif').style.display = 'block';
      dispatch(clearEditTaskState());
      setTimeout(() => {
        document.getElementById('add_task_success_notif').style.display = 'none';
      }, 5000);
    }

    if (error) {
      document.getElementById('add_task_errors_notif').style.display = 'block';
      dispatch(clearEditTaskState());
      setTimeout(() => {
        document.getElementById('add_task_errors_notif').style.display = 'none';
      }, 5000);
    }
  });

  const selectRoutine = (routinesList)
    ? (
      <select
        name="routine"
        id="routine_id"
        onChange={(e) => setRoutine_id(e.target.value)}
        // value={parseInt(routinesList[0].id, 10)}
      >
        <option
          key="key_"
          // value={parseInt(routinesList[0].id, 10)}
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
      <select>
        <option value={1}>
          Random
        </option>
      </select>
    );

  return (
    <div>
      <h1>
        Add a Task to track!
      </h1>
      <div
        id="add_task_success_notif"
        style={{ display: 'none', color: 'green' }}
      >
        <AlertBox
          alertprops={{
            variant: 'success',
            message: 'Task Successfully Added!',
          }}
        />

      </div>
      <div
        id="add_task_errors_notif"
        style={{ display: 'none', color: 'red' }}
      >
        <AlertBox
          alertprops={{
            variant: 'danger',
            message: 'Oops! Something went wrong! Try again!',
          }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task_name_input">
          Name:
          <input
            id="task_name_input"
            type="text"
            name="name"
            placeholder="Name a Task!"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="task_priority_input">
          Priority:
          <input
            id="task_priority_input"
            type="number"
            name="priority"
            min="1"
            max="10"
            placeholder="Give your task a priority from 1 to 10"
            onChange={(e) => setPriority(e.target.value)}
            required
          />
        </label>
        <label htmlFor="task_goal_input">
          Goal:
          <input
            id="task_goal_input"
            type="number"
            name="goal"
            placeholder="Set your goals for this task"
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </label>
        <label htmlFor="task_unity_input">
          Unity of measurement:
          <input
            id="task_unity_input"
            type="text"
            name="Unity"
            placeholder="Set a unity of measurement"
            onChange={(e) => setUnit(e.target.value)}
            required
          />
        </label>
        <label htmlFor="task_routine_input">
          Routine :
          {selectRoutine}
        </label>
        <button
          type="submit"
        >
          Add Task to Track!
        </button>
      </form>
      <Link to="/home">
        <i className="fas fa-arrow-left fa-2x" />
        Back to my routines
      </Link>
    </div>
  );
};

export default AddTask;
