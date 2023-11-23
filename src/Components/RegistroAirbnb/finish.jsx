import React from 'react';
import "./form.css"

function Finish({formData,SetFormdata}) {

  
    return (

        <div  >
            <p className='text'>Revisa los detalles</p>

            <div className='prevp'>
                    
                <div>
                {Object.keys(formData).filter((key) => key.startsWith('image_')).length > 0 && (
        <div className="image-preview">
          {Object.keys(formData)
            .filter((key) => key.startsWith('image_'))
            .map((key, index) => (
              <img
                key={index}
                src={`data:image/jpeg;base64,${formData[key].toString('base64')}`}
                alt={`Preview ${index + 1}`}
                className="preview-image"
              />
            ))}
            </div>
      )}

            </div>
              <div className='centrar'>
                    <b>Titulo:</b>
                   <p>{formData.titulo}</p>
                    <b>Ubicación:</b>
                    <p>{formData.ciudad},{formData.departamento}</p>
                    <b>Descripción:</b>
                    <p>{formData.descripcion}</p>
                    <b>Precio:</b>
                    <p>{formData.precio}</p>
                    <b>Comodidades:</b>
        <p>{formData.comodidades}</p>
           </div>
            </div>


        </div>
    );

}
export default Finish;