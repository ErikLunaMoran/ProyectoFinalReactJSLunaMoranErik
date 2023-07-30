import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { CartContext } from "./context/CartContext";

export default function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (box, cantidad) => {
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

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  return (
    <div>
      <CartContext.Provider
        value={{ carrito, agregarAlCarrito, cantidadEnCarrito }}
      >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Productos" />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting="Productos" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}
