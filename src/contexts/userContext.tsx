import {
  Context,
  Dispatch,
  SetStateAction,
  createContext,
  Provider,
  useState,
  useEffect,
} from "react";
import {
  IUserLoginRequest,
  IUserRequest,
  IUserResponse,
} from "../interfaces/userIterface";
import { apiCepService, apiKmotorsService } from "../services";
import { useNavigate } from "react-router-dom";
import { useModalHook } from "../hooks";
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
  getUserById: (data:string) =>void;
  isSeller: boolean;
  setSeller: Dispatch<SetStateAction<boolean>>;
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  user: IUserResponse;
  setUser: Dispatch<SetStateAction<IUserResponse>>;
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
  selectedSellerAdID: string;
  setSelectedSellerAdID: Dispatch<SetStateAction<string>>;
  selectedUserSeller: IUserResponse;
  setSelectedUserSeller: Dispatch<SetStateAction<IUserResponse>>;
}

export const UserContext = createContext({} as IUserProvider);

export const UserProvider = ({ children }: IUserProviderChildren) => {
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);
  const [isSeller, setSeller] = useState<boolean>(false);
  const [adress, setAdress] = useState<CepResponse>({} as CepResponse);
  const [cep, setCep] = useState("");
  const [selectedSellerAdID, setSelectedSellerAdID] = useState<string>("");
  const [selectedUserSeller, setSelectedUserSeller] = useState<IUserResponse>(
    {} as IUserResponse
  );
  const [isPassword, setIsPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [tokenUser, setTokenUser] = useState<string>("");

  const route = useNavigate();
  const { toggleModal } = useModalHook();

  const CreateUser = async (data: IUserRequest) => {
    const form = { ...data, isSeller: isSeller };
    const newUser = await apiKmotorsService
      .post(`/users`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        toggleModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserById = async (id: string) => {
    await apiKmotorsService.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      })
      .then((res) => {
        setSelectedUserSeller(res.data);
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
    const token = await apiKmotorsService.post(`/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("@kmotors-g28", JSON.stringify(res.data.token));
        setTokenUser(JSON.stringify(res.data.token));
        setIsLogin(true);
        setUser(res.data.user);
        route(`/`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider
      value={{
        isLogin,
        setIsLogin,
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
        selectedSellerAdID,
        setSelectedSellerAdID,
        selectedUserSeller,
        setSelectedUserSeller,
        getUserById
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
