import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
export const Espace = ({ espacio }) => {
  console.log(espacio)
  const bufferToBase64 = (buffer) => {
    return `data:image/jpeg;base64,${Buffer.from(buffer.data).toString("base64")}`;
  };
  const base64String = espacio.image_1 && bufferToBase64(espacio.image_1);
  return (
    <div className="product">
      {espacio.image_1 && (
        <img
          className="img"
          src={base64String}
          alt="Imagen de producto"
        />
      )}
      <div >
        <p>
          <b>{espacio.departamento},{espacio.ciudad}</b>
        </p>
        <p>${espacio.precio}, noche</p>
        <Link to={`/reserva/${espacio._id}`}>
          <li className='btn btn-info'>Saber más.</li>
        </Link>
      </div>

    </div>
  );
};
