import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
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
          
          // Redirect or perform other actions after successful login
          navigate('/home');
        } else {
          if (response.status === 400) {
            // Bad Request
            setServerError(data.message);
          } else if (response.status === 401) {
            // Unauthorized (invalid password)
            setFormErrors({ password: 'Invalid password' });
          } else {
            console.error('Error logging in:', data.message || data);
          }
        }
      } catch (error) {
        console.error('Error logging in:', error.message);
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
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={login.password}
              onChange={handleChange}
              className={formErrors.password ? 'error-border' : ''}
              required
            />
            {formErrors.password && <p className='error'>{formErrors.password}</p>}
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

