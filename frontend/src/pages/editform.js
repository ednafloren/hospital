import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// // const EditForm = () => {
//   // const [error, setError] = useState(null);

//   // const { itemId } = useParams(); // Get the itemId from URL parameters
//   // const [formData, setFormData] = useState({
//   //   name: '',
//   //   category: '',
//   //   // Add other fields as needed
//   // });

//   const EditForm = ({ itemId }) => {
//     const [medicalItem, setMedicalItem] = useState(null);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchMedicalItem = async () => {
//         try {
//           const response = await fetch(`http://127.0.0.1:5000/medicines/get/${itemId}`);
//           if (response.ok) {
//             const data = await response.json();
//             setMedicalItem(data);
//           } else {
//             setError('Medical item not found');
//           }
//         } catch (error) {
//           setError('Error fetching medical item');
//         }
//       };
  
//       fetchMedicalItem();
//     }, [itemId]);
//     if (!medicalItem) {
//       return <div>Loading...</div>;
//     }
  
//   // useEffect(() => {
    
//   //   // Fetch the current medicine data based on itemId
//   //   const fetchData = async (itemId) => {
//   //     try {
//   //       const response = await fetch(`http://127.0.0.1:5000/medicines/get/${itemId}`,{
//   //     });
//   //       const data = await response.json();

//   //       if (response.ok) {
//   //         setFormData(data); // Assuming the data structure matches the form fields
//   //       } else {
//   //         console.error('Failed to fetch medicine data');
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching medicine data:', error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [itemId]); // Fetch data whenever itemId changes

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({ ...formData, [name]: value });
//   // };

//   // const handleEdit = async () => {
//   //   try {
//   //     const response = await fetch(`http://127.0.0.1:5000/medicines/update/${itemId}`, {
//   //       method: 'PUT',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     if (response.ok) {
//   //       console.log('Medicine and associated records updated successfully!');
//   //       // Optionally, redirect or perform additional actions after successful edit
//   //     } else {
//   //       console.error('Failed to edit medicine:', response.statusText);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error editing medicine:', error);
//   //   }
//   // };

//   return (
//     <div>
//       <h2>Edit Medicine</h2>
//       <label>
//         Name:
//         {/* <input type="text" name="name" value={formData.name} onChange={handleChange} /> */}
//       </label>
//       <br />
//       <label>
//         Category:
//         {/* <input type="text" name="category" value={formData.category} onChange={handleChange} /> */}
//       </label>
//       {/* Add other form fields as needed */}
//       <br />
//       {/* <button onClick={handleEdit}>Save Changes</button> */}
//     </div>
//   );
// };

// export default EditForm;

const MedicalItemDetail = ({ itemId }) => {
  const [medicalItem, setMedicalItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicalItem = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/medicines/get/${itemId}`);
        if (response.ok) {
          const data = await response.json();
          setMedicalItem(data);
        } else {
          setError('Medical item not found');
        }
      } catch (error) {
        setError('Error fetching medical item');
      }
    };

    fetchMedicalItem();
  }, [itemId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!medicalItem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{medicalItem.name}</h1>
      <p>Description: {medicalItem.description}</p>
      <p>Price: {medicalItem.price}</p>
    </div>
  );
};

export default MedicalItemDetail;