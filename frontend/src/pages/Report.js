// import Navbar from './nav'
// import "../styles/home.css"
// import React, { useState, useEffect } from 'react';



// export default function Home() {
//        const [expiredMedicines, setExpiredMedicines] = useState([]);
//        const [totalExpiredMedicines, setTotalExpiredMedicines] = useState(0);
     
//        useEffect(() => {
//          // Fetch data from the Flask backend when the component mounts
//          const fetchData = async () => {
//            try {
//              const response = await fetch('http://localhost:5000/medicines/expired');
//              const data = await response.json();
//              setExpiredMedicines(data.data);
//              setTotalExpiredMedicines(data.total);
//            } catch (error) {
//              console.error('Error fetching data:', error);
//            }
//          };
     
//          fetchData();
//        }, []); 



//     return (
//      <>
//      <div className='new'>
//         <div className='col1'>
   
//        <div className='card1'>
//         <div className='total'>
//        <div className='tmed'><h3>Total Medicine </h3></div>
//        <div> <img src='images/noticon.png' className='icorep'/></div>
//        </div>
// <div className='report'><p className='rep'>Quantity </p>   
//  <p className=' number'>4</p> 
//  </div>
// </div>
// <div className='card2'>
//         <div className='total'>
//        <div className='tmed'><h3>Nearly expiring Medicine </h3></div>
//        <div> <img src='images/noticon.png' className='icorep'/></div>
//        </div>
// <div className='report'><p className='rep'>Quantity </p>   
//  <p className=' number'>4</p> 
//  </div>
// </div>
    
// <div className='card3'>
//         <div className='total'>
//        <div className='tmed'><h3>Expired Medicine </h3></div>
//        <div> <img src='images/noticon.png' className='icorep'/>
//        </div>
//        </div>
// <div className='report'><p className='rep'>Quantity </p>   
//  <p className=' number'> {totalExpiredMedicines}</p>
//  </div>
// </div>
// </div>

// <div className='col1'>
   
//        <div className='card4'>
//         <div className='total'>
//        <div className='tmed'><h3>Nearly Done Medicine </h3></div>
//        <div> <img src='images/noticon.png' className='icorep'/></div>
//        </div>
       
// <div className='report'><p className='rep'>Quantity </p>   
//  <p className=' number'>4</p> 
//  </div>
// </div>
// <div className='card5'>
//         <div className='total'>
//        <div className='tmed'><h3>Total Equipment </h3></div>
//        <div> <img src='images/noticon.png' className='icorep'/></div>
//        </div>
// <div className='report'><p className='rep'>Quantity </p>   
//  <p className=' number'>4</p> 
//  </div>
// </div>
    
// <div className='card6'>
//         <div className='total'>
//        <div className='tmed'><h3>Nearly Done Equipment  </h3></div>
//        <div> <img src='images/noticon.png' className='icorep'/></div>
//        </div>
// <div className='report'><p className='rep'>Quantity </p>   
//  <p className=' number'>4</p> 
//  </div>
// </div>
// </div>
// </div>

//       </>
//     )
//   }
// import React, { useState, useEffect } from 'react';
// import Navbar from './nav';
// import "../styles/home.css";

// const Home = () => {
//   const [expiredMedicines, setExpiredMedicines] = useState([]);
//   const [totalExpiredMedicines, setTotalExpiredMedicines] = useState(0);
//   const [nearExpiryMedicines, setNearExpiryMedicines] = useState([]);
//   const [totalNearExpiryMedicines, setTotalNearExpiryMedicines] = useState(0);
//   const [lowStock,  setLowStockMedicines] = useState([]);
//   const [totalLowStock,  setTotalLowStock] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch expired medicines
//         const expiredResponse = await fetch('http://localhost:5000/medicines/expired');
//         const expiredData = await expiredResponse.json();
//         setExpiredMedicines(expiredData.data);
//         setTotalExpiredMedicines(expiredData.total);

//         // Fetch near-expiry medicines
//         const nearExpiryResponse = await fetch('http://localhost:5000/medicines/near-expiry');
//         const nearExpiryData = await nearExpiryResponse.json();
//         setNearExpiryMedicines(nearExpiryData.data);
//         setTotalNearExpiryMedicines(nearExpiryData.total);

        
//         // Fetch low stock medicines
//         const lowStockResponse = await fetch('http://localhost:5000/medicines/low-stock');
//         const lowStockData = await lowStockResponse.json();
//         setLowStockMedicines(lowStockData.data);
//         setTotalLowStock(lowStockData.total);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }

//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className='new'>
//         <div className='col1'>
//           <div className='card1'>
//             {/* Your existing Total Medicine card */}
//           </div>
//           <div className='card2'>
//           <div className='total'>
//               <div className='tmed'><h3>Low stocked medicine </h3></div>
              // <div> <img src='images/noticon.png' className='icorep' /></div>
