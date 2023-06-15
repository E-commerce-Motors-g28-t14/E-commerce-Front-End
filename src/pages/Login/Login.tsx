import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema, UserSchemaLogin } from "../../schemas/user.Schemas";
import { StyledMain } from "./style";
import { IUserLoginRequest, IUserRequest } from "../../interfaces/userIterface";
import { UserContext } from "../../contexts/userContext";
const Login = () => {
  const { LoginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRequest>({
    resolver: zodResolver(UserSchemaLogin),
  });

  const dataUser = (data: IUserLoginRequest) => {
    LoginUser(data);
  };

  return (
    <>
      <Header />
      <StyledMain>
        <div>
          <form onSubmit={handleSubmit(dataUser)} noValidate>
            <h2>Cadastro</h2>
            <p>Informações de Logins</p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Ex: samuel@email.com"
              {...register("email")}
            />
            {errors.email && <p>{errors.email?.message}</p>}
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Ex: Informe uma senha segura, contendo caractéres especiais e números"
              {...register("password")}
            />
            {errors.password && <p>{errors.password?.message}</p>}
            <button className="btn--final" type="submit">
              Fazer Login
            </button>
          </form>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Login;
