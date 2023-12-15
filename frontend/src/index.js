import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import './index.css';
import {NotificationProvider}  from './pages/usecontextpage';

import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Navbar from './pages/nav';
import Heading from './pages/heading';
import LoginForm from './pages/login';
import Sidenav from './components/Sidenav';
import MedicineTable from './pages/medicinetable';
import MedicalItemEdit from './pages/MedicalItemEdit';
import MedicineForm from './pages/medicineForm';
import Home from './pages/Home';
import MedicalSupplies from './pages/medicinesupplies';
import Search from './pages/Search';
import Report from './pages/Report';
import ReceivedPurchasesForm from './pages/receivedPurchasesForm';
import ReceivedPurchasesTable from './pages/receivedPurchasesTable';
import MedicineCategoriesForm from './pages/medicineCategoriesForm';
import MedicineCategoryTable from './pages/medicineCategoryTable';
import MedicalSuppliesTable from './pages/medicalSuppliesTable';
import MedicalSuppliesCategoriesForm from './pages/medicalSuppliesCategoriesForm';
import  MedicalSuppliesCategoriesTable from './pages/medicalSuppliesCategoriesTable'
import RegisterForm from './pages/register';
import StockOrdersTable from './pages/stockOrderTable';
import StockOrdersForm from './pages/stockOrderForm';
import DispensedstockTable from './pages/dispensedstocktable';
import EditForm from './pages/editform';
import MedicalSupplyEdit from './pages/medicalsupllyedit';
import MedicineCatEdit from './pages/medicalcategoryEdit';
import SupplyCatEdit from './pages/medicalsupplycategoryEdit';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>

    {/* <NotificationProvider> */}
   
    <Routes>
    <Route path='/'element={<LoginForm/>}/>
  <Route path='/register'element={<RegisterForm/>}/>

  <Route path='/home'element={[, <div className="App">
       <Sidenav/>,<main><Home/></main>,<Navbar/></div>]}/>
       <Route path='/edit/:itemId'element={[ <div className="App">
       <Sidenav/>,<main><MedicalItemEdit/>,<Navbar/></main></div>]}/>
       <Route path='/catedit/:itemId'element={[ <div className="App">
       <Sidenav/>,<main><MedicineCatEdit/>,<Navbar/></main></div>]}/>
 
       <Route path='/editsupply/:itemId'element={[ <div className="App">
       <Sidenav/>,<main><MedicalSupplyEdit/></main>,,<Navbar/></div>]}/>
       <Route path='/supplycatedit/:itemId'element={[ <div className="App">
       <Sidenav/>,<main><SupplyCatEdit/>,<Navbar/></main></div>]}/>
 

      <Route path='/medicineCategoryTable'element={[ <div className="App">
       <Sidenav/>,<main>< MedicineCategoryTable/>,<Navbar/></main></div>]}/>
 
       <Route path='/medicalSuppliesCategoriesForm'element={[ <div className="App">
       <Sidenav/>,<main>< MedicalSuppliesCategoriesForm/>,<Navbar/></main></div>]}/>
       <Route path='/medicalSuppliesCategoriesTable'element={[ <div className="App">
       <Sidenav/>,<main>< MedicalSuppliesCategoriesTable/></main>,<Navbar/>,</div>]}/>
 
 <Route path='/medicinetable'element={[ <div className="App"> <Sidenav/>
       ,<main><MedicineTable/></main>,<Navbar/></div>]}/>
       
       <Route path='/medicineForm'element={[ <div className="App"> <Sidenav/>
       ,<main><MedicineForm/></main>,<Navbar/></div>]}/>

       <Route path='/medicinecategoriesForm'element={[ <div className="App"> <Sidenav/>
       ,<main><MedicineCategoriesForm/></main>,<Navbar/>,</div>]}/>
  <Route path='/medicinesupplies'element={[ <div className="App">
       <Sidenav/>,
       <main><MedicalSupplies/></main>,<Navbar/>,,<Navbar/></div>]}/>
       
       <Route path='/medicalSuppliesTable'element={[ <div className="App"><Sidenav/>,   <main><MedicalSuppliesTable/></main>,  <Navbar/>,
      
   </div>]}/>

       <Route path='/receivedPurchasesForm'element={[ <div className="App">
       <Sidenav/>,<main><ReceivedPurchasesForm/></main>,<Navbar/>,</div>]}/>

       <Route path='/receivedPurchasesTable'element={[ <div className="App">
       <Sidenav/>,<main><ReceivedPurchasesTable/></main>,<Navbar/>,</div>]}/>

       <Route path='/stockOrderTable'element={[ <div className="App">
       <Sidenav/>,<main><StockOrdersTable/></main>,<Navbar/>,</div>]}/>

       <Route path='/stockOrderForm'element={[ <div className="App">
       <Sidenav/>,<main><StockOrdersForm/></main>,<Navbar/>,</div>]}/>

       <Route path='/dispensedstocktable'element={[ <div className="App">
       <Sidenav/>,<main><DispensedstockTable/></main>,<Navbar/>,</div>]}/>

      

 <Route path='/Report'element={[ <div className="App">
       <Sidenav/><main><Report/></main>,<Navbar/>,</div>]}/>

  <Route path='/Search'element={[ <div className="App">
       <Sidenav/>,<main><Search/></main>,<Navbar/>,</div>]}/>

   
 

   
   




      </Routes>
         

      {/* </NotificationProvider> */}


    </BrowserRouter>
  </React.StrictMode>
);