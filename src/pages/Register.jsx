/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import { register } from '../actions/authentication';

// eslint-disable-next-line consistent-return
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Required to Signin!
      </div>
    );
  }
};

// eslint-disable-next-line consistent-return
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Oops! It is not a valid email! Try agin!
      </div>
    );
  }
};

// eslint-disable-next-line consistent-return
const validUsername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Oops! Your username must be more than 3 characters. Please try again!
      </div>
    );
  }
};

// eslint-disable-next-line consistent-return
const validPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    form.current.validateAll();
    // eslint-disable-next-line no-underscore-dangle
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="username">
                  Username:
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Enter your name"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, validUsername]}
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email:
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="Enter a valid Email"
                    validations={[required, validEmail]}
                  />
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  Password:
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    placeholder="Enter a strong password"
                    onChange={onChangePassword}
                    validations={[required, validPassword]}
                  />
                </label>
              </div>

              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
