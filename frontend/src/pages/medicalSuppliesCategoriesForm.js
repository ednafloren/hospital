

import React, { useState } from 'react';
import '../styles/medicine.css'
import CloseIcon from '@mui/icons-material/Close';
import { useParams, useNavigate } from 'react-router-dom';
import SuccessModal from '../components/success'
const MedicalSuppliesCategoriesForm = () => {
  const navigate = useNavigate();
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  
  const [medicalSupplies, setMedicalSuppliesCategoriesForm] = useState({
    name: '',
 

    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicalSuppliesCategoriesForm({
      ...medicalSupplies,
      [name]: value,
    });
  };
  const handleSuccess = () => {
    setSuccessModalOpen(true);
  };
  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
  };
  const handleClose = () => {
    navigate('/medicineCategoryTable');
  };
  return (
    <div className="medicine-form">
        <div className="close-icon-box" onClick={handleClose}>
        <span className="close-icon"><CloseIcon /></span>
      </div>
      <div className='medtitle'>
      <h2>Medical Supplies Categories</h2></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={medicalSupplies.name}
            onChange={handleChange}
            required
          />
        </div>
        
        
        <div className='submitdiv'>
        <button type="submit">Submit</button>
        </div>
      </form>
      {isSuccessModalOpen && (
        <SuccessModal
          message="Medicine Successfully added!"
          onClose={closeSuccessModal}
          redirectPath="/medicinetable"
          delay={3000} 
          
        />
      )}
    </div>
    
  );
};
export default MedicalSuppliesCategoriesForm;