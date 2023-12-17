import { axios } from "@/lib/axios";

import { User, UserRegistrationDTO } from "../types";
import { useMutation } from "@tanstack/react-query";
import storage from "@/utils/storage";

type RegisterResponse = { user: User; token: string };

export const registerWithEmailAndPassword = (
  data: UserRegistrationDTO
): Promise<RegisterResponse> => {
  return axios.post("/auth/register", data);
};

export const useRegisterUser = () => {
  return useMutation({
    onSuccess: (data) => {
      storage.setToken(data.token);
      storage.setUser(data.user);
    },
    mutationFn: registerWithEmailAndPassword,
  });
};