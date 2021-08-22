/* eslint-disable no-console */
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { login } from '../actions/authentication';
// import AuthenticateForm from '../component/AuthenticateForm';

// const Login = (props) => {
//   const [loading, setLoading] = useState(false);

//   const { isLoggedIn } = useSelector((state) => state.authentication);
//   const { message } = useSelector((state) => state.message);

//   const dispatch = useDispatch();

//   if (isLoggedIn) {
//     return <Redirect to="/profile" />;
//   }

//   const handleLogin = (e) => {
//     // e.preventDefault();
//     console.log(e);
//     setLoading(true);
//     const dataForm = JSON.stringify(e);
//     if (!dataForm) {
//       setLoading(false);
//     } else {
//       const { username, email, password } = dataForm;
//       dispatch(login(username, email, password))
//         .then(() => {
//           props.history.push('/profile');
//           window.location.reload();
//         })
//         .catch(() => {
//           setLoading(false);
//         });
//     }
//   };

//   return (
//     <div className="col-md-12">
//       <div className="card card-container">
//         <AuthenticateForm submitHandler={handleLogin} autheticationType="Login" />
//         {
//           loading && (
//             <div className="form-group">
//               <button className="btn btn-primary btn-block" disabled={loading} type="submit">
//                 <span className="spinner-border spinner-border-sm" />
//               </button>
//             </div>
//           )
//         }

//         {
//           message && (
//           <div className="form-group">
//             <div className="alert alert-danger" role="alert">
//               {message}
//             </div>
//           </div>
//           )
//         }
//       </div>
//     </div>
//   );
// };

// Login.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired,
//   }).isRequired,
// };

// export default Login;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authentication';
// import { Redirect } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, email, password));
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

export default Login;
