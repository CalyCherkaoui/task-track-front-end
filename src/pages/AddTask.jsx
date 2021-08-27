/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setTask, getAllroutines } from '../actions/tasks';
// import { Redirect } from 'react-router-dom';

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
  const routinesList = useSelector((state) => state.task.routineslist);
  const loading = useSelector((state) => state.task.loading);

  useEffect(() => {
    dispatch(getAllroutines());
  }, [dispatch]);

  if (loading) {
    return <h3>Loading data ...</h3>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTask(name, priority, goal, unit, routine));
  };

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
            {/* <i className="fas fa-coffee" />
              &nbsp; */}
            {elem.name}
          </option>
        ))}
      </select>
    ) : (
      <select>
        <option>
          default
        </option>
      </select>
    );

  return (
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
  );
};

export default AddTask;
