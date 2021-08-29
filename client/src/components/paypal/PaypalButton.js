import React from "react";
import ReactDOM from "react-dom";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useCart } from "../../context";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PaypalComponent = () => {
  const history = useHistory();
  const { clearCart } = useCart();

  const createOrder = (data, actions) => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    const items = cart.items.map((item) => ({
      unit_amount: {
        currency_code: "USD",
        value: item.price * item.quantity,
      },
      quantity: item.quantity,
      name: item.name,
    }));

    return actions.order.create({
      purchase_units: [
        {
          description: "Some Hardware Products",
          amount: {
            value: cart.totalPrice,
            currency_code: "USD",
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    await actions.order.capture();
    clearCart();
    history.push("/");
    toast.success("Successfull Payment");
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      style={{
        color: "blue",
        tagline: "false",
        label: "checkout",
        shape: "rect",
        layout: "horizontal",
        size: "small",
      }}
    />
  );
};

export default PaypalComponent;
