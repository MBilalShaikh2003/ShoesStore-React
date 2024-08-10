import React from 'react';

const CardFlex = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img h-img" />
    </div>
  );
};

export default CardFlex;
