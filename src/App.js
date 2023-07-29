import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { CartContext } from "./context/CartContext";

export default function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <div>
      <CartContext.Provider value={{ carrito, setCarrito }}>
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
