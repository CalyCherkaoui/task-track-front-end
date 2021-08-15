import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import TrackingNavigationFooter from './components/TrackingNavigationFooter';
import signup from './pages/SignupPage';
import login from './pages/LoginPage';
import home from './pages/HomePage';
import about from './pages/AboutPage';
import habitsList from './pages/HabitsListPage';
import categoriesList from './pages/CategoriesListPage';
import habitDetail from './pages/HabitDetailPage';
import addHabit from './pages/AddHabitFormPage';
import editHabit from './pages/EditHabitFormPage';
import progress from './pages/ProgressPage';
import profile from './pages/UserProfilePage';
import styles from './styles/App.module.css';

const App = () => (
  <BrowserRouter>
    <div className={styles.app_wrapper_general}>
      <Navigation />
      <div className={styles.app_wrapper_content}>
        <Switch>
          <Route exact path="/signup" component={signup} />
          <Route exact path="/login" component={login} />
          <Route exact path="/" component={home} />
          <Route exact path="/about" component={about} />
          <Route exact path="/habits" component={habitsList} />
          <Route exact path="/categories" component={categoriesList} />
          <Route exact path="/habits/:habitid" component={habitDetail} />
          <Route exact path="/habit/create" component={addHabit} />
          <Route exact path="/habit/update" component={editHabit} />
          <Route exact path="/progress" component={progress} />
          <Route exact path="/profile" component={profile} />
        </Switch>
      </div>
      <TrackingNavigationFooter />
    </div>
  </BrowserRouter>
);

export default App;
