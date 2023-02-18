import { http } from "api/http";

const signup = (data: any) => {
  return http.post("/auth/sign-up", data);
};

const signin = (data: any) => {
  return http.post("/auth/sign-in", data);
};

export { signup, signin };
