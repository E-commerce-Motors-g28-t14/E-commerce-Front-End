import { ListCar, ListCarContainer } from "./style";
import { useContext, useEffect } from "react";
import { CarsContext } from "../../contexts/carsContext";
import { StyledButton } from "../../styles/buttons";
import { ModalBody } from "../ModalBody";
import { FormUpdateCar } from "../FormUpdateCar";
import { useModalHook } from "../../hooks";
import { StyledMain } from "../FormCreateCar/style";
import { Loading } from "../loading/Looading";

const SellerListCar = () => {
  const { toggleModal, isOpenModal } = useModalHook();
  const {
    ListCarUser,
    getCarsUser,
    getCarById,
    selectCar,
    photo,
    getFuel,
    showSelectCarPage,
    setSelectCarID,
  } = useContext(CarsContext);

  const handleClick = (carID: string) => {
    getCarById(carID);

    toggleModal();
  };

  useEffect(() => {
    getCarsUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledMain>
      <ListCarContainer>
        {ListCarUser ? (
          ListCarUser.length > 0 ? (
            ListCarUser.map((car, key) => {
              const photoCape =
                car.photos &&
                car.photos.find((photo) => photo.isCover === true);
              return (
                <ListCar key={key}>
                  <div>
                    <img
                      src={photoCape?.imageLink?.toString()}
                      alt={`Foto do carro ${car.model}`}
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
                    <StyledButton
                      className="medium outline1"
                      onClick={() => {
                        showSelectCarPage(car.id);
                        setSelectCarID(car.id);
                      }}
                    >
                      Ver detalhes
                    </StyledButton>
                  </div>
                </ListCar>
              );
            })
          ) : (
            <div className="info-message">
              <h4>Você não possui nenhum anúncio.</h4>
            </div>
          )
        ) : (
          <Loading />
        )}
      </ListCarContainer>
      {isOpenModal ? (
        <ModalBody close={toggleModal}>
          <FormUpdateCar
            brand={selectCar.brand}
            color={selectCar.color}
            fipePrice={selectCar.fipePrice}
            fuel={getFuel(selectCar.fuel)}
            id={selectCar.id}
            isActive={selectCar.isActive}
            km={selectCar.km}
            model={selectCar.model}
            photoCape={photo.imageLink}
            price={selectCar.price}
            year={selectCar.year.toString()}
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
    </StyledMain>
  );
};

export default SellerListCar;
