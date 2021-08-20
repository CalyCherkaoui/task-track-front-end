import React, { useState, useEffect, useSelector } from 'react';
import { Redirect } from 'react-router-dom';
import UserService from '../services/user.service';

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.authentication);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getUserProfile(currentUser.id).then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const errormsg = (error.response && error.response.data)
                       || error.message
                       || error.toString();

        setContent(errormsg);
      },
    );
  }, []);

  return (
    <div className="container">
      <h2>current user</h2>
      <p>
        {currentUser}
      </p>
      <h2>Profile content</h2>
      <p>
        {content}
      </p>
    </div>
  );
};

export default Profile;
