// MedicineForm.js
import React, { useState,useEffect} from 'react';
import '../styles/medicine.css';
import '../styles/medicinetable.css';
import { Link,useNavigate } from 'react-router-dom';
import DeleteIcon  from '@mui/icons-material/Delete';
import EditIcon  from '@mui/icons-material/Edit';

const MedicalSuppliesTable = () => {
  const [supply, setSupply] = useState([]);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]); // Initialize with your data
  const navigate=useNavigate();
  useEffect(() => {
    fetch('http://127.0.0.1:5000/medical_supplies/')
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
          setSupply(data.data);
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
      const response=await fetch(`http://127.0.0.1:5000/medical_supplies/delete/${itemId}`, {
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

  // HANDLE CLICK
  const handleUpdateClick = async (itemId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/medical_supplies/get/${itemId}`);

      if (response.ok) {
        const data = await response.json();
        navigate(`/editsupply/${itemId}`);
        // Handle the fetched data, you can navigate to an edit page, show a modal, etc.
        console.log('Fetched item details:', data);
      } else {
        console.error('Error fetching item details:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };




  
  return (
<>
<div className='space'>
      <div className='medtitle'>
      <h2>Medical Supplies </h2></div>
      <div>
<table>
<thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Category </th>
            <th>Unit Price</th>
            <th>Stock</th>

            <th>Created By</th>
            <th>Created At</th>
            <th>Updated By</th>
          <th></th>
          <th></th>
          </tr>
        </thead>
<tbody>
          {supply.map((item) => (
          
            <tr key={item.id}>
              
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
              <img
  src={item.image}
  alt={`Image for ${item.name}`}
  style={{ maxWidth: '60px', maxHeight: '60px' }}
/>

                </td>
              <td>{item.medical_supply_category_id}</td>
              <td>{item.unit_price}</td>
              <td>{item.stock}</td>
              <td>{item.created_by}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td>
              <EditIcon className='EditIcon'onClick={() => handleUpdateClick(item.id)}/>
            </td>
              <td><DeleteIcon className='delete' onClick={() => handleDelete(item.id)}/></td>

            </tr>
          )
          )}
        </tbody>
</table>

      </div>

   
   
      <div className='submitdiv'>
        <Link to='/medicinesupplies' > <button type="submit">Add</button></Link>
        </div>
        </div>
        </>
  );
};

export default MedicalSuppliesTable;
