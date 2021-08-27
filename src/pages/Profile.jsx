import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import getProfile from '../actions/profile';

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  const { id: userid } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  // console.log(currentUser);
  // console.log(userid);

  if (!currentUser || !sessionStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }

  useEffect(() => {
    dispatch(getProfile(userid));
  }, [dispatch]);

  const profile = useSelector((state) => state.profile);

  return (
    <div className="container">
      <h2>current user</h2>
      <p>
        {typeof userid}
      </p>
      <h2>Profile content</h2>
      <p>
        {JSON.stringify(currentUser)}
      </p>
      <p>
        {JSON.stringify(profile)}
      </p>
    </div>
  );
};

export default Profile;
