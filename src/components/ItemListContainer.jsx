import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemList } from "../components/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const category = useParams().category;

  useEffect(() => {
    const loadProductsFromFirestore = async () => {
      try {
        const productosRef = collection(db, "products");

        if (category) {
          const q = query(productosRef, where("category", "==", category));
          const querySnapshot = await getDocs(q);
          setProducts(
            querySnapshot.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          );
        } else {
          const querySnapshot = await getDocs(productosRef);
          setProducts(
            querySnapshot.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          );
        }
      } catch (error) {
        console.error("Error al cargar los productos desde Firestore:", error);
      }
    };

    loadProductsFromFirestore();
  }, [category]);

  return (
    <Container className="mt-4">
      <h1>{props.greeting}</h1>
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ItemList products={products} />
      )}
    </Container>
  );
};
