/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { getRoutine } from '../actions/routines';
import styles from '../styles/Form.module.css';
import cardstyles from '../styles/Card.module.css';

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

  console.log('routine detail page');
  console.log(tasks);

  if (loading) {
    return <h3>Loading data ...</h3>;
  }

  const display = (list) => {
    if (list.length === 0) {
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
        <li className={styles.card_wrapper} key={`key_${element.id}`}>
          <Link to={`/tasks/${parseInt(element.id, 10)}`}>
            <div className={styles.card_icon}>
              <i className={element.attributes.icon} />
            </div>
            <div className={styles.card_title}>
              {element.attributes.name}
            </div>
            <div className={styles.card_title}>
              {element.attributes.priority}
            </div>
            <div className={styles.card_title}>
              {element.attributes.unit}
            </div>
            <div className={styles.card_title}>
              {element.attributes['measurements-total']}
            </div>
            <div className={styles.card_title}>
              {element.attributes['measurements-count']}
            </div>
            <div className={styles.card_title}>
              {element.attributes.goal}
            </div>
          </Link>
        </li>
      ),
    );

    return (
      <div>
        <h4>{routine.name}</h4>
        <ul>
          { listTasks }
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>{routineid}</h1>
      <div>
        {display(tasks)}
      </div>
    </div>
  );
};

export default RoutineDetailPage;
