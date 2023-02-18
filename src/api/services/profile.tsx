import { http } from "api/http";

const getProfile = () => {
  return http.get("profile/my-profile");
};

const signup = (data: any) => {
  return http.post("/auth/sign-up", data);
};

const signin = (data: any) => {
  return http.post("/auth/sign-in", data);
};

export { getProfile };
