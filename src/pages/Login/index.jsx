import FormLogin from "../../components/FormLogin";
import { Container } from "./styles";
import LogoKenzieHub from "../../assets/Logo.svg";

const Login = ({ setLoading, setUser }) => {
  return (
    <Container>
      <nav>
        <img src={LogoKenzieHub} alt="Logo" />
      </nav>
      <FormLogin setUser={setUser} setLoading={setLoading} />
    </Container>
  );
};

export default Login;
