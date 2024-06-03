import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/products/";

export const EditProducts = () => {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`${endpoint}${id}`);
        setDescription(response.data.description);
        setPrice(Number(response.data.price)); // Convertir a Number
        setStock(Number(response.data.stock)); // Convertir a Number
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    if (id) {
      fetchProductById();
    }
  }, [id]);

  const update = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${endpoint}${id}`, {
        description,
        price,
        stock,
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="container-fluid p-2">
      <form onSubmit={update} className="my-form bg-info">
      <legend className="my-legend">Editar Productos</legend>
        <fieldset className="my-fieldset">
          <div className="mb-3 container text-start">
            <label className="form-label">Descripción</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3 container text-start">
            <label className="form-label">Precio</label>
            <input
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3 container text-start">
            <label className="form-label">Stock</label>
            <input
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              type="number"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar 
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default EditProducts;
