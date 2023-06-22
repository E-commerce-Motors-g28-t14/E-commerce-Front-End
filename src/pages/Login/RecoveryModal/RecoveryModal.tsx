import React, { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { ModalBody } from "../../../components/ModalBody";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input/Input";
import { StyledModal } from "./style";
import { StyledButton } from "../../../styles/buttons";
import { AiOutlineCloseCircle } from "react-icons/ai";

export interface iEmail {
  email: string;
}

export const ModalRecovery = () => {
  const { SendEmailRecover, showModal, setShowModal, message, setMessage } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEmail>();

  const handleEmail = (email: iEmail) => {
    SendEmailRecover(email);
  };

  return (
    <StyledModal>
      <form onSubmit={handleSubmit(handleEmail)}>
        <AiOutlineCloseCircle size={25} onClick={() => setShowModal(false)} />
        <label htmlFor="">Informe seu e-mail cadastrado</label>
        <input
          type="text"
          placeholder="ex: nome@email.com"
          {...register("email")}
        />
        <StyledButton className="medium brand1 hover" type="submit">
          Enviar
        </StyledButton>
        {message ? (
          <p>Mensagem enviada com sucesso! verifique seu e-mail</p>
        ) : (
          <>{setMessage("")}</>
        )}
      </form>
    </StyledModal>
  );
};
