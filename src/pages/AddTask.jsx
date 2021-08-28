/* eslint-disable camelcase */
/* eslint-disable no-console */
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { setTask } from '../actions/tasks';
import AlertBox from '../component/AlertBox';

const AddTask = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  if (!currentUser || !sessionStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [priority, setPriority] = useState();
  const [goal, setGoal] = useState();
  const [unit, setUnit] = useState();
  const [routine, setRoutine] = useState();
  const history = useHistory();
  const routinesList = useSelector((state) => state.task.routineslist);
  const loading = useSelector((state) => state.task.loading);
  const success = useSelector((state) => state.task.success);
  const error = useSelector((state) => state.task.error);
  const task = useSelector((state) => state.task.task);
  const message = useSelector((state) => state.task.message);

  if (loading) {
    return <h3>Loading data ...</h3>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTask(name, priority, goal, unit, routine));
  };

  useEffect(() => {
    if (success === true) {
      // document.getElementById('add_task_success_notif').style.display = 'block';
      document.getElementById('add_task_success_notif').append(<AlertBox
        alertprops={{
          variant: 'success',
          message,
        }}
      />);
    }

    if (task) {
      setTimeout(() => {
        history.push(`/tasks/${parseInt(task.id, 10)}`);
      }, 5000);
    }

    if (error) {
      // document.getElementById('add_task_success_notif').style.display = 'block';
      document.getElementById('add_task_error_notif').append(<AlertBox
        alertprops={{
          variant: 'danger',
          message: 'Oops! Something went wrong! Try again!',
        }}
      />);
    }
  }, []);

  const selectRoutine = (routinesList)
    ? (
      <select
        name="routine"
        id="routine_id"
        onChange={(e) => setRoutine(e.target.value)}
      >
        {routinesList.map((elem) => (
          <option
            key={`key_${parseInt(elem.id, 10)}`}
            value={parseInt(elem.id, 10)}
          >
            <i className="fas fa-coffee fa-2x" />
              &nbsp;
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
        // style={{ display: 'none', color: 'green' }}
      >
        {/* successfully added */}
      </div>
      <div
        id="add_task_errors_notif"
        // style={{ display: 'none', color: 'red' }}
      >
        {/* Something went wrong */}
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
