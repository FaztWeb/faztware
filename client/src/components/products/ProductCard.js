import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card rounded-0">
      <img
        src={
          product.images && product.images.url
            ? product.images.url
            : "/assets/noimage.png"
        }
        className="w-75 m-auto"
      />
      <div className="card-body">
        <h1 className="h3">{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div>
          <button className="btn btn-primary rounded-0 btn-sm">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
