import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .matches(
      /^[A-Za-z(\W)]+$/,
      "Deve conter ao menos uma letra minúscula, uma maiúscula e um caracter especial"
    )
    .min(8, "No mínimo 8 caracteres")
    .required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .required("Senha obrigatória")
    .oneOf([yup.ref("password")], "Confirmação deve ser igual à senha"),
  bio: yup.string().required("Bio obrigatório"),
  contact: yup.string().required("Contato obrigatório"),
  course_module: yup.string().required("Bio obrigatório"),
});

export default schema;
