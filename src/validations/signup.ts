import { number, object, string } from "yup";

let SignupDefaultValues = {
  name: "",
  email: "",
  password: "",
};

let SignupSchema = object().shape({
  name: string().required(),
  email: string().required(),
  password: string().required(),
});

export { SignupDefaultValues, SignupSchema };
