import schemaTechList from "../../validators/techList";
import { Container, Content } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { motion } from "framer-motion";
import { TechContext } from "../../contexts/TechContext";

const RegisterModal = () => {
  const { addTechnology, showModal, setShowModal } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaTechList) });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Content>
          <section>
            <p>Cadastrar Tecnologia</p>
            <button onClick={() => setShowModal(!showModal)}>X</button>
          </section>
          <form noValidate={true} onSubmit={handleSubmit(addTechnology)}>
            <fieldset>
              <label htmlFor="title">Nome</label>
              <input
                id="title"
                type="text"
                placeholder="Tecnologia"
                {...register("title")}
              />
              <p>{errors.title?.message}</p>
            </fieldset>

            <fieldset>
              <label htmlFor="status">Selecionar status</label>
              <select id="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <p>{errors.status?.message}</p>
            </fieldset>

            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </Content>
      </Container>
    </motion.div>
  );
};

export default RegisterModal;
