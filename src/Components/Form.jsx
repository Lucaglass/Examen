// Form.jsx
import React, { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    animal: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cliente.nombre.trim().length >= 3 && cliente.animal.trim().length >= 6) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={cliente.nombre}
          onChange={(event) => setCliente({ ...cliente, nombre: event.target.value })}
        />
        <label>Animal favorito</label>
        <input
          type="text"
          value={cliente.animal}
          onChange={(event) => setCliente({ ...cliente, animal: event.target.value })}
        />
        <button type="submit">Enviar</button>
      </form>
      {show && <Card cliente={cliente} />}
      {error && <ErrorMessage />}
    </>
  );
};

export default Form;
