/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { getTask } from '../actions/tasks';
import AlertBox from '../component/AlertBox';
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

  useEffect(() => {
    dispatch(getTask(taskid));

    if (error) {
      // document.getElementById('add_task_success_notif').style.display = 'block';
      document.getElementById('add_task_error_notif').append(<AlertBox
        alertprops={{
          variant: 'danger',
          message: 'Oops! Something went wrong! Try again!',
        }}
      />);
    }
  }, [dispatch]);

  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const listMeasurements = (measurements)
    ? (measurements.map(
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
    ))
    : (<div>No measurement added yet ! create one!</div>);

  // const displayMeasurements = (list) => {
  //   if (list.length === 0) {
  //     return (
  //       <div>
  //         <h3> No measurment taken yet! create one!</h3>
  //         <h3>
  //           <i className="fas fa-coffee fa-2x" />
  //         </h3>
  //       </div>
  //     );
  //   }

  //   const listMeasurements = list.map(
  //     (element) => (
  //       <li className={styles.card_wrapper} key={`key_${element.id}`}>
  //         <div className={styles.card_icon}>
  //           <i className="fas fa-coffee fa-2x" />
  //         </div>
  //         <div className={styles.card_title}>
  //           {element.attributes['creation-date']}
  //         </div>
  //         <div className={styles.card_title}>
  //           {element.attributes.quantity}
  //         </div>
  //         <div className={styles.card_title}>
  //           {element.attributes.unity}
  //         </div>
  //       </li>
  //     ),
  //   );

  //   return (
  //     <div>
  //       <ul>
  //         { listMeasurements }
  //       </ul>
  //     </div>
  //   );
  // };

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
      <div
        id="add_task_errors_notif"
        // style={{ display: 'none', color: 'red' }}
      >
        {/* Something went wrong */}
      </div>
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
