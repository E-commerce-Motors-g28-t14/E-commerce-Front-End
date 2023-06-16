import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../../schemas/user.Schemas";
import { StyledMain } from "./style";
import { IUserRequest } from "../../interfaces/userIterface";
import { UserContext } from "../../contexts/userContext";
const Register = () => {
  const {
    CreateUser,
    isSeller,
    isPassword,
    setIsPassword,
    adress,
    setSeller,
    GetAdressInZipCode,
  } = useContext(UserContext);
  const [isEqual, setIsEqual] = useState(false);

  const verifyAndConfirmPassword = (password: string) => {
    const pass = password;
    if (pass === isPassword && pass.length > 0) {
      setIsEqual(true);
      setIsPassword("");
    } else {
      setIsEqual(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRequest>({
    resolver: zodResolver(UserSchema),
  });

  const dataUser = (data: IUserRequest) => {
    CreateUser(data);
  };

  return (
    <>
      <Header />
      <StyledMain>
        <div>
          <form onSubmit={handleSubmit(dataUser)} noValidate>
            <h2>Cadastro</h2>
            <p>Informações pessoais</p>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Ex: Samuel leão"
              {...register("name")}
            />
            {errors.name && <p>{errors.name?.message}</p>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Ex: samuel@email.com"
              {...register("email")}
            />
            {errors.email && <p>{errors.email?.message}</p>}
            <label htmlFor="cpf">Cpf</label>
            <input
              type="text"
              id="cpf"
              placeholder="Ex: 01234556789"
              {...register("cpf")}
            />
            {errors.cpf && <p>{errors.cpf?.message}</p>}

            <label htmlFor="phone">Celular</label>
            <input
              type="text"
              id="phone"
              placeholder="Ex: 71932456789"
              {...register("phone")}
            />
            {errors.phone && <p>{errors.phone?.message}</p>}

            <label htmlFor="birthdate">Data da Nascimento</label>
            <input
              type="date"
              id="birthdate"
              placeholder="00/00/0000"
              {...register("birthdate")}
            />
            {errors.birthdate && <p>{errors.birthdate?.message}</p>}
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder="Ex: Empresário"
              {...register("description")}
            />
            {errors.description && <p>{errors.description?.message}</p>}
            <p>Informações de Endereço</p>
            <label htmlFor="zipCode">Cep</label>
            <input
              type="string"
              id="zipCode"
              placeholder="Insira seu CEP"
              {...register("zipCode")}
              onChange={(event) => {
                event.target.value.length == 8
                  ? GetAdressInZipCode(event.target.value)
                  : event.target.value;
              }}
            />
            {errors.zipCode && <p>{errors.zipCode?.message}</p>}
            <label htmlFor="district">Bairro</label>
            <input
              type="string"
              id="district"
              placeholder="Bairro"
              {...register("district")}
              value={adress?.bairro}
              readOnly
            />
            {errors.district && <p>{errors.district?.message}</p>}
            <div className="container">
              <label htmlFor="state">
                Estado
                <input
                  type="string"
                  id="state"
                  placeholder="Estado"
                  {...register("state")}
                  value={adress?.uf}
                  readOnly
                />
              </label>
              {errors.state && <p>{errors.state?.message}</p>}
              <label htmlFor="city">
                Cidade
                <input
                  type="string"
                  id="city"
                  placeholder="Cidade"
                  {...register("city")}
                  value={adress.localidade}
                  readOnly
                />
              </label>
              {errors.city && <p>{errors.city?.message}</p>}
            </div>

            <label htmlFor="street">Rua</label>
            <input
              type="string"
              id="street"
              placeholder="Rua"
              {...register("street")}
              value={adress.logradouro}
              readOnly
            />
            {errors.street && <p>{errors.street?.message}</p>}
            <div className="container">
              <label htmlFor="number">
                Nº
                <input
                  type="string"
                  id="number"
                  placeholder="Nº da Casa"
                  {...register("number")}
                />
              </label>

              {errors.number && <p>{errors.number?.message}</p>}
              <label htmlFor="complement">
                Complemento
                <input
                  type="string"
                  id="complement"
                  placeholder="Ex: Apart 307"
                  {...register("complement")}
                />
              </label>

              {errors.complement && <p>{errors.complement?.message}</p>}
            </div>

            <p>Tipo de conta</p>
            <div className="container">
              <button
                onClick={() => {
                  setSeller(false);
                }}
                value={"Comprador"}
                type="button"
                className={!isSeller ? "" : "button--anounciment"}
              >
                Comprador
              </button>
              <button
                onClick={() => {
                  setSeller(true);
                }}
                value={"Anunciante"}
                type="button"
                className={!isSeller ? "button--anounciment" : ""}
              >
                Anunciante
              </button>
            </div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Ex: Informe uma senha segura, contendo caractéres especiais e números"
              {...register("password")}
              onChange={(value) => setIsPassword(value.target.value)}
            />
            {errors.password && <p>{errors.password?.message}</p>}
            <label htmlFor="confirmPassword">Confirme a senha</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Insira novamente a senha"
              {...register("confirmPassword")}
              onChange={(event) => verifyAndConfirmPassword(event.target.value)}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
            {isEqual === true ? (
              <p style={{ color: "green" }}>As senhas conferem</p>
            ) : (
              <p style={{ color: "red" }}>'Confirme a senha novamente'</p>
            )}
            <button className="btn--final" type="submit">
              Finalizar cadastro
            </button>
          </form>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Register;
