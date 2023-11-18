import React, { useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.css"
import logouser from '../img/image.png'
import logo from "../img/image-removebg-preview1.png"

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, label, Label } from 'reactstrap';

function Navbar() {
  const [state, setState] = useState(false);
  const abrirModal = () => { setState(!state); }

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
                <li><a class="dropdown-item" onClick={abrirModal} href="#">Acción</a></li>
                <li><a class="dropdown-item" href="#">Otra acción</a></li>
                <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
              </ul>

            </div>

          </li>

        </ul>

      </div>
      <Modal isOpen={state} >
        <ModalHeader>
          <Label >Inicia sesión</Label>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <h6 for="email">Correo</h6>
            <Input type='text' id='email'></Input>
          </FormGroup>
          <FormGroup>
            <h6 for="password">Contraseña</h6>
            <Input type='text' id='contraseña'>
            </Input>
          </FormGroup>
          <FormGroup>
            <div className='ingresar'>
              <Button onClick={abrirModal} color='secondary'>Ingresar</Button>
            </div>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <p> ¿No te has registrado?</p>
          <Button color='primary'>Regístrate</Button>
        </ModalFooter>
      </Modal>

    </nav>

  );
}

export default Navbar;
