import { zodResolver } from "@hookform/resolvers/zod";
import { StyledMain } from "./style";
import { iUpdaterCar, updateCarSchema } from "./updateCarSchema";
import { useForm } from "react-hook-form";
import { Select } from "../Select/Select";
import { Input } from "../Input/Input";
import { StyledButton } from "../../styles/buttons";
import { TextArea } from "../TextArea/TextArea";
import React, { useEffect, useState } from "react";
import { useCarsHook } from "../../hooks/carsHook";
import { useModalHook } from "../../hooks";
import { ModalBody } from "../ModalBody";
import { StyledDiv } from "../CommentCard/ModalCommentDelete/style";

export const FormUpdateCar = ({
  id,
  brand,
  color,
  fipePrice,
  fuel,
  km,
  model,
  photoCape,
  price,
  year,
  description,

  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
}: iUpdaterCar) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<iUpdaterCar>({
    resolver: zodResolver(updateCarSchema),
  });

  const {
    brands,
    modelsAvaliable,
    searchCarsByBrand,
    findCar,
    searchCar,
    updateCar,
    selectCar,
    DeleteCar,
    ListCarUser,
    setListCarUser,
  } = useCarsHook();

  const { toggleModal, toggleModalDeleteCar, isOpenModalDeleteCar } =
    useModalHook();

  const [photoQuantity, setPhotoQuantity] = useState(2);
  const [isActive, setisActive] = useState(false);

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleclick = (data: any) => {
    DeleteCar(data);
    toggleModal;
    toggleModalDeleteCar;
  };

  useEffect(() => {
    const getValues = () => {
      setValue("color", color);
      setValue("fipePrice", Number(searchCar?.fipe));
      setValue("fuel", searchCar?.fuel);
      setValue("id", id);
      setValue("isActive", isActive);
      setValue("km", km);
      setValue("photoCape", photoCape);
      setValue("price", price);
      setValue("year", searchCar?.year);
      setValue("description", description);
      setValue("photo1", photo1);
      setValue("photo2", "");
      setValue("photo3", "");
      setValue("photo4", "");
      setValue("photo5", "");
      setValue("photo6", "");
    };
    getValues();
    setListCarUser(ListCarUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCar, selectCar]);

  return (
    <StyledMain>
      <h3>Editar anúncio</h3>
      <form onSubmit={handleSubmit(updateCar)} noValidate>
        <p>Informações do veículo</p>
        <Select
          label="Marca"
          placeholder={brand}
          disabled={false}
          width="100%"
          options={[...brandsForm] || [{ name: brand, value: brand }]}
          change={(event: React.ChangeEvent<HTMLInputElement>) => {
            searchCarsByBrand(event.target.value);
          }}
          register={register("brand")}
        />

        <Select
          register={register("model")}
          label="Modelo"
          placeholder={"Selecionar modelo" && model}
          disabled={false}
          width="100%"
          options={[...modelsForm] || model}
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
            type="text"
            disabled={true}
            width="45%"
            value={searchCar?.year || year}
          />

          <Input
            errors={errors.fuel}
            register={register("fuel")}
            label="Combustível"
            placeholder="Combustível"
            type="text"
            disabled={true}
            width="45%"
            value={Number(searchCar?.fuel) || Number(fuel)}
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
            value={km}
            width="45%"
            readOnly
          />
          <Input
            errors={errors.color}
            register={register("color")}
            label="Cor"
            placeholder="Cor"
            type="text"
            disabled={false}
            value={color}
            readOnly
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
            value={Number(searchCar?.fipe) || Number(fipePrice)}
          />
          <Input
            errors={errors.price}
            register={register("price")}
            label="Preço"
            placeholder="Preço"
            type="number"
            disabled={false}
            value={price}
            width="45%"
            readOnly
          />
        </div>
        <TextArea
          errors={errors.description}
          register={register("description")}
          label="Descrição"
          placeholder="Descrição"
          disabled={false}
          value={description || ""}
          width="100%"
        />
        <div className="buttons">
          <StyledButton
            className={!isActive ? "big brand1" : "big negative"}
            onClick={() => {
              setValue("isActive", false);
              setisActive(false);
            }}
          >
            Desativar
          </StyledButton>
          <StyledButton
            className={!isActive ? "big negative" : "big brand1"}
            onClick={() => {
              setValue("isActive", true);
              setisActive(true);
            }}
          >
            Ativar
          </StyledButton>
        </div>
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
          value={photo1 || ""}
        />
        <Input
          errors={errors.photo2}
          register={register("photo2")}
          label="2ª imagem da galeria"
          placeholder="2ª imagem da galeria"
          type="text"
          disabled={false}
          width="100%"
          value={photo2 || ""}
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
            value={photo3 || ""}
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
            value={photo4 || ""}
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
            value={photo5 || ""}
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
            value={photo6 || ""}
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
          <StyledButton
            className="big alert"
            type="button"
            onClick={toggleModalDeleteCar}
          >
            Deletar
          </StyledButton>

          <StyledButton className="big brand1" type="submit">
            Atualizar
          </StyledButton>
        </div>
      </form>
      {isOpenModalDeleteCar ? (
        <ModalBody
          close={toggleModalDeleteCar}
          children={
            <StyledDiv>
              <main>
                <div className="container-info-cancel">
                  <h4> Tem certeza que deseja deletar este anùncio? </h4>
                  <p>
                    Essa ação não pode ser desfeita. Isso excluirá
                    permanentemente seu anùncio.
                  </p>
                  <div className="container-btn-cancel">
                    <StyledButton
                      className="medium alert"
                      onClick={() => handleclick(id)}
                    >
                      Sim, quero excluir o anúncio
                    </StyledButton>
                    <StyledButton
                      className="medium disable"
                      onClick={toggleModalDeleteCar}
                    >
                      Cancelar
                    </StyledButton>
                  </div>
                </div>
              </main>
            </StyledDiv>
          }
        />
      ) : null}
    </StyledMain>
  );
};
