import { axios } from "@/lib/axios";
import { LoginCredentialsDTO } from "../types";

export const loginWithEmailAndPassword = (
  data: LoginCredentialsDTO
): Promise<unknown> => {
  return axios.post("/auth/login", data);
};
