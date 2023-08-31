import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cuenta.css';
import "bootstrap/dist/css/bootstrap.css"
import avatar from '../img/avatar.png'


function Cuenta() {
    return (
        <div className="App">
            <div className='cuenta'>.

                <div className='cont_avatar'>
                    <img src='..\img\avatar.png' className='avatar' alt="" />
                    <img src={avatar} className='avatar1' alt="" />

                </div>
                <div className='los_inputs'>
                    <h1 className='titulo_mensajeria'>Mi cuenta</h1>
                    <br>
                    </br>
                    <div className='input_name'>
                        <label for="name">Nombre: </label>
                        <input type="text" className="name" name="name" required="" minLength="4" maxLength="20" size="25" width={20} />
                    </div>
                    <br>
                    </br>
                    <div className='input_name'>
                        <label for="name">Apellido: </label>
                        <input type="text" className="surname" name="name" required="" minLength="4" maxLength="20" size="25" width={20} />
                    </div>
                    <br>
                    </br>
                    <div className='input_name'>
                        <label for="name">Correo: </label>
                        <input type="text" className="mail" name="name" required="" minLength="4" maxLength="20" size="25" />
                    </div>
                    <br>
                    </br>
                    <div class="buton">
                        <button type="button" className="btn">Guardar</button>
                    </div>
                </div>




            </div>
        </div>

    );
}

export default Cuenta;