// MedicineForm.js
import React, { useState } from 'react';
import '../styles/medicine.css'

const MedicalSuppliesCategoriesForm = () => {
  const [medicalSupplies, setMedicalSuppliesCategoriesForm] = useState({
    name: '',
 
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicalSuppliesCategoriesForm({
      ...medicalSupplies,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to the server or storing it in state.
  };

  return (
    <div className="medicine-form">
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
    </div>
  );
};
export default MedicalSuppliesCategoriesForm;