import FormLogin from "../../components/FormLogin";
import { Container } from "./styles";
import LogoKenzieHub from "../../assets/Logo.svg";
import { motion } from "framer-motion";

const Login = ({ setLoading, setUser }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <nav>
          <img src={LogoKenzieHub} alt="Logo" />
        </nav>
        <FormLogin setUser={setUser} setLoading={setLoading} />
      </Container>
    </motion.div>
  );
};

export default Login;
