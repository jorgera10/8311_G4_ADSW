import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  const { singUp } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await singUp(user.email, user.password);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="example@company.com"
          id="email"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <br /> <br />
        <button>Send</button>
      </form>
    </div>
  );
}
