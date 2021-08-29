/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { setMeasurement, clearEditMeasurementState } from '../actions/measurements';
// import AlertBox from '../component/AlertBox';

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
      document.getElementById('success_notif').style.display = 'block';
      dispatch(clearEditMeasurementState());
      setTimeout(() => {
        document.getElementById('success_notif').style.display = 'none';
      }, 6000);
    }

    if (error) {
      document.getElementById('errors_notif').style.display = 'block';
      dispatch(clearEditMeasurementState());
      setTimeout(() => {
        document.getElementById('errors_notif').style.display = 'none';
      }, 6000);
    }
  });

  const selectTask = (tasksList)
    ? (
      <select
        name="task"
        id="task_id"
        onChange={(e) => setTask_id(e.target.value)}
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
      <select>
        <option>
          No Tasks available yet! Create one!
        </option>
      </select>
    );

  return (
    <div>
      <h1>
        Take a measurement!
      </h1>
      {/* <div
        id="add_measurement_success_notif"
        style={{ display: 'none', color: 'green' }}
      >
        <AlertBox
          alertprops={{
            variant: 'success',
            message: 'measurement Successfully Added!',
          }}
        />

      </div>
      <div
        id="add_measurement_errors_notif"
        style={{ display: 'none', color: 'red' }}
      >
        <AlertBox
          alertprops={{
            variant: 'danger',
            message: 'Oops! Something went wrong! Try again!',
          }}
        />
      </div> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="measurement_quantity_input">
          Quantity:
          <input
            id="measurement_quantity_input"
            type="number"
            name="quantity"
            min="1"
            max="10"
            placeholder="How much is your progress? "
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </label>

        <label htmlFor="measurement_task_input">
          Task :
          {selectTask}
        </label>
        <button
          type="submit"
        >
          Record Measurement!
        </button>
      </form>
      <Link to="/home">
        <i className="fas fa-arrow-left fa-2x" />
        Back to my routines
      </Link>
    </div>
  );
};

export default AddMeasurement;
