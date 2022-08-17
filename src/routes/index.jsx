import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const RoutesMain = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

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
          <Route
            path="/login"
            element={<Login setLoading={setLoading} setUser={setUser} />}
          />
          <Route path="/register" element={<Registro loading={loading} />} />
          <Route path="/" element={<Home user={user} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default RoutesMain;
