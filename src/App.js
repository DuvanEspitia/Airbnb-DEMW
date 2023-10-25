import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/navbar';
import Home from './Components/home/home';
import Help from './Components/help/help';
import Form from './Components/RegistroAirbnb/form';
import Cuenta from './Components/cuenta/cuenta';
import Edita_espacio from './Components/edita_espacio/edita_espacio'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/help' exact element={<Help />} />
          <Route path='/form' exact element={<Form />} />
          <Route path='/cuenta' exact element={<Cuenta />} />
          <Route path='/edita_espacio' exact element={<Edita_espacio />} />
          <Route path='/form' exact element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
