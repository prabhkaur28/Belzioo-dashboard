import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
    setErrorMessage('');
  };
  return (
    <div className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-4">
            <form onSubmit={handleLogin}>
              <div className="d-flex flex-row align-items-center justify-content-center gap-3">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn bg-primary text-light">
                  <i className="fab fa-facebook-f" />
                </button>
                <button className="btn bg-primary text-light">
                  <i className="fab fa-twitter" />
                </button>
                <button type="button" className="btn bg-primary text-light">
                  <i className="fab fa-linkedin-in" />
                </button>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>
              <div className="form-outline mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <Link to={""} className="text-body text-decoration-none">
                  Forgot password?
                </Link>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn bg-primary btn-lg text-light style">
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{' '}
                  <Link to={"/auth/Register"} className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;