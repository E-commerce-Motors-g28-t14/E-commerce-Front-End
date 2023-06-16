import React from "react";
import fusca from "../../../assets/banco de exemplos/fusca.png";
import { StyledCoverImage } from "./style";


function CoverImage() {
  return (
    <StyledCoverImage>
      <img src={fusca} alt="Imagem de capa - fusca" />
    </StyledCoverImage>
  );
}

export default CoverImage;
