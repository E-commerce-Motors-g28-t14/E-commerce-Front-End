import { ContainerPhotoGalery } from "./style";
import fusca from '../../assets/banco de exemplos/fusca.png'

const PhotoGalery = () => {
    const imagems = [fusca, fusca, fusca, fusca, fusca, fusca];
  
    return (
      <ContainerPhotoGalery>
        <h2>Fotos</h2>
        <ul className="container-geral-photos">
          {imagems.map((imagem, index) => (
            <li className="container-photos" key={index}>
            <div className="image-wrapper">
              <img src={imagem} alt="" />
            </div>
            </li>
          ))}
        </ul>
      </ContainerPhotoGalery>
    );
  };
  
  export default PhotoGalery