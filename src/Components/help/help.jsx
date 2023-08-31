import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './help.css';
import "bootstrap/dist/css/bootstrap.css"
import helpPic from '../img/help.png'

function Help() {

  return (
    <div className="App">

      <div className='ayuda_cont'>
        <div className='mensajeria'>
          <div class="buton">
            <button type="button" className="btn">Enviar</button>
          </div>
          <br>
          </br>
          <div className='input_name'>
            <label for="name">Escribe que inconveniente tienes: </label>
            <input type="text" className="issue" name="name" required="" minLength="4" maxLength="20" size="25" />
          </div>
          <br>
          </br>
          <div className='input_name'>
            <label for="name">Correo: </label>
            <input type="text" className="mail" name="name" required="" minLength="4" maxLength="20" size="25" />
          </div>
          <br>
          </br>
          <div className='input_name'>
            <label for="name">Nombre: </label>
            <input type="text" className="name" name="name" required="" minLength="4" maxLength="20" size="25" width={20} />
          </div>

          <h1 className='titulo_mensajeria'>Mensaje a soporte</h1>
        </div>

        <img src='..\img\help.png' className='pic_ayuda' alt="" width={30} />
        <img src={helpPic} className='pic_ayuda1' alt="" />


      </div>
    </div>

  );
}

export default Help;
