import * as Yup from "yup";
const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, "User name must be minimum 4 character")
    .required("This field is required"),
  email: Yup.string()
    .email("Email must be valid")
    .required("This field is required"),
  status: Yup.string().required("This field is required"),
});
export default validationSchema;
