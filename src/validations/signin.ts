import { object, string } from "yup";

let SigninDefaultValues = {
  userName: "",
  password: "",
};

let SigninSchema = object().shape({
  userName: string().required(),
  password: string().required(),
});

export { SigninDefaultValues, SigninSchema };
