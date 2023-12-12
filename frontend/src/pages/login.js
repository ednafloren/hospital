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

  const storeToken = (token) => {
    localStorage.setItem('access_token', token);
    console.log('jwt token:',token)

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




  
          // Store the token in local storage
          storeToken(data.access_token);
  
          // Fetch the user details after successful login
          const userResponse = await fetch('http://127.0.0.1:5000/users/get_user_details', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${data.access_token}`,
            },
          });
  
          const userData = await userResponse.json();
  
          if (userResponse.ok) {
            console.log('User details fetched successfully', userData.user_details);
         
  
            // Store the user data in local storage
            localStorage.setItem('user', JSON.stringify(userData.user_details));
  
            // Set the user details in the state or wherever you need
            // For example, you can use React context or set it in the component state
            // setLoggedInUser(userData.user_details);
  
            navigate('/home');
          } else {
            console.error('Error fetching user details:', userData.message);
          }


          
          // Redirect or perform other actions after successful login

         



          
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
