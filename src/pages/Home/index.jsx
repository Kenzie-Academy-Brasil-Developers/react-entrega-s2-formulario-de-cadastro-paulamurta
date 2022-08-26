import Header from "../../components/Header";
import TechList from "../../components/TechList";
import RegisterModal from "../../components/RegisterModal";
import { Body, Content, Profile } from "./styles";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { TechContext } from "../../contexts/TechContext";

const Home = () => {
  const { showModal, setShowModal } = useContext(TechContext);
  const { user } = useContext(AuthContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {showModal === true ? <RegisterModal /> : null}
      <Body>
        <Header />
        <Profile>
          <h2>Olá, {user ? user.name : null}!</h2>
          <p>{user ? user.course_module : null}</p>
        </Profile>
        <Content>
          <main>
            <h2>Tecnologias</h2>
            <button onClick={() => setShowModal(!showModal)}>+</button>
          </main>
          <TechList />
        </Content>
      </Body>
    </motion.div>
  );
};

export default Home;
