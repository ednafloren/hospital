import React, { useEffect } from 'react';
import './success.css'; // Import your styles
import PropTypes from 'prop-types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';import InventoryIcon from '@mui/icons-material/Inventory';

const SuccessModal = ({ message, onClose, redirectPath, delay }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the modal after the delay
      if (redirectPath) {
        window.location.href = redirectPath; // Redirect to the specified path
      }
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [delay, onClose, redirectPath]);

  return (
    <div className="success-modal">
      <p>{message}</p>
      <CheckCircleIcon/>
    </div>
  );
};

SuccessModal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  redirectPath: PropTypes.string,
  delay: PropTypes.number.isRequired,
};

export default SuccessModal;


  