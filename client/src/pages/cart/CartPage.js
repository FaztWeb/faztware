import React, { useState } from "react";
import { useCart } from "../../context";
import { BsTrash } from "react-icons/bs";
import PaypalComponent from "../../components/paypal/PaypalButton";

const CartPage = () => {
  const {
    items,
    removeItem,
    totalPrice,
    clearCart,
    appendItemToCart,
    decrementItem,
  } = useCart();
  const [quantity, setQuantity] = useState(0);

  if (items.length === 0) return <h1>Empty Cart</h1>;

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <header className="my-5 d-flex justify-content-between">
          <div>
            <h2>Your Shopping List</h2>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          </div>
          <h4>{totalPrice}$</h4>
        </header>

        {items.map((product) => (
          <div className="card rounded-0 my-2" key={product._id}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={
                      product.images.url
                        ? product.images.url
                        : "/assets/noimage.png"
                    }
                    alt={product.name}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h1 className="h4">{product.name}</h1>
                      <p>Quantity: {product.quantity}</p>
                      <p>Price: {product.price}</p>
                    </div>
                    <h2>${product.price * product.quantity}</h2>
                  </div>
                  <div className="mt-4">
                    <button
                      className="btn btn-primary rounded-0"
                      onClick={() => decrementItem(product, quantity)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control w-25 d-inline rounded-0"
                      value={quantity}
                      placeholder="0"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                      className="btn btn-dark rounded-0"
                      onClick={() => appendItemToCart(product, quantity)}
                    >
                      +
                    </button>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-secondary rounded-0 btn-sm"
                      onClick={() => removeItem(product)}
                    >
                      <BsTrash />
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="d-flex justify-content-end">
          <PaypalComponent />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
