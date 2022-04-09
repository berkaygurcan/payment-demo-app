import service from "../../instance";

export const list = () => service.get(`packages`);
