import React from "react";
import { useAuth } from "../Context/AuthContext";

export function Home() {
  const { logout, loading, user } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      Wellcome {user.email}
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
