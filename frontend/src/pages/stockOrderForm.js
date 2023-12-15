// // MedicineForm.js
// import React, { useState } from 'react';
// import '../styles/medicine.css'

// const StockOrdersForm = () => {
//   const [StockOrders, setStockOrders] = useState({
//     status: '',
   
//     quantity: '',
    
//     // Add more fields as needed
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStockOrders({
//       ...StockOrders,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., sending data to the server or storing it in state.
//   };

//   return (
//     <div className="medicine-form">
//       <div className='medtitle'>
//       <h2>Stock Orders</h2></div>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Status:</label>
//           <input
//             type="text"
//             name="status"
//             value={StockOrders.status}
//             onChange={handleChange}
//             required
//           />
//         </div>
      
//         <div className="form-group">
//           <label>Quantity:</label>
//           <input
//           type='number'
//             name="quantity"
//             value={StockOrders.description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Medicine:</label>
//           <input
//           type='text'
//             name="medicine"
//             value={StockOrders.description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Medical Supply:</label>
//           <input
//           type='text'
//             name="medicalSupply"
//             value={StockOrders.description}
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

// export default StockOrdersForm;


import '../styles/medicine.css'
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function StockOrdersForm(){
    const navigate = useNavigate();
    const [status, setstatus]=useState("");
    const [medicine_id, setmedicine_id]=useState();
    const[medical_supply_id, setmedical_supply_id] = useState();
    const [medicine_quantity, setmedicine_quantity]=useState();
    const [medical_supply_quantity, setmedical_supply_quantity]=useState();
    // const [medicine_category_id , setmedsuppcat]=useState();
    


    
    const token = localStorage.getItem('access_token');
    console.log('Token:', token);

    const Changestatus=(e)=>{
             setstatus(e.target.value)
            
             console.log(status)

    }
    const Changemedicine_id=(e)=>{
        setmedicine_id(e.target.value)
       
        console.log(medicine_id)

}
    const Changemedical_supply_id=(e)=>{
        
       setmedical_supply_id(e.target.value)
        console.log(medical_supply_id)
    }

    const Changemedicine_quantity=(e)=>{
      setmedicine_quantity(e.target.value)
     
      console.log(medicine_quantity)}

      const Changemedical_supply_quantity=(e)=>{
        setmedical_supply_quantity(e.target.value)
       
        console.log(medical_supply_quantity)
    
      }
      const handleSuccess = () => {
        alert("This stock order has been successfully created!");
        // Redirect to the medicine categories table
        navigate('/stockOrderTable');
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
                status,
                medicine_id,
                medical_supply_id,
                medicine_quantity,
                medical_supply_quantity
            }
        ),
        }
    
        fetch('http://127.0.0.1:5000/stock_orders/create', details)
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
                    
                  
              <div className='medtitle'>              <h2>Create A stock Order</h2></div>      
              
                    {/* <div id="signupform"> */}
                        <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            <label for="name">Status: </label>
                         
                            <input type="text" 
                            required 
                            status="staus"
                            value={status}
                            onChange={Changestatus}/>
                            
                        </div>
                        <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            <label >Medicine: </label>
                           
                            <input type="number" required medicine="medicine"
                           
                            value={medicine_id}
                            onChange={Changemedicine_id}/>
                            
                        </div>
                   
                        <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            <label for="medical supply">medical supply : </label>
                            <input type="number" 
                            required 
                            name="medical supply"
                            value={medical_supply_id}
                            onChange={Changemedical_supply_id}/>
                            
                        </div>
                        {/* <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            {/* <label for="medicine quantity">medicine_quantity: </label>
                           
                           
                            <input type="text" 
                            required 
                            name="medicine_quantity"
                            value={medicine_quantity}
                            onChange={Changemedicine_quantity}/>
                            
                        </div>
                        <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            {/* <label for="medical_supply_quantity"> medical supply quantity: </label>
                     
                            <input type="text" required name="medical_supply_quantity"
                            value={medical_supply_quantity}
                            onChange={Changemedical_supply_quantity}/>
                            
                        </div>  */} 
{/*                     
                    </div> */}
                   
                
                    <button id="button">Submit</button>
                </form>
            </div>
   
   

    
    </>
    )
    }