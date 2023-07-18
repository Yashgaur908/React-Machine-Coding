import React, { useState } from 'react';

const StarRating = ({ totalStars = 5, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  const starStyle = {
    fontSize: '24px',
    cursor: 'pointer',
  };

  const filledStarStyle = {
    color: 'gold', // You can change the color to any other desired color
  };

  return (
    <div>
      {/* Both Array(totalStars).fill() and [...Array(totalStars)] are ways to create an array with a specified number of elements. */}
      { [...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const starStyles = starValue <= rating ? { ...starStyle, ...filledStarStyle } : starStyle;
        return (
          <span
            key={index}
            style={starStyles}
            onClick={() => handleStarClick(starValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
