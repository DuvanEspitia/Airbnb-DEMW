import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home/home';
import Help from './Components/help/help';
import Navbar from './Components/navbar/navbar';
import Form from './Components/RegistroAirbnb/form';
import Reserva from './Components/reservas/reserva';
import Espacioslist from './Components/espacioslist';
import Editar from './Components/editar/editar';
import Editarperfil from './Components/editar/editarperfil';
import Misreservas from './Components/reservas/misreservas';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/help' element={<Help/>} />
          <Route path='/form' exact element={<Form />} />
          <Route path='/reserva/:id' exact element={<Reserva />} />
          <Route path='/espaciolist' exact element={<Espacioslist />} />
          <Route path='/editar/:id' element={<Editar/>} exact/>
          <Route path='/perfil' element={<Editarperfil/>} exact/>
          <Route path='/Reservas' element={<Misreservas/>} exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
