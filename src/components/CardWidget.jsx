import React, {useContext} from "react";
import {CartContext} from "../context/CartContext";



export const CardWidget = () => {
  const {qtyProductos} = useContext(CartContext);
  return (
    <button className="btn btn-outline-dark me-5 fs-5" type="submit">
      <i className="bi-cart-fill me-1 "></i>
      carrito
      <span className="badge bg-danger text-white ms-2 rounded-pill">{qtyProductos || ""}</span>
    </button>
  );
};
