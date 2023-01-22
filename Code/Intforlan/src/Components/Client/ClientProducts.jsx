import React, { useState, useEffect } from "react";
import { GetProducts } from "./GetProducts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export function ClientProducts({ categoryProduct }) {
  // const [products, setProducts] = useState([]);
  // const productCollection = collection(db, "products");

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const data = await getDocs(productCollection);
  //     setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getProducts();
  // }, [products]);

  // return (
  //   <div>
  //     <h1>{category}</h1>
  //     {products.map((product) => {
  //       if(product.categoria === category){
  //         return (
  //           <div key={product.id}>
  //             <img src="" />
  //             <h2>{product.nameProduct}</h2>
  //             <p>{product.categoria}</p>
  //             <p>{product.marca}</p>
  //             <p>{product.precio}</p>
  //           </div>
  //         );
  //       }
  //     })}
  //   </div>
  // );
  alert(categoryProduct)
  console.log(categoryProduct);

  return <h1>{categoryProduct}</h1>;
}
