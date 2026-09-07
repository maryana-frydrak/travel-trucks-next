import axios from "axios";

export const campersApi = axios.create({
  baseURL: "https://campers-api.goit.study",
});
