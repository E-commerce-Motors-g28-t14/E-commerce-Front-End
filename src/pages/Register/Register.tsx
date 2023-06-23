import { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../../schemas/user.Schemas";
import { StyledMain, StyledMainModal } from "./style";
import { IUserRequest } from "../../interfaces/userIterface";
import { UserContext } from "../../contexts/userContext";
import { useModalHook } from "../../hooks";
import { ModalBody } from "../../components/ModalBody";
import { StyledButton } from "../../styles/buttons";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const {
    CreateUser,
    isSeller,
    setIsPassword,
    adress,
    setSeller,
    GetAdressInZipCode,
  } = useContext(UserContext);

  const { isOpenModal, toggleModal } = useModalHook();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRequest>({
    resolver: zodResolver(UserSchema),
  });

  return (
    <>
      {isOpenModal && (
        <ModalBody close={toggleModal}>
          <StyledMainModal className="createSuccess">
            <h2>Sucesso!</h2>
            <h3>Sua conta foi criada com sucesso!</h3>
            <p>
              Agora você poderá ver seus negócios crescendo em grande escala
            </p>
            <StyledButton
              className="medium brand1"
              onClick={() => navigate("/login", { replace: true })}
            >
              Ir para o login
            </StyledButton>
          </StyledMainModal>
        </ModalBody>
      )}
      <Header />
      <StyledMain>
        <div>
          <form onSubmit={handleSubmit(CreateUser)} noValidate>
            <h2>Cadastro</h2>
            <p>Informações pessoais</p>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Ex: Samuel leão"
              {...register("name")}
            />
            {errors.name && <p className="error">{errors.name?.message}</p>}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Ex: samuel@email.com"
              {...register("email")}
            />
            {errors.email && <p className="error">{errors.email?.message}</p>}
            <label htmlFor="cpf">Cpf</label>
            <input
              type="text"
              id="cpf"
              placeholder="Ex: 01234556789"
              {...register("cpf")}
            />
            {errors.cpf && <p className="error">{errors.cpf?.message}</p>}

            <label htmlFor="phone">Celular</label>
            <input
              type="text"
              id="phone"
              placeholder="Ex: 71932456789"
              {...register("phone")}
            />
            {errors.phone && <p className="error">{errors.phone?.message}</p>}

            <label htmlFor="birthdate">Data da Nascimento</label>
            <input
              type="date"
              id="birthdate"
              placeholder="00/00/0000"
              {...register("birthdate")}
            />
            {errors.birthdate && (
              <p className="error">{errors.birthdate?.message}</p>
            )}
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder="Ex: Empresário"
              {...register("description")}
            />
            {errors.description && (
              <p className="error">{errors.description?.message}</p>
            )}
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
            {errors.zipCode && (
              <p className="error">{errors.zipCode?.message}</p>
            )}
            <label htmlFor="district">Bairro</label>
            <input
              type="string"
              id="district"
              placeholder="Bairro"
              {...register("district")}
              value={adress?.bairro}
              readOnly
            />
            {errors.district && (
              <p className="error">{errors.district?.message}</p>
            )}
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
              {errors.state && <p className="error">{errors.state?.message}</p>}
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
              {errors.city && <p className="error">{errors.city?.message}</p>}
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
            {errors.street && <p> className="error"{errors.street?.message}</p>}
            <div className="container">
              <label htmlFor="number">
                Nº
                <input
                  type="string"
                  id="number"
                  placeholder="Nº da Casa"
                  {...register("number")}
                />
                {errors.number && (
                  <p className="error">{errors.number?.message}</p>
                )}
              </label>

              <label htmlFor="complement">
                Complemento
                <input
                  type="string"
                  id="complement"
                  placeholder="Ex: Apart 307"
                  {...register("complement")}
                />
                {errors.complement && (
                  <p className="error">{errors.complement?.message}</p>
                )}
              </label>
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
            />
            {errors.password && (
              <p className="error">{errors.password?.message}</p>
            )}
            <label htmlFor="confirmPassword">Confirme a senha</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Insira novamente a senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword?.message}</p>
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
