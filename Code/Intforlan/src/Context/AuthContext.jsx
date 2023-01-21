import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Components/Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

//use context error
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("There is not auth provider");
  return context;
};

//provider---------------------------------------------
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const logout = () => {
    signOut(auth);
  };

  const loginGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  return (
    <AuthContext.Provider
      value={{ singUp: signUp, login, logout, loading, user, loginGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
}
