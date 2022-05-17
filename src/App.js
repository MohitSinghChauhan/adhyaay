import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Home from './Pages/home';
import Events from './Pages/events';
import Gallery from './Pages/gallery';
import Team from './Pages/ourTeam';
import Sponsors from './Pages/sponsors';
import SubCouncils from './Pages/subCouncils';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/OurTeam' element={<Team />} />
        <Route path='/Sponsors' element={<Sponsors />} />
        <Route path='/Sub-Councils' element={<SubCouncils />} />
      </Routes>
    </Router>
  );
}

export default App;