// MedicineForm.js
import React, { useState,useEffect } from 'react';
import '../styles/medicine.css';
import '../styles/medicinetable.css';
import { Link,useNavigate } from 'react-router-dom';
import DeleteIcon  from '@mui/icons-material/Delete';
import EditIcon  from '@mui/icons-material/Edit';
import ConfirmDeleteDialog from '../components/confirmdelete';

const MedicineCategoryTable = () => {
  const [medicinecat, setmedicinecat] = useState([]);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]); // Initialize with your data
    const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
      fetch('http://127.0.0.1:5000/medicine_categories/')
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
            setmedicinecat(data.data);
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
        const response = await fetch(`http://127.0.0.1:5000/medicine_categories/get/${itemId}`);
  
        if (response.ok) {
          const data = await response.json();
          navigate(`/catedit/${itemId}`);
          // Handle the fetched data, you can navigate to an edit page, show a modal, etc.
          console.log('Fetched item details:', data);
        } else {
          console.error('Error fetching item details:', response.status);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
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
          // Fetch updated data after successful deletion
          const updatedDataResponse = await fetch('http://127.0.0.1:5000/medicines/');
          if (updatedDataResponse.ok) {
            const updatedData = await updatedDataResponse.json();
            console.log('Updated Data:', updatedData);
    
            if (updatedData && updatedData.success && updatedData.data) {
              // Update local state with the new data
              setTableData(updatedData.data);
              console.log('Item deleted successfully');
            } else {
              setError('Updated data structure is not as expected.');
            }
          } else {
            console.error('Error fetching updated data:', updatedDataResponse.status);
          }
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
  return (
<>
<div className='space'>
      <div className='medtitle'>
      <h2>Medicine Categories</h2></div>
      <div className='add'>
        <Link to='/medicineCategoriesForm' > <button type="submit">Add</button></Link>
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
          {medicinecat.map((item) => (
          
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
        <ConfirmDeleteDialog
        isOpen={isConfirmDialogOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
        </>
  );
};

export default MedicineCategoryTable;
