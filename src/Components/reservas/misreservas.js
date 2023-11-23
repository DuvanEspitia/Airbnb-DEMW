import React,{useEffect,useState} from 'react';
import { useAuth } from '../../Helpers/Estados/AuthContext';
import { obtenerReservas,eliminarReserva  } from '../login/peticiones';
function Misreservas() {
    const { authState } = useAuth();
    const { isAuthenticated,user } = authState;
    const [espaciosComunes, setEspaciosComunes] = useState([]);
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
      const obtenerYMostrarEspacios = async () => {
        try {
            const reservas = await obtenerReservas();
            setEspaciosComunes(reservas.filter(espacio => espacio.idusuario === user.user._id));
            
            console.log(reservas);
            setReservas(reservas)
        } 
            catch (error) {
          console.error('Error al obtener y mostrar espacios:', error);
        }
      };
    
      obtenerYMostrarEspacios();
    }, [isAuthenticated, user]);


    const eliminar = async (reservaIdAEliminar) => {
        try {
            const resultado = await eliminarReserva(reservaIdAEliminar);
            window.alert('Reserva eliminada con éxito:', resultado);
          } catch (error) {
            console.error('Error al eliminar reserva:', error);
          }
    };
    
    
  return (
    <>
    <h4> Tus espacios publicados</h4>
    <br></br>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Fecha inicio</th>
          <th scope="col">Fecha fin</th>
          <th scope="col">precio</th>
          <th scope="col">Cancelar</th>
          
        </tr>
      </thead>
      <tbody>
  {espaciosComunes &&
    espaciosComunes.map((espacio, index) => (
      <tr key={espacio._id}>
         <td>{index + 1}</td>
        <td>{espacio.fechallegada}</td>
       
        {espacio.fechasalida && espacio.fechasalida.length > 10
    ? espacio.fechasalida.slice(0,10) 
    : espacio.fechasalida}
        <td>{espacio.precio}</td>
        
       
        <td>
          <div className='centrart'>
            <button onClick={()=>eliminar(espacio._id)} className="btn btn-danger">Eliminar</button>
          </div>
        </td>
      </tr>
    ))}
</tbody>
    </table>
    </>
  );
}

export default Misreservas;
