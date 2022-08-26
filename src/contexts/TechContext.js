import { createContext, useContext, useState } from "react";
import { api } from "../api/api";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");
  const [showModal, setShowModal] = useState(false);
  const { techs, setTechs } = useContext(AuthContext);

  function deleteTechnology(techId) {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .delete(`/users/techs/${techId}`)
      .then((res) => {
        console.log(res.data);
        const newTechs = techs.filter((tech) => tech.id !== techId);
        setTechs(newTechs);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  function addTechnology(data) {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .post("/users/techs", data)
      .then((res) => {
        toast.success("Stacks adicionadas com sucesso!");
        setShowModal(!showModal);
        setTechs([...techs, data]);
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado!");
        console.log(err);
      });
  }

  return (
    <TechContext.Provider
      value={{ addTechnology, deleteTechnology, showModal, setShowModal }}
    >
      {children}
    </TechContext.Provider>
  );
};
