import React from 'react';
import { useNavigate } from 'react-router';

const LogoutButton = () => {
  const navigate=useNavigate();
  const handleLogout = async () => {

    try {
      const response = await fetch('http://127.0.0.1:5000/users/logout', {
        method: 'POST',
        credentials: 'include', 
        headers: {
          'Content-Type': 'application/json',
     
        },  // Include credentials to send cookies
      });

      if (response.ok) {
        // Handle successful logout, e.g., redirect or update state
        console.log('Logout successful');
        navigate('/');
      } else {
        const data = await response.json();
        console.error('Error logging out:', data.message || data);
      }
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
