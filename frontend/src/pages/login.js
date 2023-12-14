import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import '../styles/login.css';





const LoginForm = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let errors = {};

    if (!login.email.trim()) {
      errors.email = 'Email is required';
    }

    if (!login.password.trim()) {
      errors.password = 'Password is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const storeTokenAndUser = (token, user) => {
    localStorage.setItem('access_token', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

const refreshAccessToken = async () => {
    const accessToken = localStorage.getItem('access_token');
  
    if (!accessToken) {
      console.error('Access token not found');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/users/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('access_token', data.access_token);
      } else {
        console.error('Refresh failed:', data);
      }
    } catch (error) {
      console.error('Error refreshing access token:', error.message);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://127.0.0.1:5000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(login),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Login successful');

          storeTokenAndUser(data.access_token, data.user);

          // Optionally, you can set user details in your React state or context here

          navigate('/home');
        } else {
          if (data.error) {
            setServerError(data.error);
          } else {
            console.error('Error logging in:', data.message || data);
          }
        }
      } catch (error) {
        console.error('Error during login:', error.message);
      }
    } else {
      console.log('Form has validation errors. Cannot submit.');
    }
  };

  return (
    <div className="login-form">
      <div className="loghead">
        <div className="imglog">
          <img src="images/bluegrey.png" alt="Logo" />
        </div>
        <h1 className="title">Log In</h1>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="formsection">
          <div className="form-group">
            <label>Email:</label>
            <input
              placeholder="Enter Email"
              type="email"
              name="email"
              value={login.email}
              onChange={handleChange}
              className={formErrors.email ? 'error-border' : ''}
              required
            />
            {formErrors.email && <p className='error'>{formErrors.email}</p>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}  // Use 'text' or 'password' based on showPassword state
              name="password"
              placeholder="Enter Password"
              value={login.password}
              onChange={handleChange}
              className={formErrors.password ? 'error-border' : ''}
              required
            />
            <span
              className={`password-toggle ${showPassword ? 'visible' : ''}`}
              onClick={togglePasswordVisibility}
            >
<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}
 style={{ color: 'grey' }}  />            </span>
</div>
            {formErrors.password && <p className="error">{formErrors.password}</p>}
          </div>

          {serverError && <p className='error'>{serverError}</p>}

          <div className="submitdiv">
            <button type="submit">Submit</button>
          </div>
        </div>
        <div className="col">
          <Link to="reset" className="resetpass">
            Forgot Password?
          </Link>
          <p>
            Don't Have An Account?|
            <Link to="register" className="resetpass">
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
