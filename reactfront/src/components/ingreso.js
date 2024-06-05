import React from "react";
import { useLocation } from "react-router-dom";

const NuevaPagina = () => {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <div>
      <h1>Nueva página</h1>
      {data && <p>Mensaje: {data.mensaje}</p>}
    </div>
  );
};

export default NuevaPagina;