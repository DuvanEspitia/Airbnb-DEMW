const API_URL = 'https://exp.abccomercializadoraindustrial.com';

export const crearEspacio = async (espacio) => {
  try {
    const response = await fetch(`${API_URL}/api/espacio/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(espacio),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear espacio:', error);
    throw error;
  }
};
export const obtenerTodosLosEspacios = async () => {
  try {
    const response = await fetch(`${API_URL}/api/espacio/getall`);
    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error('Error al obtener todos los espacios:', error);
    throw error;
  }
};

export const obtenerEspacioPorId = async (espacioId) => {
  try {
    const response = await fetch(`${API_URL}/api/espacio/get/${espacioId}`);
    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error(`Error al obtener el espacio con ID ${espacioId}:`, error);
    throw error;
  }
};

export const actualizarEspacio = async (espacioId, datosActualizados) => {
  try {
    const response = await fetch(`${API_URL}/api/espacio/update/${espacioId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosActualizados),
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error al actualizar espacio con ID ${espacioId}:`, error);
    throw error;
  }
};
export const eliminarEspacio = async (espacioId) => {
  try {
    const response = await fetch(`${API_URL}/api/espacio/delete/${espacioId}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al eliminar espacio:', error);
    throw error;
  }
};