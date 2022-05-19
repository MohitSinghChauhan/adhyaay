import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import NavBar from "./Components/NavBar"
// import Footer from "./Components/Footer"

import Home from './Pages/home';
import Events0 from './Pages/events0';
import Gallery from './Pages/gallery';
import Team from './Pages/ourTeam';
import Sponsors from './Pages/sponsors';
import SubCouncils from './Pages/subCouncils';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/> 
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/ourTeam' element={<Team />} />
        <Route path='/sponsers' element={<Sponsors />} />
        <Route path='/subCouncils' element={<SubCouncils />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;