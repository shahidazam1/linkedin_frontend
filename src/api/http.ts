import axios from "axios";

export const http = axios.create({
  baseURL:
    process.env.NODE_ENV == "development"
      ? process.env.REACT_APP_API_URL_DEV
      : process.env.REACT_APP_API_URL_PROD,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}` || "",
  },
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (err.message === "Network Error") {
      alert("Network Error");
    }
    if (
      err.response.data.statusCode === 401 &&
      err.response.config.method === "get"
    ) {
      localStorage.clear();
      window.location.href = "/signin";
    }
    return Promise.reject(err);
  }
);
