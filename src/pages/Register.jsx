/* eslint-disable no-console */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../actions/authentication';
import { getAllroutines } from '../actions/tasks';

const Register = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { isLoggedIn } = useSelector((state) => state.authentication);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(username, email, password));
  };

  if (isLoggedIn) {
    dispatch(getAllroutines());
    return <Redirect to="/home" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="signup_username_input">
        Username:
        <input
          id="signup_username_input"
          type="text"
          name="username"
          placeholder="Enter your Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label htmlFor="signup_email_input">
        Email:
        <input
          id="signup_email_input"
          type="email"
          name="email"
          placeholder="Enter your email!"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label htmlFor="signup_password_input">
        Password:
        <input
          id="signup_password_input"
          type="password"
          name="password"
          placeholder="Enter your password!"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button
        type="submit"
      >
        Sign me up!
      </button>
    </form>
  );
};

export default Register;
