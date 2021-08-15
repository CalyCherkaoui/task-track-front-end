import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userLogin from '../redux/services/authentication';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };
    dispatch(userLogin(userData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login_username_input">
        Username:
        <input
          id="login_username_input"
          type="text"
          name="username"
          placeholder="Enter your Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label htmlFor="login_email_input">
        Email:
        <input
          id="login_email_input"
          type="email"
          name="email"
          placeholder="Enter your email!"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label htmlFor="login_password_input">
        Password:
        <input
          id="login_password_input"
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
        Log me in!
      </button>
    </form>
  );
};

export default LoginPage;
