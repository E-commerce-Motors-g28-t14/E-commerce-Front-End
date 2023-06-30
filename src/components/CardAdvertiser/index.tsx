import { ContainerCardAdvertiser } from "./style";
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { StyledButton } from "../../styles/buttons"; 
import { IUserResponse } from "../../interfaces/userIterface"; 
import { useUserHook } from "../../hooks";

 

export const CardAdvertiser = ({
  user,
}: {
  user: IUserResponse;
}): JSX.Element => {
  const { getUserById } = useUserHook();

  return (
    <ContainerCardAdvertiser>
      <InitialsName
        width="104"
        height="104"
        fontSize="36px"
        name={user.name}
        color={user.color}
      />
      <Name fontSize="20px" name={user.name} />
      <div className="container-description">
        <span>{user.description}</span>
      </div>     
      <StyledButton className="big grey1" onClick={() => getUserById(user.id)}>   
        Ver todos anúncios
      </StyledButton>
 
    </ContainerCardAdvertiser>
  );
};
