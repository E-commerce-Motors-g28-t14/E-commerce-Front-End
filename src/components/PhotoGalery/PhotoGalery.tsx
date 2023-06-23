import { ContainerPhotoGalery } from "./style";
import fusca from "../../assets/banco de exemplos/fusca.png";
import { useEffect, useState } from "react";
import { useModalHook } from "../../hooks";
import { ICarPhotos } from "../../interfaces/carInterface";

const PhotoGalery = ({ gallery }: { gallery: ICarPhotos[] }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { modalWithPhoto } = useModalHook();
  useEffect(() => {
    const checkIsMobile = () => {
      const mobileWidth = 768;
      setIsMobile(window.innerWidth < mobileWidth);
    };
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  return (
    <ContainerPhotoGalery isMobile={isMobile}>
      <div className="container-title-photo-galery">
        <h2>Fotos</h2>
      </div>
      <ul className="container-geral-photos">
        {gallery.map((imagem, index) => (
          <li
            className="container-photos"
            key={imagem.id}
            onClick={() => modalWithPhoto(imagem.imageLink)}
          >
            <div className="image-wrapper">
              <img src={imagem.imageLink} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </ContainerPhotoGalery>
  );
};
export default PhotoGalery;
