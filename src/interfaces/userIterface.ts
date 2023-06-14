export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  password: string;
  confirmPassword: string;
  isSeller: boolean;
  district: string;
  zipCode: string;
  state: string;
  city: string;
  street: string;
  complement: string;
  number: string;
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}
