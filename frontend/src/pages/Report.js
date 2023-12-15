


import React, { useState, useEffect } from 'react';
import Navbar from './nav';
import '../styles/report.css';

const Report = () => {
  const [lowStock, setLowStockMedicines] = useState([]);
  const [totalLowStock, setTotalLowStock] = useState(0);
  const [generationTime, setGenerationTime] = useState('');
  const [expiredMedicines, setExpiredMedicines] = useState([]);
  const [totalExpiredMedicines, setTotalExpiredMedicines] = useState(0);
  const [nearExpiryMedicines, setNearExpiryMedicines] = useState([]);
  const [totalNearExpiryMedicines, setTotalNearExpiryMedicines] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch low stock medicines
        const lowStockResponse = await fetch('http://localhost:5000/medicines/low-stock');
        const lowStockData = await lowStockResponse.json();
        setLowStockMedicines(lowStockData.data);
        setTotalLowStock(lowStockData.total);

        
        // Fetch expired medicines
        const expiredResponse = await fetch('http://localhost:5000/medicines/expired');
        const expiredData = await expiredResponse.json();
        setExpiredMedicines(expiredData.data);
        setTotalExpiredMedicines(expiredData.total);

        // Fetch near-expiry medicines
        const nearExpiryResponse = await fetch('http://localhost:5000/medicines/near-expiry');
        const nearExpiryData = await nearExpiryResponse.json();
        setNearExpiryMedicines(nearExpiryData.data);
        setTotalNearExpiryMedicines(nearExpiryData.total);

        // Get the current time for generation
        const currentTime = new Date().toLocaleTimeString();
        setGenerationTime(currentTime);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // ... (existing code)

  return (
    <>
      <Navbar />
      <div id='lowStock' className='stock'>
      <div className="lowStockReport">
        <div className='rephead'>
      <img src="./images/dd.png" alt="logo" className="noteicon" />
   
        <h3>Xiron Pharmacy</h3>   </div>
        <h2>Low Stock Medicines Report</h2>
        <p className="totalItems">Total Items: {totalLowStock}</p>
        <ul>
        <ul>
  {lowStock.map((medicine) => (
    <li key={medicine.id}>
      <p><span className="label">Name:</span> {medicine.name}</p>
      <p><span className="label">Category ID:</span> {medicine.medicine_category_id}</p>
      <p><span className="label">Unit Price:</span> {medicine.unit_price}</p>
      <p><span className="label">Stock:</span> {medicine.stock}</p>
      {/* Add other details as needed */}
    </li>
  ))}
</ul>

        </ul>

        {/* Display generation time in the same card */}
        <div className="generationTime">
          <p><span className="label">Report generated at:</span> {generationTime}</p>
        </div>
      </div>
      </div>
      {/* nearly expiring */}
      {/* <Navbar /> */}
      <div>
      <div id='nearExpiryMedicines' className="lowStockReport">
        <div className='rephead'>
      <img src="./images/dd.png" alt="logo" className="noteicon" />
   
        <h3>Xiron Pharmacy</h3>   </div>
        <h2>Nearly Expired Medicines Report</h2>
        <p className="totalItems">Total Items: {totalNearExpiryMedicines}</p>
        <ul>
        <ul>
  {nearExpiryMedicines.map((medicine) => (
    <li key={medicine.id}>
      <p><span className="label">Name:</span> {medicine.name}</p>
      <p><span className="label">Category ID:</span> {medicine.medicine_category_id}</p>
      <p><span className="label">Unit Price:</span> {medicine.unit_price}</p>
      <p><span className="label">Stock:</span> {medicine.stock}</p>
      {/* Add other details as needed */}
    </li>
  ))}
</ul>

        </ul>

        {/* Display generation time in the same card */}
        <div className="generationTime">
          <p><span className="label">Report generated at:</span> {generationTime}</p>
        </div>
      </div>
      </div>

            {/* nearly expiring */}
      {/* <Navbar /> */}
      <div>
      <div id='expiredMedicines' className="lowStockReport">
        <div className='rephead'>
      <img src="./images/dd.png" alt="logo" className="noteicon" />
   
        <h3>Xiron Pharmacy</h3>   </div>
        <h2>Expired Medicines Report</h2>
        <p className="totalItems">Total Items: {totalExpiredMedicines}</p>
        <ul>
        <ul>
  {expiredMedicines.map((medicine) => (
    <li key={medicine.id}>
      <p><span className="label">Name:</span> {medicine.name}</p>
      <p><span className="label">Category ID:</span> {medicine.medicine_category_id}</p>
      <p><span className="label">Unit Price:</span> {medicine.unit_price}</p>
      <p><span className="label">Stock:</span> {medicine.stock}</p>
      {/* Add other details as needed */}
    </li>
  ))}
</ul>

        </ul>

        {/* Display generation time in the same card */}
        <div className="generationTime">
          <p><span className="label">Report generated at:</span> {generationTime}</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Report;






