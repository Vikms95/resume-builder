import axios from "axios";

export const getClient = async () => {
  return axios.create({
    baseURL: "http://localhost:3001",
  });
};
