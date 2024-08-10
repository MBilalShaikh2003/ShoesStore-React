import React from 'react';

const Card = ({ imageUrl, shoeName, price }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={shoeName} className="card-img h-img" />
      <div className="card-content">
        <h3 className="card-title">{shoeName}</h3>
        <p className="card-price">${price}</p>
        <div className="card-buttons">
          <button className="btn add-to-cart">Add to Cart</button>
          <button className="btn buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
