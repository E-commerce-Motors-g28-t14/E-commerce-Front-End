import { useNavigate } from "react-router-dom";
import { iCarReturn } from "../../contexts/carsContext";
import { ContainerCardCar } from "./style";

const CardCar = ({ car }: { car: iCarReturn }) => {
  const token = localStorage.getItem("@kmotors-g28");
  const navigate = useNavigate();

  return (
    <ContainerCardCar>
      <div className="container-car-name">
        <h1>{`${car.brand} ${car.model} `}</h1>
      </div>
      <div className="container-car-info">
        <ul>
          <li key={car.id}>
            <div className="car-tag">
              <span>{car.year}</span>
              <span>{car.km} KM</span>
            </div>

            <h3>
              R${" "}
              {parseFloat(car.price).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h3>
          </li>
        </ul>
      </div>

      <div className="container-btn-buy">
        {token ? (
          <button
            className="btn-buy"
            onClick={() =>
              window.open(
                `https://wa.me/55${car.user.phone}?text=Olá estou interessado(a) em comprar o ${car.brand} ${car.model} ano ${car.year} `,
                "_blank"
              )
            }
          >
            Comprar
          </button>
        ) : (
          <button className="btn-buy" onClick={() => navigate("/login")}>
            Comprar
          </button>
        )}
      </div>
    </ContainerCardCar>
  );
};

export default CardCar;
