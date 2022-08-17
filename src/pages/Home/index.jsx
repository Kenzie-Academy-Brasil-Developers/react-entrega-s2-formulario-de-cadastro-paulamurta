import Header from "../../components/Header";
import { Body, Content, Profile } from "./styles";
import { motion } from "framer-motion";

const Home = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Body>
        <Header />
        <Profile>
          <h2>Olá, {user.name}!</h2>
          <p>{user.course_module}</p>
        </Profile>
        <Content>
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </Content>
      </Body>
    </motion.div>
  );
};

export default Home;
