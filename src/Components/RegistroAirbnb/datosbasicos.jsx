import React from 'react';
import "./form.css"

function Datosbasicos({ formData, SetFormdata }) {


    return (

        <div  >
       
            <div className='row'>
                <div className='col-md-4'>
                    <div>
                        <p className='text'>¿Cuántos huéspedes se permiten?</p>
                    </div>
                    <input value={formData.cantidadhuespedes} onChange={(event)=> SetFormdata({...formData, cantidadhuespedes:event.target.value})} type='number' min="1" className='input-num' placeholder='1'/>
            
                </div>
                <div className='col-md-4'>
                    <div>
                        <p className='text'>¿Cuántas camas hay?</p>
                    </div>
                    <input value={formData.camas} onChange={(event)=> SetFormdata({...formData, camas:event.target.value})} type='number' min="1" className='input-num' placeholder='1'/>
            
                </div>
                <div className='col-md-4'>
                <div>
                        <p className='text'>¿Cuántos baños hay ?</p>
                    </div>
                    <input value={formData.baños} onChange={(event)=> SetFormdata({...formData, baños:event.target.value})} type='number' min="1" className='input-num' placeholder='1'/>
            
                </div>
            </div>


        </div>
    );

}
export default Datosbasicos;