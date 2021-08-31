import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navigation from './component/Navigation';
import FooterNav from './component/FooterNav';
import Footer from './component/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import RoutineDetailPage from './pages/RoutineDetailPage';
import TaskDetailPage from './pages/TaskDetailPage';
import AddTask from './pages/AddTask';
import AddMeasurement from './pages/AddMeasurement';
import AlertNotifications from './component/AlertNotifications';
import AddRoutine from './pages/AddRoutine';

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const message = useSelector((state) => state.notification.message);

  return (
    <HashRouter basename="">
      <Navigation />
      <AlertNotifications message={message} />
      <Container fluid>
        <Switch>
          {
            isLoggedIn ? (
              <Route exact path={['/', '/home']} component={Home} />
            ) : (
              <Route exact path={['/', '/about']} component={About} />
            )
          }
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/myroutines" component={Home} />
          <Route exact path="/measureup" component={AddMeasurement} />
          <Route exact path="/addroutine" component={AddRoutine} />
          <Route exact path="/routines/:routineid" component={RoutineDetailPage} />
          <Route exact path="/tasks/:taskid" component={TaskDetailPage} />
          <Route exact path="/addtask" component={AddTask} />
          { /* Catch all routes */ }
          <Route path="*" component={NotFound} status={404} />
        </Switch>
      </Container>
      {
        isLoggedIn ? (
          <FooterNav />
        ) : (
          <Footer />
        )
      }
    </HashRouter>
  );
};

export default App;
