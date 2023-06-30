import { iCarReturn } from "../../contexts/carsContext";
import { ICar } from "../../interfaces/carInterface";
import { ContainerCardCar } from "./style";

const CardCar = ({car}:{ car: iCarReturn }) => {
  return (
    <ContainerCardCar>
      <div className="container-car-name">
        <h1>{`${car.brand} ${car.model} `}</h1>
      </div>
      <div className="container-car-info">
        <ul className="container-car-info">
          <li key={car.id}>
            <div className="car-tag">
            <span>{car.year}</span>
            <span>{car.km} KM</span>
            </div>
            
            <h3>R$ {parseInt(car.price).toFixed(2).replace('.', ',')}</h3>
          </li>      
        </ul>
      </div>
      <div className="container-btn-buy">

        <button className="btn-buy">
            Comprar
        </button>
      </div>
    </ContainerCardCar>
  );
};

export default CardCar;
