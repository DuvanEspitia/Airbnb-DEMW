import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './edita_espacio.css';
import "bootstrap/dist/css/bootstrap.css"
import casa from '../img/casa.png'

function Edita_espacio() {

    return (
        <div className="App">
            <div className='editar'>.

                <div className='cont_img_casa'>
                    <img src='..\img\casa.png' className='avatar' alt="" />
                    <img src={casa} className='casa1' alt="" />

                </div>
                <div className='los_inputs'>
                    <h1 className='titulo_edita'>Edita tu espacio</h1>
                    <br>
                    </br>
                    <div className='input_name'>
                        <input type="text" className="titulo" name="name" placeholder='Titulo' required="" minLength="4" maxLength="20" size="25" />
                    </div>
                    <br>
                    </br>
                    <div className='input_name'>
                        <input type="text" className="ubicacion" name="name" placeholder="Ubicación" required="" minLength="4" maxLength="20" size="25" />
                    </div>
                    <br>
                    </br>
                    <div className='input_name'>
                        <input type="text" className="precio" name="name" placeholder='Precio' required="" minLength="4" maxLength="20" size="25" />
                    </div>
                    <br>
                    </br>
                    <div className='input_name'>
                        <input type="text" className="descripcion" name="name" placeholder='Descripción' required="" minLength="4" maxLength="20" size="25" />
                    </div>
                    <br>
                    </br>
                    <div className='input_name'>
                        <input type="text" className="comodidades" name="name" placeholder="Comodidades y elementos" required="" minLength="4" maxLength="20" size="25" />
                    </div>
                    <br>
                    </br>
                    <div className="buton">
                        <button type="button" className="btn">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Edita_espacio;