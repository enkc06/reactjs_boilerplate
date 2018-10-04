import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async config => {
    // Do something before request is sent
    //If the header does not contain the token and the url not public, redirect to login
    const loginToken = localStorage.getItem("userToken");
    // console.log(loginToken);

    // if token is found add it to the header
    if (loginToken != null || loginToken !== "undefined") {
      config.headers = {
        Authorization: loginToken,
        "Content-Type": "application/json"
      };
    }
    return config;
  },
  error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      logger.log(error);
      toast.error("An unexpected error occurrred.");

      // auth.logout();
      // router.replace("/auth/login");
    }

    return Promise.reject(error);
  }
);

export const httpClient = axiosInstance;
