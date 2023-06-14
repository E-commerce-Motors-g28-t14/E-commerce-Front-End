import { StyledHomeCardCar, StyledListCardsCar } from "./style";
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";

import carAudi from "../../assets/banco de exemplos/audi_PNG1762.png";
import carTiguan from "../../assets/banco de exemplos/CARRO1 (1).png";
import carFusion from "../../assets/banco de exemplos/CARRO1 (2).png";
import carSportage from "../../assets/banco de exemplos/CARRO1 (3).png";
import carTouareg from "../../assets/banco de exemplos/CARRO1 (6).png";
import carCamaro from "../../assets/banco de exemplos/CARRO1 (8).png";
import carFusca from "../../assets/banco de exemplos/fusca.png";

export interface imockListCars {
  brand: string;
  model: string;
  year: number;
  km: string;
  price: string;
  description: string;
  seller: string;
  photos: string;
}

export const sellers: string[] = [
  "Samuel Leão",
  "Evelin Camila",
  "Camila",
  "Jonas Figueiredo",
  "Eduarda Cunha",
  "Ana Maria",
  "Luis Eduardo",
  "Julia Bittencourt",
  "Rafael Machado",
];

export const mockListCars: imockListCars[] = [
  {
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133.900,00",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    seller: sellers[0],
    photos: carSportage,
  },
  {
    brand: "Audi",
    model: "R8",
    year: 2020,
    km: "12.000",
    price: "843.900,00",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    seller: sellers[1],
    photos: carAudi,
  },
  {
    brand: "Ford",
    model: "Fusion",
    year: 2015,
    km: "244.000",
    price: "88.900,00",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    seller: sellers[3],
    photos: carFusion,
  },
  {
    brand: "Volkswagem",
    model: "Tiguan",
    year: 2016,
    km: "322.000",
    price: "94.900,00",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    seller: sellers[3],
    photos: carTiguan,
  },
  {
    brand: "Volkswagem",
    model: "Touareg",
    year: 2014,
    km: "222.000",
    price: "65.900,00",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    seller: sellers[4],
    photos: carTouareg,
  },
  {
    brand: "Chevrolet",
    model: "Camaro",
    year: 2016,
    km: "66.000",
    price: "129.900,00",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    seller: sellers[5],
    photos: carCamaro,
  },
  {
    brand: "Volkswagem",
    model: "Fusca",
    year: 1979,
    km: "999.000",
    price: "45.900,00",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    seller: sellers[6],
    photos: carFusca,
  },
  {
    brand: "Volkswagem",
    model: "Fusca",
    year: 1979,
    km: "999.000",
    price: "45.900,00",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    seller: sellers[6],
    photos: carFusca,
  },
];

export const HomeListCardsCar = (): JSX.Element => {


  return (
    <StyledListCardsCar>
      {mockListCars.map((car, key) => {
        return (
          <StyledHomeCardCar key={key}>
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
                name={car.seller}
                fontSize="16px"
                height="32"
                width="32"
              />
              <Name fontSize="14" name={car.seller} />
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
          </StyledHomeCardCar>
        );
      })}
    </StyledListCardsCar>
  );
};
