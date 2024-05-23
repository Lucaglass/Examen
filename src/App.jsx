// App.jsx
import React, { useState } from "react";
import Espectaculo from "./Components/Espectaculo";
import Form from "./Components/Form";
import { espectaculos } from "./utils/espectaculos";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {espectaculos.map((item) => (
        <Espectaculo key={item.id} item={item} setShowForm={setShowForm} />
      ))}
      {showForm && <Form />}
    </>
  );
}

export default App;
