/* eslint-disable react-hooks/exhaustive-deps */
import toast from "react-hot-toast";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    async function autoLogin() {
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          console.log("busquei usuario", data);
          setUser(data);
          setTechs(data.techs);
          navigate("/", { replace: true });
        } catch (error) {
          console.log(error);
        }
      } else {
        localStorage.clear();
        setLoading(false);
      }
    }
    autoLogin();
  }, []);

  function signUp(data) {
    api
      .post("/users", data)
      .then((res) => {
        toast.success("Conta criada com sucesso!");
        console.log(res.data);
        navigate("/login", { replace: true });
      })

      .catch((err) => {
        toast.error("Ops! Algo deu errado!");
        console.log(err);
      });
  }

  function logIn(data) {
    setLoading(true);
    api
      .post("/sessions", data)
      .then((res) => {
        setUser(res.data.user);
        setTechs(res.data.user.techs);
        toast.success(`Bem vindo(a), ${res.data.user.name}!`);
        console.log(res.data);
        localStorage.clear();
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        navigate("/", { replace: true });
        setLoading(false);
      })

      .catch((err) => {
        toast.error("Ops! Algo deu errado!");
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        techs,
        setTechs,
        loading,
        setLoading,
        logIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
