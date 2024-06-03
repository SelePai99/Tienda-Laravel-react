import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/products/';

export const DeleteProducts = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`${endpoint}${id}`);
            navigate('/'); // Redirigir después de eliminar
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div>
            <h3>Delete product</h3>
            <p>Are you sure you want to delete this product?</p>
            <button onClick={handleDelete} className='btn btn-danger'>Yes, Delete</button>
        </div>
    );
};

export default DeleteProducts;
