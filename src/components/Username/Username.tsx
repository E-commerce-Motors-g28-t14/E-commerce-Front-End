import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { ContainerUsername } from "./style";

interface IUserNameProps {
  name: string;
  color: number;
}

const Username = ({
  name = "Carregando...",
  color = 5,
}: IUserNameProps) => {

  return (
    <ContainerUsername>    
      <InitialsName
        width={"32"}
        height={"32"}
        name={name}
        fontSize={"14px"}
        color={color}
      />
      <Name fontSize={"16px"} name={name} />
    </ContainerUsername>
  );
};

export default Username;
