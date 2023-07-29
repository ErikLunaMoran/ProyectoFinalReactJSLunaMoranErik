import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({ box }) => {
  const { carrito, setCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < box.stock && setCantidad(cantidad + 1);
  };

  const handleAgregar = () => {
    const itemAgregado = { ...box, cantidad };

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = carrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  return (
    <>
      <div>{box.box_factory}</div>
      <div>{box.box_model}</div>
      <div>{box.box_year}</div>
      <div>{box.category}</div>
      <div>${box.precio}</div>
      <ItemCount
        cantidad={cantidad}
        handleSumar={handleSumar}
        handleRestar={handleRestar}
        handleAgregar={handleAgregar}
      />

      <img className="img-detail" src={box.img} alt={box.box_model} />
    </>
  );
};
