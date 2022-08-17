import FormRegistro from "../../components/FormRegistro";
import { Container } from "./styles";
import LogoKenzieHub from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

const Registro = ({ loading }) => {
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate("/login", { replace: true });
  }

  return (
    <Container>
      <nav>
        <img src={LogoKenzieHub} alt="Logo" />
        <button loading={loading} onClick={navigateToLogin}>
          Voltar
        </button>
      </nav>
      <FormRegistro />
    </Container>
  );
};

export default Registro;
