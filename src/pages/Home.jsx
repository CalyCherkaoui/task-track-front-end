import React, { useState, useEffect } from 'react';
import UserService from '../services/user.service';

const Home = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getUserProfile().then(
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
      {content}
    </div>
  );
};

export default Home;
