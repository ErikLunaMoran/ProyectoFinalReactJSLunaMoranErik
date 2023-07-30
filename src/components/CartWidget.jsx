import cart from "../assets/cart.png";
import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";

const styles = {
  img: {
    height: "3rem",
    width: "auto",
  },
  span: {
    color: "white",
    paddingLeft: 10,
  },
};

export const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);
  return (
    <>
      <img src={cart} style={styles.img} alt="Carrito de compras" />
      <span style={styles.span}>{cantidadEnCarrito()}</span>
    </>
  );
};
