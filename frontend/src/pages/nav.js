import React from "react";
import '../styles/nav.css';
import LogoutButton from "../components/logout";
function Navbar(){
return (




<div className=" navbar">
       <div className="hdash">
       <div className="homeicon">
      <img src="images/homeicon.png" alt="logo" className="hicon"/> 
      </div>
      <div className="dashboard">
      <h2 className="dash">Dashboard</h2>
      <h3 className="home">Home</h3>
  
      </div>
      </div>
      <div className="notlogout">
<div className="not">
<img src="images/noticon.png" alt="logo" className="noteicon"/>
</div> 
<div className="logout">
<LogoutButton />
</div>
</div>
</div>


);

}
export default Navbar