import React, { useState, useEffect } from 'react';
import '../../App.css'
import { useParams, useNavigate } from 'react-router-dom';
import { actualizarUsuario } from '../login/peticiones';
import { useAuth } from '../../Helpers/Estados/AuthContext';
function Editarperfil() {
    const { authState} = useAuth();

    const { user} = authState;

        
    
    const navigate = useNavigate();
    const params = useParams()
    const [id,setId] = useState()
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setcorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
        const formdata =({
            nombre:nombre,
            apellido:apellido,
            correo:correo,
            contraseña:contraseña
        })
        useEffect(() => {
            const caracteristicas = async () => {
                try {
                    setId(user.user._id)
                    setNombre(user.user.nombre)
                    setApellido(user.user.apellido)
                    setcorreo(user.user.correo)
                    setContraseña(user.user.contraseña)
    
                } catch (error) {
                    console.error('Error al obtener caracteristicas', error);
                }
            };
            caracteristicas();
        }, []);

        const handleActulizarEspacio = async () => {
            try {
              const response = await actualizarUsuario(id,formdata);
              console.log(response);
              window.alert("Actulizado con exito. Cunado logues de nuevo se veran los cambios")
              navigate('/')
            } catch (error) {
             console.log(error)
            }
          };

    return (

        <div className='blog-c-admin'>
            <h2>Editar Perfil</h2>
            <div className='centC'>
            <div className='edit'>
                    <p>Nombre:<input value={nombre} onChange={(e) => setNombre(e.target.value)}></input> </p>
                    <p>Apellido: <input onChange={(e) => setApellido(e.target.value)} value={apellido}></input> </p>
                    <p>Correo: <input value={correo} onChange={(e) => setcorreo(e.target.value)}></input></p>
                    <p>Contraseña:<input placeholder='nueva contraseña' onChange={(e) => setContraseña(e.target.value)}></input> </p>

                </div>
       

            </div>
            <button type="button" className='btn btn-warning' onClick={handleActulizarEspacio}>Guardar</button>

        </div>
    );
}

export default Editarperfil;
