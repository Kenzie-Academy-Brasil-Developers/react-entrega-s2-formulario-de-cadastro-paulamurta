import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import schemaLogin from "../../validators/loginUser";
import axios from "axios";
import toast from "react-hot-toast";

const FormLogin = ({ setUser, setLoading }) => {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/", { replace: true });
  }

  function submit(data) {
    setLoading(true);
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        setUser(res.data.user);
        toast.success(`Bem vindo(a), ${res.data.user.name}!`);
        console.log(res.data);
        localStorage.clear();
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        navigateToHome();
        setLoading(false);
      })

      .catch((err) => {
        toast.error("Ops! Algo deu errado!");
        console.log(err);
        setLoading(false);
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });

  return (
    <Container>
      <h2>Login</h2>

      <form noValidate={true} onSubmit={handleSubmit(submit)}>
        <fieldset>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </fieldset>

        <fieldset>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </fieldset>

        <button type="submit">Entrar</button>
      </form>
      <p>Ainda não possui uma conta?</p>
      <Link to="/register">
        <button>Cadastre-se</button>
      </Link>
    </Container>
  );
};

export default FormLogin;
