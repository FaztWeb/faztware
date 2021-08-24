import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/providers/ProductsContext";
import Hero from "../../components/Hero";

const HomePage = () => {
  const { isLoading, products } = useContext(ProductContext);

  console.log(products);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <Hero />
      {products.map((product) => (
        <div className="col-md-4">
          <div className="card card-body">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
