import schemaLogin from "../../validators/loginUser";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, IFormLogIn } from "../../contexts/AuthContext";

const FormLogin = () => {
  const { logIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogIn>({ resolver: yupResolver(schemaLogin) });

  return (
    <Container>
      <h2>Login</h2>

      <form noValidate={true} onSubmit={handleSubmit(logIn)}>
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
