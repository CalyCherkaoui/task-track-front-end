/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getRoutines } from '../actions/routines';
import { setRoutine, clearEditRoutineState } from '../actions/adminBoard';
import { setNotification, clearNotification } from '../actions/notifications';

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
    <div>
      <h1>
        Add a routine!
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
