
import React, { useState } from 'react';
import '../styles/medicine.css'

import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function MedicalSupplies(){
    const navigate = useNavigate();
    const [name, setname]=useState("");
    


    
    const token = localStorage.getItem('access_token');
    console.log('Token:', token);

    const Changename=(e)=>{
             setname(e.target.value)
            
             console.log(name)}


      const handleSuccess = () => {
        alert("Successfully created!");
        // Redirect to the medicine categories table
        navigate('/medicineCategoryTable');
      };

    function InsertFOS(){
    const details = {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            'Authorization':`Bearer ${token}`
        },
        body: JSON.stringify(
            {
                name,
                
            }
        ),
        }
    
        fetch('http://127.0.0.1:5000/medicine_categories/create', details)
        .then((response) => response.json())
        .then((data) => {
            // alert(data.message);
            console.log("Success:", data);
            handleSuccess();
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
        
  
      const handleSubmit=(e)=>{ 
        e.preventDefault();
        
        InsertFOS();
        
      
      }


return (
    <div className="medicine-form">
      <div className='medtitle'>
      <h2>Medicine Categories</h2></div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={Changename}
            required
          />
        </div>
        
        
        <div className='submitdiv'>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
