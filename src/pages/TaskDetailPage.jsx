/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { IconContext } from 'react-icons';
import { IoEllipsisVerticalOutline } from 'react-icons/io';
import Moment from 'moment';
import { getTask } from '../actions/tasks';
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
  // console.log('task detail page');
  // console.log(task);
  // console.log(measurements);

  const { taskid } = useParams();
  const dispatch = useDispatch();

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
      }, 5000);
    }
  }, [dispatch]);

  const listMeasurements = (measurements)
    ? (measurements.map(
      (element) => (
        <li className={styles.card_wrapper} key={`key_${element.id}`}>
          <div>
            &#xf26e;
            <i className="fas fa-bullseye" />
            <i className="fas fa-circle" />
            <div className={styles.card_title}>
              {element.attributes['creation-date']}
              {Moment(element.attributes['creation-date']).format('MMM DD HH:mm')}
            </div>
          </div>
          <div>
            <IconContext.Provider value={{ className: 'measur_icon' }}>
              <IoEllipsisVerticalOutline />
            </IconContext.Provider>
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

  // const displayHeader = (data) => {
  //   if (data) {
  //     return (
  //       <div>
  //         <h1>{data.attributes.name}</h1>
  //         <h1>
  //           priority:
  //           {data.attributes.priority}
  //         </h1>
  //         <h2>
  //           <Link to={`/routines/${parseInt(data.attributes['routine-id'], 10)}`}>
  //             from &nbsp;
  //             {data.attributes.routine}
  //             &nbsp;
  //             routine
  //           </Link>
  //         </h2>
  //         <h3>
  //           Goal:
  //           {data.attributes.goal}
  //         </h3>
  //         <h3>
  //           total:
  //           {data.attributes['measurements-total']}
  //         </h3>
  //       </div>
  //     );
  //   }

  //   return <h3>Loading task data ...</h3>;
  // };

  return (
    <div>
      <div>
        {
          (task) ? (
            <div>
              <h1>{task.attributes.name}</h1>
              <h1>
                priority:
                {task.attributes.priority}
              </h1>
              <h2>
                <Link to={`/routines/${parseInt(task.attributes['routine-id'], 10)}`}>
                  from &nbsp;
                  {task.attributes.routine}
                  &nbsp;
                  routine
                </Link>
              </h2>
              <h3>
                Goal:
                {task.attributes.goal}
              </h3>
              <h3>
                total:
                {task.attributes['measurements-total']}
              </h3>
            </div>
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
