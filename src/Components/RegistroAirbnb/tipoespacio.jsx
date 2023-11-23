import React , {useState} from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css"
function Tipoespacio({formData,SetFormdata}) {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
 
    const Tipodeespacio = (tespaciocompartido)=>{
       console.log(tespaciocompartido)
        SetFormdata({...formData, tespaciocompartido})
        setOpcionSeleccionada(tespaciocompartido)
}
const isOpcionSeleccionada = (tespaciocompartido) => {
    return tespaciocompartido === opcionSeleccionada || tespaciocompartido === formData.tespaciocompartido ? 'btn-espacio-selected' : 'btn-espacio';
  };
    return (

        <div  >
             <p className='text'>¿Tipo de espacio?</p>
            <div className="c-content">
           
                    <button onClick={()=>Tipodeespacio("alojamiento entero")} className={isOpcionSeleccionada("alojamiento entero")}>Todo un alojamiento entero para si mismos</button>

                    
                    <button onClick={()=>Tipodeespacio("habitacion propia espacio compartido")} className={isOpcionSeleccionada("habitacion propia espacio compartido")}>Habitación propia y demás espacios compartidos</button>
               
                    <button onClick={()=>Tipodeespacio("habitacion compartidad con otros")} className={isOpcionSeleccionada("habitacion compartidad con otros")}>Una habitación compartida con otros huéspedes</button>
                    

              

            </div>

        </div>
    );

}
export default Tipoespacio;