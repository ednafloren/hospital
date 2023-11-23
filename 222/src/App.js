import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Settings from './pages/Search';
import Statistics from './pages/Report';
import { Route,Routes } from 'react-router';
import Sidenav from './components/Sidenav';
import Navbar from './pages/nav';
import MedicineForm from './pages/medicinetable';
import MedicalSupplies from './pages/medicinesupplies'
import LoginForm from './pages/login';
import Heading from './pages/heading';

    function App() {
      return (
      
        <div className="App">
       
           
      <Sidenav/>
      <main>

        <Routes>
     
        <Route path="/" element={<Home />}/>
 
          <Route path="/medicine" element={<MedicineForm />} />
          <Route path="/medicinesupplies" element={<MedicalSupplies />}/>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
   
        </div>
      );
    }
     
    export default App;


