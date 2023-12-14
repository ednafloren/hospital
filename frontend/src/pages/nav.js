import React from "react";
import '../styles/nav.css';
import Heading from "./heading.js";
import LogoutButton from "../components/logout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function Navbar() {
  const navigate = useNavigate();
  const [notificationCounts, setNotificationCounts] = useState({
    expiredMedicineCount: 0,
    lowStockCount: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleNotificationClick = () => {
    // Handle notification click logic here
    navigate('/Report');
    // Optionally, you can reset the counts after handling the click
    setNotificationCounts({
      expiredMedicineCount: 0,
      lowStockCount: 2,
    });
  };

  useEffect(() => {
    const fetchNotificationCounts = async () => {
      try {
        const response = await fetch('http://localhost:5000/medicines/notification-counts');
        const data = await response.json();
        setNotificationCounts(data);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching notification counts:', error);
        setIsLoading(false); // Handle loading state on error
      }
    };

    fetchNotificationCounts();
  }, []); //  // Run once on component mount
  

return (




<div className=" navbar">
      {/* <div className="head">
      <div className="head1">
       <img src="images/bluegrey.png" alt="logo" className="logo"/> 
       </div>
       <div className="head2">
       <h2 className="top">Xiron pharmacy  </h2>
       <h3>Inventory Management System</h3>
       </div> 
</div> */}
     <div className="hdash1">
   
   <div className="homicon">
  <img src="images/dd.png"  alt="logo" className="hicon"/> 
  </div>
  <div className="dashboard1">
  <h2 className="dash" >
  <b>Xiron pharmacy</b> 
</h2>
  <h3 className="home">Inventory Management System</h3> 

  </div>
  </div> 
       <div className="hdash">
   
       <div className="homcon">
      <img src="images/homeicon.png" alt="logo" className="hicon"/> 
      </div>
      <div className="dashboard2">
      <h2 className="dash">Dashboard</h2>
      <h3 className="home">Home</h3>
  
      </div>
      </div>
      <div className="notlogout">
<div className="nlogout" onClick={handleNotificationClick}>
        <div className="not">
        {/* <div className='notification-bar'>
        <p className='notification-text'>Total Notifications: {totalNotifications}</p>
      </div> */}
          <img src="images/noticon.png" alt="logo" className="noteicon" />
          {(notificationCounts.expiredMedicineCount > 0 || notificationCounts.lowStockCount > 0) && (
            <span className="notification-badge">
              {notificationCounts.expiredMedicineCount + notificationCounts.lowStockCount}
            </span>
          )}
        </div>
        </div>
<div className="logout">
<LogoutButton  />
</div>
</div>
</div>


);

}
export default Navbar