import * as Yup from "yup";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email must be valid")
    .required("Please enter email"),
  psw: Yup.string()
  .required("Please enter password"),
});
export default validationSchema;
