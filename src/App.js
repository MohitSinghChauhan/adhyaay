import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"

import Home from './Pages/home';
import Events from './Pages/events';
import Gallery from './Pages/gallery';
import Team from './Pages/ourTeam';
import Sponsers from './Pages/sponsers';
import SubCouncils from './Pages/subCouncils';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/OurTeam' element={<Team />} />
        <Route path='/Sponsers' element={<Sponsers />} />
        <Route path='/Sub-Councils' element={<SubCouncils />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;