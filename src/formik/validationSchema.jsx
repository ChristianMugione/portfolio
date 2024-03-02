import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string().required("Debe introducir un correo válido"),
  message: Yup.string(),
});

export default validationSchema;
