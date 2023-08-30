import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home/home';
import Help from './Components/help/help';
import Navbar from './Components/navbar/navbar';
import Form from './Components/RegistroAirbnb/form';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/help' exact element={<Help />} />
          <Route path='/form' exact element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
