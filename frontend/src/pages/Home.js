
import React, { useState, useEffect } from 'react';
import Navbar from './nav';
import "../styles/home.css";
import { Link } from 'react-router-dom';


const Home = () => {
  const [expiredMedicines, setExpiredMedicines] = useState([]);
  const [totalExpiredMedicines, setTotalExpiredMedicines] = useState(0);
  const [nearExpiryMedicines, setNearExpiryMedicines] = useState([]);
  const [totalNearExpiryMedicines, setTotalNearExpiryMedicines] = useState(0);
  const [lowStock,  setLowStockMedicines] = useState([]);
  const [totalLowStock,  setTotalLowStock] = useState(0);
  const [totalMedicines, setTotalMedicines] = useState(0);
  const [allMedicines, setallMedicines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total medicines count
        const totalMedicinesResponse = await fetch('http://localhost:5000/medicines/total');
        const totalMedicinesData = await totalMedicinesResponse.json();
        setallMedicines(allMedicines.data);
        setTotalMedicines(totalMedicinesData.total);

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

        // Fetch low stock medicines
        const lowStockResponse = await fetch('http://localhost:5000/medicines/low-stock');
        const lowStockData = await lowStockResponse.json();
        setLowStockMedicines(lowStockData.data);
        setTotalLowStock(lowStockData.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className='new'>
        <div className='col1'>
        <Link to="/medicinetable"
             smooth={true}
             duration={500}
              className='card5'>
            <div className='total'>
              <div className='tmed'><h3>Total Medicines </h3></div>
            </div>
            <div className='report'>
              <p className='rep'>Quantity </p>
              <p className='number'> {totalMedicines}</p>
            </div>
            </Link>
          {/* </div> */}
          <Link to="/Report#lowStock"
             smooth={true}
             duration={500}
              className='card4'>
          {/* <div className='card4'> */}
            <div className='total'>
              <div className='tmed'><h3>Low stocked medicine </h3></div>
            </div>
            <div className='report'>
              <p className='rep'>Quantity </p>
              <p className='number'> {totalLowStock}</p>
            </div>
          {/* </div> */}
          </Link>
        </div>
        <div className='col1'>
        <Link to="/Report#expiredMedicines"
           smooth={true}
           duration={5000}
            className='card6'>
      
      
            <div className='total'>
              <div className='tmed'><h3>Expired Medicine </h3></div>
            </div>
            <div className='report'>
              <p className='rep'>Quantity </p>
              <p className='number'> {totalExpiredMedicines}</p>
            </div>
          
          
          </Link>
          <Link to="/Report#nearExpiryMedicines"
             smooth={true}
             duration={500}
             className='card3'>
          {/* <div className='card3'> */}
            <div className='total'>
              <div className='tmed'><h3>Nearly Expired Medicine </h3></div>
            </div>
            <div className='report'>
              <p className='rep'>Quantity </p>
              <p className='number'> {totalNearExpiryMedicines}</p>
            </div>
          {/* </div> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;






