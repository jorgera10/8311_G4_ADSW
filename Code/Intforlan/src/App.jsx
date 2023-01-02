import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { AuthContextProvider } from "./Context/AuthContext";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import Notfound from "./Components/Notfound";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
