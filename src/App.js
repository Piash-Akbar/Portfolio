// import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Career from './Components/Career/Career';
// import Academic from './Components/Academic/Academic';

import Navbar from './Components/FixedComponents/Navbar/Navbar';
import Academic from './Components/Academic/Academic';
import Personal from './Components/Personal/Personal';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Career' element={<Career />}> </Route>
          <Route path='/Academic' element={<Academic />}></Route>
          <Route path='/Personal' element={<Personal />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>


        </Routes>
    </BrowserRouter>
    

    // <div>
    //   <Navbar />
    //   <Home />
    // </div>

)}

export default App;
