import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css"
function Tipoespacio() {


    return (

        <div  >
            <span>Tipo de espacio</span>
            <div className="c-content">
           
                    <button className='btn-espacio'>Todo un alojamiento entero para si mismos</button>


                    <button className='btn-espacio'>Habitación propia y demás espacios compartidos</button>


               
               
                    <button className='btn-espacio'>Una habitación compartida con otros huéspedes</button>


              

            </div>

        </div>
    );

}
export default Tipoespacio;