// MedicineForm.js
import React, { useState,useEffect } from 'react';
import '../styles/medicine.css';
import '../styles/medicinetable.css';
import { Link } from 'react-router-dom';
import DeleteIcon  from '@mui/icons-material/Delete';

const DispensedstockTable = () => {
  const [dispensedstock, setdispensedstock] = useState([]);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]); // Initialize with your data

    useEffect(() => {
      fetch('http://127.0.0.1:5000//dispensed_stocks/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response wa  s not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('API Response:', data);  // Log the complete data received from the API
  
          // Adjust this part based on the actual structure of your data
          if (data && data.success && data.data) {
            setdispensedstock(data.data);
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
    const handleDelete = async (itemId) => {
      try {
        // Make API request to delete item on the server
        const response=await fetch(`http://127.0.0.1:5000/dispensed_stocks/delete/${itemId}`, {
          method: 'DELETE',
          // Add headers if needed
        });
        if (response.ok) {
               // Update local state
        const updatedItems = items.filter(item => item.id !== itemId);
        setItems(updatedItems);
          console.log('delete');
        }
    
   
      }catch (error) {
        console.error('Error deleting item:', error);
      }
    };
    
    
  

  return (
    <>
    <div className="space">
      <div className='medtitle'>
      <h2>Dispensed Stock</h2></div>
      <div>
<table>
  <thead>
<tr>
<th>ID</th>
<th>Status</th>
<th>Medical Supply Quantity</th>
<th>Medicine Quantity</th>
<th>Medicine</th>
<th>Medical Supply</th>
<th>Created_by</th>

<th>Created_at</th>
<th>Updated_by</th>

<th></th>




</tr>
</thead>
<tbody>
          {dispensedstock.map((item) => (
          
            <tr key={item.id}>
              
              <td>{item.id}</td>
              <td>{item.status}</td>
              <td>{item.medical_supply_quantity}</td>
              <td>{item.medicine_quantity}</td>
              <td>{item.medicine_id}</td>

              <td>{item.medical_supply_id}</td>
              <td>{item.created_by}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td><DeleteIcon className='delete' onClick={() => handleDelete(item.id)}/></td>

            </tr>
          )
          )}
        </tbody>
</table>

      </div>

     
     
      <div className='submitdiv'>
        <Link to='/receivedPurchaseForm' > <button type="submit">Add</button></Link>
        </div>
    </div>
    </>
  );
};

export default DispensedstockTable;
