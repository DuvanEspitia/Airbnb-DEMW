import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { obtenerTodosLosEspacios } from '../espacio/rutas'; // Actualiza con la ruta correcta
import { Espace } from "./espace";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faShip, faMountainCity, faHouseFlag, faHotel, faLeaf, faIgloo, faTractor,faSliders,faGem,faUmbrellaBeach} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Helpers/Estados/AuthContext';
function Home() {
  const {authState} = useAuth();
  const [espacios, setEspacios] = useState([]);
  const [filtroTipo, setFiltroTipo] = useState(null);
  const { isAuthenticated,user } = authState;
  console.log(isAuthenticated, user)
  useEffect(() => {

    const obtenerYMostrarEspacios = async () => {
      try {
        const espaciosData = await obtenerTodosLosEspacios();
        setEspacios(espaciosData);
          } catch (error) {
        console.error('Error al obtener y mostrar espacios:', error);
      }
    };

    obtenerYMostrarEspacios();
  }, [isAuthenticated, user]); 

  const handleFiltrar = (tipo) => {
    setFiltroTipo(tipo);
  };

  const espaciosFiltrados = filtroTipo
    ? espacios.filter((espacio) => espacio.tespacio === filtroTipo)
    : espacios;

  return (
    <div>
      <div className='c-filtro'>
      <button className='filtro' onClick={() => handleFiltrar('casa')}>
          <FontAwesomeIcon icon={faHome} /> Casa
        </button>
        <button className='filtro' onClick={() => handleFiltrar('apartamento')}>
          <FontAwesomeIcon icon={faBuilding} /> Apartamento
        </button>
        <button className='filtro' onClick={() => handleFiltrar('barco')}>
        <FontAwesomeIcon icon={faShip} />Barco</button>
        <button className='filtro' onClick={() => handleFiltrar('cabañas')}>
        <FontAwesomeIcon icon={faHouseFlag} />Cabañas</button>
        <button className='filtro' onClick={() => handleFiltrar('casa rural')}>
         <FontAwesomeIcon icon={faMountainCity} />Casa rural</button>
        <button className='filtro' onClick={() => handleFiltrar('domo')}>
        <FontAwesomeIcon icon={faIgloo} />Domo</button>
        <button className='filtro' onClick={() => handleFiltrar('hotel')}>
        <FontAwesomeIcon icon={faHotel} /> Hotel</button>
        <button className='filtro' onClick={() => handleFiltrar('casa ecologica')}>
        <FontAwesomeIcon icon={faLeaf} />Casa ecologica</button>
        <button className='filtro' onClick={() => handleFiltrar('granja')}>
        <FontAwesomeIcon icon={faTractor} />Granja</button>
        <button className='filtro' onClick={() => handleFiltrar('islas')}>
        <FontAwesomeIcon icon={faUmbrellaBeach} />Islas</button>
        <button className='filtro' onClick={() => handleFiltrar('mansion')}>
        <FontAwesomeIcon icon={faGem} />Mansion</button>
        <button className='filtroc' onClick={() => handleFiltrar(null)}>
        <FontAwesomeIcon icon={faSliders} /> Limpiar Filtros</button>
      </div>

      <div className='products'>
        {espaciosFiltrados.map((espacio) => (
          <Espace espacio={espacio} key={espacio._id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