//             </div>
//             <div className='report'>
//               <p className='rep'>Quantity </p>
//               <p className='number'> {totalLowStock}</p>
//             </div>
//           </div>
//           <div className='card3'>
//             <div className='total'>
//               <div className='tmed'><h3>Expired Medicine </h3></div>
              // <div> <img src='images/noticon.png' className='icorep' /></div>
//             </div>
//             <div className='report'>
//               <p className='rep'>Quantity </p>
//               <p className='number'> {totalExpiredMedicines}</p>
//             </div>
//           </div>
//           <div className='card4'>
//             <div className='total'>
//               <div className='tmed'><h3>Nearly Expired Medicine </h3></div>
              // <div> <img src='images/noticon.png' className='icorep' /></div>
//             </div>
//             <div className='report'>
//               <p className='rep'>Quantity </p>
//               <p className='number'> {totalNearExpiryMedicines}</p>
//             </div>
//           </div>
//         </div>

//         <div className='col1'>
//           {/* Add the cards for Nearly Done Medicine, Total Equipment, and Nearly Done Equipment */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



// import { useNotification } from './usecontextpage';

// import React, { useState, useEffect } from 'react';
// import Navbar from './nav';
// import "../styles/report.css";

// const Report = () => {
//   const [expiredMedicines, setExpiredMedicines] = useState([]);
//   const [totalExpiredMedicines, setTotalExpiredMedicines] = useState(0);
//   const [nearExpiryMedicines, setNearExpiryMedicines] = useState([]);
//   const [totalNearExpiryMedicines, setTotalNearExpiryMedicines] = useState(0);
//   const [lowStock, setLowStockMedicines] = useState([]);
//   const [totalLowStock, setTotalLowStock] = useState(0);
//   const [totalMedicines, setTotalMedicines] = useState(0);
//   const { updateNotifications } = useNotification();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch total medicines count
//         const totalMedicinesResponse = await fetch('http://localhost:5000/medicines/total');
//         const totalMedicinesData = await totalMedicinesResponse.json();
//         setTotalMedicines(totalMedicinesData.total);

//         // Fetch expired medicines
//         const expiredResponse = await fetch('http://localhost:5000/medicines/expired');
//         const expiredData = await expiredResponse.json();
//         setExpiredMedicines(expiredData.data);
//         setTotalExpiredMedicines(expiredData.total);

//         // Fetch near-expiry medicines
//         const nearExpiryResponse = await fetch('http://localhost:5000/medicines/near-expiry');
//         const nearExpiryData = await nearExpiryResponse.json();
//         setNearExpiryMedicines(nearExpiryData.data);
//         setTotalNearExpiryMedicines(nearExpiryData.total);

//         // Fetch low stock medicines
//         const lowStockResponse = await fetch('http://localhost:5000/medicines/low-stock');
//         const lowStockData = await lowStockResponse.json();
//         setLowStockMedicines(lowStockData.data);
//         setTotalLowStock(lowStockData.total);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const newNotificationCount = totalExpiredMedicines + totalNearExpiryMedicines + totalLowStock;

//   useEffect(() => {
//     updateNotifications(newNotificationCount);
//   }, [updateNotifications, newNotificationCount]);
//   return (
//     <>
   
   

//         {/* New section for detailed Low Stock Medicines report */}
//         <div className='lowStockReport'>
//           <h3>Low Stock Medicines Report</h3>
//           <ul>
//             {lowStock.map((medicine) => (
//               <li key={medicine.id}>
//                 <p>Name: {medicine.name}</p>
//                 <p>Category ID: {medicine.medicine_category_id}</p>
//                 <p>Unit Price: {medicine.unit_price}</p>
//                 <p>Stock: {medicine.stock}</p>
//                 {/* Add other details as needed */}
//               </li>
//             ))}
//           </ul>
//         </div>
     
     







//     </>
//   );
// };

// export default Report;

import React, { useState, useEffect } from 'react';
import Navbar from './nav';
import '../styles/report.css';

const Report = () => {
  const [lowStock, setLowStockMedicines] = useState([]);
  const [totalLowStock, setTotalLowStock] = useState(0);
  const [generationTime, setGenerationTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch low stock medicines
        const lowStockResponse = await fetch('http://localhost:5000/medicines/low-stock');
        const lowStockData = await lowStockResponse.json();
        setLowStockMedicines(lowStockData.data);
        setTotalLowStock(lowStockData.total);

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
      <div className="lowStockReport">
        <h3>Low Stock Medicines Report</h3>
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
    </>
  );
};

export default Report;






