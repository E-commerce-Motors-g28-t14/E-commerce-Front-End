import { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchemaLogin } from "../../schemas/user.Schemas";
import { StyledMain } from "./style";
import { IUserLoginRequest, IUserRequest } from "../../interfaces/userIterface";
import { UserContext } from "../../contexts/userContext";
import { Link } from "react-router-dom";
import { ModalRecovery } from "./RecoveryModal/RecoveryModal";

const Login = () => {
  const { LoginUser, showModal, setShowModal } = useContext(UserContext);

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
            <h2>Login</h2>
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
            <button
              type="button"
              className="forget"
              onClick={() => setShowModal(true)}
            >
              Esqueci minha senha
            </button>
            <button className="btn--final" type="submit">
              Entrar
            </button>
          </form>
          <span>Ainda não possui conta?</span>

          <Link to={"/register"} className="register">
            Cadastrar
          </Link>
        </div>
      </StyledMain>
      <Footer />
      {showModal ? <ModalRecovery /> : null}
    </>
  );
};

export default Login;
