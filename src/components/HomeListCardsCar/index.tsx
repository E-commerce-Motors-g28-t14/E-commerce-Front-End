import { StyledHomeCardCar, StyledListCardsCar } from "./style";
import InitialsName from "../InicialsName/InicialsName";
import Name from "../Name/Name";

import { useCarsHook } from "../../hooks/carsHook";
import { Loading } from "../loading/Looading";

export interface imockListCars {
  id: string;
  brand: string;
  model: string;
  year: number;
  km: string;
  price: string;
  description: string;
  seller: string;
  photos: string;
}

export const HomeListCardsCar = (): JSX.Element | null => {
  const { carsHome, showSelectCarPage, setSelectCarID } = useCarsHook();

  if (Object.keys(carsHome).length === 0) {
    return null;
  }

  return (
    <>
      {carsHome.data.length === 0 ? (
        <h3>Nenhum anúncio foi encontrado.</h3>
      ) : carsHome.data && carsHome.data.length > 0 ? (
        <StyledListCardsCar>
          {carsHome.data.map((car) => {
            const photoCape = car.photos.find(
              (photo) => photo.isCover === true
            );
            return (
              <StyledHomeCardCar
                key={car.id}
                onClick={() => {
                  showSelectCarPage(car.id);
                  setSelectCarID(car.id);
                }}
              >
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
                <div>
                  <InitialsName
                    name={car.user.name}
                    fontSize="16px"
                    height="32"
                    width="32"
                    color={car.user.color}
                  />
                  <Name fontSize="14" name={car.user.name} />
                </div>
                <div>
                  <div className="info-car-tags">
                    <span>{car.km} KM</span>
                    <span>{car.year}</span>
                  </div>
                  <div>
                    <span>
                      R${" "}
                      {parseFloat(car.price).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  {car.isPromo && (
                    <div className="promo">
                      <span>$</span>
                    </div>
                  )}
                </div>
              </StyledHomeCardCar>
            );
          })}
        </StyledListCardsCar>
      ) : (
        <Loading />
      )}
    </>
  );
};
