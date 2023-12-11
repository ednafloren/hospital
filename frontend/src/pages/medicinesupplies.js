// MedicineForm.js
import React, { useState } from 'react';
import '../styles/medicine.css'

const MedicalSupplies = () => {
  const [medicalSupplies, setMedicalSupplies] = useState({
    name: '',
    category: '',
    quantity: '',
    unitprice:'',
    totalprice:'',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicalSupplies({
      ...medicalSupplies,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Request Payload:', JSON.stringify(medicalSupplies));

  try {
    const response = fetch('http://127.0.0.1:5000/medical_supplies/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      
      },
      body: JSON.stringify(medicalSupplies),
    });

    if (response.ok) {
      console.log('Medicine submitted successfully');
      // You can add additional logic here if needed
    } else {
      console.error('Error submitting medicine:', response.statusText);
    }
  } catch (error) {
    console.error('Error submitting medicine:', error.message);
  }
};

return (
    <div className="medicine-form">
      <div className='medtitle'>
      <h2>Medical Supplies</h2></div>
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
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={medicalSupplies.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
          type='number'
            name="quantity"
            value={medicalSupplies.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Unit Price:</label>
          <input
          type='number'
            name="unitprice"
            value={medicalSupplies.unitprice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Total Price:</label>
          <input
          type='number'
            name="totalprice"
            value={medicalSupplies.totalprice}
            onChange={handleChange}
            required
          />
        </div>
   
      
        {/* Add more form fields for medicine details */}
        <div className='submitdiv'>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default MedicalSupplies;