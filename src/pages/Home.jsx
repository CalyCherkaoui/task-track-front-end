import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap';
import cardstyles from '../styles/Card.module.css';
import { getRoutines } from '../actions/routines';

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  if (!currentUser || !sessionStorage.getItem('token') || !isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch]);

  const routinesList = useSelector((state) => state.routines.routines);
  const loading = useSelector((state) => state.routines.loading);

  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const display = (list) => {
    if (!_.isEmpty(list)) {
      return list.map(
        (element) => (
          <div className={`${cardstyles.card_wrapper} p-2 ratio ratio-1x1 m-2 shadowed_small`} key={`key_${element.id}`}>
            <Link to={`/routines/${parseInt(element.id, 10)}`} className="flex-column d-flex">
              <div className={`${cardstyles.card_icon} ratio-1x1 p-2 box_flex_col_centered`}>
                <i className={element.attributes.icon} />
              </div>
              <div className={`${cardstyles.card_minimalist_text} my-2 box_flex_col_centered`}>
                <span className="align-self-center">{element.attributes.name}</span>
              </div>
            </Link>
          </div>
        ),
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
                No routine set yet!
                Create a task!
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  return (
    <Container className="g-0 my-2">
      <Row className={`${cardstyles.list_header_wrapper} g-0 my-2 d-flex align-items-center`}>
        <Col className="box_flex_col_centered g-0">
          <Link to="/addtask" className={cardstyles.list_header_text}>
            My daily Routines
          </Link>
        </Col>
      </Row>
      <Row className="d-flex flex-wrap">
        {display(routinesList)}
      </Row>
    </Container>

  );
};

export default Home;
