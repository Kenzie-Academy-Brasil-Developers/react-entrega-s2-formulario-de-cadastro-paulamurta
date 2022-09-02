import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";

const RoutesMain = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#343B41",
              color: "#F8F9FA",
              border: "3px solid #3FE864",
            },
          },
          error: {
            style: {
              background: "#343B41",
              color: "#F8F9FA",
              border: "3px solid #E83F5B",
            },
          },
        }}
        position="top-right"
        reverseOrder={false}
      />
      <AnimatePresence>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/" element={<Home user={user} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default RoutesMain;
