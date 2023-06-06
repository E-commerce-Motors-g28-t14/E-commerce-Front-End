import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import { ContainerUsername } from "./style";

const Username = () => {
  const user = {
    name: "Maria Fernanda Batista",
  };
  

  return (
    <ContainerUsername>
       <InitialsName width={"32"} height={"32"} name={user.name} fontSize={"14px"}/>      
        <Name fontSize={"16px"} name={user.name}/>
    </ContainerUsername>
  );
};

export default Username;
