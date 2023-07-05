import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import { StyledMain } from "./style";
import { HomeListCardsCar } from "../../components/HomeListCardsCar";
import { StyledButton } from "../../styles/buttons";
import { ModalContext } from "../../contexts/modalContext";
import { CarPagination } from "../../components/CarPagination/CarPagination";
import { HomeFilters } from "../../components/HomeFilters/HomeFilters";
import { ModalBody } from "../../components/ModalBody";
import { Loading } from "../../components/loading/Looading";

const Home = () => {
  const { isOpenModalFilter, toggleModalFilter } = useContext(ModalContext);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileWidth = 720;
      setIsMobile(window.innerWidth < mobileWidth);
    };

    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <>
      {isMobile && isOpenModalFilter && (
        <ModalBody close={toggleModalFilter}>
          <HomeFilters className="mobile" />
        </ModalBody>
      )}
      <Header />

      <Banner />
      <StyledMain>
        <section className="container-section">
          <HomeFilters />
          <HomeListCardsCar />
          <StyledButton className="brand1 big" onClick={toggleModalFilter}>
            Filtros
          </StyledButton>
        </section>
        <CarPagination />
      </StyledMain>
      <Footer />
    </>
  );
};

export default Home;
