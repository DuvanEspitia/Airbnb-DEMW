import React, { useEffect, useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reserva.css';
import "bootstrap/dist/css/bootstrap.css";
import { obtenerEspacioPorId } from '../espacio/rutas';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Helpers/Estados/AuthContext';
import { obtenerUsuarioPorId, crearReserva  } from '../login/peticiones';
function Reserva() {
    const { authState,login,logout} = useAuth();
    const { isAuthenticated,user} = authState;
    const params = useParams();
    const [currentdate, setCurrentdate] = useState('')
    const [id,setid] = useState('')
    const [espacio, setEspacio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [diferenciaDias, setDiferenciaDias] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [espaciosComunes, setEspaciosComunes] = useState([]);
  const [usuario, setUsuario] = useState('');




  const obtenerYMostrarEspacios = async () => {
    try {
        const espaciosData = await obtenerEspacioPorId(params.id);
        setEspacio(espaciosData);

        // Luego de obtener el espacio, cargar el usuario
        cargarUsuario(espaciosData.idusser);
    } catch (error) {
        console.error('Error al obtener y mostrar espacios:', error);
    }
};

const cargarUsuario = async (idusser) => {
    try {
        // Cargar el usuario usando el idusser proporcionado
        const usuarioData = await obtenerUsuarioPorId(idusser);
        setUsuario(usuarioData);
    } catch (error) {
        console.error('Error al cargar el usuario:', error);
    }
};
useEffect(() => {
    getDate();
    obtenerYMostrarEspacios();
}, []);
     
    console.log(espacio)
    const getDate = () => {
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth() + 1; //January is 0!
        const yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        const todayFormatted = yyyy + '-' + mm + '-' + dd;
        setCurrentdate(todayFormatted);
        document.getElementById('date').value = todayFormatted;
    };

    window.onload = function () {
       
    };
    const calcularDiferenciaDias = () => {
        const fechaFinObj = new Date(document.getElementById('fechaSalida').value);
        const fechaInicioObj = new Date(currentdate);
        setFechaFin(fechaInicioObj)
        const diferenciaMs = fechaFinObj - fechaInicioObj;
        console.log(diferenciaMs)
        const diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
        const preciof = diferenciaDias * parseInt(espacio.precio) * 1000;
        setPrecio(preciof)
        setDiferenciaDias(diferenciaDias);
    };
    const resultado =async() => {
        
            const nuevaReserva = {
                idespacio: espacio._id,
                idusuario: user.user._id,
                fechallegada: currentdate,
                fechasalida: fechaFin,
                precio:precio
              };
              await crearReserva(nuevaReserva);
              window.alert("reserva hecha con exito")
    
        
   }
  
      
     
    console.log(fechaFin)
    return (
        <div >
            <div className='left-al'>
                <h3>{espacio.titulo}</h3 ></div>
            <div className='col-md-12'>
                <div className='left-al'><br />
                    {Object.keys(espacio).filter((key) => key.startsWith('image_')).length > 0 && (
                        <div className="image-preview">
                            {Object.keys(espacio)
                                .filter((key) => key.startsWith('image_'))
                                .map((key, index) => {
                                    const imageData = espacio[key];

                                    // Verifica si la imagen es un objeto con tipo 'Buffer' y datos válidos
                                    if (imageData && imageData.type === 'Buffer' && Array.isArray(imageData.data)) {
                                        const base64String = Buffer.from(imageData.data).toString('base64');

                                        return (
                                            <img
                                                key={index}
                                                src={`data:image/jpeg;base64,${base64String}`}
                                                alt={`Preview ${index + 1}`}
                                                className="preview-image"
                                            />
                                        );
                                    } else {
                                        console.error('Invalid image data:', imageData);
                                        return null;
                                    }
                                })}
                        </div>
                    )}  </div>

            </div>
            <div className='row'>
                <div className='col-md-4'>

                    <div className='infopro'><br />
                        <h5 >Ubicación:{espacio.departamento},{espacio.ciudad}</h5><br /><h5 className='ubi'>camas:{espacio.camas}</h5>,<br /> <h5 className='ubi'>Comodidades:{espacio.comodidades} </h5>
                    </div>
                </div>
                <div className='col-md-4'>

                    <div className='infopro'><br />
                        <h5 >Nombre dueño:{usuario && usuario.nombre} {usuario.apellido}</h5><br /><h5 className='ubi'>Correo:{usuario.correo}</h5>,<br /> 
                    </div>
                </div>

                <div className='col-md-4'>

                    <div className='product'>
                        <div className='center'>
                            <p>Precio noche:<span id="precioNoche">{espacio.precio}</span></p>
                            <b>Llegada</b>
                            <input type='date'min={currentdate} value={currentdate} id='date' onChange={(e) => setCurrentdate(e.target.value)}></input>
                            <b>Salida</b>
                            <input type='date' min={currentdate} id='fechaSalida' value={fechaFin} onChange={(e) => { setFechaFin(e.target.value); calcularDiferenciaDias() }}></input>
                        </div>
                        <h6>Total: {precio}</h6>
                        {user ? (null):('Login para reservar')}
                        <button className='btn btn-success' disabled={user ? false:true} onClick={resultado}>Reservar</button>
                        <br />
                    </div>

                </div>

            </div>


        </div>
    );
}

export default Reserva;