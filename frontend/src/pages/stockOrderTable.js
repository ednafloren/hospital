// MedicineForm.js
import React, { useState ,useEffect} from 'react';
import '../styles/medicine.css';
import '../styles/medicinetable.css';
import { Link } from 'react-router-dom';

const StockOrdersTable = () => {
  const [stock, setstock] = useState([]);
  const [error, setError] = useState(null);

    useEffect(() => {
      fetch('http://127.0.0.1:5000//stock_orders/')
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
            setstock(data.data);
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
    <div className="space">
      <div className='medtitle'>
      <h2>Stock Orders</h2></div>
      <div>
<table>
<tr>
<th>ID</th>
<th>Status</th>

{/* <th>Medical Supply Quantity</th>
<th>Medicine Quantity</th> */}
<th>medicine</th>
<th>medical supply </th>
<th>medical supply quantity </th>
<th>medicine quantity </th>
<th>Created_by</th>

<th>Created_at</th>

<th>Updated_by</th>




</tr>
<tbody>
          {stock.map((item) => (
          
            <tr key={item.id}>
              
              <td>{item.id}</td>
              <td>{item.status}</td>
              {/* <td>{item.medical_supply_quantity}</td>
              <td>{item.medicine_quantity}</td> */}
              <td>{item.medicine_id}</td>
              <td>{item.medical_supply_id}</td>
              <td>{item.medicine_quantity}</td>
              <td>{item.medical_supply_quantity}</td>

              <td>{item.created_by}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>

            </tr>
          )
          )}
        </tbody>
</table>

      </div>

     
     
      <div className='submitdiv'>
        <Link to='/stockOrderForm' > <button type="submit">Add</button></Link>
        </div>
    </div>
    </>
  );
};

export default StockOrdersTable;
