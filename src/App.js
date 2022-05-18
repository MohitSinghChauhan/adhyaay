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

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path='/' element={<Events0 />} />
        <Route exact path='/Events0' element={<Events0 />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/OurTeam' element={<Team />} />
        <Route path='/Sponsors' element={<Sponsors />} />
        <Route path='/Sub-Councils' element={<SubCouncils />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;