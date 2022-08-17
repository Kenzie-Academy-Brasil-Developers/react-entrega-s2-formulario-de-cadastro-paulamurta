import FormRegistro from "../../components/FormRegistro";
import { Container } from "./styles";
import LogoKenzieHub from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Registro = ({ loading }) => {
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate("/login", { replace: true });
  }

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
          <button loading={loading} onClick={navigateToLogin}>
            Voltar
          </button>
        </nav>
        <FormRegistro />
      </Container>
    </motion.div>
  );
};

export default Registro;
