import { ListCar, ListCarContainer } from "./style";
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";
import carSportage from "../../assets/banco de exemplos/CARRO1 (1).png";
import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";
import { CarsContext } from "../../contexts/carsContext";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../styles/buttons";
import { ModalBody } from "../ModalBody";
import { FormUpdateCar } from "../FormUpdateCar";
import { useModalHook } from "../../hooks";

interface ICar {
  id: string;
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
    id: "24613546845",
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133900,00",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    name: "Samuel ALmeida",
    photos: carSportage,
    isActive: true,
  },
  {
    id: "2461346845",
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133900,00",
    name: "Samuel ALmeida",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    isActive: true,
    photos: carSportage,
  },
  {
    id: "2461346845",
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133900,00",
    name: "Samuel ALmeida",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    isActive: false,
    photos: carSportage,
  },
  {
    id: "24616845",
    brand: "Kia",
    model: "Sportage",
    year: 2019,
    km: "144.000",
    price: "133900,00",
    name: "Samuel ALmeida",
    description:
      "Itens de série: ar-condicionado digital, bancos de couro, chave presencial com partida do motor por botão, airbags laterais e de cortina e controles de estabilidade e tração. Ainda fazem parte da lista de itens de série volante esportivo “D-Cut”, com paddle shift e piloto automático, rodas de liga leve aro 19″ e pneus 245/45.",
    isActive: true,
    photos: carSportage,
  },
];

const SellerListCar = () => {
  const { user } = useContext(UserContext);
  const { toggleModal, isOpenModal } = useModalHook();
  const { ListCarUser, getCarsUser, getCarById, selectCar } =
    useContext(CarsContext);

  const [selectCarID, setSelectCarID] = useState();

  const handleClick = (carID: any) => {
    setSelectCarID(carID);
    getCarById(carID);
    console.log(carID);
    toggleModal();
  };

  useEffect(() => {
    getCarsUser();
  }, []);

  return (
    <ListCarContainer>
      {ListCarUser && ListCarUser.length > 0 ? (
        ListCarUser.map((car, key) => (
          <ListCar key={key}>
            <div>
              <img src={car.photoCape} alt={`Foto do carro ${car.photoCape}`} />
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
                R$ {parseInt(car.price).toFixed(2).replace(".", ",")}
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
              <StyledButton
                className="medium outline1"
                onClick={() => handleClick(car.id)}
              >
                Editar
              </StyledButton>
              <StyledButton className="medium outline1">
                Ver detalhes
              </StyledButton>
            </div>
          </ListCar>
        ))
      ) : (
        <h4 className="info-message">Você não possui nenhum anúncio.</h4>
      )}
      <>
        {isOpenModal ? (
          <ModalBody close={toggleModal}>
            <FormUpdateCar
              brand={selectCar.brand}
              color={selectCar.color}
              fipePrice={""}
              fuel={""}
              id={selectCar.id}
              isActive={selectCar.isActive}
              km={selectCar.km}
              model={selectCar.model}
              photoCape={selectCar.photoCape}
              price={selectCar.price}
              year={selectCar.year}
              description={selectCar.description}
              photo1={selectCar.photo1}
              photo2={selectCar.photo2}
              photo3={selectCar.photo3}
              photo4={selectCar.photo4}
              photo5={selectCar.photo5}
              photo6={selectCar.photo6}
            />
          </ModalBody>
        ) : null}
      </>
    </ListCarContainer>
  );
};

export default SellerListCar;
