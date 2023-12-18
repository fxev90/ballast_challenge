import { axios } from "@/lib/axios";
import { LoginCredentialsDTO, User } from "../types";
import storage from "@/utils/storage";
import { useMutation } from "@tanstack/react-query";

export const clearSession = () => {
  storage.clearToken();
  storage.clearUser();
  window.location.assign(window.location.origin as unknown as string);
};

export const logoutWithEmailAndPassword = (
  data: LoginCredentialsDTO
): Promise<{ user: User; access_token: string }> => {
  return axios.post("/logout", data);
};

export const useLogout = () => {
  return useMutation({
    onSuccess: () => {
      clearSession();
    },
    mutationFn: logoutWithEmailAndPassword,
  });
};
