import { http } from "api/http";

const createProfile = (data: any) => {
  return http.post("/profile", data);
};

const createEducation = (data: any) => {
  return http.post("/education", data);
};

const createExperience = (data: any) => {
  return http.post("/experience", data);
};

const UpdateProfile = ({ id, data }: any) => {
  return http.patch(`/profile/${id}`, data);
};

const UpdateEducation = ({ id, data }: any) => {
  return http.patch(`/education/${id}`, data);
};

const UpdateExperience = ({ id, data }: any) => {
  return http.patch(`/experience/${id}`, data);
};

const getMyProfile = () => {
  return http.get("profile/my-profile");
};

const getOneExperience = ({ queryKey }: any) => {
  return http.get(`/experience/${queryKey[1]}`);
};

const getOneEducation = ({ queryKey }: any) => {
  return http.get(`/education/${queryKey[1]}`);
};

export {
  getMyProfile,
  createProfile,
  UpdateProfile,
  createEducation,
  createExperience,
  UpdateEducation,
  UpdateExperience,
  getOneExperience,
  getOneEducation,
};
