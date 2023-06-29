import { zodResolver } from "@hookform/resolvers/zod";
import { StyledMain } from "./style";
import { iRegisterCar, registerCarSchema } from "./createCarSchema";
import { useForm } from "react-hook-form";
import { Select } from "../Select/Select";
import { Input } from "../Input/Input";
import { StyledButton } from "../../styles/buttons";
import { TextArea } from "../TextArea/TextArea";
import { useState } from "react";
import { useCarsHook } from "../../hooks/carsHook";
import { useModalHook } from "../../hooks";

export const FormCreateCar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterCar>({
    resolver: zodResolver(registerCarSchema),
  });

  const {
    brands,
    modelsAvaliable,
    searchCarsByBrand,
    findCar,
    searchCar,
    getFuel,
    createCar,
  } = useCarsHook();

  const { toggleModal } = useModalHook();

  const [photoQuantity, setPhotoQuantity] = useState(2);

  const newPhoto = () => {
    if (photoQuantity < 6) {
      setPhotoQuantity(photoQuantity + 1);
    }
  };

  const brandsForm = brands.map((element) => {
    const nameFormated = element[0].toUpperCase() + element.slice(1);
    return { name: nameFormated, value: element };
  });

  const modelsForm = modelsAvaliable.map((element) => {
    const nameFormated = element.name.toUpperCase() + element.name.slice(1);
    return { name: nameFormated, value: element.name };
  });

  return (
    <StyledMain>
      <h3>Criar anúncio</h3>
      <form onSubmit={handleSubmit(createCar)} noValidate>
        <p>Informações do veículo</p>
        <Select
          register={register("brand")}
          label="Marca"
          placeholder={"Selecionar marca"}
          disabled={false}
          width="100%"
          options={[...brandsForm]}
          change={(event) => {
            searchCarsByBrand(event.target.value);
          }}
        />

        <Select
          register={register("model")}
          label="Modelo"
          placeholder={"Selecionar modelo"}
          disabled={false}
          width="100%"
          options={[...modelsForm]}
          change={(event) => {
            findCar(event.target.value);
          }}
        />

        <div className="doubleInput">
          <Input
            errors={errors.year}
            register={register("year")}
            label="Ano"
            placeholder="Ano"
            type="number"
            disabled={true}
            width="45%"
            value={searchCar?.year}
          />

          <Input
            errors={errors.fuel}
            register={register("fuel")}
            label="Combustível"
            placeholder="Combustível"
            type="text"
            disabled={true}
            width="45%"
            value={searchCar?.fuel || ""}
          />
        </div>
        <div className="doubleInput">
          <Input
            errors={errors.km}
            register={register("km")}
            label="Quilometragem"
            placeholder="Quilometragem"
            type="number"
            disabled={false}
            width="45%"
          />
          <Input
            errors={errors.color}
            register={register("color")}
            label="Cor"
            placeholder="Cor"
            type="text"
            disabled={false}
            width="45%"
          />
        </div>
        <div className="doubleInput">
          <Input
            errors={errors.fipePrice}
            register={register("fipePrice")}
            label="Preço tabela FIPE"
            placeholder="Quilometragem"
            type="number"
            disabled={true}
            width="45%"
            value={searchCar?.fipe}
          />
          <Input
            errors={errors.price}
            register={register("price")}
            label="Preço"
            placeholder="Preço"
            type="number"
            disabled={false}
            width="45%"
          />
        </div>
        <TextArea
          errors={errors.description}
          register={register("description")}
          label="Descrição"
          placeholder="Descrição"
          disabled={false}
          width="100%"
        />
        <Input
          errors={errors.photoCape}
          register={register("photoCape")}
          label="Imagem de capa"
          placeholder="Imagem de capa"
          type="text"
          disabled={false}
          width="100%"
        />
        <Input
          errors={errors.photo1}
          register={register("photo1")}
          label="1ª imagem da galeria"
          placeholder="1ª imagem da galeria"
          type="text"
          disabled={false}
          width="100%"
        />
        <Input
          errors={errors.photo2}
          register={register("photo2")}
          label="2ª imagem da galeria"
          placeholder="2ª imagem da galeria"
          type="text"
          disabled={false}
          width="100%"
        />
        {photoQuantity >= 3 && (
          <Input
            errors={errors.photo3}
            register={register("photo3")}
            label="3ª imagem da galeria"
            placeholder="3ª imagem da galeria"
            type="text"
            disabled={false}
            width="100%"
          />
        )}
        {photoQuantity >= 4 && (
          <Input
            errors={errors.photo4}
            register={register("photo4")}
            label="4ª imagem da galeria"
            placeholder="4ª imagem da galeria"
            type="text"
            disabled={false}
            width="100%"
          />
        )}
        {photoQuantity >= 5 && (
          <Input
            errors={errors.photo5}
            register={register("photo5")}
            label="5ª imagem da galeria"
            placeholder="5ª imagem da galeria"
            type="text"
            disabled={false}
            width="100%"
          />
        )}
        {photoQuantity === 6 && (
          <Input
            errors={errors.photo6}
            register={register("photo6")}
            label="6ª imagem da galeria"
            placeholder="6ª imagem da galeria"
            type="text"
            disabled={false}
            width="100%"
          />
        )}
        <div className="photo">
          <StyledButton
            type="button"
            className="medium brandOpacity"
            onClick={newPhoto}
          >
            Adicionar campo para foto
          </StyledButton>
        </div>
        <div className="buttons">
          <StyledButton
            className="big negative"
            type="button"
            onClick={toggleModal}
          >
            Close
          </StyledButton>
          <StyledButton className="big brand1" type="submit">
            Cadastrar
          </StyledButton>
        </div>
      </form>
    </StyledMain>
  );
};
