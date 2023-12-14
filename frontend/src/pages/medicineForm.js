import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MedicineForm() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [unit_price, setunitprice] = useState();
  const [image, setimage] = useState();
  const [stock, setstock] = useState("");
  const [medicine_category_id, setmedsuppcat] = useState();
  const [expiry_date, setexpiry_date] = useState("");

  const token = localStorage.getItem('access_token');
  console.log('Token:', token);

  const Changename = (e) => {
    setname(e.target.value);
    console.log(name);
  }

  const Changeunit_price = (e) => {
    setunitprice(e.target.value);
    console.log(unit_price);
  }

  const Changeimage = (e) => {
    setimage(e.target.value);
    console.log(image);
  }

  const Changestock = (e) => {
    setstock(e.target.value);
    console.log(stock);
  }

  const Changemedicine_category_id = (e) => {
    setmedsuppcat(e.target.value);
    console.log(medicine_category_id);
  }

  const Changeexpiry_date = (e) => {
    // Format the expiry date as "yyyy-MM-dd HH:mm:ss"
    const selectedDate = new Date(e.target.value);
    const formattedExpiryDate = selectedDate.toISOString().replace('T', ' ').slice(0, 16);

    setexpiry_date(formattedExpiryDate);
    console.log(formattedExpiryDate);
  }

  const handleSuccess = () => {
    alert("Successfully created!");
    // Redirect to the medicine categories table
    navigate('/medicinetable');
  };

  function InsertFOS() {
    console.log(JSON.stringify({ name, unit_price, image, stock, medicine_category_id, expiry_date }))
    const details = {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(
        {
          name,
          unit_price,
          image,
          stock,
          expiry_date,
          medicine_category_id
          
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
      console.error("Error:", error.message);
      // Additional error handling, e.g., check for HTML response
      if (error.message.includes('Unexpected token')) {
        console.error('Server response is not valid JSON. Check the server logs for details.');
      }
    });}
  

  const handleSubmit = (e) => {
    e.preventDefault();
    InsertFOS();
  }

  return (
    <>
      <div className="medicine-form">
        <form onSubmit={(e) => handleSubmit(e)}>

          <div className='medtitle'>
            <h2>Create A Medical Supply</h2>
          </div>

          <div className="form-group">
            <label for="name">Name: </label>
            <input type="text"
              required
              name="name"
              value={name}
              onChange={Changename} />
          </div>

          <div className="form-group">
            <label>Unit_price: </label>
            <input type="number" required unit_price="unit_price"
              value={unit_price}
              onChange={Changeunit_price} />
          </div>

          <div className="form-group">
            <label for="stock">Stock : </label>
            <input type="text"
              required
              name="stock"
              value={stock}
              onChange={Changestock} />
          </div>

          <div className="form-group">
            <label for="medicine_category_id">Category Id: </label>
            <input type="text"
              required
              name="medicine_category_id"
              value={medicine_category_id}
              onChange={Changemedicine_category_id} />
          </div>

          <div className="form-group">
            <label for="expiry_date">Expiry Date: </label>
            <input type="datetime-local"
              required
              name="expiry_date"
              value={expiry_date}
              onChange={Changeexpiry_date} />
          </div>

          <div className="form-group">
            <label for="profile"> Image: </label>
            <input type="file" required name="profile"
              value={image}
              onChange={Changeimage} />
          </div>

          <div className='submitdiv'>
            <button type="submit">Submit</button>
          </div>

        </form>
      </div>
    </>
  )
}
