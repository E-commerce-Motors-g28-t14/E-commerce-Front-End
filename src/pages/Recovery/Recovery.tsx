import { useContext, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ModalBody } from "../../components/ModalBody";
import { useForm } from "react-hook-form";
import { MainContainer } from "./style";
import { UserContext } from "../../contexts/userContext";
import { Input } from "../../components/Input/Input";
import { StyledButton } from "../../styles/buttons";
import { useParams } from "react-router-dom";
import { useModalHook } from "../../hooks";

export interface iRecoveryPassword {
  password: string;
  confirmPassword: string;
}

const Recovery = () => {
  const { GetUserById, user, ChangePassword } =
    useContext(UserContext);
  // const [showLoading, setShowLoading] = useState(false);
  const { toggleModal } = useModalHook();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRecoveryPassword>();
  const handleEmail = (data: iRecoveryPassword) => {
    ChangePassword(data);
  };

  useEffect(() => {   
    GetUserById(user.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      {user.id === id ? (
        <MainContainer>
          <h2>
            {user.name[0].toUpperCase() + user.name.slice(1)}, encontramos seu
            cadastro!
          </h2>
          <form onSubmit={handleSubmit(handleEmail)} noValidate>
            <h2>Recuperar senha</h2>
            <Input
              disabled={false}
              errors={errors.password}
              type="password"
              label="Nova senha"
              placeholder="Insira nova senha"
              register={register("password")}
            />
            <Input
              disabled={false}
              errors={errors.password}
              type="password"
              label="Confirmar senha"
              placeholder="Confirmar a senha"
              register={register("confirmPassword")}
            />
            <StyledButton className="medium brand1 hover" type="submit">
              Enviar
            </StyledButton>
          </form>
        </MainContainer>
      ) : (
        <ModalBody
          close={toggleModal}
          children={<h2>Verificando usuário</h2>}
        />
      )}
      <Footer />
    </>
  );
};

export default Recovery;
