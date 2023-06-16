import { ListCar, ListCarContainer } from "./style";
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import carSportage from "../../assets/banco de exemplos/CARRO1 (1).png";
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
  name: string;
  isActive: boolean;
}

const cars = [
  {
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133.900,00",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    name: "Samuel ALmeida",
    photos: carSportage,
    isActive: true,
  },
  {
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133.900,00",
    name: "Samuel ALmeida",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    isActive: true,
    photos: carSportage,
  },
  {
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133.900,00",
    name: "Samuel ALmeida",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    isActive: false,
    photos: carSportage,
  },
  {
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133.900,00",
    name: "Samuel ALmeida",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    isActive: true,
    photos: carSportage,
  },
];

const SellerListCar = () => {
  const { user } = useContext(UserContext);

  return (
    <ListCarContainer>
      {cars && cars.length > 0 ? (
        cars.map((car, key) => (
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

            <div className="info-car">
              <div className="info-car-tags">
                <span className="tag-car-info">{car.km} KM</span>
                <span className="tag-car-info">{car.year}</span>
              </div>

              <span className="tag-car-info price">
                R$ {Number(car.price).toFixed(2).replace(".", ",")}
              </span>

              <div
                className="isActive"
                style={{
                  backgroundColor: car.isActive
                    ? "var(--color-brand-1)"
                    : "var(--color-grey-4)",
                }}
              >
                <span>{car.isActive ? "Ativo" : "Inativo"}</span>
              </div>
            </div>
            <div className="btn-update-ad">
              <button>Editar</button>
              <button>Ver detalhes</button>
            </div>
          </ListCar>
        ))
      ) : (
        <h4 className="info-message">Você não possui nenhum anúncio.</h4>
      )}
    </ListCarContainer>
  );
};

export default SellerListCar;
