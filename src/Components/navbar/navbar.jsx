import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.css"
import logouser from '../img/image.png'
import logo from "../img/image-removebg-preview1.png"
function Navbar() {

  return (

    <nav className="navbar">
      <div>
        <ul className="navbar-nav  mx-auto justify-content-end">

          <li className='navbar-left'>
            <img src={logo} className="img-logo" alt="" />
            <h1 className='text-nav'>Explora, Elige, Reserva:
              Tu hogar lejos de casa te espera aquí
            </h1>

            <img src={logouser} className='img-logo-menu' alt="" />

          </li>

        </ul>


      </div>


    </nav>
  );
}

export default Navbar;
