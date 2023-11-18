import React, { useRef } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './help.css';
import "bootstrap/dist/css/bootstrap.css"
import helpPic from '../img/help.png'

import emailjs from '@emailjs/browser';


function Help() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1omar7r', 'template_wioclkn', form.current, 'Hy49bnLpMx_wvlr7b')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <div className="App">

      <div className='ayuda_cont'>
        <div className='mensajeria'>
          <br>
          </br>
          <h1 className='titulo_mensajeria'>Mensaje a soporte</h1>
          <form ref={form} onSubmit={sendEmail} className='form-controller'>

            <div className='input_name'>
              <input type="text" className="name" name="from_name" required="" minLength="4" maxLength="20" placeholder='Nombre' size="25" />
            </div>
            <br>
            </br>

            <div className='input_name'>
              <input type="email" className="mail" name="email" required="" minLength="4" maxLength="20" size="25" placeholder="Correo" />
            </div>
            <br>
            </br>

            <div className='input_name'>
              <textarea type="text" className="issue" name="message" required="" minLength="4" maxLength="20" size="25" placeholder="Escribe que inconveniente tienes" />
            </div>
            <br>
            </br>

            <div className='buton'>
              <button type='submit' className='btn btn-success'>Enviar</button>
            </div>
          </form>
        </div>

        <img src='..\img\help.png' className='pic_ayuda' alt="" />
        <img src={helpPic} className='pic_ayuda1' alt="" />
      </div>

    </div>
  );
}

export default Help;
