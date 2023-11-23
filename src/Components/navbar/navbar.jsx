import React, { useState,useEffect } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { obtenerTodosLosEspacios } from '../espacio/rutas';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.css"
import logouser from '../img/image.png'
import logo from "../img/image-removebg-preview1.png"
import { Link } from 'react-router-dom';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { useAuth } from '../../Helpers/Estados/AuthContext';
import { registrarUsuario, iniciarSesion } from '../login/peticiones'; 

function Navbar() {
  const [state, setState] = useState(false);
  const [espacios, setEspacios] = useState([]);
  const [state2, setState2] = useState(false);
  const [messageL, setmessageL] = useState('');
  const [modalIngresar, setModalIngresar] = useState(false);
  const { authState,login,logout} = useAuth();
  const [datauser,setDatauser] = useState()
  const { isAuthenticated,user} = authState;
  const abrirModalIngresar = () => {
    setState(!state);
    setState2(false);
  }

  const close = () => {
    setState(false);
    setState2(false);
  }

  const abrirModalRegistro = () => {
    setModalIngresar(!modalIngresar);
    if (state) {
      setState(!state);
    }
    setState2(true);
  }
console.log(user)

  const handleIngresar = () => {

    const credencialesInicioSesion = {
      correo: document.getElementById('email').value,
      clave: document.getElementById('contraseña').value,
    };

    iniciarSesion(credencialesInicioSesion)
    .then(response => {
      console.log(response.message);
      if (response.message === 'Inicio de sesión exitoso') {
        login(response, espacios);
        setDatauser(response);

        close()

        
      } else {
        
        console.error('Login unsuccessful:', response.message);
        setmessageL('Campos no coinciden');
      
      }
    })
    .catch(error => console.error('Error al iniciar sesión:', error));
  }
  useEffect(() => {

    const obtenerYMostrarEspacios = async () => {
      try {
        const espaciosData = await obtenerTodosLosEspacios();
        setEspacios(espaciosData);
          } catch (error) {
        console.error('Error al obtener y mostrar espacios:', error);
      }
    };

    obtenerYMostrarEspacios();
  }, [isAuthenticated, user]); 

  const handleLogout = () => {
   
    logout();
    

  };
  const handleRegistrar = () => {

    const usuarioNuevo = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      correo: document.getElementById('correo').value,
      clave: document.getElementById('contraseña').value,
    };

    registrarUsuario(usuarioNuevo)
      .then(response => {
        console.log(response.message);
        window.alert("registrado con exito")
        close()
      
      })
      .catch(error => console.error('Error al registrar usuario:', error));
  }


  return (
    <nav className="navbar">
      <div>
        <ul className="navbar-nav  mx-auto justify-content-end">
          <li className='navbar-left'>
            <img src={logo} className="img-logo" alt=""></img>
            <div className='space-dr'>
              <h3 className='text-nav'>Explora, Elige Y Reserva</h3>
              <div>
              {isAuthenticated  ? 
              (<h5  className='text-nav'>Hola, {datauser.user.nombre}</h5>):(null)}</div>
              <button className="btn-navs" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={logouser} className='img-logo-menu' alt="" />
              </button>
              
              {isAuthenticated  ? (
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

         
                    <li><Link className="dropdown-item" to="/perfil">Editar perfil</Link></li>
                    <li><Link className="dropdown-item" to="/form">Publica un espacio</Link></li>
                    <li><Link className="dropdown-item" to="/espaciolist">Mis espacios</Link></li>
                    <li><Link className="dropdown-item" to="/Reservas">Mis Reservas</Link></li>
                    <div class="dropdown-divider"></div>
                    <li><Link className="dropdown-item" to="/help">Ayuda</Link></li>
                    <li><a className="dropdown-item" onClick={handleLogout}>Cerrar sesión</a></li>
                  </ul>
              
              ) : (
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                <li><a className="dropdown-item" onClick={abrirModalIngresar} href="#">Iniciar sesión</a></li>
                <li><a className="dropdown-item" onClick={setState2} href="#">Crear cuenta</a></li>
                <div class="dropdown-divider"></div>
                <li><Link className="dropdown-item" to="/help">Ayuda</Link></li>
              </ul>
               
              )}
       
            </div>
          </li>
        </ul>
      </div>
      <Modal isOpen={state || state2}>
        <ModalHeader>
          {state ? <Label>Inicia sesión</Label> : null}
          {state2 ? <Label>Regístrate</Label> : null}
        </ModalHeader>
        <ModalBody>
          {state ?
            <>
              <FormGroup>
                <h6 for="email">Correo</h6>
                <Input type='text' id='email' />
              </FormGroup>
              <FormGroup>
                <h6 for="password">Contraseña</h6>
                <Input type='password' id='contraseña' />
              </FormGroup>
              {messageL}
              <FormGroup>
                <div className='centrar'>
                  <Button color='secondary' onClick={handleIngresar}>Ingresar</Button>
                </div>
                <br />
                <ModalFooter>
                  <p> ¿No te has registrado?</p>
                  <Button onClick={abrirModalRegistro} color='primary'>Regístrate</Button>
                  <Button color='secondary' onClick={close}>Cerrar</Button>
                </ModalFooter>
              </FormGroup>
            </> : null
          }
          {state2 ?
            <>
              <FormGroup>
                <h6 for="nombre">Nombre</h6>
                <Input type='text' id='nombre' />
              </FormGroup>
              <FormGroup>
                <h6 for="apellido">Apellido</h6>
                <Input type='text' id='apellido' />
              </FormGroup>
              <FormGroup>
                <h6 for="correo">Correo</h6>
                <Input type='email' id='correo' />
              </FormGroup>
              <FormGroup>
                <h6 for="contraseña">Contraseña</h6>
                <Input type='password' id='contraseña' />
              </FormGroup>
              <FormGroup>
                <h6 for="confir_contraseña">Confirmar contraseña</h6>
                <Input type='password' id='confir_contraseña' />
              </FormGroup>
              <FormGroup>
                <Input type="checkbox" id="topping" name="topping" value="Paneer" /> Acepta términos y condiciones
              </FormGroup>
              <ModalFooter>
                <Button color='secondary' onClick={close}>Cerrar</Button>
                <Button color='primary' onClick={handleRegistrar}>Aceptar</Button>
              </ModalFooter>
            </> : null
          }
        </ModalBody>
      </Modal>
    </nav>
  );
}

export default Navbar;
