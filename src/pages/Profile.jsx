import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import getProfile from '../actions/profile';

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

  const profile = useSelector((state) => state.profile.profile);
  const herotask = useSelector((state) => state.profile.herotask);

  return (
    <div className="container">
      <h2>
        Welcome
        {' '}
        {currentUser.name}
      </h2>
      <h2>Profile content</h2>
      <p>
        {JSON.stringify(profile)}
      </p>
      <p>
        {JSON.stringify(herotask)}
      </p>
    </div>
  );
};

export default Profile;
