// Card.jsx
import React from "react";

const Card = ({ cliente }) => {
  return (
    <div>
      <h3>Gracias, {cliente.nombre}</h3>
      <h4>Tu animal favorito es: {cliente.animal}</h4>
    </div>
  );
};

export default Card;
