import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { attUserSchema, iAttUser } from "./attUserSchema";
import { StyledDiv } from "./style";
import { useModalHook, useUserHook } from "../../hooks";
import { TextArea } from "../TextArea/TextArea";
import { StyledButton } from "../../styles/buttons";

export const FormAttUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAttUser>({
    resolver: zodResolver(attUserSchema),
  });

  const { user, attUserInfo, deleteUser } = useUserHook();
  const { toggleModalFormsUser } = useModalHook();

  return (
    <StyledDiv>
      <h3>Editar perfil</h3>
      <form onSubmit={handleSubmit(attUserInfo)} noValidate>
        <h3>Informações pessoais</h3>
        <Input
          errors={errors.name}
          register={register("name")}
          label={"Nome"}
          placeholder="Digite seu nome"
          type="text"
          disabled={false}
          width="100%"
          value={user.name}
        />
        <Input
          errors={errors.email}
          register={register("email")}
          label={"Email"}
          placeholder="Digite seu email"
          type="text"
          disabled={false}
          width="100%"
          value={user.email}
        />
        <Input
          errors={errors.cpf}
          register={register("cpf")}
          label={"CPF"}
          placeholder="Digite seu CPF"
          type="text"
          disabled={false}
          width="100%"
          value={user.cpf}
        />
        <Input
          errors={errors.phone}
          register={register("phone")}
          label={"Telefone"}
          placeholder="Digite seu telefone"
          type="text"
          disabled={false}
          width="100%"
          value={user.phone}
        />
        <Input
          errors={errors.birthdate}
          register={register("birthdate")}
          label={"Data de nascimento"}
          placeholder="Digite seu nome"
          type="date"
          disabled={false}
          width="100%"
          value={user.birthdate.substring(0, 10)}
        />
        <TextArea
          errors={errors.description}
          register={register("description")}
          label="Descrição"
          placeholder="Digite sua descrição"
          disabled={false}
          width="100%"
          value={user.description!}
        />
        <div className="buttons">
          <StyledButton
            className="big negative"
            type="button"
            onClick={toggleModalFormsUser}
          >
            Cancelar
          </StyledButton>
          <StyledButton
            className="big alert"
            type="button"
            onClick={deleteUser}
          >
            Excluir Perfil
          </StyledButton>
          <StyledButton className="big brand1" type="submit">
            Salvar atualizações
          </StyledButton>
        </div>
      </form>
    </StyledDiv>
  );
};
