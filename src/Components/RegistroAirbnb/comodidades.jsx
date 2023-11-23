import React from 'react';
import "./form.css"

function Comodidades({ formData, SetFormdata }) {


    return (

        <div>
       
           
                    <div>
                        <p className='text'>¿Qué comodidades y elementos tiene?</p>
                    </div>
                    <textarea value={formData.comodidades} onChange={(event)=> SetFormdata({...formData, comodidades:event.target.value})} 
                    type='number' min="1" className='input-texA' 
                    placeholder='Gym, Cocina, tv, wifi .... etc'/>
            
              


        </div>
    );

}
export default Comodidades;