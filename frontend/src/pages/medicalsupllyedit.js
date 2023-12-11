
import React, { useState, useEffect } from 'react';

import { Link,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/MedicalItemEdit.css'
const MedicalSupplyEdit = () => {
  const { itemId } = useParams();
  const navigate=useNavigate();
  console.log('itemId:',itemId);
  const [itemDetails, setItemDetails] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({
    id: '',
    name: '',
    unit_price: 0,

    image: null,
    stock: 0,
    medical_supply_category_id: ''
    

  });

  useEffect(() => {
    // Fetch item details based on the itemId parameter
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/medical_supplies/get/${itemId}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log('values',data)
          setItemDetails(data);
          setUpdatedItem({
            id: data.id,
            name: data.name,
            unit_price: data.unit_price,
            image: data.image,
           stock: data.stock,
           
            medical_supply_category_id: data.medical_supply_category_id, 
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

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/medical_supplies/update/${itemId}`, {
        method: 'PUT', // or 'PATCH' depending on your API design
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      if (response.ok) {
        console.log('Item updated successfully');
        navigate('/medicalSuppliesTable');      } else {
        console.error('Error updating item:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleChange = (e) => {
    console.log('updatie',e.target.name,e.target.value);

    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  if (!itemDetails) {
    return <div>Loading...</div>;
  }
  console.log("updateditem",updatedItem);
  return (
    <div className='editpage'>
      <h2>Edit Medical Item</h2>
      <p>ID: {itemDetails.id}</p>
  
      <label>
        Name:
        <input type="text" name="name" value={updatedItem.name} onChange={handleChange} />
      </label>
      <label>
        unit_price:
        <input type="number" name="unit_price" value={updatedItem.unit_price} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type="file" name="image" value={updatedItem.image} onChange={handleChange} />
      </label>
      <label>
        stock:
        <input type="number" name="stock" value={updatedItem.stock} onChange={handleChange} />
      </label>
      <label>
    Category:
        <input type="text" name="medical_supply_category_id" value={updatedItem.medical_supply_category_id} onChange={handleChange} />
      </label>
      <button onClick={handleUpdate}className='update'>Save</button>
    </div>
  );
};

export default MedicalSupplyEdit;