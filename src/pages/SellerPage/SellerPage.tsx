import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SellerCard from "../../components/SellerCard/SellerCard";
import SellerListCar from "../../components/SellerListCar/SellerListCar";
import { MainContainer, ContainerPageSeller, SectionSellerPage } from "./style";



const SellerPage = () => {   

  return (
    <>
      <ContainerPageSeller>
        <Header />
        <MainContainer>
          <SellerCard />
          <SectionSellerPage>
            <h2>Anúncios</h2>
            <div className="container-lista-car-seller">
              <SellerListCar />
            </div>
          </SectionSellerPage>
        </MainContainer>

        <Footer />
      </ContainerPageSeller>
    </>
  );
};

export default SellerPage;
