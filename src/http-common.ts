import axios from "axios";
import { getAuthStorage } from "./utils/jwt-token";
import { AppConfig } from "./config";

const session = getAuthStorage();

export default axios.create({
  baseURL: AppConfig.BACKEND_API,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${session?.token}`,
  },
});
