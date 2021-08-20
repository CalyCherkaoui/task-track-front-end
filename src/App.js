import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/Navigation';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import history from './helpers/history';

const App = () => (
  <Router history={history}>
    <Navigation />
    <div className="container mt-3">
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </div>
  </Router>
);

export default App;
