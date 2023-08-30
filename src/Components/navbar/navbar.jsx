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
            <img src={logo} className="img-logo" alt=""></img>
           

            <div className='space-dr'>
 <h1 className='text-nav'>Explora, Elige, Reserva: Tu Hogar Lejos de Casa Te Espera Aquí</h1>


            
              <button className="btn-navs" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={logouser} className='img-logo-menu' alt="" />
              </button>
           
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
     <li><a class="dropdown-item" href="#">Acción</a></li>
     <li><a class="dropdown-item" href="#">Otra acción</a></li>
     <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
   </ul>
   
            </div>
            
       

          </li>

        </ul>


      </div>


    </nav>
   
  );
}

export default Navbar;
