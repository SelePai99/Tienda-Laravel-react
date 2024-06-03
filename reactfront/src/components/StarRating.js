// src/components/StarRating.js
import React from 'react';
import PropTypes from 'prop-types';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array.from({ length: fullStars }, (_, index) => (
        <span key={`full-${index}`} className="star full-star">★</span>
      ))}
      {halfStar && <span className="star half-star">★</span>}
      {Array.from({ length: emptyStars }, (_, index) => (
        <span key={`empty-${index}`} className="star empty-star">☆</span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
