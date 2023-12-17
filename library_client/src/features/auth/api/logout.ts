import { axios } from "@/lib/axios";
import { LoginCredentialsDTO, User } from "../types";
import storage from "@/utils/storage";
import { useMutation } from "@tanstack/react-query";

export const logoutWithEmailAndPassword = (
  data: LoginCredentialsDTO
): Promise<{ user: User; access_token: string }> => {
  return axios.post("/logout", data);
};

export const useLogin = () => {
  return useMutation({
    onSuccess: () => {
      storage.clearToken();
      storage.clearUser();
    },
    mutationFn: logoutWithEmailAndPassword,
  });
};