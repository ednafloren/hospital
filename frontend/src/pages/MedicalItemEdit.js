

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/MedicalItemEdit.css'

const MedicalItemEdit = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const [updatedItem, setUpdatedItem] = useState({
    name: '',
    medicine_category_id: 0,
    stock: '',
    unit_price: 0,
    expiry_date: '',
  });

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/medicines/get/${itemId}`);

        if (response.ok) {
          const data = await response.json();
          console.log('Fetched item details:', data);
          const formattedExpiryDate = data.Medicine.expiry_date.slice(0, 16);

          setItemDetails(data.Medicine);
          setUpdatedItem({
            name: data.Medicine.name,
            medicine_category_id: data.Medicine.medicine_category_id,
            unit_price: data.Medicine.unit_price,
            expiry_date: formattedExpiryDate,  // Set the formatted expiry_date
            stock: data.Medicine.stock,
          });
        } else {
          console.error('Error fetching item details:', response.status);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };


    // delete
    const handleDelete = (itemId) => {
      // Set the item ID to delete in the state
      setItemIdToDelete(itemId);
      // Open the confirmation dialog
      setConfirmDialogOpen(true);
    };
  
    const handleCancelDelete = () => {
      // Close the confirmation dialog
      setConfirmDialogOpen(false);
      // Reset the item ID to delete
      setItemIdToDelete(null);
    };
  
    const handleConfirmDelete = async () => {
      try {
        // Make API request to delete item on the server
        const response = await fetch(`http://127.0.0.1:5000/medicines/delete/${itemIdToDelete}`, {
          method: 'DELETE',
          // Add headers if needed
        });
  
        if (response.ok) {
          // Update local state
          const updatedItems = items.filter(item => item.id !== itemIdToDelete);
          setItems(updatedItems);
          console.log('Item deleted successfully');
          
          // Redirect to the medicine table after deletion
          navigate('/medicineCategoryTable');
        } else {
          console.error('Error deleting item:', response.status);
        }
      } catch (error) {
        console.error('Error deleting item:', error);
      } finally {
        // Close the confirmation dialog
        setConfirmDialogOpen(false);
        // Reset the item ID to delete
        setItemIdToDelete(null);
      }
    };
  

    fetchItemDetails();
  }, [itemId]);

  const handleClose = () => {
    navigate('/medicineCategoryTable');
  };

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      
              // Parse and format the expiry_date as "yyyy-MM-ddThh:mm"
             const formattedData = {
                ...updatedItem,
                expiry_date: new Date(updatedItem.expiry_date).toISOString().slice(0, 16),
              };
        
      const response = await fetch(`http://127.0.0.1:5000/medicines/update/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      if (response.ok) {
        console.log('Item updated successfully');
        navigate('/medicinetable');
      } else {
        console.error('Error updating item:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
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

      <h2>Edit Medical Item</h2>
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
            name="medicine_category_id"
            placeholder={itemDetails.medicine_category_id}
            value={updatedItem.medicine_category_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Unit Price:
          <input
            type="number"
            name="unit_price"
            placeholder={itemDetails.unit_price}
            value={updatedItem.unit_price}
            onChange={handleChange}
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="datetime-local"
            name="expiry_date"
            placeholder={itemDetails.expiry_date}
            value={updatedItem.expiry_date}
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

export default MedicalItemEdit;






