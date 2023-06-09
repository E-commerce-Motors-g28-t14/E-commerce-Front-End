import { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import { StyledMain } from "./style";
import { HomeListCardsCar } from "../../components/HomeListCardsCar";
import { FilterHome } from '../../components/FilterHome';
import { StyledButton } from '../../styles/buttons';
import { ModalContext } from '../../contexts/modalContext';
import { CarPagination } from '../../components/CarPagination/CarPagination';

const Home = () => {
  const {toggleModal} = useContext(ModalContext)

  return (
    <>
      <Header />
      <Banner />
      <StyledMain>

        <section className='container-section'>
          <FilterHome />
          <HomeListCardsCar />
          <StyledButton className='brand1 big' onClick={toggleModal}>Filtros</StyledButton>
        </section>
        <CarPagination/>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Home;
