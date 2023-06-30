 
import { StyledCoverDescription } from "./style";
import { ICar } from "../../../interfaces/carInterface";
import { iCarReturn } from "../../../contexts/carsContext";



const Description = ({car}:{ car: iCarReturn }) => {
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
