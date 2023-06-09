import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import { StyledMain } from "./style";
import Car from "../../components/Car/Car";
import { HomeListCardsCar } from "../../components/HomeListCardsCar";
import { CarPagination } from "../../components/CarPagination/CarPagination";
import { HomeFilters } from "../../components/HomeFilters/HomeFilters";
const Home = () => {
  const data = [
    <Car />,
    <Car />,
    <Car />,
    <Car />,
    <Car />,
    <Car />,
    <Car />,
    <Car />,
    <Car />,
    <Car />,
    <Car />,
    <Car />,
  ];
  return (
    <>
      <Header />
      <StyledMain>
        <Banner />
        <div>
          <HomeFilters />
          <ul>
            {/*  {data.map((item) => (
              <>{item}</>
            ))} */}
            <HomeListCardsCar />
          </ul>
        </div>
        <CarPagination />
      </StyledMain>
      <Footer />
    </>
  );
};

export default Home;
