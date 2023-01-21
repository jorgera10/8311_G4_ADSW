import { collection, getDocs } from "firebase/firestore";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { db } from "../Firebase/firebase";
import { listCategories } from "../../Context/listCategories";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function ClientHome() {
  const { logout, loading, user } = useAuth();
  const [products, setProducts] = useState([]);
  const productCollection = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, [products]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome to Intforlan</h1>
      <br />

      <div className="flex">
        {listCategories.map((category) => {
          return (
            <Card
              className="Cardborder flex-1"
              key={category.id}
              style={{ width: "18 rem" }}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              {category.icon}
              <Card.Body>
                <Card.Title>
                  <h2 className="text-3xl title" >{category.category}</h2>
                </Card.Title>
                <br />
                <Card.Text className="text-justify text">
                  {category.description}
                </Card.Text>

                <br />
                <button onClick={handleLogout}>See Products</button>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      {/* {products.map((produc) => {
        return (
          <>
            <div key={produc.id}>
              <img src={produc.imagen} height="150px" />
              <h2>{produc.nameProduct}</h2>
              <p>{produc.categoria}</p>
              <p>{produc.marca}</p>
              <p>{produc.precio}</p>
            </div>
          </>
        );
      })} */}
    </div>
  );
}
