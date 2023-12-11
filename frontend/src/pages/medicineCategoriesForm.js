// MedicineForm.js
import React, { useState } from 'react';
import '../styles/medicine.css'

const MedicineCategoriesForm = () => {
  const [medicinecat, setMedicineCategoriesForm] = useState({
  
    name: '',

    // Add more fields as needed
  });

const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicineCategoriesForm({
      ...medicinecat,
      [name]: value,
    });
  };

  // const storeToken = (token) => {
  //  localStorage.setItem('access_token', token);
  // console.log('jwt token:',token)
// };
    // getting the token from local storage
    const getToken = () => {
      return localStorage.setItem('access_token');
      
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Request Payload:', JSON.stringify(medicinecat));

  try {
    // get the jwt token
    const token=getToken();
    const response = await fetch('http://127.0.0.1:5000/medicine_categories/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':  `Bearer ${token}`,
      
      },
      body: JSON.stringify(medicinecat),
    });
    const data = await response.json();

    if (response.ok) {
      console.log('Medicine submitted successfully');
      // / Store the user data in local storage
    } else {
      console.error('Error submitting medicine:', response.statusText);
      const responseData=await response.json();
      console.log('Fullerror response:', responseData);
    }
  } catch (error) {
    console.error('Error submitting medicine:', error.message);
    console.log('Fullerror response:', error);

  }
};


return (
    <div className="medicine-form">
      <div className='medtitle'>
      <h2>Medicine Categories</h2></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={medicinecat.name}
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
export default MedicineCategoriesForm;