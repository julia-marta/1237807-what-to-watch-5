import axios from "axios";
import swal from 'sweetalert';

const HttpCode = {
  UNAUTHORIZED: 401,
};

const {UNAUTHORIZED} = HttpCode;

const BASE_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response, request} = error;

    if (response) {
      if (response.status === UNAUTHORIZED) {
        onUnauthorized();
        return error;
      } else {
        swal(`Error ${response.status}`, `${response.statusText}`, `error`);
      }
    } else if (request) {
      swal(`Error`, `No response was received`, `error`);
    } else {
      swal(`Error`, `Something went wrong!`, `error`);
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
