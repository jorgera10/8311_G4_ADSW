import React, { useState, useEffect } from "react";
import { GetProducts } from "./GetProducts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";

export function ClientProducts({ categoryProduct }) {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const productCollection = collection(db, "products");
  console.log(categoryProduct);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, [products]);

  return (
    <div>
      <h1>Celular</h1>
      {products.map((product) => {
        if (product.categoria === "Celular") {
          return (
            <>
              <div key={product.id}>
                <hr />
                <img src="" />
                <h2>{product.productName}</h2>
                <p>{product.categoria}</p>
                <p>{product.marca}</p>
                <p>{product.precio}</p>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
