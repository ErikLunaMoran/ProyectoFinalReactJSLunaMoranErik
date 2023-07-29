import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";

import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    /* promesa.then((result) => {
      setProduct(result[1]);
    }); */
    promesa.then((result) => {
      // Filtra el producto por el id obtenido y convierte el id a número entero
      const productById = result.find((item) => item.id === parseInt(id));
      setProduct(productById);
    });
  }, [id]);

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
