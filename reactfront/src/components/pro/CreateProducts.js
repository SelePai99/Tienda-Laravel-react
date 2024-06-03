import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/products";

export const CreateProducts = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault(); // Corregido el error tipográfico
    await axios.post(endpoint, { description, price, stock });
    navigate("/");
  };
  return (
    <div className="container-fluid p-2 ">
      <form onSubmit={store} className="my-form bg-danger">
        <fieldset className="my-fieldset">
          <legend className="my-legend">Crear productos</legend>
          <div className="contaier text-start mb-3">
            <label className="my-label">Descripción</label>
            <div className="my-input">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className=""
              />
            </div>
          </div>
          <div className="mb-3 ">
            <div className="contaier text-start">
              <label className="my-label">Precio</label>

              <div className="my-input">
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="contaier text-start">
              <label className="my-label">Stock</label>

              <div className="my-input">
                <input
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  type="number"
                  className=""
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateProducts;
