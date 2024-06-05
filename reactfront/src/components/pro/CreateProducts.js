import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './createpro.css';

const endpoint = "http://localhost:8000/api/products";

export const CreateProducts = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!description) newErrors.description = "La descripción es obligatoria.";
    if (price <= 0) newErrors.price = "El precio debe ser mayor que cero.";
    if (stock < 0) newErrors.stock = "El stock no puede ser negativo.";
    return newErrors;
  };

  const store = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await axios.post(endpoint, { description, price, stock });
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="container-fluid p-2 ">
      <form onSubmit={store} className="my-form bg-secondary">
        <fieldset className="my-fieldset register-box">
          <legend className="my-legend">Crear productos</legend>
          <div className="container text-start mb-3">
            <label className="my-label">Descripción</label>
            <div className="my-input">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className=""
              />
              {errors.description && (
                <div className="text-danger">{errors.description}</div>
              )}
            </div>
          </div>
          <div className="mb-3 ">
            <div className="container text-start">
              <label className="my-label">Precio</label>
              <div className="my-input">
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                />
                {errors.price && (
                  <div className="text-danger">{errors.price}</div>
                )}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="container text-start">
              <label className="my-label">Stock</label>
              <div className="my-input">
                <input
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  type="number"
                  className=""
                />
                {errors.stock && (
                  <div className="text-danger">{errors.stock}</div>
                )}
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
