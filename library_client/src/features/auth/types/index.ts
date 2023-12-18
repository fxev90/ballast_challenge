export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export interface User {
  id: number;
  email: string;
  names: string;
  last_names: string;
  user_type: "Librarian" | "Member";
}

export interface UserRegistrationDTO extends Omit<User, "id" | "user_type"> {
  password: string;
  password_confirmation: string;
}

export type UserResponse = {
  jwt: string;
  user: User;
};
