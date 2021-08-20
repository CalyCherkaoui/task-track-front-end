import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/Navigation';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Admin from './pages/Admin';
import history from './helpers/history';

const App = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  // const { isLoggedIn } = useSelector((state) => state.authentication);

  return (
    <Router history={history}>
      <Navigation />
      <div className="container mt-3">
        <Switch>
          {
            currentUser ? (
              <Route exact path={['/', '/home']} component={Home} />
            ) : (
              <Route exact path={['/', '/about']} component={About} />
            )
          }
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
