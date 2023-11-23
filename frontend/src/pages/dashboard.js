import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./nav";
import MedicineForm from "./medicine";
import Layout from "./layout";
import Sidebar from "./sidebar";
export default function Dashboard() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Sidebar/>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navbar />} />
          <Route path="medicine" element={<MedicineForm />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

