import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useParams, Redirect, Link, useHistory,
} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getTask, deleteTask, clearEditTaskState } from '../actions/tasks';
import { getAllTasks } from '../actions/measurements';
import taskStyles from '../styles/Task.module.css';
import cardstyles from '../styles/Card.module.css';
import detailStyles from '../styles/DetailPage.module.css';
import ProgressBar from '../component/ProgressBar';

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
    dispatch(deleteTask(taskid));
  };

  const listMeasurements = (measurements)
    ? (measurements.map(
      (element) => (
        <div
          className={`${taskStyles.card_wrapper} d-flex flex-column g-0`}
          key={`key_${element.id}`}
        >
          <div className="d-flex flex-row align-items-center">
            <div className={`${taskStyles.measurement_date_icon}`}>
              <i className="fas fa-circle" />
            </div>
            <div className={`${taskStyles.measurement_date_text}`}>
              {Moment(element.attributes['created-at']).format('MMM DD HH:mm')}
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div className={`${taskStyles.measurement_progress_vertical_wrapper} d-flex`}>
              <div className={`${taskStyles.measurement_progress_vertical} vr`} />
            </div>
            <div className={taskStyles.measurement_progress_text}>
              Completed
              {' '}
              <span>
                {element.attributes.quantity}
                {element.attributes.unity}
              </span>
              {' '}
              of the overall goal.
            </div>
          </div>
        </div>
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
    return (
      <Container>
        <Row className="my-3">
          <Link to="/addtask" className={cardstyles.list_header_text}>
            <Col className={`${detailStyles.detail_pg_header}`}>
              <i className={data.attributes.icon} />
              {' '}
              {data.attributes.name}
            </Col>
          </Link>
        </Row>
        <Row>
          <Col className={`${taskStyles.task_info_wrapper} shadowed_small d-flex flex-column py-2`}>
            <table className={`${taskStyles.task_info_table} table`}>
              <tbody>
                <tr>
                  <td>Routine:</td>
                  <td>
                    <Link to={`/routines/${parseInt(data.attributes['routine-id'], 10)}`}>
                      <i className={data.attributes.icon} />
                      {' '}
                      {data.attributes.routine}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Goal:</td>
                  <td>
                    {data.attributes.goal}
                    {' '}
                    {data.attributes.unit}
                  </td>
                </tr>
                <tr>
                  <td>Priority:</td>
                  <td>
                    {data.attributes.priority}
                  </td>
                </tr>
              </tbody>
            </table>
            <Button
              variant="outline-danger"
              size="lg"
              onClick={() => handleDelete(parseInt(data.id, 10))}
            >
              Delete Task
            </Button>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h5>Achievement</h5>
            <div className={`${taskStyles.task_info_graph_wrapper}`}>
              <ProgressBar
                percentage={madeProgress}
                size={130}
                strokeWidth={10}
                innCircleStroke="#f5f6fa"
                exoCircleStroke="#379cf6"
              />
              <div className={taskStyles.task_info_graph_text}>
                {madeProgress}
                <i className="fas fa-percent" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <div>
      {
          (task) ? (
            <div>
              <div>{displayHeader(task)}</div>
              <div>
                <div className={`${taskStyles.measurement_header} d-flex justify-content-center align-items-center shadowed_small`}>
                  <h4 className={`${taskStyles.measurement_header_text}`}>Measurements recorded</h4>
                </div>
                <div className="my-3">
                  {listMeasurements}
                </div>
              </div>
            </div>
          ) : (
            <div>This task is not available</div>
          )
        }
    </div>
  );
};

export default TaskDetailPage;
