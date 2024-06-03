import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Asegúrate de que Link esté importado correctamente

const endpoint = 'http://localhost:8000/api';

export const ShowProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        try {
            const response = await axios.get(`${endpoint}/products`);
            setProducts(response.data); // Asegúrate de actualizar el estado con los datos correctos
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${endpoint}/products/${id}`);
            getAllProducts(); // Refresca la lista de productos después de eliminar uno
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div className='container-fluid p-2 '>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2'>Crear</Link>
            </div>

            <di className="container center">
            <table className='table table-striped table-success w-75'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Descripción</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) =>
                        <tr key={product.id}>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className='btn btn-warning'>Editar</Link>
                                <button style={{ marginLeft: '30px' }} onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Eliminar</button>
                                
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            </di>

          
        </div>
    );
};