import React from "react";
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
import Banner from "../../components/Banner/Banner";

function Product() {
  const { isOpenModal, photoLink } = useModalHook();

  return (
    <>
      {isOpenModal && (
        <ModalBody>
          <StyledModalDiv>
            <h2>Imagem do veículo</h2>
            <figure>
              <img src={photoLink} alt="Carro imagem" />
            </figure>
          </StyledModalDiv>
        </ModalBody>
      )}
      <Header />
      <Banner/>
      <StyledMain>
        <section>
         
          <CoverImage />
          <Description />
          <CardCar />
          <CommentCard />
          <CommentArea />
        </section>
        <aside>
          <PhotoGalery />
          <CardAdvertiser />
        </aside>
      </StyledMain>
      <Footer />
    </>
  );
}

export default Product;
