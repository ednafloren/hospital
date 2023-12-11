import React from "react";
import '../styles/nav.css';
import Heading from "./heading.js";
import LogoutButton from "../components/logout";
function Navbar(){
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
<div className="not">
<img src="images/noticon.png" alt="logo" className="noteicon"/>
</div> 
<div className="logout">
<LogoutButton  />
</div>
</div>
</div>


);

}
export default Navbar