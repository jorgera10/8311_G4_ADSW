import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Admin/Login";
import { Register } from "./Components/Admin/Register";
import { AuthContextProvider } from "./Context/AuthContext";
import { ProtectedRoute } from "./Components/Admin/ProtectedRoute";
import Notfound from "./Components/Notfound";
import { ClientHome } from "./Components/Client/ClientHome";
import { ClientProducts } from "./Components/Client/ClientProducts";
import { Home } from "./Components/Admin/Home";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          /* */
          <Route path="/" element={<ClientHome />} />
          <Route path="/adminLogin" element={<Login />} />
          <Route
            path="/adminHome"
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          />
          <Route path="/adminRegister" element={<Register />} />
          <Route path="/products" element={<ClientProducts />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
