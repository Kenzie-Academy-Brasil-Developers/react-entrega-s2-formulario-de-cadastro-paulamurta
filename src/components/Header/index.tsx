import LogoKenzieHub from "../../assets/Logo.svg";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/login", { replace: true });
    localStorage.clear();
  }

  return (
    <Container>
      <img src={LogoKenzieHub} alt="Logo" />
      <button onClick={handleLogout}>Sair</button>
    </Container>
  );
};

export default Header;
