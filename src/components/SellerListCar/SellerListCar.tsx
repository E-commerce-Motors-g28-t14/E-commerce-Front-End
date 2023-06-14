 import { ListCar, ListCarContainer } from "./style";
 import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import carSportage from "../../assets/banco de exemplos/CARRO1 (1).png"
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";


interface ICar {
    brand: string;
    model: string;
    year: number;
    km: string;
    price: string;
    description: string;  
    photos: string;
    name: string
  }

const cars = [{
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133.900,00",
    description: "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    name: "Samuel ALmeida",
    photos: carSportage,
  },
  {
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133.900,00",
    name: "Samuel ALmeida",
    description:"Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
 
    photos: carSportage,
  },{
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133.900,00",
    name: "Samuel ALmeida",
    description:"Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
 
    photos: carSportage,
  },
  {
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133.900,00",
    name: "Samuel ALmeida",
    description:"Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
 
    photos: carSportage,
  },]

const SellerListCar = () => {  

  const {user} = useContext(UserContext)

  return (
    <ListCarContainer>
      {cars.map((car, key) => {
        return (
          <ListCar key={key}>
            <div>
              <img src={car.photos} alt={`Foto do carro ${car.model}`} />
            </div>
            <div>
              <span>{car.brand}</span>
              <span>-</span>
              <span>{car.model}</span>
            </div>
            <div>
              <p>{car.description}</p>
            </div>
            <div>
              <InitialsName              
                name={user.name}
                fontSize="16px"
                height="32"
                width="32"
              />
              <Name fontSize="14px" name={user.name} />
            </div>
            <div>
              <div>
                <span>{car.km} KM</span>
                <span>{car.year}</span>
              </div>
              <div>
                <span>R$ {car.price}</span>
              </div>
              <div className="promo">
                <span>$</span>
              </div>
            </div>
          </ListCar>
        );
      })}
    </ListCarContainer>
  ); 
 
};

export default SellerListCar;
