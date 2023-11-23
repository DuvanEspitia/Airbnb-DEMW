import React, { useState, useEffect } from 'react';
import '../../App.css'
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerEspacioPorId,actualizarEspacio } from '../espacio/rutas';
function Editar() {
    const navigate = useNavigate();
    const params = useParams()
    const [id,setId] = useState()
    const [titulo, setTitulo] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [precio, setPrecio] = useState('')
    const [comodidades, setComodidades] = useState('')
    const [departamento, setDepartamento] = useState('')
        const formdata =({
            titulo:titulo,
            ciudad:ciudad,
            comodidades:comodidades,
            precio:precio,
            departamento:departamento
        })


        const handleActulizarEspacio = async () => {
            try {
              const response = await actualizarEspacio(id,formdata);
              console.log(response);
              window.alert("Actulizado con exito.")
              navigate('/espaciolist')
            } catch (error) {
             console.log(error)
            }
          };
    useEffect(() => {
        const caracteristicas = async () => {
            try {
                const espaciosData = await obtenerEspacioPorId(params.id);
                console.log(espaciosData)
                setId(espaciosData._id)
                setTitulo(espaciosData.titulo)
                setCiudad(espaciosData.ciudad)
                setDepartamento(espaciosData.departamento)
                setPrecio(espaciosData.precio)
                setComodidades(espaciosData.comodidades)

            } catch (error) {
                console.error('Error al obtener caracteristicas', error);
            }
        };
        caracteristicas();
    }, []);


    return (

        <div className='blog-c-admin'>
            <h2>Editar espacio</h2>
            <div className='centC'>
            <div className='edit'>
                    <p>Titulo: </p>
                    <p>Departamento:</p>
                    <p>Ciudad: </p>
                    <p>Precio: </p>
                    <p>Comodidades: </p>

                </div>
                <div className='edit'>
                <input value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                <input onChange={(e) => setDepartamento(e.target.value)} value={departamento}></input>
                <input value={ciudad} onChange={(e) => setCiudad(e.target.value)}></input>
                <input value={precio} onChange={(e) => setPrecio(e.target.value)}></input>
               <textarea value={comodidades} onChange={(e) => setComodidades(e.target.value)}></textarea>
               </div>

            </div>
            <button type="button" className='btn btn-warning' onClick={handleActulizarEspacio}>Actualizar</button>

        </div>
    );
}

export default Editar;
