import { ContainerCardAdvertiser } from "./style";
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { StyledButton } from "../../styles/buttons";
import { Link } from "react-router-dom";
import { IUserResponse } from "../../interfaces/userIterface";
import { useContext, useEffect } from "react";
import { CarsContext } from "../../contexts/carsContext";
import { useUserHook } from "../../hooks";

/* interface IMockUser {

interface IMockUser {
  name: string;
  isSeller: boolean;
  description: string;
}

export const mockUser: IMockUser = {
  name: "Samuel Leão",
  isSeller: true,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
}; */
// };

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
      {/* <Link to={`/seller/${user.name}`}>
        {" "} */}
      <StyledButton className="big grey1" onClick={() => getUserById(user.id)}>
        {user.name}
        Ver todos anúncios
      </StyledButton>
      {/* </Link> */}
    </ContainerCardAdvertiser>
  );
};
