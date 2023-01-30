import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { db } from "../Firebase/firebase";
import { AiOutlineDelete } from "react-icons/Ai";

export function Home() {
  const { logout, loading, user } = useAuth();
  //console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };
  //----------------------CRUD------------------------
  const [products, setProducts] = useState([]);
  const productCollection = collection(db, "products");

  const [NewNameProduct, setNewNameProduct] = useState("");
  const [NewCategoria, setNewCategoria] = useState("");
  const [NewMarca, setNewMarca] = useState("");
  const [NewPrecio, setNewPrecio] = useState(0);
  const [NewImagen, setNewImagen] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, [products]);

  const createProduct = async () => {
    await addDoc(productCollection, {
      nameProduct: NewNameProduct,
      categoria: NewCategoria,
      marca: NewMarca,
      precio: NewPrecio,
      imagen: NewImagen,
    });
    alert("Correctly added product");
  };

  const deleteProduct = async (id) => {
    const ProductDoc = doc(db, "products", id);
    const confirmDelete = confirm(
      `Are you sure you want to eliminate this product? ${id}`
    );

    confirmDelete ? await deleteDoc(ProductDoc) : null;
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createProduct();
  };

  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <br />
      <form onSubmit={handleCreate}>
        <input
          type="text"
          name="productName"
          placeholder="Product name"
          onChange={(e) => {
            setNewNameProduct(e.target.value);
          }}
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoria"
          onChange={(e) => {
            setNewCategoria(e.target.value);
          }}
        />
        <input
          type="text"
          name="marca"
          placeholder="Marca"
          onChange={(e) => {
            setNewMarca(e.target.value);
          }}
        />
        <input
          type="text"
          name="precio"
          placeholder="Precio"
          onChange={(e) => {
            setNewPrecio(e.target.value);
          }}
        />
        <input
          type="text"
          name="imagen"
          placeholder="Imagen"
          onChange={(e) => {
            setNewImagen(e.target.value);
          }}
        />
        <br />
        <button type="Reset">Clear</button>
        <button>Send</button>
      </form>
      <br />
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.imagen} height="100px" />
            <h2>{product.nameProduct}</h2>
            <p>{product.categoria}</p>
            <p>{product.marca}</p>
            <p>{product.precio}</p>

            <AiOutlineDelete
              onClick={() => {
                deleteProduct(product.id);
              }}
            ></AiOutlineDelete>
          </div>
        );
      })}
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
