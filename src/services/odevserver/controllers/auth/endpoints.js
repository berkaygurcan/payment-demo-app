import service from "../../instance";

export const signup = (payload) =>
  service.post("auth/signup", payload).then((response) => {
    return response;
  });
