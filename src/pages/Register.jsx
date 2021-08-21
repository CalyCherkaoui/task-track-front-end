import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthenticateForm from '../component/AuthenticateForm';
import { register } from '../actions/authentication';

const Register = (props) => {
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.authentication);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  const handleSignup = (e) => {
    // e.preventDefault();
    setLoading(true);
    const dataForm = JSON.stringify(e);
    if (!dataForm) {
      setLoading(false);
    } else {
      const { username, email, password } = dataForm;
      dispatch(register(username, email, password))
        .then(() => {
          props.history.push('/profile');
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <AuthenticateForm submitHandler={handleSignup} autheticationType="Sign-up" />
        {
          loading && (
            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading} type="submit">
                <span className="spinner-border spinner-border-sm" />
              </button>
            </div>
          )
        }

        {
          message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
          )
        }
      </div>
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;
