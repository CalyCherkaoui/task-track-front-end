import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { getRoutine } from '../actions/routines';
import styles from '../styles/DetailPage.module.css';
import cardstyles from '../styles/Card.module.css';
import ProgressBar from '../component/ProgressBar';

const RoutineDetailPage = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  if (!currentUser || !sessionStorage.getItem('token') || !isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const { routineid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoutine(routineid));
  }, [dispatch]);

  const tasks = useSelector((state) => state.routines.routine_tasks);
  const loading = useSelector((state) => state.routines.loading);

  if (loading) {
    return <h3>Loading data ...</h3>;
  }

  const progressPercent = (val, goal) => {
    const intVal = parseInt(val, 10);
    const intGoal = parseInt(goal, 10);
    const percentage = Math.round((intVal * 100) / intGoal) || 0;
    return percentage;
  };

  const display = (list) => {
    if (list.length === 0) {
      return (
        <div className="w-70">
          <Container className="my-4">
            <Row className={`${cardstyles.list_header_wrapper} d-flex align-items-baseline`}>
              <Col className={`box_flex_col_centered ${cardstyles.list_header_icon}`} xs={2}>
                <span>
                  <i className="fas fa-coffee fa-1x" />
                </span>
              </Col>
              <Col className="box_flex_col_centered" xs={10}>
                <Link to="/addtask" className={cardstyles.list_header_text}>
                  No routine set yet!
                  Create a task!
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }

    const { routine } = list[0].meta;

    const listTasks = list.map(
      (element) => (
        <Row className={styles.long_card_wrapper} key={`key_${element.id}`}>
          <Col xs={4} className={`${styles.long_card_title_wrapper} d-flex align-items-center justify-content-center`}>
            <Link to={`/tasks/${parseInt(element.id, 10)}`} className="d-flex flex-column">
              <div className={styles.long_card_title}>
                {element.attributes.name}
              </div>
              <div className={styles.long_card_title_emph}>
                Priority:
                {' '}
                {element.attributes.priority}
              </div>
            </Link>
          </Col>
          <Col className="d-flex flex-row" xs={8}>
            <Link to={`/tasks/${parseInt(element.id, 10)}`} className={styles.long_card_graph_wrapper}>
              <div className={styles.long_card_graph}>
                <ProgressBar
                  percentage={progressPercent(element.attributes['measurements-total'], element.attributes.goal)}
                  size={80}
                  strokeWidth={10}
                  innCircleStroke="#f5f6fa"
                  exoCircleStroke="#379cf6"
                />
                <div className={styles.long_card_graph_text}>
                  {progressPercent(element.attributes['measurements-total'], element.attributes.goal)}
                  <i className="fas fa-percent" />
                </div>
              </div>
            </Link>
            <Link to={`/tasks/${parseInt(element.id, 10)}`} className=" d-flex align-items-center justify-content-center">
              <div className={`${styles.long_card_data} p-1`}>
                Completed
                of the goal to acheive
                {' '}
                <span>
                  {element.attributes.goal}
                  {' '}
                  {element.attributes.unit}
                </span>
              </div>
            </Link>
          </Col>
        </Row>
      ),
    );

    return (
      <Container>
        <Row className="my-2">
          <Link to="/addtask" className={cardstyles.list_header_text}>
            <Col className={`${styles.detail_pg_header}`}>
              <i className={routine.icon} />
              {' '}
              {routine.name}
            </Col>
          </Link>
        </Row>
        {listTasks}
      </Container>
    );
  };

  return (
    <div>
      {display(tasks)}
    </div>
  );
};

export default RoutineDetailPage;
