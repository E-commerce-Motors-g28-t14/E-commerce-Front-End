import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { ContainerUsername } from "./style";

interface IUserNameProps {
  name: string;
}

const Username = ({ name = "Maria Fernanda Batista" }: IUserNameProps) => {
  return (
    <ContainerUsername>
      <InitialsName width={"32"} height={"32"} name={name} fontSize={"14px"} />
      <Name fontSize={"16px"} name={name} />
    </ContainerUsername>
  );
};

export default Username;
