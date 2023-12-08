// MedicineForm.js
import React, { useState ,useEffect} from 'react';
import '../styles/medicine.css';
import '../styles/medicinetable.css';
import { Link } from 'react-router-dom';

// const MedicineTable = () => {
//   const [medicine, setMedicine] = useState({
//     name: '',
//     category: '',
//     quantity: '',
//     unitprice:'',
//     totalprice:'',
//     medexpiry:'',
//     // Add more fields as needed
//   });

const MedicineTable = () => {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/medicines/')
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
          setTableData(data.data);
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

  return (
    <>
    <div className='space'>
          <div className='medtitle'>
      <h2>Medicine Details</h2></div>
      <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Category ID</th>
            <th>Unit Price</th>
            <th>Stock</th>

            <th>Created By</th>
            <th>Created At</th>
            <th>Updated By</th>
            <th>expiry_date</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
          
            <tr key={item.id}>
              
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
              <img
  src={item.image}
  alt={`Image for ${item.name}`}
  style={{ maxWidth: '100px', maxHeight: '100px' }}
/>

                </td>
              <td>{item.medicine_category_id}</td>
              <td>{item.unit_price}</td>
              <td>{item.stock}</td>
              <td>{item.created_by}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td>{item.expiry_date}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
   
   
    </div>
      <div className='submitdiv'>
      <Link to='/medicineForm' > <button type="submit">Add</button></Link>
      </div>
      </div>
    </>
  );
}




export default MedicineTable;

