import React, { useState } from 'react';
import './form.css';
import InformacionBasica from "./informacionBasica"
import Tipoespacio from "./tipoespacio"
import Ubicacion from "./Ubicacion"
import Datosbasicos from './datosbasicos';
import Comodidades from './comodidades';
import Comoluce from './comoluce';
import Tituloespacio from './tituloespacio';
import Precio from './precio';
import Finish from './finish';
import { useAuth } from '../../Helpers/Estados/AuthContext';
import { crearEspacio } from '../espacio/rutas';
import { useNavigate } from 'react-router-dom';
function Form() {
    const navigate = useNavigate();
    const { authState} = useAuth();
    const { user} = authState;
    const [page, setPage] = useState(0);
    const[formData,SetFormdata]=useState({

        tespacio:"",
        tespaciocompartido:"",
        departamento:"",
        ciudad:"",
        direccion:"",
        barrio:"",
        baños:"1",
        camas:"1",
        cantidadhuespedes:"1",
        comodidades:"",
        titulo:"",
        descripcion:"",
        precio:"",
        idusser:user.user._id

    });
    const handleCrearEspacio = async () => {
        try {
          const response = await crearEspacio(formData);
          console.log(response);
          navigate("/")
        } catch (error) {
         console.log(error)
        }
      };
    const FormTitles = ["1-8", "2-8", "3-8", "4-8", "5-8", "6-8", "7-8", "8-8","Publicar"];

    const PageDisplay = () => {
        if (page === 0) {
            return <InformacionBasica formData ={formData} SetFormdata={SetFormdata}/>;
        } else if (page === 1) {
            return <Tipoespacio formData ={formData} SetFormdata={SetFormdata} />
        }
        else if (page === 2) {
            return <Ubicacion formData ={formData} SetFormdata={SetFormdata}/>
        }
        else if (page === 3) {
            return <Datosbasicos formData ={formData} SetFormdata={SetFormdata}/>
        }
        else if (page === 4) {
            return <Comodidades formData ={formData} SetFormdata={SetFormdata}/>
        }
        else if (page === 5) {
            return <Comoluce formData ={formData} SetFormdata={SetFormdata}/>
        }
        else if (page === 6) {
            return <Tituloespacio formData ={formData} SetFormdata={SetFormdata}/>
        }
        else if (page === 7) {
            return <Precio formData ={formData} SetFormdata={SetFormdata}/>
        }
        else if (page === 8) {
            return <Finish formData ={formData} SetFormdata={SetFormdata}/>
        }
    }
    console.log(formData)
    return (

        <div className='form' >

            <div className='progressbar'>
                <div
                    style={{
                        width:
                            page === 0 ? "10%" :
                                page === 1 ? "20%" :
                                    page === 2 ? "30%" :
                                        page === 3 ? "40%" :
                                            page === 4 ? "50%" :
                                                page === 5 ? "60%" :
                                                    page === 6 ? "70%" :
                                                        page === 7 ? "100%" :"Listo!"
                    }}
                ></div>
            </div>
            <div className='form-container'>
                <div className='header'>
                    <h6>{FormTitles[page]}</h6>
                </div>
                <div className='body'>{PageDisplay()}</div>

                <div className="footer">

                    <button
                        className="button"
                        disabled={page === 0}
                        onClick={() => { setPage((currPage) => currPage - 1); }}
                    >Atrás
                    </button>

                   <button className="button" id="siguiente"
                                    onClick={() => {
                                        if (page === FormTitles.length - 1) {
                                    handleCrearEspacio()
                                           
                                        }
                                        else { setPage((currPage) => currPage + 1); }
                                    }}>{page == FormTitles.length - 1 ? "Publicar" : "Siguiente"}</button>
                   

                </div>

            </div>

        </div>
    );

}
export default Form;