import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../styles/login.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email: '',
    name: '',
    contact: '',
    password: '',
    confirmPassword: '',
  });
  const [inputValidation, setInputValidation] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [serverErrors, setServerErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;

    // Update the form data with the new input value
    setRegister({
      ...register,
      [name]: value,
    });

    // Perform validation for the changed input
    const errors = validateForm({ ...register, [name]: value });

    // If the input is email, check uniqueness
    if (name === 'email' && !errors.email) {
      try {
        const response = await fetch(`http://127.0.0.1:5000/users/checkEmail?email=${value}`);

        // Check if the response status is OK
        if (response.ok) {
          const data = await response.json();

          if (data.exists) {
            errors.email = 'Email already exists';
          }
        } else {
          // If the response status is not OK, log the error and response text
          console.error('Error checking email uniqueness:', response.statusText);
          console.log('Response Text:', await response.text());
        }
      } catch (error) {
        console.error('Error checking email uniqueness:', error.message);
      }
    }

    // If the input is name, check uniqueness
    if (name === 'name' && !errors.name) {
      try {
        const response = await fetch(`http://127.0.0.1:5000/users/checkName?name=${value}`);

        // Check if the response status is OK
        if (response.ok) {
          const data = await response.json();

          if (data.exists) {
            errors.name = 'Name already exists';
          }
        } else {
          // If the response status is not OK, log the error and response text
          console.error('Error checking name uniqueness:', response.statusText);
          console.log('Response Text:', await response.text());
        }
      } catch (error) {
        console.error('Error checking name uniqueness:', error.message);
      }
    }

    // If the input is contact, check uniqueness
    if (name === 'contact' && !errors.contact) {
      try {
        const response = await fetch(`http://127.0.0.1:5000/users/checkContact?contact=${value}`);

        // Check if the response status is OK
        if (response.ok) {
          const data = await response.json();

          if (data.exists) {
            errors.contact = 'Contact already exists';
          }
        } else {
          // If the response status is not OK, log the error and response text
          console.error('Error checking contact uniqueness:', response.statusText);
          console.log('Response Text:', await response.text());
        }
      } catch (error) {
        console.error('Error checking contact uniqueness:', error.message);
      }
    }

    // Update form errors
    setFormErrors({
      ...formErrors,
      [name]: errors[name],
    });

    // Update input validation
    setInputValidation({
      ...inputValidation,
      [name]: !!errors[name], // Set to true if there is an error, false otherwise
    });
  };

  const validateForm = (data) => {
    let errors = {};

    // Validate username
    if (!data.name.trim()) {
      errors.name = 'Username is required';
    } else if (!/^[a-zA-Z]+[0-9]+$|^[a-zA-Z]+$/.test(data.name)) {
      errors.name = 'Name must start with a letter';
    }

    // Validate email
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Invalid email format';
    }

    // Validate contact
    if (!data.contact.trim()) {
      errors.contact = 'Contact is required';
    } else if (!/^[+0]/.test(data.contact)) {
      errors.contact = 'Contact must start with 0';
    } else if (!/^0\d{9}$/.test(data.contact)) {
      errors.contact = 'Contact must have 10 digits';
    }

    // Validate password
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    } else if (!/(?=.*[A-Z])/.test(data.password)) {
      errors.password = 'Password must contain at least one capital letter';
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
      errors.password = 'Password must contain at least one symbol';
    }

    // Validate confirmPassword
    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    console.log('Form validation errors:', errors);
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = validateForm(register);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Request Payload:', JSON.stringify(register));

      try {
        const response = await fetch('http://127.0.0.1:5000/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(register),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('User registered successfully');
          navigate('/');
        } else {
          if (data.error === 'Email is already in use') {
            // Set a specific state for this server-side error
            setServerErrors({ uniqueEmail: data.error });
          } else {
            // Set server-side errors state for other cases
            setServerErrors(data);
          }

          // Log the entire response for further investigation
          console.log('Full Response:', response);
        }
      } catch (error) {
        console.error('Error registering user:', error.message);
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
        <h1 className="title">Create An Account</h1>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="formsection">
          <div className="form-group">
            <label>Email:
              <input
                placeholder="Enter Email"
                type="email"
                name="email"
                id="email"
                value={register.email}
                onChange={handleChange}
                autoComplete="email"
                className={` ${formErrors.email ? 'error' : ''} ${inputValidation.email ? 'error-border' : ''}`}
                required
              />
            </label>
            {formErrors.email && <p className='error'>{formErrors.email}</p>}
          </div>
          <div className="form-group">
            <label>Name:
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={register.name}
                onChange={handleChange}
                autoComplete="name"
                className={` ${formErrors.name ? 'error' : ''} ${inputValidation.name ? 'error-border' : ''}`}
                required
              />
            </label>
            {formErrors.name && <p className='error'>{formErrors.name}</p>}
          </div>
          <div className="form-group">
            <label>Contact:
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="Enter Contact"
                value={register.contact}
                onChange={handleChange}
                autoComplete="tel"
                className={` ${formErrors.contact ? 'error' : ''} ${inputValidation.contact ? 'error-border' : ''}`}
                required
              />
            </label>
            {formErrors.contact && <p className='error'>{formErrors.contact}</p>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Enter Password"
                value={register.password}
                onChange={handleChange}
                autoComplete="new-password"
                className={` ${formErrors.password ? 'error' : ''} ${inputValidation.password ? 'error-border' : ''}`}
                required
              />
              <span
                className={`password-toggle ${showPassword ? 'visible' : ''}`}
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} style={{ color: 'grey' }} />
              </span>
            </div>
            {formErrors.password && <p className='error'>{formErrors.password}</p>}
          </div>
          <div className="form-group">
            <label>Confirm Password: </label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={register.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                className={` ${formErrors.confirmPassword ? 'error' : ''} ${inputValidation.confirmPassword ? 'error-border' : ''}`}
                required
              />
              <span
                className={`password-toggle ${showPassword ? 'visible' : ''}`}
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} style={{ color: 'grey' }} />
              </span>
            </div>
            {formErrors.confirmPassword && <p className='error'>{formErrors.confirmPassword}</p>}
          </div>
          {/* {serverErrors && <p className='error'>{serverErrors}</p>} */}
          <div className="submitdiv">
            <button type="submit">Register</button>
          </div>
        </div>
        <div className="col">
          <p>
            Already Have An Account?|
            <Link to="/" className="resetpass">
              SignIn
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;


// import React, { useState } from 'react';
// import { Link,useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import '../styles/login.css';

// const RegisterForm = () => {
//   const navigate = useNavigate();
//   const [register, setRegister] = useState({
//     email: '',
//     name: '',
//     contact: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   const [inputValidation, setInputValidation] = useState({});
//   const [formErrors, setFormErrors] = useState({});
//   const [serverErrors, setServerErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
  
 
  
//   const handleChange = async (e) => {
//   const { name, value } = e.target;

//   // Update the form data with the new input value
//   setRegister({
//     ...register,
//     [name]: value,
//   });

//   // Perform validation for the changed input
//   const errors = validateForm({ ...register, [name]: value });

//   // If the input is email, check uniqueness
//   if (name === 'email' && !errors.email) {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/users/checkEmail?email=${value}`);

//       // Check if the response status is OK
//       if (response.ok) {
//         const data = await response.json();

//         if (data.exists) {
//           errors.email = 'Email already exists';
//         }
//       } else {
//         // If the response status is not OK, log the error and response text
//         console.error('Error checking email uniqueness:', response.statusText);
//         console.log('Response Text:', await response.text());
//       }
//     } catch (error) {
//       console.error('Error checking email uniqueness:', error.message);
//     }}

//     // If the input is name, check uniqueness
//   if (name === 'name' && !errors.name) {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/users/checkName?name=${value}`);

//       // Check if the response status is OK
//       if (response.ok) {
//         const data = await response.json();

//         if (data.exists) {
//           errors.name = 'Name already exists';
//         }
//       } else {
//         // If the response status is not OK, log the error and response text
//         console.error('Error checking name uniqueness:', response.statusText);
//         console.log('Response Text:', await response.text());
//       }
//     } catch (error) {
//       console.error('Error checking name uniqueness:', error.message);
    
//   }}

//     // If the input is contact, check uniqueness
//     if (name === 'contact' && !errors.contact) {
//       try {
//         const response = await fetch(`http://127.0.0.1:5000/users/checkContact?contact=${value}`);
  
//         // Check if the response status is OK
//         if (response.ok) {
//           const data = await response.json();
  
//           if (data.exists) {
//             errors.contact = 'Contact already exists';
//           }
//         } else {
//           // If the response status is not OK, log the error and response text
//           console.error('Error checking contact uniqueness:', response.statusText);
//           console.log('Response Text:', await response.text());
//         }
//       } catch (error) {
//         console.error('Error checking contact uniqueness:', error.message);
      
//     }}
  
  


//   // Update form errors
//   setFormErrors({
//     ...formErrors,
//     [name]: errors[name],
//   });

//   // Update input validation
//   setInputValidation({
//     ...inputValidation,
//     [name]: !!errors[name], // Set to true if there is an error, false otherwise
//   });
// };

//   const validateForm = (data) => {
//     let errors = {};

//     // Validate username
//     if (!data.name.trim()) {
//       errors.name = 'Username is required';
//     }
//    else if (!/^[a-zA-Z]+[0-9]+$|^[a-zA-Z]+$/.test(data.name)) {
//     errors.name = 'Name must start with a letter';
//   }

//     // Validate email
//     if (!data.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
//       errors.email = 'Invalid email format';
//     }
//   // Validate contact
//   if (!data.contact.trim()) {
//     errors.contact = 'Contact is required';
//   }

  
//   else  if (!/^[+0]/.test(data.contact)) {
//       errors.contact = 'Contact must start with 0 ';  
//    }
//     else if (!/^0\d{9}$/.test(data.contact)){
//      errors.contact = 'Contact must have 10 digits';
//    }


   

//     // Validate password
//     if (!data.password.trim()) {
//       errors.password = 'Password is required';
//     } else if (data.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//     } else if (!/(?=.*[A-Z])/.test(data.password)) {
//       errors.password = 'Password must contain at least one capital letter';
//     } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
//       errors.password = 'Password must contain at least one symbol';
//     }

//     // Validate confirmPassword
//     if (!data.confirmPassword.trim()) {
//       errors.confirmPassword = 'Confirm Password is required';
//     } else if (data.confirmPassword !== data.password) {
//       errors.confirmPassword = 'Passwords do not match';
//     }

//     console.log('Form validation errors:', errors);
//     return errors;
//   };
// // const storeToken = async (token) => {
// //   localStorage.setItem('access_token', token);
// //   console.log('jwt token:', token);

// //   // Fetch the user details and store in local storage
// //   await fetchUserDetails();

// //   // Navigate to the home page
// //   navigate('/');
// // };

// // const fetchUserDetails = async () => {
// //   try {
// //     const response = await fetch('http://127.0.0.1:5000/users/get_user_details', {
// //       method: 'GET',
// //       headers: {
// //         'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
// //       },
// //     });

// //     const userData = await response.json();

// //     if (response.ok) {
// //       console.log('User details fetched successfully', userData.user_details);

// //       // Store the user data in local storage
// //       localStorage.setItem('user', JSON.stringify(userData.user_details));
// //     } else {
// //       console.error('Error fetching user details:', userData.message);
// //     }
// //   } catch (error) {
// //     console.error('Error fetching user details:', error.message);
// //   }
// // };


// // // subm
// // const handleSubmit = async (e) => {
// //   e.preventDefault();

// //   // Perform form validation
// //   const errors = validateForm(register);
// //   setFormErrors(errors);

// //   if (Object.keys(errors).length === 0) {
// //     console.log('Request Payload:', JSON.stringify(register));

// //     try {
// //       const response = await fetch('http://127.0.0.1:5000/users/register', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(register),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         console.log('User registered successfully');
       
  
// //           // Store the token in local storage
// //           storeToken(data.access_token);
  
// //           // Fetch the user details after successful login
// //           const userResponse = await fetch('http://127.0.0.1:5000/users/get_user_details', {
// //             method: 'GET',
// //             headers: {
// //               'Authorization': `Bearer ${data.access_token}`,
// //             },
// //           });
  
// //           const userData = await userResponse.json();
  
// //           if (userResponse.ok) {
// //             console.log('User details fetched successfully', userData.user_details);
         
  
// //             // Store the user data in local storage
// //             localStorage.setItem('user', JSON.stringify(userData.user_details));
  
// //             // Set the user details in the state or wherever you need
// //             // For example, you can use React context or set it in the component state
// //             // setLoggedInUser(userData.user_details);
  
// //             navigate('/home');
// //           } else {
// //             console.error('Error fetching user details:', userData.message);
// //           }

// //         navigate('/home');
// //       } else {

// //         if (data.error === 'Email is already in use') {
// //           // Set a specific state for this server-side error
// //           setServerErrors({ uniqueEmail: data.error });
// //         } else {
// //           // Set server-side errors state for other cases
// //           setServerErrors(data);
// //         }

// //         // Log the entire response for further investigation
// //         console.log('Full Response:', response);
// //       }
// //     } catch (error) {
// //       console.error('Error registering user:', error.message);
// //     }
// //   } else {
// //     console.log('Form has validation errors. Cannot submit.');
// //   }
// // };

//   return (
//     <div className="login-form">
//       <div className="loghead">
//         <div className="imglog">
//           <img src="images/bluegrey.png" alt="Logo" />
//         </div>
//         <h1 className="title">Create An Account</h1>
//       </div>
//       <form onSubmit={handleSubmit} noValidate>
//         <div className="formsection">
//           <div className="form-group">
//             <label>Email:
//               <input
//                 placeholder="Enter Email"
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={register.email}
//                 onChange={handleChange}
//                 autoComplete="email"
//                 className={` ${formErrors.email ? 'error' : ''} ${inputValidation.email ? 'error-border' : ''}`}
//                 required
//               />
//             </label>
//             {formErrors.email && <p className='error'>{formErrors.email}</p>}
            
//           </div>
//           <div className="form-group">
//             <label>Name:
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Enter Name"
//                 value={register.name}
//                 onChange={handleChange}
//                 autoComplete="name"
//                 className={` ${formErrors.name ? 'error' : ''} ${inputValidation.name ? 'error-border' : ''}`}
//                 required
//               />
//             </label>
//             {formErrors.name && <p className='error'>{formErrors.name}</p>}
//           </div>
//           <div className="form-group">
//             <label>Contact:
//               <input
//                 type="text"
//                 name="contact"
//                 id="contact"
//                 placeholder="Enter Contact"
//                 value={register.contact}
//                 onChange={handleChange}
//                 autoComplete="tel"
//                 className={` ${formErrors.contact? 'error' : ''} ${inputValidation.contact? 'error-border' : ''}`}
//                 required
//               />
//             </label>
//             {formErrors.contact && <p className='error'>{formErrors.contact}</p>}
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <div className="password-input-container">
//               <input
//                 type={showPassword ? 'text' : 'password'} 
//                 name="password"
//                 id="password"
//                 placeholder="Enter Password"
//                 value={register.password}
//                 onChange={handleChange}
//                 autoComplete="new-password"
//                 className={` ${formErrors.password ? 'error' : ''} ${inputValidation.password ? 'error-border' : ''}`}
//                 required
//               />
//             <span
//               className={`password-toggle ${showPassword ? 'visible' : ''}`}
//               onClick={togglePasswordVisibility}
//             >
// <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}
//  style={{ color: 'grey' }}  />            </span>
// </div>
//             {formErrors.password && <p className='error'>{formErrors.password}</p>}
//           </div>
//           <div className="form-group">
//             <label>Confirm Password:  </label>
//             <div className="password-input-container">
//               <input
//                  type={showPassword ? 'text' : 'password'} 
//                 name="confirmPassword"
//                 id="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={register.confirmPassword}
//                 onChange={handleChange}
//                 autoComplete="new-password"
//                 className={` ${formErrors.confirmPassword ? 'error' : ''} ${inputValidation.confirmPassword ? 'error-border' : ''}`}
//                 required
//               />
//                           <span
//               className={`password-toggle ${showPassword ? 'visible' : ''}`}
//               onClick={togglePasswordVisibility}
//             >
// <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}
//  style={{ color: 'grey' }}  />            </span>
// </div>
        
          
//             {formErrors.confirmPassword && <p className='error'>{formErrors.confirmPassword}</p>}
//           </div>
//     {/* {serverErrors && <p className='error'>{serverErrors}</p>} */}
//           <div className="submitdiv">
//             <button type="submit">Register</button>
//           </div>
//         </div>
//         <div className="col">
//           <p>
//             Already Have An Account?|
//             <Link to="/" className="resetpass">
//               SignIn
//             </Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;


