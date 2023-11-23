import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { obtenerTodosLosEspacios } from './espacio/rutas';
import { useAuth } from '../Helpers/Estados/AuthContext';
import { eliminarEspacio } from './espacio/rutas';
function Espacioslist() {
    const { authState } = useAuth();
    const { isAuthenticated,user } = authState;
   
    const [espaciosComunes, setEspaciosComunes] = useState([]);

      const handleEliminar = async (espacioId) => {
        try {
          const response = await eliminarEspacio(espacioId);
   
            const obtenerYMostrarEspacios = async () => {
              try {
                const espaciosData = await obtenerTodosLosEspacios();
                setEspaciosComunes(espaciosData.filter(espacio => espacio.idusser === user.user._id));
              } catch (error) {
                console.error('Error al obtener y mostrar espacios:', error);
              }
            };
          
            obtenerYMostrarEspacios();
        
      
          window.alert(response.message);
          obtenerTodosLosEspacios() 
        } catch (error) {
          console.error('Error al eliminar espacio:', error);
        }
      };

    useEffect(() => {
      const obtenerYMostrarEspacios = async () => {
        try {
          const espaciosData = await obtenerTodosLosEspacios();
          setEspaciosComunes(espaciosData.filter(espacio => espacio.idusser === user.user._id));
        } catch (error) {
          console.error('Error al obtener y mostrar espacios:', error);
        }
      };
    
      obtenerYMostrarEspacios();
    }, [isAuthenticated, user]);


    
    
  return (
    <>
    <h4> Tus espacios publicados</h4>
    <br></br>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titlo</th>
          <th scope="col">Ubicación</th>
          <th scope="col">Precio</th>
          <th scope="col">Estado</th>
           <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
  {espaciosComunes &&
    espaciosComunes.map((espacio, index) => (
      <tr key={espacio._id}>
         <td>{index + 1}</td>
        <td>{espacio.titulo}</td>
        <td>{`${espacio.ciudad}, ${espacio.departamento}`}</td>
        <td>{espacio.precio}</td>
        <td>Estado</td>
        
       
        <td>
          <div className='centrart'>
          <Link to={`/editar/${espacio._id}`}>
            <button className="btn btn-warning">Editar</button>
          </Link>
            <button onClick={() => handleEliminar(espacio._id)} className="btn btn-danger">Eliminar</button>
          </div>
        </td>
      </tr>
    ))}
</tbody>
    </table>
    </>
  );
}

export default Espacioslist;
