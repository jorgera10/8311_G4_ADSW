import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Register } from "./Register";

export function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  const { login, loginGoogle } = useAuth();

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
      await login(user.email, user.password);

      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginGoogle();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <button>Login</button>
        <br />
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </button>
        <br />
        <button onClick={handleGoogleSignin}>Login with Google</button>
      </form>
    </div>
  );
}
