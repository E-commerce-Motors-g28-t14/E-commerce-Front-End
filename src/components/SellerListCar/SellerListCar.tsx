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

const SellerListCar = () => {
  const { user } = useContext(UserContext);
  const { toggleModal, isOpenModal } = useModalHook();
  const { ListCarUser, getCarsUser, getCarById, selectCar, photo } =
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
              <img
                src={photo.imageLink}
                alt={`Foto do carro ${photo.imageLink}`}
              />
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
              fipePrice={selectCar.fipePrice}
              fuel={selectCar.fuel}
              id={selectCar.id}
              isActive={selectCar.isActive}
              km={selectCar.km}
              model={selectCar.model}
              photoCape={photo.imageLink}
              price={selectCar.price}
              year={selectCar.year}
              description={selectCar.description}
              photo1={""}
              photo2={""}
              photo3={""}
              photo4={""}
              photo5={""}
              photo6={""}
            />
          </ModalBody>
        ) : null}
      </>
    </ListCarContainer>
  );
};

export default SellerListCar;
