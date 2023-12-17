import { axios } from "@/lib/axios";

export const getUser = (): Promise<unknown> => {
  return axios.get("/auth/me");
};
