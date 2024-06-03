// src/components/Product.js
import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import './Product.css';

const Product = ({ image, name, rating, price }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><StarRating rating={rating} /></p>
      <p>{price}</p>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
