import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    promesa.then((result) => {
      setProduct(result[1]);
    });
  }, []);

  return (
    <Container className="mt-4">
      <h1>Detalle</h1>
      {product.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ItemDetail box={product} />
      )}
    </Container>
  );
};
