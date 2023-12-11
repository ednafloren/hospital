import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import './index.css';
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
const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
    <BrowserRouter>


   
    <Routes>
    <Route path='/'element={<LoginForm/>}/>
  <Route path='/register'element={<RegisterForm/>}/>

  <Route path='/home'element={[, <div className="App">
       <Sidenav/>,<Navbar/>,<main><Home/></main></div>]}/>
       <Route path='/edit/:itemId'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main><MedicalItemEdit/></main></div>]}/>
 
       <Route path='/editsupply/:itemId'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main><MedicalSupplyEdit/></main></div>]}/>
 

      <Route path='/medicineCategoryTable'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main>< MedicineCategoryTable/></main></div>]}/>
 
       <Route path='/medicalSuppliesCategoriesForm'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main>< MedicalSuppliesCategoriesForm/></main></div>]}/>
       <Route path='/medicalSuppliesCategoriesTable'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main>< MedicalSuppliesCategoriesTable/></main></div>]}/>
 
 <Route path='/medicinetable'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main><MedicineTable/></main></div>]}/>
       
       <Route path='/medicineForm'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main><MedicineForm/></main></div>]}/>

       <Route path='/medicinecategoriesForm'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,,<main><MedicineCategoriesForm/></main></div>]}/>
  <Route path='/medicinesupplies'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,
       <main><MedicalSupplies/></main></div>]}/>
       
       <Route path='/medicalSuppliesTable'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,
       <main><MedicalSuppliesTable/></main></div>]}/>

       <Route path='/receivedPurchaseForm'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main><ReceivedPurchasesForm/></main></div>]}/>

       <Route path='/receivedPurchasesTable'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main><ReceivedPurchasesTable/></main></div>]}/>

       <Route path='/stockOrderTable'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main><StockOrdersTable/></main></div>]}/>

       <Route path='/stockOrderForm'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main><StockOrdersForm/></main></div>]}/>

       <Route path='/dispensedstocktable'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main><DispensedstockTable/></main></div>]}/>



 <Route path='/Report'element={[ <div className="App">
       <Sidenav/><main><Report/></main></div>]}/>

  <Route path='/Search'element={[ <div className="App">
       <Sidenav/>,<Navbar/>,<main><Search/></main></div>]}/>

   
 

   
   




      </Routes>
         



    </BrowserRouter>
  </React.StrictMode>
);