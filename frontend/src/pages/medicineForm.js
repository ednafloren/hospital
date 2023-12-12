import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function MedicineForm(){
    const navigate = useNavigate();
    const [name, setname]=useState("");
    const [unit_price, setunitprice]=useState(0);
    const[image, setimage] = useState();
    const [stock, setstock]=useState(0);
    const [medical_supply_category_id , setmedsuppcat]=useState(0);
    


    
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
        navigate('/MedicineFormTable');
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
    
        fetch('http://127.0.0.1:5000/medicines/create', details)
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
        <h2>Medicine Details</h2>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={medicine.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={medicine.category}
            onChange={handleChange}
            required
          />
        </div>
       
        <div className="form-group">
          <label>Unit Price:</label>
          <input
          type='number'
            name="unitprice"
            value={medicine.unitprice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
          type='number'
            name="stock"
            value={medicine.stock}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Expiry Date:</label>
          <input
          type='date'
            name="expirydate"
            value={medicine.expiry_date}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label>Image:</label>
          <input
          type='file'
            name="image"
            value={medicine.image}
            onChange={handleChange}
            required
          />
        </div>
       */}
        <div className='submitdiv'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
