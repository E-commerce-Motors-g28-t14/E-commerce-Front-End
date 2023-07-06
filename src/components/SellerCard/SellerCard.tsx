import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useModalHook } from "../../hooks";
import { StyledButton } from "../../styles/buttons";
//import { mockUser } from "../CardAdvertiser";
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { ContainerSellerCard } from "./style";
import { apiKmotorsService } from "../../services";
import { iAdress } from "../../interfaces/userIterface";
import { ICar } from "../../interfaces/carInterface";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface iUserResponse {
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
  address: iAdress;
  cars: ICar[];
}

const SellerCard = () => {
  const { toggleModalFormsCar } = useModalHook();

  const [user, setUser] = useState({} as iUserResponse);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("@kmotors-g28");
    const getUserInfo = async () => {
      try {
        const { data } = await apiKmotorsService.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${JSON.parse(token!)}`,
          },
        });
        setUser(data);
      } catch (err) {
        toast.error("Ocorreu algum erro ao recuperar os dados do usuário, tente logar novamente.");
        navigate("/login");
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getUserInfo();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <ContainerSellerCard>
      <div className="container-data-seller">
        <InitialsName
          width={"104"}
          height={"104"}
          name={user.name}
          fontSize={"36px"}
          color={user.color}
        />
        <div className="container-seller-Name">
          <Name fontSize={"20px"} name={user.name} />
          <span className="tag-seller">Anunciante</span>
        </div>
        <p>{user.description}</p>
        <StyledButton
          className="big outlineBrand1 btn-new-ad"
          onClick={toggleModalFormsCar}
        >
          Criar anuncio
        </StyledButton>
      </div>
    </ContainerSellerCard>
  );
};

export default SellerCard;
