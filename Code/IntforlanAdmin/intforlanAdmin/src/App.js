import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Admin/Login";
import { Register } from "./components/Admin/Register";
import { ProtectedRoute } from "./components/Admin/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { ClientHome } from "./components/Client/ClientHome";
import { ClientProducts } from "./components/Client/ClientProducts";
import { Home } from "./components/Admin/Home";

function App() {
  return (
    <div className="bg-slate-300 text-black h-screen flex text-white">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:category" element={<ClientProducts />} />
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
