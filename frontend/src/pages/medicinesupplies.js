
import '../styles/medicine.css'
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

