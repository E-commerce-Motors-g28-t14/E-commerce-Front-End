import {
  Context,
  Dispatch,
  SetStateAction,
  createContext,
  Provider,
  useState,
  useEffect,
} from "react";
import { IUserLoginRequest, IUserRequest } from "../interfaces/userIterface";
import { apiCepService, apiKmotorsService } from "../services";
import { useNavigate } from "react-router-dom";
interface IUserProviderChildren {
  children: React.ReactNode;
}

interface CepResponse {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: "";
  ibge: string;
  localidade: string;
  siafi: string;
  uf: string;
  logradouro: string;
}

interface IUserProvider {
  CreateUser: (data: IUserRequest) => void;
  isSeller: boolean;
  setSeller: Dispatch<SetStateAction<boolean>>;
  user: IUserRequest;
  setUser: Dispatch<SetStateAction<IUserRequest>>;
  GetAdressInZipCode: (cep: string) => void;
  adress: CepResponse;
  setAdress: Dispatch<SetStateAction<CepResponse>>;
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
  isPassword: string;
  setIsPassword: Dispatch<SetStateAction<string>>;
  LoginUser: (data: IUserLoginRequest) => void;
  setTokenUser: Dispatch<SetStateAction<string>>;
  tokenUser: string;
}

export const UserContext = createContext({} as IUserProvider);

export const UserProvider = ({ children }: IUserProviderChildren) => {
  const [user, setUser] = useState<IUserRequest>({} as IUserRequest);
  const [isSeller, setSeller] = useState<boolean>(false);
  const [adress, setAdress] = useState<CepResponse>({} as CepResponse);
<<<<<<< HEAD
  
=======
  const [cep, setCep] = useState("");
  const [isPassword, setIsPassword] = useState<string>("");
  const [tokenUser, setTokenUser] = useState<string>("");
  const route = useNavigate();
>>>>>>> aa9db89a5972046192d654df919f5ac396f03ab6
  const CreateUser = async (data: IUserRequest) => {
    const form = { ...data, isSeller: isSeller };
    const newUser = await apiKmotorsService
      .post(`/users`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUser(res.data);
        route(`/login`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetAdressInZipCode = async (cep: string) => {
    await apiCepService
      .get(`${cep}/json`)
      .then((res) => {
        console.log(res.data);
        setAdress(res.data);
        setCep("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LoginUser = async (data: IUserLoginRequest) => {
    const token = await apiKmotorsService
      .post(`/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setTokenUser(res.data);
        route(`/`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{
        CreateUser,
        user,
        setUser,
        isSeller,
        GetAdressInZipCode,
        setSeller,
        adress,
        setAdress,
        cep,
        isPassword,
        setIsPassword,
        setCep,
        LoginUser,
        tokenUser,
        setTokenUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
