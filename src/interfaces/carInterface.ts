import { IUserResponse } from "./userIterface";

export interface ICar {
  brand: string;
  model: string;
  year: number;
  km: number;
  color: string;
  isPromo: boolean;
  price: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
  photos: ICarPhotos[];
  user: IUserResponse;
}

export interface ICarPhotos {
  id: string;
  isCover: boolean;
  imageLink: string;
}

export interface ICarsResponse {
  id: string;
  brand: string;
  model: string;
  year: number;
  km: number;
  color: string;
  description: string | null;
  isActive: boolean;
  isPromo: boolean;
  fuel: number;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}
