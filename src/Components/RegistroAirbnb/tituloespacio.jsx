import React, { useState } from 'react';
import "./form.css";

function Tituloespacio({ formData, SetFormdata }) {


  return (
    <div>
         <p className='text'>¿Qué titulo le pones al espacio?</p>
         <input value={formData.titulo} onChange={(event)=> SetFormdata({...formData, titulo:event.target.value})} className='input-dir' placeholder='Titulo'/>
         <p className='text'>¿Cómo describes el espacio?</p>
         <textarea value={formData.descripcion} onChange={(event)=> SetFormdata({...formData, descripcion:event.target.value})} 
                    type='number' min="1" className='input-texA' 
                    placeholder='Es un lugar familiar...'/>
              
    </div>
  );
}

export default Tituloespacio;
