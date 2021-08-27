/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getTask } from '../actions/tasks';
// import taskStyles from '../styles/Task.module.css';
// import statsStyles from '../styles/Stats.module.css';
import styles from '../styles/Card.module.css';

const TaskDetailPage = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  if (!currentUser || !sessionStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  const { taskid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask(taskid));
  }, [dispatch]);

  const task = useSelector((state) => state.task.task);
  const measurements = useSelector((state) => state.task.measurements);
  const loading = useSelector((state) => state.routines.loading);

  console.log('task detail page');
  console.log(task);
  console.log(measurements);

  if (loading) {
    return <h3>Loading data ...</h3>;
  }

  const displayMeasurements = (list) => {
    if (list.length === 0) {
      return (
        <div>
          <h3> No measurment taken yet! create one!</h3>
          <h3>
            <i className="fas fa-coffee fa-2x" />
          </h3>
        </div>
      );
    }

    const listMeasurements = list.map(
      (element) => (
        <li className={styles.card_wrapper} key={`key_${element.id}`}>
          <div className={styles.card_icon}>
            <i className="fas fa-coffee fa-2x" />
          </div>
          <div className={styles.card_title}>
            {element.attributes['creation-date']}
          </div>
          <div className={styles.card_title}>
            {element.attributes.quantity}
          </div>
          <div className={styles.card_title}>
            {element.attributes.unity}
          </div>
        </li>
      ),
    );

    return (
      <div>
        <ul>
          { listMeasurements }
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>{task.attributes.name}</h1>
      <h1>
        priority:
        {task.attributes.priority}
      </h1>
      <h2>
        Goal:
        {task.attributes.goal}
      </h2>
      <h2>
        total:
        {task.attributes['measurements-total']}
      </h2>

      <div>
        {displayMeasurements(measurements)}
      </div>
    </div>
  );
};

export default TaskDetailPage;
