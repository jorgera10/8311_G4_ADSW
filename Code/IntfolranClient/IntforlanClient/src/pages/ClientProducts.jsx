import { db } from "@/Firebase/firebase";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { PageTitle, Footer } from "@/widgets/layout";
import { Typography } from "@material-tailwind/react";
import { element } from "prop-types";

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
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Intforlan store - {category}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading={category}> </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => {
              if (product.categoria === category.toLowerCase()) {
                return (
                  <div key={product.id} className="container">
                    <img src={product.imagen} height="100px" />
                    <div className="p-5">
                      <h2>
                        <center>
                          <b>{product.productName}</b>
                        </center>
                      </h2>
                      <p>Marca: {product.marca}</p>
                      <p className="text-green-600">
                        Precio: {product.precio}$
                      </p>
                      {product.hasOwnProperty("valorOferta") ? (
                        <p className="text-red-600">
                          -{product.valorOferta}% paga:{" "}
                          <b>
                            {product.precio -
                              product.precio * (product.valorOferta / 100)}
                            $!!
                          </b>
                        </p>
                      ) : null}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
