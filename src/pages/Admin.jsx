import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useHistory } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import _ from 'lodash';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import cardstyles from '../styles/Card.module.css';
import adminstyles from '../styles/Dashboard.module.css';
import { getRoutines } from '../actions/routines';
import { deleteRoutine, clearEditRoutineState } from '../actions/adminBoard';

const Admin = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const admin = useSelector((state) => state.authentication.admin);
  if (!currentUser || !sessionStorage.getItem('token') || !isLoggedIn) {
    return <Redirect to="/login" />;
  }

  if (!admin) {
    return <Redirect to="/home" />;
  }

  const routinesList = useSelector((state) => state.routines.routines);
  const loading = useSelector((state) => state.routines.loading);
  const deleted = useSelector((state) => state.admin.deleted);
  const history = useHistory();

  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch]);

  useEffect(() => {
    if (deleted) {
      dispatch(getRoutines());
      dispatch(clearEditRoutineState());
      history.push('/admin');
      document.getElementById('success_notif').style.display = 'block';
      setTimeout(() => {
        document.getElementById('success_notif').style.display = 'none';
      }, 3000);
    }
  }, [deleted]);

  const handleDelete = (routineid) => {
    dispatch(deleteRoutine(routineid));
  };

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
              <Button
                variant="danger"
                onClick={() => handleDelete(parseInt(element.id, 10))}
                className="g-0"
              >
                Delete Routine
              </Button>
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
              <Link to="/addroutine" className={cardstyles.list_header_text}>
                No routine set yet!
                Create one!
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  return (
    <Container>
      <Row className={`${cardstyles.list_header_wrapper} g-0 d-flex align-items-center`}>
        <Col className="box_flex_col_centered g-0">
          <Link to="/home" className={cardstyles.list_header_text}>
            Admin Dashboard
          </Link>
        </Col>
      </Row>
      <Row className={`${adminstyles.tool_header_wrapper} d-flex align-items-baseline`}>
        <Col className={`box_flex_col_centered ${adminstyles.tool_header_icon}`} xs={3}>
          <span>
            <i className="fas fa-tools" />
          </span>
        </Col>
        <Col className="box_flex_col_centered g-0" xs={9}>
          <Link to="/addroutine" className={adminstyles.tool_header_text}>
            Add new Routine
            <i className="fas fa-plus-circle" />
          </Link>
        </Col>
      </Row>
      <Row className="d-flex flex-wrap">
        {display(routinesList)}
      </Row>
    </Container>
  );
};

export default Admin;
