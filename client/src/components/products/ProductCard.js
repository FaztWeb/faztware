import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useProducts, useAuth } from "../../context";
import { toast } from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import { useCart } from "../../context";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProducts();
  const { user, isLoggedIn } = useAuth();
  const { appendItemToCart } = useCart();

  const handleCart = (product) => {
    appendItemToCart(product)
    toast.success("Product added to cart", {
      position: "bottom-right",
    });
  };

  const handleDelete = async (id) => {
    const deletedProduct = await deleteProduct(id);
    if (deletedProduct)
      toast.success(`Product deleted successfully`, {
        position: "bottom-right",
      });
  };

  return (
    <div className="card rounded-0 shadow-lg">
      <img
        src={
          product.images && product.images.url
            ? product.images.url
            : "/assets/noimage.png"
        }
        className="w-75 m-auto"
        alt={product.name}
      />
      <div className="card-body">
        <h1 className="h3">{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Stock: {product.price}</p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary rounded-0 btn-sm"
            onClick={() => handleCart(product)}
          >
            <FiShoppingCart />
            <span className="ms-2">Add to Cart</span>
          </button>
          {isLoggedIn && user.role === "admin" && (
            <button
              className="btn btn-secondary btn-sm rounded-0"
              onClick={() => handleDelete(product._id)}
            >
              <BsTrash />
              <span className="ms-2">Delete</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
