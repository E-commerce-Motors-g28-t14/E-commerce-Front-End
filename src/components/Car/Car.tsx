import React from "react";
import carro from "../../assets/banco de exemplos/fusca.png";
import { StyleLi } from "./style";

const Car = () => {
  const car = {
    cover: { carro },
    brand: "Mercedes Benz",
    model: "A 200 CGI ADVANCE SEDAN",
    year: 2013,
    km: 0,
    color: "Branco",
    isPromo: true,
    price: "58.000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    isActive: true,
  };
  return (
    <StyleLi>
      <div className="div-car__img">
        <img src={carro} alt="" />
      </div>
      <div className="div-car__container">
        <h2>{car.brand}</h2>
        <p>{car.description}</p>
        <span>
          <p>{car.year}</p>
          <p>{car.km}</p>
          <p>{car.price}</p>
        </span>
      </div>
    </StyleLi>
  );
};

export default Car;
