// MedicineForm.js
import React, { useState,useEffect } from 'react';
import '../styles/medicine.css';
import '../styles/medicinetable.css';
import { Link,useNavigate } from 'react-router-dom';
import DeleteIcon  from '@mui/icons-material/Delete';
import EditIcon  from '@mui/icons-material/Edit';

const MedicalSuppliesCategoriesTable = () => {
  const [supplycat, setSupplycat] = useState([]);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]); // Initialize with your data
  const navigate=useNavigate();
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

  const handleUpdateClick = async (itemId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/medical_supply_categories/get/${itemId}`);

      if (response.ok) {
        const data = await response.json();
        navigate(`/supplycatedit/${itemId}`);
        // Handle the fetched data, you can navigate to an edit page, show a modal, etc.
        console.log('Fetched item details:', data);
      } else {
        console.error('Error fetching item details:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const handleDelete = async (itemId) => {
    try {
      // Make API request to delete item on the server
      const response=await fetch(`http://127.0.0.1:5000/medical_supply_categories/delete/${itemId}`, {
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
<div className='space'>
      <div className='medtitle'>
     
      <h2>Medical Supplies Categories</h2></div>
      <div className='add'>
        <Link to='/medicalSuppliesCategoriesForm' > <button type="submit">Add</button></Link>
        </div>
        <div>
      <table>
      <tr>
  <th>ID</th>
<th>Name</th>


<th>Created_by</th>

<th>Created_at</th>

<th>Updated_by</th>
<th></th>
<th></th>


</tr>
<tbody>
          {supplycat.map((item) => (
          
            <tr key={item.id}>
              
              <td>{item.id}</td>
              <td>{item.name}</td>
   

         
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
   
   
   
        </div>
        </>
  );
};

export default MedicalSuppliesCategoriesTable;
