import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Paint from './Components/Paint';
import Contact from './Components/Contact';
import './App.css'
import Services from './Components/Services';
import OilBase from './Components/OilBase';
import WaterBase from './Components/WaterBase';
import PowderBase from './Components/PowderBase';
import Accessories from './Components/Accessories';

function App() {
  return (
    <Router>
      <div>
        < NavBar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/paint" element={<Paint />} />
            <Route path="/a" element={<OilBase />} />
            <Route path="/b" element={<WaterBase />} />
            <Route path="/c" element={<PowderBase />} />
            <Route path="/d" element={<Accessories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        {/* <footer className=''>
     <p>&copy; Brijesh Paints.   Since 1989    Mfg By: Karnal Paints.</p>
   </footer>  */}
      </div>
    </Router>
  );
}

export default App;

