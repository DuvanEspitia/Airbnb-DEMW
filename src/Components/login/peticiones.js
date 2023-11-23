const API_URL = 'https://exp.abccomercializadoraindustrial.com';

export const registrarUsuario = async (usuario) => {
  try {
    const response = await fetch(`${API_URL}/api/user/registro`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });

    const data = await response.json();
    console.log(data.message);
    return data;
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    throw error;
  }
};

export const iniciarSesion = async (credenciales) => {
  try {
    const response = await fetch(`${API_URL}/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credenciales),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};
export const obtenerUsuarioPorId = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/user/userinfo/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error);
    throw error;
  }
};
export const actualizarUsuario = async (userId, nuevosDatos) => {
  try {
    const response = await fetch(`${API_URL}/api/user/update/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevosDatos),
    });

    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    throw error;
  }
};
export const obtenerReservas = async () => {
  try {
    const response = await fetch(`${API_URL}/api/reservas/reservas`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener reservas:', error);
    throw error;
  }
};

export const crearReserva = async (reserva) => {
  try {
    const response = await fetch(`${API_URL}/api/reservas/preservas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reserva),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear reserva:', error);
    throw error;
  }
};
export const eliminarReserva = async (reservaId) => {
  try {
    const response = await fetch(`${API_URL}/api/reservas/reservas/${reservaId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al eliminar reserva');
    }
  } catch (error) {
    console.error('Error al eliminar reserva:', error);
    throw error;
  }
};
