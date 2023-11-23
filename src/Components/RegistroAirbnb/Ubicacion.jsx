import React from 'react';
import "./form.css"

function Ubicacion({formData,SetFormdata}) {


    return (

        <div  >
            <p className='text'>Dirección</p>

            <div className='center'>
              <div className='centrar'>

             
            <input value={formData.departamento} onChange={(event)=> SetFormdata({...formData, departamento:event.target.value})} className='input-dir' placeholder='Departamento'/>
            <input value={formData.ciudad} onChange={(event)=> SetFormdata({...formData, ciudad:event.target.value})} className='input-dir' placeholder='Ciudad'/>
            <input value={formData.direccion} onChange={(event)=> SetFormdata({...formData, direccion:event.target.value})} className='input-dir' placeholder='Dirección'/>
            <input value={formData.barrio} onChange={(event)=> SetFormdata({...formData, barrio:event.target.value})} className='input-dir' placeholder='Barrio'/>
            </div>
            </div>


        </div>
    );

}
export default Ubicacion;