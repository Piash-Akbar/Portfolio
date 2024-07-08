// import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import Home from './Components/Home/Home';
import Career from './Components/Career/Career';
// import Academic from './Components/Academic/Academic';

import Navbar from './Components/FixedComponents/Navbar/Navbar';
import Academic from './Components/Academic/Academic';
import Personal from './Components/Personal/Personal';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    // <HashRouter>
    //   <Navbar />
    //     <Routes>
    //       <Route exact path='/' element={<Home />}></Route>
    //       <Route path='/Career' element={<Career />}> </Route>
    //       <Route path='/Academic' element={<Academic />}></Route>
    //       <Route path='/Personal' element={<Personal />}></Route>
    //       <Route path='/Contact' element={<Contact />}></Route>
    //     </Routes>
    // </HashRouter>

    <>
      <Navbar />
      <switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/Career'>
          <Career />
        </Route>

        <Route exact path='/Academic'>
          <Academic />
        </Route>

        <Route exact path='/Personal'>
          <Personal />
        </Route>

        <Route exact path='/Contact'>
          <Contact />
        </Route>

      </switch>
    </>
    

)}

export default App;
