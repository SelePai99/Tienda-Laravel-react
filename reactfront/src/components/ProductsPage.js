// src/components/ProductsPage.js

import React from 'react';
import Product from './Product';
import './ProductsPage.css'; // Importa el archivo CSS

// Importar las imágenes
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';

const ProductsPage = () => {
  return (
    <div className="products-container">
      {/* Renderiza los productos */}
      <Product
        image={imagen1}
        name="Frenchy Camisa Negra"
        rating={3}
        price="$10"
      />
      <Product
        image={imagen2}
        name="Conjunto de dos piezas"
        rating={4}
        price="$20"
      />
      <Product
        image={imagen3}
        name="Pantalon Jean Mom"
        rating={3}
        price="$15"
      />
      <Product
        image={imagen3}
        name="Producto 3"
        rating={3}
        price="$15"
      />
      <Product
        image={imagen1}
        name="Producto 3"
        rating={3}
        price="$15"
      />
      <Product
        image={imagen1}
        name="Producto 3"
        rating={3}
        price="$15"
      />
      {/* Agrega más productos según sea necesario */}
    </div>
  );
};

export default ProductsPage;
