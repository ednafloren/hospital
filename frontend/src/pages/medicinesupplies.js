// MedicineForm.js
// import React, { useState } from 'react';
import '../styles/medicine.css'

// const MedicalSupplies = () => {
//   const [medicalSupplies, setMedicalSupplies] = useState({
//     name: '',
//     category: '',
//     quantity: '',
//     unitprice:'',
//     totalprice:'',
//     // Add more fields as needed
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setMedicalSupplies({
//       ...medicalSupplies,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Login Request Payload:', JSON.stringify(medicalSupplies));

//   try {
//     const response = fetch('http://127.0.0.1:5000/medical_supplies/create/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
      
//       },
//       body: JSON.stringify(medicalSupplies),
//     });

//     if (response.ok) {
//       console.log('Medicine submitted successfully');
//       // You can add additional logic here if needed
//     } else {
//       console.error('Error submitting medicine:', response.statusText);
//     }
//   } catch (error) {
//     console.error('Error submitting medicine:', error.message);
//   }
// };

// return (
//     <div className="medicine-form">
//       <div className='medname'>
//       <h2>Medical Supplies</h2></div>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={medicalSupplies.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Category:</label>
//           <input
//             type="text"
//             name="category"
//             value={medicalSupplies.category}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Quantity:</label>
//           <input
//           type='number'
//             name="quantity"
//             value={medicalSupplies.unit_price}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Unit Price:</label>
//           <input
//           type='number'
//             name="unitprice"
//             value={medicalSupplies.unitprice}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Total Price:</label>
//           <input
//           type='number'
//             name="totalprice"
//             value={medicalSupplies.totalprice}
//             onChange={handleChange}
//             required
//           />
//         </div>
   
      
//         {/* Add more form fields for medicine details */}
//         <div className='submitdiv'>
//         <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default MedicalSupplies;

import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function MedicalSupplies(){
    const navigate = useNavigate();
    const [name, setname]=useState("");
    const [unit_price, setunitprice]=useState();
    const[image, setimage] = useState();
    const [stock, setstock]=useState();
    const [medical_supply_category_id , setmedsuppcat]=useState();
    


    
    const token = localStorage.getItem('access_token');
    console.log('Token:', token);

    const Changename=(e)=>{
             setname(e.target.value)
            
             console.log(name)

    }
    const Changeunit_price=(e)=>{
        setunitprice(e.target.value)
       
        console.log(unit_price)

}
    const Changeimage=(e)=>{
        
       setimage(e.target.value)
        console.log(image )
    }

    const Changestock=(e)=>{
      setstock(e.target.value)
     
      console.log(stock)}

      const Changemedical_supply_category_id=(e)=>{
        setmedsuppcat(e.target.value)
       
        console.log(medical_supply_category_id)
    
      }
      const handleSuccess = () => {
        alert("Successfully created!");
        // Redirect to the medicine categories table
        navigate('/medicalSuppliesTable');
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
                unit_price,
                image,
                stock,
                medical_supply_category_id
            }
        ),
        }
    
        fetch('http://127.0.0.1:5000/medical_supplies/create', details)
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
    return(

    <>
    
    {/* <div id="mysection"> */}
    <div className="medicine-form">
            
                
                <form onSubmit={(e) => handleSubmit(e)} >
                    
                  
              <div className='medtitle'>              <h2>Create A Medical Supply</h2></div>      
              
                    {/* <div id="signupform"> */}
                        <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            <label for="name">Name: </label>
                         
                            <input type="text" 
                            required 
                            name="name"
                            value={name}
                            onChange={Changename}/>
                            
                        </div>
                        <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            <label >Unit_price: </label>
                           
                            <input type="number" required unit_price="unit_price"
                           
                            value={unit_price}
                            onChange={Changeunit_price}/>
                            
                        </div>
                   
                        <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            <label for="stock">Stock : </label>
                            <input type="number" 
                            required 
                            name="stock"
                            value={stock}
                            onChange={Changestock}/>
                            
                        </div>
                        <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            <label for="medical_supply_category_id">Category Id: </label>
                           
                           
                            <input type="text" 
                            required 
                            name="medical_supply_category_id"
                            value={medical_supply_category_id}
                            onChange={Changemedical_supply_category_id}/>
                            
                        </div>
                        <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            <label for="profile"> Image: </label>
                     
                            <input type="file" required name="profile"
                            value={image}
                            onChange={Changeimage}/>
                            
                        </div>
{/*                     
                    </div> */}
                   
                
                    <button id="button">Submit</button>
                </form>
            </div>
        {/* </div> */}
    {/* </div> */}

    
    </>
    )
    }
