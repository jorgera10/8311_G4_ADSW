import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { useParams } from "react-router-dom";

export function ClientProducts() {
  console.log(useParams());

  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const productCollection = collection(db, "productos");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>{category.toLowerCase()}</h1>
      {products.map((product) => {
        if (product.categoria === category.toLowerCase()) {
          return (
            <div key={product.id}>
              <img src={product.imagen} height="100px" />
              <h2>{product.productName}</h2>
              <p>{product.categoria}</p>
              <p>{product.marca}</p>
              <p>{product.precio}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
