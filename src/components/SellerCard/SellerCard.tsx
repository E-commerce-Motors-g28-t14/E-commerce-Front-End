import { mockUser } from "../CardAdvertiser";
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { ContainerSellerCard } from "./style";

const SellerCard = () => {
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
        <button className="btn-new-ad">Criar anuncio</button>
      </div>
    </ContainerSellerCard>
  );
};

export default SellerCard;
