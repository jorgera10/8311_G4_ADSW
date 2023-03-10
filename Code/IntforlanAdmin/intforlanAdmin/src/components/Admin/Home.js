import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/firebase";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MyVerticallyCenteredModal } from "./Modal";

export function Home() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  //----------------------CRUD------------------------
  const [products, setProducts] = useState([]);
  const productCollection = collection(db, "productos");
  const [isChecked, setIsChecked] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const [NewName, setNewName] = useState("");
  const [NewMarca, setNewMarca] = useState("");
  const [NewCategoria, setNewCategoria] = useState("");
  const [peso, setPeso] = useState("");
  const [modelo, setModelo] = useState("");
  const [memoria, setMemoria] = useState("");
  const [Almacenamiento, setAlmacenamiento] = useState("");
  const [Ranura, setRanura] = useState("");
  const [Pantalla, setPantalla] = useState("");
  const [Resolucion, setResolucion] = useState("");
  const [CamaraPrincipal, setCamaraPrincipal] = useState("");
  const [CamaraSecundaria, setCamaraSecundaria] = useState("");
  const [Sistema, setSistema] = useState("");
  const [Bateria, setBateria] = useState("");
  const [Color, setColor] = useState("");
  const [NewPrecio, setNewPrecio] = useState(0);
  const [NewImagen, setNewImagen] = useState("");
  const [NewOferta, setNewOferta] = useState(0);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollection);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, [products]);

  const createProduct = async () => {
    await addDoc(productCollection, {
      nombre: NewName,
      marca: NewMarca,
      categoria: NewCategoria,
      Peso: peso,
      Modelo: modelo,
      Memoria: memoria,
      Almacenamiento: Almacenamiento,
      Ranura: Ranura,
      Pantalla: Pantalla,
      Resolucion: Resolucion,
      CamaraPrincipal: CamaraPrincipal,
      CamaraSecundaria: CamaraSecundaria,
      Sistema: Sistema,
      Bateria: Bateria,
      Color: Color,
      precio: NewPrecio,
      imagen: NewImagen,
      valorOferta: NewOferta,
    });
    alert("Correctly added product");
  };

  const deleteProduct = async (id) => {
    console.log(id);
    const ProductDoc = doc(db, "productos", id);
    // const confirmDelete = confirm(
    //   `Are you sure you want to eliminate this product? ${id}`
    // );

    // confirmDelete ? await deleteDoc(ProductDoc) : null;
    await deleteDoc(ProductDoc);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createProduct();
  };

  return (
    <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center">
      <div className="relative flex h-screen w-full content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <h1 className="mb-6 font-black">Intforlan Store</h1>
              <h1 className="mb-6 font-black">
                wellcome {user.email} as admin
              </h1>
            </div>
          </div>
        </div>
      </div>

      <br />
      <form onSubmit={handleCreate}>
        <input
          required
          type="text"
          id="ewName"
          name="ewName"
          placeholder="ewName"
          onChange={(e) => {
            setNewName(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="wMarca"
          name="wMarca"
          placeholder="wMarca"
          onChange={(e) => {
            setNewMarca(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="egoria"
          name="egoria"
          placeholder="Productegoria"
          onChange={(e) => {
            setNewCategoria(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="etPeso"
          name="etPeso"
          placeholder="etPeso"
          onChange={(e) => {
            setPeso(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="Modelo"
          name="Modelo"
          placeholder="Modelo"
          onChange={(e) => {
            setModelo(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="emoria"
          name="emoria"
          placeholder="emoria"
          onChange={(e) => {
            setMemoria(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="miento"
          name="miento"
          placeholder="Product"
          onChange={(e) => {
            setAlmacenamiento(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="Ranura"
          name="Ranura"
          placeholder="Ranura"
          onChange={(e) => {
            setRanura(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="ntalla"
          name="ntalla"
          placeholder="ntalla"
          onChange={(e) => {
            setPantalla(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="lucion"
          name="lucion"
          placeholder="lucion"
          onChange={(e) => {
            setResolucion(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="ncipal"
          name="ncipal"
          placeholder="Product namencipal"
          onChange={(e) => {
            setCamaraPrincipal(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="ndaria"
          name="ndaria"
          placeholder="Product namendaria"
          onChange={(e) => {
            setCamaraSecundaria(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="istema"
          name="istema"
          placeholder="istema"
          onChange={(e) => {
            setSistema(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="ateria"
          name="ateria"
          placeholder="ateria"
          onChange={(e) => {
            setBateria(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="tColor"
          name="tColor"
          placeholder="tColor"
          onChange={(e) => {
            setColor(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="Precio"
          name="Precio"
          placeholder="Precio"
          onChange={(e) => {
            setNewPrecio(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />
        <input
          required
          type="text"
          id="Imagen"
          name="Imagen"
          placeholder="Imagen"
          onChange={(e) => {
            setNewImagen(e.target.value);
          }}
          className="m-10 border-l-4 text-black"
        />

        <div className="m-5">
          <label className="text-black" htmlFor="mi-checkbox">
            Quieres agregar una oferta?
          </label>
          <input
            type="checkbox"
            id="mi-checkbox"
            checked={isChecked}
            onChange={handleOnChange}
            placeholder="valor de la oferta"
          />
          <input
            className="mx-10 border-l-4 w-20 text-black"
            type="number"
            id="mi-input"
            disabled={!isChecked}
            placeholder="valor"
            value={0}
            max="50"
            step={"5"}
            onChange={(e) => {
              setNewOferta(e.target.value);
            }}
          />
        </div>

        <br />
        <div className="mx-10">
          <button className="text-blue-700 border-l-4 p-2 mx-10" type="Reset">
            Clear
          </button>
          <button className="text-blue-700 border-l-4 p-2 mx-10">Send</button>
        </div>
      </form>
      <br />

      <div className="container mx-auto ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          {products.map((product) => {
            return (
              <Card
                bg={"Light"}
                key={product.id}
                style={{ width: "18rem" }}
                className="mb-2"
                text={"dark"}
                border="primary"
              >
                <Card.Header>
                  <img
                    className="cursor-pointer"
                    src={product.imagen}
                    height="100px"
                    onClick={() => setModalShow(product.id)}
                  />
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p className="text-green-600">
                      <b>{product.nombre}</b>
                    </p>
                    <p className="text-green-600">
                      categoria: {product.categoria}
                    </p>
                    <p className="text-green-600">marca: {product.marca}</p>
                    <p className="text-green-600">precio: {product.precio}</p>
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
                  </Card.Text>

                  <button
                    className="btn text-gray-700 mx-5 border-l4"
                    onClick={() => {
                      const EliminaConfirmar = window.confirm(
                        "??Est??s seguro de eliminar este producto?"
                      );
                      if (EliminaConfirmar) {
                        deleteProduct(product.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn text-gray-700 mx-5 border-l4"
                    onClick={() => {
                      deleteProduct(product.id);
                      const formulario = document.getElementById("productName");
                      formulario.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Actualizar
                  </button>
                  <MyVerticallyCenteredModal
                    key={product.key}
                    {...product}
                    show={modalShow === product.id}
                    onHide={() => setModalShow(false)}
                  />
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>

      <button
        className="text-blue-700 border-l-4 p-2 mx-25"
        onClick={handleLogout}
      >
        logout
      </button>
    </div>
  );
}
