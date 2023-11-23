// MedicineForm.js
import React, { useState,useEffect } from 'react';
import '../styles/medicine.css';
import '../styles/medicinetable.css';
import { Link } from 'react-router-dom';

const MedicalSuppliesCategoriesTable = () => {
  const [supplycat, setSupplycat] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000//medical_supply_categories/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('API Response:', data);  // Log the complete data received from the API

        // Adjust this part based on the actual structure of your data
        if (data && data.success && data.data) {
          setSupplycat(data.data);
        } else {
          setError('Data structure is not as expected.');
        }
      })
      .catch(error => {
        console.error('Error fetching table data:', error);
        setError('Error fetching data. Please try again.');
      });
    }, []);


  if (error) {
    return <p>{error}</p>;
  }

  return (
<>
<div className='space'>
      <div className='medtitle'>
      <h2>Medical Supplies Categories</h2></div>
      <div>
      <tr>
  <th>ID</th>
<th>Name</th>


<th>Created_by</th>

<th>Created_at</th>

<th>Updated_by</th>



</tr>
<tbody>
          {supplycat.map((item) => (
          
            <tr key={item.id}>
              
              <td>{item.id}</td>
              <td>{item.name}</td>
   

         
              <td>{item.created_by}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>

            </tr>
          )
          )}
        </tbody>

      </div>

   
   
      <div className='submitdiv'>
        <Link to='/medicalSuppliesCategoriesForm' > <button type="submit">Add</button></Link>
        </div>
        </div>
        </>
  );
};

export default MedicalSuppliesCategoriesTable;
