import React from "react";
import { useProducts } from "../../context";
import { BsTrash } from "react-icons/bs";

const CartPage = () => {
  const { cart } = useProducts();

  if (cart.length === 0) return <h1>Empty Cart</h1>;

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <header className="my-5 d-flex justify-content-between">
          <h2>Your Shopping List</h2>
          <h4>1000$</h4>
        </header>

        {cart.map((product) => (
          <div className="card rounded-0 my-2" key={product._id}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={product.images.url}
                    alt={product.name}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <div className="d-flex justify-content-between">
                    <h1 className="h4">{product.name}</h1>
                    <h2>${product.price}</h2>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-primary rounded-0">+</button>
                    <input
                      type="number"
                      className="form-control w-25 d-inline rounded-0"
                      placeholder="0"
                    />
                    <button className="btn btn-dark rounded-0">-</button>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-secondary rounded-0 btn-sm">
                      <BsTrash />
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
