export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export interface User {
  names: string;
  last_names: string;
  email: string;
  updated_at: Date;
  created_at: Date;
  id: number;
}

export interface UserRegistrationDTO
  extends Omit<User, "updated_at" | "created_at" | "id"> {
  password: string;
  password_confirmation: string;
}

export type UserResponse = {
  jwt: string;
  user: User;
};
