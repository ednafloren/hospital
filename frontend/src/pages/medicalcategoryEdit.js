
import React, { useState, useEffect } from 'react';

import { Link,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/MedicalItemEdit.css'
import CloseIcon from '@mui/icons-material/Close';

const MedicineCatEdit = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({
    name: '',
  
    
  });

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/medicine_categories/get/${itemId}`);

        if (response.ok) {
          const data = await response.json();
          console.log('Fetched item details:', data);
          
          

          setItemDetails(data.MedicineCategory);
          setUpdatedItem({
            name: data.MedicineCategory.name,
          
            
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
    navigate('/medicineCategoryTable');
  };

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
  
    
        
      const response = await fetch(`http://127.0.0.1:5000/medicine_categories/update/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      if (response.ok) {
        console.log('Item updated successfully');
        navigate('/medicineCategoryTable');
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

      <h2>Edit Medicine Category</h2>
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
}

export default MedicineCatEdit;


//   const { itemId } = useParams();
//   const navigate=useNavigate();
//   console.log('itemId:',itemId);
//   const [itemDetails, setItemDetails] = useState(null);
//   const [updatedItem, setUpdatedItem] = useState({
//     id: '',
//     name: '',
 
    
// });

//   useEffect(() => {
//     // Fetch item details based on the itemId parameter
//     const fetchItemDetails = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:5000/medicine_categories/get/${itemId}`);
        
//         if (response.ok) {
//           const data = await response.json();
//           console.log('values',data)
//           setItemDetails(data);
//           setUpdatedItem({
//             id: data.id,
//             name: data.name,
            
//           });
//         } else {
//           console.error('Error fetching item details:', response.status);
//         }
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
//     };

//     fetchItemDetails();
//   }, [itemId]);

//   const handleUpdate = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/medicine_categories/update/${itemId}`, {
//         method: 'PUT', // or 'PATCH' depending on your API design
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedItem),
//       });

//       if (response.ok) {
//         console.log('Item updated successfully');
//         navigate('/medicineCategoryTable');      } else {
//         console.error('Error updating item:', response.status);
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };

//   const handleChange = (e) => {
//     console.log('updatie',e.target.name,e.target.value);

//     setUpdatedItem({
//       ...updatedItem,
//       [e.target.name]: e.target.value,
//     });
//   };

//   if (!itemDetails) {
//     return <div>Loading...</div>;
//   }
//   const handleClose = () => {
//     navigate('/medicineCategoryTable');
//   };
//   console.log("updateditem",updatedItem);
//   return (
//     <div className='editpage'>
//         <div className="close-icon-box" onClick={handleClose}>
//         <span className="close-icon"><CloseIcon /></span>
//       </div>
//       <h2>Edit Medical Category</h2>
//       <p>ID: {itemDetails.id}</p>
//       {/* <form className='myform'> */}
//       <form className='myform'>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             placeholder={itemDetails.name}
//             value={updatedItem.name}
//             onChange={handleChange}
//           />
//         </label>
//         </form>
     
     
      
      

//       <button onClick={handleUpdate}className='update'>Save</button>
//     </div>
//   );
