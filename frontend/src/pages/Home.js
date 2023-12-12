// import Navbar from './nav'
// import "../styles/home.css"
// export default function Home() {
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
//  <p className=' number'>4</p> 
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

import React, { useState, useEffect } from 'react';
import Navbar from './nav';
import "../styles/home.css";

export default function Home() {
  const [nearExpiryMedicines, setNearExpiryMedicines] = useState([]);

  useEffect(() => {
    // Fetch near expiry medicines when the component mounts
    fetchNearExpiryMedicines();
  }, []);

  // Function to fetch data from the server and handle the response
  const fetchNearExpiryMedicines = () => {
    // Assuming you have an endpoint on the frontend to fetch data from the backend
    fetch('/medicines/near-expiry')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setNearExpiryMedicines(data.data);
        } else {
          console.error("Failed to fetch near expiry medicines:", data.message);
        }
      })
      .catch(error => console.error("Error fetching near expiry medicines:", error));
  };

  // Function to display an alert for each medicine nearing expiry
  const displayExpiryAlert = (medicine) => {
    alert(`Medicine ${medicine.name} is nearing expiry on ${medicine.expiry_date}`);
  };

  return (
    <>
      <div className='new'>
        <div className='col1'>
          <div className='card1'>
          <div className='total'>
       <div className='tmed'><h3>Total Medicine </h3></div>
        <div> <img src='images/noticon.png' className='icorep'/></div>
        </div>
 <div className='report'><p className='rep'>Quantity </p>   
  <p className=' number'>4</p> 
  </div>
          </div>
          <div className='card2'>
            <div className='total'>
              <div className='tmed'>
                <h3>Nearly expiring Medicine </h3>
              </div>
              <div>
                {/* Check if there are near expiry medicines to toggle the icon */}
                {nearExpiryMedicines.length > 0 ? (
                  <img src='images/near-expiry-icon.png' className='icorep' onClick={() => displayExpiryAlert(nearExpiryMedicines[0])} />
                ) : (
                  <img src='images/noticon.png' className='icorep' />
                )}
              </div>
            </div>
            <div className='report'>
              <p className='rep'>Quantity </p>
              <p className='number'>{nearExpiryMedicines.length}</p>
            </div>
          </div>
        <div className='card3'>
         <div className='total'>
        <div className='tmed'><h3>Expired Medicine </h3></div>
        <div> <img src='images/noticon.png' className='icorep'/>
        </div>
        </div>
 <div className='report'><p className='rep'>Quantity </p>   
  <p className=' number'>4</p> 
  </div>
 </div>

        </div>
        <div className='col1'>
        <div className='card4'>
         <div className='total'>
        <div className='tmed'><h3>Nearly Done Medicine </h3></div>
        <div> <img src='images/noticon.png' className='icorep'/></div>
        </div>
 <div className='report'><p className='rep'>Quantity </p>   
  <p className=' number'>4</p> 
  </div>
 </div>
 <div className='card5'>
         <div className='total'>
        <div className='tmed'><h3>Total Equipment </h3></div>
        <div> <img src='images/noticon.png' className='icorep'/></div>
        </div>
 <div className='report'><p className='rep'>Quantity </p>  
  <p className=' number'>4</p> 
  </div>
 </div>
    
 <div className='card6'>
         <div className='total'>
        <div className='tmed'><h3>Nearly Done Equipment  </h3></div>
        <div> <img src='images/noticon.png' className='icorep'/></div>
        </div>
 <div className='report'><p className='rep'>Quantity </p>   
  <p className=' number'>4</p> 
  </div>
 </div>
        </div>
      </div>
    </>
  );
}