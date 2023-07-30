import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";

export default function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Productos" />}
            />
            <Route
              path="/category/:category"
              element={<ItemListContainer greeting="Productos" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
