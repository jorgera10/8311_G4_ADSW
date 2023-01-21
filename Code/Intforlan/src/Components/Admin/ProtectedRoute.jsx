import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (!user) return <Navigate to="/adminLogin" />;
  return <>{children}</>;
}
