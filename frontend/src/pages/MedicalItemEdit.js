
import React, { useState, useEffect } from 'react';

import { Link,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/MedicalItemEdit.css'
const MedicalItemEdit = () => {
  const { itemId } = useParams();
  const navigate=useNavigate();
  console.log('itemId:',itemId);
  const [itemDetails, setItemDetails] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({
    id: '',
    name: '',

   
    stock: 0,
    unit_price: 0,


  });

  useEffect(() => {
    // Fetch item details based on the itemId parameter
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/medicines/get/${itemId}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log('values',data)
          setItemDetails(data);
          setUpdatedItem({
            id: data.id,
            name: data.name,
         
           stock: data.stock,
            unit_price: data.unit_price,
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
      const response = await fetch(`http://127.0.0.1:5000/medicines/update/${itemId}`, {
        method: 'PUT', // or 'PATCH' depending on your API design
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      if (response.ok) {
        console.log('Item updated successfully');
        navigate('/medicinetable');      } else {
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
        stock:
        <input type="number" name="stock" value={updatedItem.stock} onChange={handleChange} />
      </label>
      <label>
        unit_price:
        <input type="number" name="unit_price" value={updatedItem.unit_price} onChange={handleChange} />
      </label>
      <button onClick={handleUpdate}className='update'>Save</button>
    </div>
  );
};

export default MedicalItemEdit;