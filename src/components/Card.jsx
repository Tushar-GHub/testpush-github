import React from 'react'

const Card = ({product}) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />

      <h3 className="product-title">{product.name}</h3>

      <p className="product-price">₹{product.price}</p>
      <p className="product-price">Rating: {product.rating}</p>

      <button className="add-btn">Add to Cart</button>
    </div>
  );
}

export default Card