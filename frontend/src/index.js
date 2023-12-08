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
const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
    <BrowserRouter>


   
    <Routes>
    <Route path='/'element={<LoginForm/>}/>
  <Route path='/register'element={<RegisterForm/>}/>

  <Route path='/home'element={[,<Navbar/>, <div className="App">
       <Sidenav/><main><Home/></main></div>]}/>


      <Route path='/medicineCategoryTable'element={[<Navbar/>, <div className="App">
       <Sidenav/><main>< MedicineCategoryTable/></main></div>]}/>
 
       <Route path='/medicalSuppliesCategoriesForm'element={[<Navbar/>, <div className="App">
       <Sidenav/><main>< MedicalSuppliesCategoriesForm/></main></div>]}/>
       <Route path='/medicalSuppliesCategoriesTable'element={[<Navbar/>, <div className="App">
       <Sidenav/><main>< MedicalSuppliesCategoriesTable/></main></div>]}/>
 
 <Route path='/medicinetable'element={[<Navbar/>, <div className="App">
       <Sidenav/><main><MedicineTable/></main></div>]}/>
       
       <Route path='/medicineForm'element={[<Navbar/>, <div className="App">
       <Sidenav/><main><MedicineForm/></main></div>]}/>

       <Route path='/medicinecategoriesForm'element={[<Navbar/>, <div className="App">
       <Sidenav/><main><MedicineCategoriesForm/></main></div>]}/>
  <Route path='/medicinesupplies'element={[<Navbar/>, <div className="App">
       <Sidenav/>
       <main><MedicalSupplies/></main></div>]}/>
       
       <Route path='/medicalSuppliesTable'element={[<Navbar/>, <div className="App">
       <Sidenav/>
       <main><MedicalSuppliesTable/></main></div>]}/>

       <Route path='/receivedPurchaseForm'element={[<Navbar/>, <div className="App">
       <Sidenav/><main><ReceivedPurchasesForm/></main></div>]}/>

       <Route path='/receivedPurchasesTable'element={[<Navbar/>, <div className="App">
       <Sidenav/><main><ReceivedPurchasesTable/></main></div>]}/>

       <Route path='/stockOrderTable'element={[<Navbar/>, <div className="App">
       <Sidenav/><main><StockOrdersTable/></main></div>]}/>

       <Route path='/stockOrderForm'element={[<Navbar/>, <div className="App">
       <Sidenav/><main><StockOrdersForm/></main></div>]}/>

       <Route path='/dispensedstocktable'element={[<Navbar/>, <div className="App">
       <Sidenav/><main><DispensedstockTable/></main></div>]}/>



 <Route path='/Report'element={[<Navbar/>, <div className="App">
       <Sidenav/><main><Report/></main></div>]}/>

  <Route path='/Search'element={[<Navbar/>, <div className="App">
       <Sidenav/><main><Search/></main></div>]}/>

   
 

   
   




      </Routes>
         



    </BrowserRouter>
  </React.StrictMode>
);