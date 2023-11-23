// MedicineForm.js
import React, { useState } from 'react';
import '../styles/medicine.css'

const StockOrdersForm = () => {
  const [StockOrders, setStockOrders] = useState({
    status: '',
   
    quantity: '',
    
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStockOrders({
      ...StockOrders,
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
      <h2>Stock Orders</h2></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={StockOrders.status}
            onChange={handleChange}
            required
          />
        </div>
      
        <div className="form-group">
          <label>Quantity:</label>
          <input
          type='number'
            name="quantity"
            value={StockOrders.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Medicine:</label>
          <input
          type='text'
            name="medicine"
            value={StockOrders.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Medical Supply:</label>
          <input
          type='text'
            name="medicalSupply"
            value={StockOrders.description}
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

export default StockOrdersForm;
