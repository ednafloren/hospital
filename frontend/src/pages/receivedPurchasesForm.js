import '../styles/medicine.css'
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function ReceivedPurchasesForm(){
    const navigate = useNavigate();
    const [status, setstatus]=useState("");
    const [medical_supply_quantity, setmedical_supply_quantity]=useState();
    const[medicine_quantity, setmedicine_quantity] = useState();
    const [stock_id , setmedsuppcat]=useState();
    


    
    const token = localStorage.getItem('access_token');
    console.log('Token:', token);

    const Changestatus=(e)=>{
             setstatus(e.target.value)
            
             console.log(status)

    }
    const Changemedical_supply_quantity=(e)=>{
        setmedical_supply_quantity(e.target.value)
       
        console.log(medical_supply_quantity)

}
    const Changemedicine_quantity=(e)=>{
        
       setmedicine_quantity(e.target.value)
        console.log(medicine_quantity)
    }

    

      const Changestock_id=(e)=>{
        setmedsuppcat(e.target.value)
       
        console.log(stock_id)
    
      }
      const handleSuccess = () => {
        alert("This received purchase has been successfully created!");
  
        
        navigate('/medicinetable');
      };

    function InsertFOS(){
    const details = {
        method: "POST", 
        
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            'Authorization':`Bearer ${token}`
        },
        body: JSON.stringify(
            {
                status,
                medical_supply_quantity,
                medicine_quantity,
                
                stock_id
            }
        ),
        }
    
        fetch('http://127.0.0.1:5000/received_purchases/create', details)
        .then((response) => response.json())
        .then((data) => {
          
            
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
    


    <div className="medicine-form">
            
                
                <form onSubmit={(e) => handleSubmit(e)} >
                    
                  
              <div className='medtitle'>              <h2>Create received purchase</h2></div>      
              
                    {/* <div id="signupform"> */}
                        <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            <label for="name">Status: </label>
                         
                            <input type="text" 
                            required 
                            name="status"
                            value={status}
                            onChange={Changestatus}/>
                            
                        </div>
                        
                        
                        <div class="form-group">
                            {/* <!-- from fontawesome i will get the icons for the input labels --> */}
                            <label for="medicine_category_id">Stock ID: </label>
                           
                           
                            <input type="number" 
                            required 
                            name="stock_id"
                            value={stock_id}
                            onChange={Changestock_id}/>
                            
                        </div>


                   
                
                    <button id="button">Submit</button>
                </form>
            </div>



    
    </>
    )
    }
