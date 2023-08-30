import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home/home';
import Help from './Components/help/help';
import Navbar from './Components/navbar/navbar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/help' exact element={<Help />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
