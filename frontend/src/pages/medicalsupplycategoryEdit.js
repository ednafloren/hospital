
import React, { useState, useEffect } from 'react';

import { Link,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/MedicalItemEdit.css'
import CloseIcon from '@mui/icons-material/Close';

const SupplyCatEdit = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({
    name: '',
  
    
  });

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/medical_supply_categories/get/${itemId}`);

        if (response.ok) {
          const data = await response.json();
          console.log('Fetched item details:', data);
          
          

          setItemDetails(data.MedicalSupplyCategory);
          setUpdatedItem({
            name: data.MedicalSupplyCategory.name,
          
            
          });
        } else {
          console.error('Error fetching item details:', response.status);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  const handleClose = () => {
    navigate('/medicalSuppliesCategoriesTable');
  };

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
  
    
        
      const response = await fetch(`http://127.0.0.1:5000/medical_supply_categories/update/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      if (response.ok) {
        console.log('Item updated successfully');
        navigate('/medicalSuppliesCategoriesTable');
      } else {
        console.error('Error updating item:', response.status);
      }

      
  };

  if (!itemDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='editpage'>
      <div className="close-icon-box" onClick={handleClose}>
        <span className="close-icon"><CloseIcon /></span>
      </div>

      <h2>Edit Medical Supply Category</h2>
      <p>ID: {itemDetails.id}</p>
      <form className='myform'>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder={itemDetails.name}
            value={updatedItem.name}
            onChange={handleChange}
          />
        </label>
        
        {/* Add other form fields using itemDetails */}
      </form>
      <button onClick={handleUpdate} className='update'>Save</button>
    </div>
  );
};

export default SupplyCatEdit;