export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export type UserRegistrationDTO = {
  names: string;
  last_names: string;
  email: string;
  password: string;
  password_confirmation: string;
};
