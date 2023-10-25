import React, { useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.css"
import logouser from '../img/image.png'
import logo from "../img/image-removebg-preview1.png"
import Help from '../help/help';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';

function Navbar() {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

  const [modalIngresar, setModalIngresar] = useState(false);

  const abrirModalIngresar = () => {
    setState(!state);
    setState2(false);
  }

  const abrirModalRegistro = () => {
    setModalIngresar(!modalIngresar);
    setState(!state);
    setState2(true);
  }

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
                <li><a className="dropdown-item" onClick={abrirModalIngresar} href="#">Iniciar sesión</a></li>
                <li><a className="dropdown-item" onClick={setState2} href="#">Crear cuenta</a></li>
                <li><a className="dropdown-item" href="help">Ayuda</a></li>
              </ul>

            </div>

          </li>

        </ul>

      </div>
      <Modal isOpen={state || state2} >
        <ModalHeader>
          {
            state ?
              <>
                <Label >Inicia sesión</Label>
              </> : null
          }
          {
            state2 ?
              <>
                <Label >Regístrate</Label>
              </> : null
          }

        </ModalHeader>

        <ModalBody>
          {
            state ?
              <>
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
                    <Button onClick={setModalIngresar} color='secondary'>Ingresar</Button>
                  </div>
                </FormGroup>
              </> : null
          }

          {
            state2 ?
              <>
                <FormGroup>
                  <h6 for="nombre">Nombre</h6>
                  <Input type='text' id='nombre'></Input>
                </FormGroup>
                <FormGroup>
                  <h6 for="apellido">Apellido</h6>
                  <Input type='text' id='apellido'></Input>
                </FormGroup>
                <FormGroup>
                  <h6 for="correo">Correo</h6>
                  <Input type='email' id='correo'></Input>
                </FormGroup>
                <FormGroup>
                  <h6 for="contraseña">Contraseña</h6>
                  <Input type='password' id='contraseña'></Input>
                </FormGroup>
                <FormGroup>
                  <h6 for="confir_contraseña">Confirmar contraseña</h6>
                  <Input type='password' id='confir_contraseña'></Input>
                </FormGroup>
                <FormGroup>
                  <Input type="checkbox" id="topping" name="topping" value="Paneer" /> Acepta términos y condiciones
                </FormGroup>
              </> : null
          }

        </ModalBody>

        <ModalFooter>
          {
            state ?
              <>
                <p> ¿No te has registrado?</p>
                <Button color='primary' onClick={abrirModalRegistro}>Regístrate</Button>
              </> : null
          }

          {
            state2 ?
              <>
                <div className='ingresar'>
                  <Button onClick={setModalIngresar} color='secondary'>Ingresar</Button>
                </div>
              </> : null
          }

        </ModalFooter>
      </Modal>

    </nav>

  );
}

export default Navbar;
