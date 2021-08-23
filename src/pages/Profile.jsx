/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import getProfile from '../actions/profile';

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  // const currentUser = sessionStorage.getItem('user');
  const dispatch = useDispatch();
  console.log(currentUser);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const userid = parseInt(currentUser.id, 10);

  useEffect(() => {
    dispatch(getProfile(userid));
  }, [dispatch]);

  // const profile = useSelector((state) => state.profile);

  return (
    <div className="container">
      <h2>current user</h2>
      <p>
        {/* {profile} */}
      </p>
      <h2>Profile content</h2>
      <p>
        {/* {profile} */}
      </p>
    </div>
  );
};

export default Profile;
