
import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import { Link,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/MedicalItemEdit.css'
const MedicalSupplyEdit = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({
    name: '',
    medical_supply_category_id: 0,
    stock: '',
    unit_price: 0,
   
    
  });

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/medical_supplies/get/${itemId}`);

        if (response.ok) {
          const data = await response.json();
          console.log('Fetched item details:', data);

          
          setItemDetails(data.MedicalSupply);
          setUpdatedItem({
            name: data.MedicalSupply.name,
            medical_supply_category_id: data.MedicalSupply.medical_supply_category_id,
            unit_price: data.MedicalSupply.unit_price,
            stock: data.MedicalSupply.stock,
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
    navigate('/MedicalSuppliesTable');
  };

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
   
      
            
        
      const response = await fetch(`http://127.0.0.1:5000/medical_supplies/update/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      if (response.ok) {
        console.log('Item updated successfully');
        navigate('/MedicalSuppliesTable');
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

      <h2>Edit Medical Supply</h2>
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
        <label>
          Category Id:
          <input
            type="number"
            name=" medical_supply_category_id"
            placeholder={itemDetails. medical_supply_category_id}
            value={updatedItem. medical_supply_category_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Unit Price:
          <input
            type="number"
            name=" unit_price"
            placeholder={itemDetails. unit_price}
            value={updatedItem. unit_price}
            onChange={handleChange}
          />
        </label>
   
   
        <label>
          Stock:
          <input
            type="text"
            name="stock"
            placeholder={itemDetails.stock}
            value={updatedItem.stock}
            onChange={handleChange}
          />
        </label>
        {/* Add other form fields using itemDetails */}
      </form>
      <button onClick={handleUpdate} className='update'>Save</button>
    </div>
  );

};

export default MedicalSupplyEdit;