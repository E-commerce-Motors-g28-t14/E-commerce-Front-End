import React from "react";
import Footer from "../../components/Footer/Footer";
import CardCar from "../../components/CardCar/CardCar";
import Header from "../../components/Header/Header";
import { CommentCard } from "../../components/CommentCard";
import CommentArea from "../../components/CommentArea/CommentArea";
import PhotoGalery from "../../components/PhotoGalery/PhotoGalery";
import { CardAdvertiser } from "../../components/CardAdvertiser";
import { StyledMain } from "./style";
import CoverImage from "./CoverImage/coverImage";
import Description from "./Description/Description";

function Product() {
  return (
    <>
      <Header />
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
