import React, { useState } from 'react';
import '../styles/medicine.css';

const MedicineForm = () => {
  const [medicine, setMedicine] = useState({
    name: '',
    category: '',
    quantity: '',
    unitprice: '',
    totalprice: '',
    expiry_date: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({
      ...medicine,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Request Payload:', JSON.stringify(medicine));
    

    try {
      const response = await fetch('http://127.0.0.1:5000/medicines/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify(medicine),
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
        <h2>Medicine Details</h2>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={medicine.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={medicine.category}
            onChange={handleChange}
            required
          />
        </div>
       
        <div className="form-group">
          <label>Unit Price:</label>
          <input
          type='number'
            name="unitprice"
            value={medicine.unitprice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
          type='number'
            name="stock"
            value={medicine.stock}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Expiry Date:</label>
          <input
          type='date'
            name="expirydate"
            value={medicine.expirydate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
          type='file'
            name="image"
            value={medicine.image}
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

export default MedicineForm;
