import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import schema from "../../validators/registerUser";
import axios from "axios";
import toast from "react-hot-toast";

const FormRegistro = () => {
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate("/login", { replace: true });
  }

  function submit(data) {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((res) => {
        toast.success("Conta criada com sucesso!");
        console.log(res.data);
        navigateToLogin();
      })

      .catch((err) => {
        toast.error("Ops! Algo deu errado!");
        console.log(err);
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <Container>
        <h2>Crie sua conta</h2>
        <h1>Rápido e grátis, vamos nessa!</h1>

        <form noValidate={true} onSubmit={handleSubmit(submit)}>
          <fieldset>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </fieldset>

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

          <fieldset>
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword?.message}</p>
          </fieldset>

          <fieldset>
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <p>{errors.bio?.message}</p>
          </fieldset>

          <fieldset>
            <label htmlFor="contact">Contato</label>
            <input
              id="contact"
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <p>{errors.contact?.message}</p>
          </fieldset>

          <fieldset>
            <label htmlFor="course_module">Selecionar módulo</label>
            <select
              id="course_module"
              value="Primeiro módulo (Introdução ao Frontend"
              {...register("course_module")}
            >
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo
              </option>
              <option value="Quarto Módulo (Backend Avançado)">
                Quarto módulo
              </option>
            </select>
            <p>{errors.course_module?.message}</p>
          </fieldset>

          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </>
  );
};
export default FormRegistro;
