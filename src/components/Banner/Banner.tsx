import { CarouselContainer, ContainerBanner, ContainerText } from "./style";
import carro1 from "../../assets/banner/CARRO1 (1).png";
import carro2 from "../../assets/banner/CARRO1 (2).png";
import carro3 from "../../assets/banner/CARRO1 (3).png";
import carro4 from "../../assets/banner/CARRO1 (4).png";
import carro5 from "../../assets/banner/CARRO1 (5).png";
import carro6 from "../../assets/banner/CARRO1 (6).png";
import carro7 from "../../assets/banner/CARRO1 (7).png";
import carro8 from "../../assets/banner/CARRO1 (8).png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Banner = () => {
  const imagens = [carro1, carro2, carro3, carro4, carro5 ,carro6, carro7, carro8];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ContainerBanner>
      <ContainerText>
        <h1>Motor Shop</h1>
        <h2>A melhor plataforma de anúncios de carros do país</h2>
      </ContainerText>

      <CarouselContainer>
        {imagens.map((imagem, index) => (
          <motion.img
          key={index}
          src={imagem}
          alt=""
          className={`carousel-image ${
            index === currentIndex ? "active" : ""
          }`}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1, transition: { delay: (index - currentIndex) * 0.4 }}}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        ))}
      </CarouselContainer>
    </ContainerBanner>
  );
};

export default Banner;
