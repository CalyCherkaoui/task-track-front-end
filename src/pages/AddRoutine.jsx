/* eslint-disable camelcase */
/* eslint-disable no-console */
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { setRoutine, clearEditRoutineState } from '../actions/adminBoard';
import { getAllTasks } from '../actions/measurements';
// import AlertBox from '../component/AlertBox';

const AddRoutine = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  if (!currentUser || !sessionStorage.getItem('token') || !isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [priority, setPriority] = useState();
  const [icon, setIcon] = useState();
  // const history = useHistory();
  const loading = useSelector((state) => state.admin.loading);
  const edit_success = useSelector((state) => state.admin.edit_success);
  const error = useSelector((state) => state.admin.error);

  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setRoutine(name, priority, icon));
  };

  useEffect(() => {
    if (edit_success === true) {
      document.getElementById('success_notif').style.display = 'block';
      dispatch(getAllTasks());
      dispatch(clearEditRoutineState());
      setTimeout(() => {
        document.getElementById('success_notif').style.display = 'none';
      }, 5000);
    }

    if (error) {
      document.getElementById('errors_notif').style.display = 'block';
      dispatch(clearEditRoutineState());
      setTimeout(() => {
        document.getElementById('errors_notif').style.display = 'none';
      }, 5000);
    }
  });

  return (
    <div>
      <h1>
        Add a Task to track!
      </h1>
      <h2>
        <i className="fas fa-tools" />
        Tool-Box
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="routine_name_input">
          Name:
          <input
            id="routine_name_input"
            type="text"
            name="name"
            placeholder="Routine name!"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="routine_icon_input">
          icon:
          <input
            id="routine_icon_input"
            type="text"
            name="icon"
            placeholder="Routine icon!"
            onChange={(e) => setIcon(e.target.value)}
            required
          />
        </label>
        <label htmlFor="routine_priority_input">
          Priority:
          <input
            id="measurement_priority_input"
            type="number"
            name="priority"
            min="1"
            max="10"
            placeholder="Set a priority "
            onChange={(e) => setPriority(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
        >
          Add Routine!
        </button>
      </form>
      <Link to="/admin">
        <i className="fas fa-arrow-left fa-2x" />
        Back to Routines
      </Link>
    </div>
  );
};

export default AddRoutine;
