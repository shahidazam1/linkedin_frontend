import { http } from "api/http";

const addConnection = (data: any) => {
  return http.post("/connections", data);
};

const UpdateSkill = ({ id, data }: any) => {
  return http.patch(`/connections/${id}`, data);
};

const getAllPeople = () => {
  return http.get("connections");
};

const getAllInvitations = () => {
  return http.get("/connections/invitations");
};

export { addConnection, getAllPeople, getAllInvitations };
