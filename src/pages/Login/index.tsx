import FormLogin from "../../components/FormLogin";
import LogoKenzieHub from "../../assets/Logo.svg";
import { Container } from "./styles";
import { motion } from "framer-motion";

const Login = () => {
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
        <FormLogin />
      </Container>
    </motion.div>
  );
};

export default Login;
