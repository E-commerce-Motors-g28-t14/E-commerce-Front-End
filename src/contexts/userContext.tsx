import {
  Dispatch,
  SetStateAction,
  createContext,
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
import { iRecoveryPassword } from "../pages/Recovery/Recovery";
import { iEmail } from "../pages/Login/RecoveryModal/RecoveryModal";
import { iAttUser } from "../components/FormAttUser/attUserSchema";
import { iAttUserAddress } from "../components/FormAttUserAddress/attUserAddressSchema";
import { ICar } from "../interfaces/carInterface";
import { toast } from "react-toastify";
interface IUserProviderChildren {
  children: React.ReactNode;
}

export interface ICommentRequest{
  car: string,
  comment: string
}

export interface ICommentResponse {
  id: string,
  comment: string,
  createdAt: string,
  updatedAt: string,
  username: string,
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
  getUserById: (data: string) => void;
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
  SendEmailRecover: (data: iEmail) => void;
  setMessage: Dispatch<SetStateAction<string>>;
  message: string;
  GetUserById: (id: string) => void;
  ChangePassword: (data: iRecoveryPassword) => void;
  selectedSellerAdID: string;
  setSelectedSellerAdID: Dispatch<SetStateAction<string>>;
  selectedUserSeller: iUserWithCars;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setSelectedUserSeller: Dispatch<SetStateAction<iUserWithCars>>;
  attUserInfo: (data: iAttUser) => void;
  attUserAddress: (data: iAttUserAddress) => void;
  deleteUser: () => void;
  createComment: (data: ICommentRequest, carId: string) => void;
  handleLogout: () => void,
  getCommentsById: (idComment: string) => void;
  listComments: ICommentResponse[];
  setListComments: Dispatch<SetStateAction<ICommentResponse[]>>;
}

interface iUserWithCars {
  id: string;
  name: string;
  email: string;
  cpf: string;
  color: number;
  phone: string;
  birthdate: string;
  description: string;
  isSeller: boolean;
  createdAt: string;
  updatedAt: string;
  cars: ICar[];
}

export const UserContext = createContext({} as IUserProvider);

export const UserProvider = ({ children }: IUserProviderChildren) => {
  const [user, setUser] = useState<IUserResponse>({} as IUserResponse);
  const [isSeller, setSeller] = useState<boolean>(false);
  const [listComments, setListComments] = useState<ICommentResponse[]>([])
  const [adress, setAdress] = useState<CepResponse>({} as CepResponse);
  const [cep, setCep] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedSellerAdID, setSelectedSellerAdID] = useState<string>("");
  const [selectedUserSeller, setSelectedUserSeller] = useState<iUserWithCars>(
    {} as iUserWithCars
  );
  const [isPassword, setIsPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [tokenUser, setTokenUser] = useState<string>("");
  const [message, setMessage] = useState("");

  const route = useNavigate();
  const { toggleModal, toggleModalFormsUser } = useModalHook();


  useEffect(() => {
    const storedUserId = localStorage.getItem("@kmotors-g28:userId");
  
    if (storedUserId) {        
      setUserLogado(storedUserId);
    }
  }, [isLogin]);
  
  const setUserLogado = async (userId : string) => {
    try {   
      apiKmotorsService.defaults.headers.common["Authorization"] = `Bearer ${tokenUser}`;  
      const response = await apiKmotorsService.get(`/users/${userId}`);
      setUser(response.data);   
    } catch (error) {
      route("/login")
      toast("Logue novamente no site", {
        type: "warning"
      })
    }
  };

  const CreateUser = async (data: IUserRequest) => {
    const maxColor = 12;
    const minColor = 1;
    const color: number =
      Math.floor(Math.random() * (maxColor - minColor + 1)) + minColor;
    const form = { ...data, isSeller: isSeller, color: color };
    const newUser = await apiKmotorsService
      .post(`/users`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUser(res.data);
        toggleModal();
      })
      .catch((err) => {
        const { response } = err

        if(response.data.message === "cpf already exists"){
          toast.error("Esse cpf já está cadastrado, tente outro!");
          return;
        }
        if(response.data.message === "email already exists"){
          toast.error("Esse email já está cadastrado, tente outro!");
          return;
        }
        console.log(err);
      });
  };

  const getUserById = async (id: string) => {
    await apiKmotorsService
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      })
      .then((res) => {
        setSelectedUserSeller(res.data);
        route(`/seller/${res.data.name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetAdressInZipCode = async (cep: string) => {
    const formatedCep: string = cep.replace(/[^0-9]/g, "");
    if (formatedCep.length === 8) {
      await apiCepService
        .get(`${cep}/json`)
        .then((res) => {       
          setAdress(res.data);
          setCep("");
          return;
        })
        .catch((err) => {
          toast.error("Ops, deu algum erro ao tentar pegar os dados do seu cep, por favor, tente digitar novamente")
          setCep("")
          console.log(err);
        });
    } else {
      setAdress({} as CepResponse);
    }
  };

  const LoginUser = async (data: IUserLoginRequest) => {
    const token = await apiKmotorsService
    
      .post(`/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("@kmotors-g28", JSON.stringify(res.data.token));
        localStorage.setItem("@kmotors-g28:userId", res.data.user.id);
        setTokenUser(JSON.stringify(res.data.token));
        setIsLogin(true);      
        route(`/`);
        toast.success("Login efetuado com sucesso!")
      })
      .catch((err) => {
        const { response } = err

        if(response.data.message === "Invalid credentials"){
          toast.error("Email ou senha inválidos.")
        }
        console.log(err)
      });
  };

  const handleLogout = () => {    
    localStorage.removeItem("@kmotors-g28:userId");
    localStorage.removeItem("@kmotors-g28");
    setIsLogin(false); 
    setUser({} as IUserResponse)
    route(`/`);
    toast.success("Deslogado com sucesso!")
  };

  const SendEmailRecover = async (data: iEmail) => {
    console.log(data);
    await apiKmotorsService
      .post(`/recovery`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ChangePassword = async (data: iRecoveryPassword) => {
    await apiKmotorsService
      .patch(`users/recovery/${user.id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setMessage(res.data);
        route("/login");
        toast.success("Senha trocada com sucesso!")
      })
      .catch((err) => {
        toast.error("Ops, deu algum erro, tente novamente!")
        console.log(err);
      });
  };

  const GetUserById = (id: string) => {
    apiKmotorsService.get(`/users/${id}`).then((res) => {
      setUser(res.data);
    });
  };

  const attUserInfo = async (data: iAttUser) => {
    const token: string | null = localStorage.getItem("@kmotors-g28");

    if (!token) {
      route("/login");
    }

    await apiKmotorsService
      .patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        toggleModalFormsUser();
        toast.success("Informações do perfil atualizado com sucesso!")
      })
      .catch((err) => {
        const { response } = err

        if(response.data.message === "cpf already exists"){
          toast.error("Esse cpf já está cadastrado, tente outro!");
          return;
        }
        if(response.data.message === "email already exists"){
          toast.error("Esse email já está cadastrado, tente outro!");
          return;
        }
        console.log(err);
      });
  };
  const attUserAddress = async (data: iAttUserAddress) => {
    const token: string | null = localStorage.getItem("@kmotors-g28");

    if (!token) {
      route("/login");
    }

    await apiKmotorsService
      .patch(`/users/${user.id}/address`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        toggleModalFormsUser();
        toast.success("Informações de endereço atualizado com sucesso!")
      })
      .catch((err) => {
        toast.error("Ops, deu algum erro! Tente novamente.")
        console.log(err);
      });
  };

  const deleteUser = async () => {
    const token: string | null = localStorage.getItem("@kmotors-g28");

    if (!token) {
      route("/login");
    }

    await apiKmotorsService
      .delete(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      })
      .then((res) => {
        localStorage.removeItem("@kmotors-g28");
        route("/login");
        toast.success("Usuário deletado com sucesso!")
      })
      .catch((err) => {
        toast.error("Ops, ocorreu algum erro ao deletar o usuário, tente novamente.")
        console.log(err);
      });
  };

  const createComment = async (data: ICommentRequest, carId: string): Promise<void> => {

    const token: string | null = localStorage.getItem("@kmotors-g28");

    await apiKmotorsService
      .post(`/comments`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(token!)}`,
        },
      })
      .then((res) => {
        toast.success("Comentário criado com sucesso.")
        return res.data
      })
      .then(() => getCommentsById(carId))
      .catch((err) => {
        toast.error("Provavelmente o carro foi deletado, atualize a página antes de tentar comentar novamente.")
        console.log(err);
      });
  };

  const getCommentsById = async (idCar: string) => {
    try{
      const request = await apiKmotorsService.get(`/comments/cars/${idCar}`)
      setListComments(request.data)
      return request.data
    }catch(error){
      console.log(error)
    }
  }

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
        SendEmailRecover,
        message,
        setMessage,
        GetUserById,
        ChangePassword,
        selectedSellerAdID,
        setSelectedSellerAdID,
        selectedUserSeller,
        setSelectedUserSeller,
        getUserById,
        showModal,
        setShowModal,
        attUserInfo,
        attUserAddress,
        deleteUser,
        createComment,
        handleLogout,
        getCommentsById,
        listComments,
        setListComments
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
