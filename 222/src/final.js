import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Navbar from './pages/nav';
import Heading from './pages/heading';
import LoginForm from './pages/login';
import Sidenav from './components/Sidenav';
import MedicineForm from './pages/medicine';
import Home from './pages/Home';
import MedicalSupplies from './pages/medicinesupplies';
import Settings from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
function Final(){

return(
   <>
   
 <Heading/>
        <Navbar/>
        <Routes>
     
     <Route path="/App" element={<App />}/>
     </Routes>
    <App/>
</>


 
        
        );}

export default Final;