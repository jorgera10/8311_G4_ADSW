import React from "react";

export function GetProducts(category) {


  return (
    <div>

      <div key={produc.id}>
        <img src={produc.imagen} height="150px" />
        <h2>{produc.nameProduct}</h2>
        <p>{produc.categoria}</p>
        <p>{produc.marca}</p>
        <p>{produc.precio}</p>
      </div>
    </div>
  );
}
