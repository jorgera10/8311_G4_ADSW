import "./style.css";
import React, { useEffect, useState } from "react";
import { listCategories } from "../../Context/listCategories";
import Card from "react-bootstrap/Card";
import { ClientProducts } from "./ClientProducts";
import { useNavigate } from "react-router-dom";

export function ClientHome() {
  const navigate = useNavigate();

  const [categoriaElegida, setCategoriaElegida] = useState("");

  const vewCategory = (categoryName) => {
    console.log(categoryName);
    <ClientProducts categoryProduct={categoryName}></ClientProducts>;
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
                  <h2 className="text-3xl title">{category.category}</h2>
                </Card.Title>
                <br />
                <Card.Text className="text-justify text">
                  {category.description}
                </Card.Text>
                <br />
                <button
                  onClick={() => {
                    setCategoriaElegida(category.id);
                    vewCategory(categoriaElegida);
                  }}
                >
                  View Products
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
