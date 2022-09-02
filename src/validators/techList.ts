import * as yup from "yup";

const schemaTechList = yup.object().shape({
  title: yup.string().required("Tecnologia obrigatória"),
  status: yup.string().required("Bio obrigatório"),
});

export default schemaTechList;
