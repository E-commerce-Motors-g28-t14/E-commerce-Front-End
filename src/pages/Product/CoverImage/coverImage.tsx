import { StyledCoverImage } from "./style";
import { ICarPhotos } from "../../../interfaces/carInterface";

const CoverImage = ({ images }: { images: ICarPhotos[] }) => {
  const coverImage = images.find((image) => image.isCover === true);
  return (
    <StyledCoverImage>
      {coverImage && (
        <img src={coverImage.imageLink} alt="Imagem de capa - fusca" />
      )}
    </StyledCoverImage>
  );
};
export default CoverImage;
