/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useParams, Redirect, Link, useHistory,
} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Moment from 'moment';
import Chart from 'react-google-charts';
import Button from 'react-bootstrap/Button';
import { getTask, deleteTask, clearEditTaskState } from '../actions/tasks';
import { getAllTasks } from '../actions/measurements';
// import taskStyles from '../styles/Task.module.css';
// import statsStyles from '../styles/Stats.module.css';
import styles from '../styles/Card.module.css';

const TaskDetailPage = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  if (!currentUser || !sessionStorage.getItem('token') || !isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const task = useSelector((state) => state.task.task);
  const measurements = useSelector((state) => state.task.measurements);
  const loading = useSelector((state) => state.task.loading);
  const error = useSelector((state) => state.task.error);
  const deleted = useSelector((state) => state.task.deleted);

  const { taskid } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  useEffect(() => {
    dispatch(getTask(taskid));

    if (error) {
      document.getElementById('errors_notif').style.display = 'block';
      setTimeout(() => {
        document.getElementById('errors_notif').style.display = 'none';
        dispatch(clearEditTaskState());
      }, 5000);
    }
  }, []);

  useEffect(() => {
    if (deleted) {
      dispatch(getAllTasks());
      dispatch(clearEditTaskState());
      history.push('/home');
      document.getElementById('success_notif').style.display = 'block';
      setTimeout(() => {
        document.getElementById('success_notif').style.display = 'none';
      }, 3000);
    }
  }, [deleted]);

  const handleDelete = (taskid) => {
    console.log('delete');
    dispatch(deleteTask(taskid));
  };

  const listMeasurements = (measurements)
    ? (measurements.map(
      (element) => (
        <li className={styles.card_wrapper} key={`key_${element.id}`}>
          <div>
            <i className="fas fa-circle" />
            <div className={styles.card_title}>
              {Moment(element.attributes['created-at']).format('MMM DD HH:mm')}
            </div>
          </div>
          <div>
            <i className="fas fa-ellipsis-v" />
            <div className={styles.card_title}>
              {element.attributes.quantity}
              {element.attributes.unity}
            </div>
          </div>
        </li>
      ),
    ))
    : (
      <Link to="/addtask" className="nav-link">
        No measurement added yet ! create one!
        <i className="fas fa-plus" />
      </Link>
    );

  const displayHeader = (data) => {
    const total = parseInt(data.attributes['measurements-total'], 10);
    const progress = Math.round((total * 100) / data.attributes.goal) || 0;
    const madeProgress = progress >= 100 ? 100 : progress;
    const leftProgress = 100 - madeProgress;
    return (
      <div>
        <Button
          variant="outline-danger"
          size="lg"
          onClick={() => handleDelete(parseInt(data.id, 10))}
        >
          Delete Tsk
        </Button>
        <h1>{data.attributes.name}</h1>
        <h2>
          priority:
          {data.attributes.priority}
        </h2>
        <h2>
          <Link to={`/routines/${parseInt(data.attributes['routine-id'], 10)}`}>
            from &nbsp;
            {data.attributes.routine}
            &nbsp;
            routine
          </Link>
        </h2>
        <h3>
          Goal:
          {data.attributes.goal}
        </h3>
        <h3>
          Progress:
          {progress}
          <i className="fas fa-percent" />
        </h3>
        <div className="tracks__item__graph">
          <Chart
            width="300px"
            height="300px"
            chartType="PieChart"
            loader={(
              <Spinner animation="border" role="status" variant="info">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            data={[['Task', 'Percentage'], ['', madeProgress], ['', leftProgress]]}
            options={{
              legend: 'none',
              pieSliceText: `${madeProgress} %`,
              pieStartAngle: 0,
              tooltip: { trigger: 'none' },
              slices: {
                0: { color: 'blue' },
                1: { color: 'white' },
              },
              pieHole: 0.5,
              animation: {
                startup: true,
                easing: 'linear',
                duration: 1500,
              },
              enableInteractivity: false,
            }}
            rootProps={{ 'data-testid': '6' }}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        {
          (task) ? (
            displayHeader(task)
          ) : (
            <div>This task is not available</div>
          )
        }
      </div>
      <div>
        {listMeasurements}
      </div>
    </div>
  );
};

export default TaskDetailPage;
