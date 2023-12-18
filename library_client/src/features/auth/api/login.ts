import { axios } from "@/lib/axios";
import { LoginCredentialsDTO, User } from "../types";
import storage from "@/utils/storage";
import { useMutation } from "@tanstack/react-query";

export const loginWithEmailAndPassword = (
  data: LoginCredentialsDTO
): Promise<{ user: User; access_token: string }> => {
  return axios.post("/auth/login", data);
};

export const useLogin = () => {
  return useMutation({
    onSuccess: (data) => {
      storage.setToken(data.access_token);
      storage.setUser(data.user);
    },
    mutationFn: loginWithEmailAndPassword,
  });
};