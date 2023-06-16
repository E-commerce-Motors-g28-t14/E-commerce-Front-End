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

const Home = () => {
  const { toggleModal, isOpenModal } = useContext(ModalContext);

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
      {isMobile && isOpenModal && (
        <ModalBody>
          <HomeFilters className="mobile" />
        </ModalBody>
      )}
      <Header />
      <Banner />
      <StyledMain>
        <section className="container-section">
          <HomeFilters />
          <HomeListCardsCar />
          <StyledButton className="brand1 big" onClick={toggleModal}>
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
