import { ICar } from "../../interfaces/carInterface";
import { ContainerCardCar } from "./style";

const CardCar = ({car}:{ car: ICar }) => {
  // const car: ICar = {
  //   brand: "Mercedes Benz",
  //   model: "A 200 CGI ADVANCE SEDAN",
  //   year: 2013,
  //   km: 0,
  //   color: "Branco",
  //   isPromo: true,
  //   price: "22000",
  //   description: "é um carro",
  //   isActive: true,
  //   createdAt: "2023-06-04T16:17:49.041Z",
  //   updatedAt: "2023-06-04T16:17:49.041Z",
  //   id: "hiheiuhieuhaiheuaheiheuihiauhuieh"
  // };

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
