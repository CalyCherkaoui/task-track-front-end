import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import getProfile from '../actions/profile';
import cardstyles from '../styles/Card.module.css';
import detailStyles from '../styles/DetailPage.module.css';
import taskStyles from '../styles/Task.module.css';
import ProgressBar from '../component/ProgressBar';

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  if (!currentUser || !sessionStorage.getItem('token') || !isLoggedIn) {
    return <Redirect to="/login" />;
  }
  const { id: userid } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(userid));
  }, [dispatch]);

  const herotask = useSelector((state) => state.profile.herotask);

  const dispalyHeroTask = (taskArr) => {
    if (!_.isEmpty(taskArr)) {
      const task = taskArr[0];
      const total = parseInt(task.attributes['measurements-total'], 10);
      const progress = Math.round((total * 100) / task.attributes.goal) || 0;
      const madeProgress = progress >= 100 ? 100 : progress;

      return (
        <Container>
          <Row className="my-3">
            <Link to="/addtask" className={cardstyles.list_header_text}>
              <Col className={`${detailStyles.detail_pg_header}`}>
                <i className={task.attributes.icon} />
                {' '}
                {task.attributes.name}
              </Col>
            </Link>
          </Row>
          <Row>
            <Col className={`${taskStyles.task_info_wrapper} shadowed_small d-flex flex-column py-2 bg-white`}>
              <table className={`${taskStyles.task_info_table} table`}>
                <tbody>
                  <tr>
                    <td>Routine:</td>
                    <td>
                      <Link to={`/routines/${parseInt(task.attributes['routine-id'], 10)}`}>
                        <i className={task.attributes.icon} />
                        {' '}
                        {task.attributes.routine}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Goal:</td>
                    <td>
                      {task.attributes.goal}
                      {' '}
                      {task.attributes.unit}
                    </td>
                  </tr>
                  <tr>
                    <td>Priority:</td>
                    <td>
                      {task.attributes.priority}
                    </td>
                  </tr>
                </tbody>
              </table>
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
    }

    return (

      <div className="w-70">
        <Container>
          <Row className={`${cardstyles.list_header_wrapper} d-flex align-items-baseline`}>
            <Col className={`box_flex_col_centered ${cardstyles.list_header_icon}`} xs={2}>
              <span>
                <i className="fas fa-coffee fa-1x" />
              </span>
            </Col>
            <Col className="box_flex_col_centered g-0" xs={10}>
              <Link to="/addtask" className={cardstyles.list_header_text}>
                No Task created Yet! Add one.
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center aligne-items-center p-4">
          <h4>
            Welcome
            {' '}
            {currentUser.attributes.username}
          </h4>
        </Col>
      </Row>
      <Row>
        <div className={`${taskStyles.measurement_header} d-flex justify-content-center align-items-center shadowed_small bg-white`}>
          <h4 className={`${taskStyles.measurement_header_text}`}>Your hero Task you are keeping track of:</h4>
        </div>
      </Row>
      <Row>
        {dispalyHeroTask(herotask)}
      </Row>

    </Container>
  );
};

export default Profile;
