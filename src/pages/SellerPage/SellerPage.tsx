import Footer from "../../components/Footer/Footer";
import { FormCreateCar } from "../../components/FormCreateCar";
import Header from "../../components/Header/Header";
import { ModalBody } from "../../components/ModalBody";
import SellerCard from "../../components/SellerCard/SellerCard";
import SellerListCar from "../../components/SellerListCar/SellerListCar";
import { useModalHook } from "../../hooks";
import { MainContainer, ContainerPageSeller, SectionSellerPage } from "./style";

const SellerPage = () => {
  const { isOpenModalFormsCar, toggleModalFormsCar } = useModalHook();

  return (
    <>
      {isOpenModalFormsCar && (
        <ModalBody close={toggleModalFormsCar}>
          <FormCreateCar />
        </ModalBody>
      )}
      <ContainerPageSeller>
        <Header />
        <MainContainer>
          <SellerCard />
          <SectionSellerPage>
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
