export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export interface User {
  names: string;
  last_names: string;
  email: string;
  id: number;
}

export interface UserRegistrationDTO extends Omit<User, "id"> {
  password: string;
  password_confirmation: string;
}

export type UserResponse = {
  jwt: string;
  user: User;
};
