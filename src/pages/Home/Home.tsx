import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import { StyledMain } from "./style";
import { HomeListCardsCar } from "../../components/HomeListCardsCar";
import { FilterContext } from "../../contexts/filterContext";
const Home = () => {
  const { brands, colors, fuelTypes, models, years, actualFilter } =
    useContext(FilterContext);

  return (
    <>
      <Header />
      <StyledMain>
        <Banner />
        <div>
          <nav>
            <ul>
              <h2>Marca</h2>
              {brands?.map((brand: string) => (
                <li>
                  <a href="#">{brand}</a>
                </li>
              ))}
              <h2>Modelo</h2>
              {models?.map((model) => (
                <li>
                  <a href="#">{model}</a>
                </li>
              ))}
              <h2>Cor</h2>
              <li>
                <a href="#">Branco</a>
                <a href="#">Preto</a>
                <a href="#">Prata</a>
                <a href="#">Verde</a>
                <a href="#">Vermelho</a>
                <a href="#">Azul</a>
              </li>
              <h2>Ano</h2>
              <li>
                <a href="#">2020</a>
                <a href="#">2021</a>
                <a href="#">2023</a>
                <a href="#">2019</a>
                <a href="#">2018</a>
              </li>
              <h2>Combustivel</h2>
              <li>
                <a href="#">Etanol</a>
                <a href="#">Gazolina</a>
                <a href="#">Diesel</a>
                <a href="#">Flex</a>
              </li>
              <h2>Km</h2>
              <div>
                <input type="text" placeholder="Mínimo" />
                <input type="text" placeholder="Máximo" />
              </div>
              <h2>Preço</h2>
              <div>
                <input type="text" placeholder="Mínimo" />
                <input type="text" placeholder="Máximo" />
              </div>
            </ul>
          </nav>
          <ul>
            {/*  {data.map((item) => (
              <>{item}</>
            ))} */}
            <HomeListCardsCar />
          </ul>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Home;
