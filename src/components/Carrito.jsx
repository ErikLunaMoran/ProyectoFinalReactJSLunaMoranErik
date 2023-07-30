import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1>Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id}>
          <br />
          <h3>{prod.box_model}</h3>
          <img src={prod.img} style={styles.img} alt="" />
          <p>Precio unitario: ${prod.precio}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Total: ${prod.precio * prod.cantidad}</p>

          <br />
        </div>
      ))}

      {carrito.length > 0 ? (
        <>
          <h2>Precio Total: ${precioTotal()}</h2>
          <button onClick={handleVaciar}>Vaciar Carro</button>
          <Link to="/checkout">Finalizar compra</Link>
        </>
      ) : (
        <h3>El carrito está actualmente vacío</h3>
      )}
    </div>
  );
};

const styles = {
  img: {
    height: "20rem",
    width: "auto",
  },
};

export default Carrito;
