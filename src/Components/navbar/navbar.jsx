import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.css"
import logouser from '../img/image.png'

function Navbar() {

  return (

    <nav className="navbar">
      <div>
        <ul class="navbar-nav  mx-auto justify-content-end">

          <li className='navbar-left'>
            <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" className="img-logo" alt="" />
            <h1>Air e&e</h1>

            <img src={logouser} className='img-logo' alt="" />

          </li>

        </ul>


      </div>


    </nav>
  );
}

export default Navbar;
