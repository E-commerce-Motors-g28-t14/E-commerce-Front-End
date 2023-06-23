import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { attUserAddressSchema, iAttUserAddress } from "./attUserAddressSchema";
import { StyledDiv } from "./style";
import { useModalHook, useUserHook } from "../../hooks";
import { StyledButton } from "../../styles/buttons";

export const FormAttUserAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAttUserAddress>({
    resolver: zodResolver(attUserAddressSchema),
  });

  const { user, attUserAddress } = useUserHook();
  const { toggleModalFormsUser } = useModalHook();

  return (
    <StyledDiv>
      <h3>Editar endereço</h3>
      <form onSubmit={handleSubmit(attUserAddress)} noValidate>
        <h3>Informações de endereço</h3>
        <Input
          errors={errors.zipCode}
          register={register("zipCode")}
          label={"CEP"}
          placeholder="Digite seu CEP"
          type="text"
          disabled={false}
          width="100%"
          value={user.address.zipCode}
        />
        <div className="doubleInput">
          <Input
            errors={errors.state}
            register={register("state")}
            label={"Estado"}
            placeholder="Digite seu email"
            type="text"
            disabled={true}
            width="100%"
            value={user.address.state}
          />
          <Input
            errors={errors.city}
            register={register("city")}
            label={"Cidade"}
            placeholder="Digite sua cidade"
            type="text"
            disabled={true}
            width="100%"
            value={user.address.city}
          />
        </div>

        <Input
          errors={errors.street}
          register={register("street")}
          label={"Rua"}
          placeholder="Digite sua rua"
          type="text"
          disabled={true}
          width="100%"
          value={user.address.street}
        />
        <div className="doubleInput">
          <Input
            errors={errors.number}
            register={register("number")}
            label={"Numero"}
            placeholder="Digite seu nome"
            type="text"
            disabled={false}
            width="100%"
            value={user.address.number}
          />
          <Input
            errors={errors.complement}
            register={register("complement")}
            label="Complemento"
            placeholder="Digite sua descrição"
            type="text"
            disabled={false}
            width="100%"
            value={user.address.complement}
          />
        </div>

        <div className="buttons">
          <StyledButton
            className="big negative"
            type="button"
            onClick={toggleModalFormsUser}
          >
            Cancelar
          </StyledButton>
          <StyledButton className="big brand1" type="submit">
            Salvar atualizações
          </StyledButton>
        </div>
      </form>
    </StyledDiv>
  );
};
