import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useModalHook } from "../../hooks";
import { StyledButton } from "../../styles/buttons";
import { mockUser } from "../CardAdvertiser";
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { ContainerSellerCard } from "./style";

const SellerCard = () => {
  const {user} = useContext(UserContext);
  const { toggleModal } = useModalHook();

  return (
    <ContainerSellerCard>
      <div className="container-data-seller">
        <InitialsName
          width={"104"}
          height={"104"}
          name={mockUser.name}
          fontSize={"36px"}
        />
        <div className="container-seller-Name">
          <Name fontSize={"20px"} name={mockUser.name} />
          <span className="tag-seller">Anunciante</span>
        </div>
        <p>{mockUser.description}</p>
        <StyledButton
          className="big outlineBrand1 btn-new-ad"
          onClick={toggleModal}
        >
          Criar anuncio
        </StyledButton>
      </div>
    </ContainerSellerCard>
  );
};

export default SellerCard;
