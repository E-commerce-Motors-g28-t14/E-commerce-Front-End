import { ICar } from "./carInterface";

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

export interface iAdress {
  district: string;
  zipCode: string;
  state: string;
  city: string;
  street: string;
  complement: string;
  number: string;
  id: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  color: string;
  phone: string;
  birthdate: string;
  description: string;
  isSeller: boolean;
  createdAt: string;
  updatedAt: string;
  address: iAdress;
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}


export interface IUserResponse {
  id:string
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;   
  description?: string | null;
  isSeller: boolean;
  color: number;
  address: IAdresse;
  cars: ICar[];
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IAdresse{
  district: string;
  zipCode: string;
  state: string;
  city: string;
  street: string;
  complement: string;
  number: string;
}