import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import CardCar from "../../components/CardCar/CardCar";
import Header from "../../components/Header/Header";
import { CommentCard } from "../../components/CommentCard";
import CommentArea from "../../components/CommentArea/CommentArea";
import PhotoGalery from "../../components/PhotoGalery/PhotoGalery";
import { CardAdvertiser } from "../../components/CardAdvertiser";
import { StyledMain, StyledModalDiv } from "./style";
import CoverImage from "./CoverImage/coverImage";
import Description from "./Description/Description";
import { useModalHook } from "../../hooks";
import { ModalBody } from "../../components/ModalBody";
import { CarsContext } from "../../contexts/carsContext";

function Product() {
  const { isOpenModalPhoto, photoLink, toggleModalPhoto } = useModalHook();
  const [isMobile, setIsMobile] = useState(false);
  const { selectCar } = useContext(CarsContext);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileWidth = 800;
      setIsMobile(window.innerWidth < mobileWidth);
    };

    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <>
      {isOpenModalPhoto && (
        <ModalBody close={toggleModalPhoto}>
          <StyledModalDiv>
            <h2>Imagem do veículo</h2>
            <figure>
              <img src={photoLink} alt="Carro imagem" />
            </figure>
          </StyledModalDiv>
        </ModalBody>
      )}
      <Header />
      <StyledMain>
        {isMobile ? (
          <>
            <section>
              <CoverImage images={selectCar.photos} />
              <CardCar car={selectCar} />
              <Description car={selectCar} />
              <PhotoGalery gallery={selectCar.photos} />
              <CardAdvertiser user={selectCar.user} />
              <CommentCard />
              <CommentArea />
            </section>
            <aside></aside>
          </>
        ) : (
          <>
            <section>
              <CoverImage images={selectCar.photos} />
              <CardCar car={selectCar} />
              <Description car={selectCar} />
              <CommentCard />
              <CommentArea />
            </section>
            <aside>
              <PhotoGalery gallery={selectCar.photos} />
              <CardAdvertiser user={selectCar.user} />
            </aside>
          </>
        )}
      </StyledMain>
      <Footer />
    </>
  );
}

export default Product;
