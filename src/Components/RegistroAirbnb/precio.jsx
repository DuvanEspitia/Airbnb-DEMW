import React, { useState } from 'react';
import "./form.css";

function Precio({ formData, SetFormdata }) {

    const handleCostChange = (event) => {
        // Eliminar cualquier carácter que no sea un número o punto
        const cleanedValue = event.target.value.replace(/[^\d.]/g, '');
    
        // Formatear el número con puntos cada tres cifras
        const precio = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
        SetFormdata(({...formData, precio}));
      };
  return (
    <div className='centrar'>
         <p className='text'>Establece un precio</p>
         <p >Precio sin incluir impuestos</p>
    <div className="input-group">
        <span className="input-group-addon">$</span>
        <input
          type="text"
          id="cost"
          value={formData.precio}
          onChange={handleCostChange} 
          placeholder="0.00"
          className="form-control"
        />
      </div>
    </div>
  );
}

export default Precio;
