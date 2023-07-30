import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";

/* import data from "../data/products.json"; */
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemDetailContainer = (props) => {
  const [product, setItem] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef).then((resp) => {
      setItem({
        ...resp.data(),
        id: resp.id,
      });
    });

    /* const promesa = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    /* promesa.then((result) => {
      setProduct(result[1]);
    }); */
    /* promesa.then((result) => {
      // Filtra el producto por el id obtenido y convierte el id a número entero
      const productById = result.find((item) => item.id === parseInt(id));
      setProduct(productById); 
    }); */
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
