import service from "../../instance";

export const create = (payload) => service.post("payment", payload);
export const list = () => service.get(`payment`);
