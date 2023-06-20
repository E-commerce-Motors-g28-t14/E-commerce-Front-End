 
import { StyledCoverDescription } from "./style";
import { ICar } from "../../../interfaces/carInterface";



const Description = ({car}:{ car: ICar }) => {
  return (
    <StyledCoverDescription>
      <h2>Descrição</h2>
      <p>
        {car.description}
      </p>
    </StyledCoverDescription>
  );
};

export default Description;
