import React, {useState} from 'react';


function InformacionBasica({formData,SetFormdata}) {
        const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

        const Tipodeespacio = (tespacio)=>{
               
                SetFormdata({...formData, tespacio})
                setOpcionSeleccionada(tespacio);
        }
        const isOpcionSeleccionada = (tespacio) => {
                return tespacio === opcionSeleccionada || tespacio === formData.tespacio ? 'btn-espacio-selected' : 'btn-espacio';
              };

    return (

        <div  >

                <p className='text'>¿Que tipo de espacio estas rentanto?</p>

                <div className='row'>
                    <div className='column'>
                            <button onClick={()=>Tipodeespacio("apartamento")} className={isOpcionSeleccionada("apartamento")}>Apartamento</button>
                            <button onClick={()=>Tipodeespacio("casa ecologica")}className={isOpcionSeleccionada("casa ecologica")}>Casa ecolólogica</button>
                            <button  onClick={()=>Tipodeespacio("granja")} className={isOpcionSeleccionada("granja")}>Granja</button>
                            <button  onClick={()=>Tipodeespacio("cabaña")} className={isOpcionSeleccionada("cabaña")}>Cabañas</button>

                    </div>
                    <div className='column'>
                            <button onClick={()=>Tipodeespacio("barco")}  className={isOpcionSeleccionada("barco")}>Barco</button>
                            <button onClick={()=>Tipodeespacio("casa rodante")} className={isOpcionSeleccionada("casa rodante")}>Casa rodante</button>
                            <button onClick={()=>Tipodeespacio("hotel")} className={isOpcionSeleccionada("hotel")}>Hotel</button>
                            <button  onClick={()=>Tipodeespacio("domo")} className={isOpcionSeleccionada("domo")}>Domo</button>

                    </div>
                    <div className='column'>
                            <button onClick={()=>Tipodeespacio("casa")} className={isOpcionSeleccionada("casa")}>Casa</button>
                            <button onClick={()=>Tipodeespacio("casa rural")} className={isOpcionSeleccionada("casa rural")}>Casa rural</button>
                            <button onClick={()=>Tipodeespacio("islas")} className={isOpcionSeleccionada("islas")}>Islas</button>
                            <button  onClick={()=>Tipodeespacio("mansion")} className={isOpcionSeleccionada("mansion")}>Mansiones</button>

                    </div>

                </div>
        </div>
    );

}
export default InformacionBasica;