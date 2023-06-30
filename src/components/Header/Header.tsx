import { ContainerHeader } from "./style";
import logo from "../../assets/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import Username from "../Username/Username";
import { useModalHook, useUserHook } from "../../hooks";
import { Unlogged } from "../Unlogged/Unlogged";
import { Link, useNavigate } from "react-router-dom";
import { ModalBody } from "../ModalBody";
import { FormAttUser } from "../FormAttUser";
import { FormAttUserAddress } from "../FormAttUserAddress";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { isLogin, setIsLogin, user, handleLogout } = useUserHook();
  const { isOpenModalFormsUser, toggleModalFormsUser } = useModalHook();
  const [isAddress, setIsAddress] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const userIdLocalStorage = localStorage.getItem("@kmotors-g28:userId")
    if (userIdLocalStorage) {
      setIsLogin(true);
    }
    const checkIsMobile = () => {
      const mobileWidth = 768;
      setIsMobile(window.innerWidth < mobileWidth);
    };

    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const toggleAddressForm = () => {
    setIsAddress(true);
    toggleModalFormsUser();
  };

  const toggleInfoForm = () => {
    setIsAddress(false);
    toggleModalFormsUser();
  };

  return (
    <ContainerHeader>
      {isOpenModalFormsUser && (
        <ModalBody close={toggleModalFormsUser}>
          {isAddress ? <FormAttUserAddress /> : <FormAttUser />}
        </ModalBody>
      )}
      <div className="container-header">
        <div className="container-logo">
          <Link to={`/`}>
            {" "}
            <img src={logo} alt="Logo Motors Shop" />
          </Link>
        </div>
        {isLogin &&
          (isMobile ? (
            <>
              <div>
                <button className="menu-hamburguer">
                  <GiHamburgerMenu onClick={() => setIsOpenMenu(!isOpenMenu)} />
                </button>
              </div>
              {isOpenMenu && (
                <ul className="container-list-menu">
                  <li>
                    <span onClick={toggleInfoForm}>Editar Perfil</span>
                  </li>
                  <li>
                    <span onClick={toggleAddressForm}>Editar endereço</span>
                  </li>
                  {user.isSeller && (
                    <li>
                      <span onClick={() => navigate("/seller")}>
                        Meus anúncio
                      </span>
                    </li>
                  )}
                  <li>
                    <span onClick={handleLogout}>Sair</span>
                  </li>
                </ul>
              )}
            </>
          ) : (
            <div
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="container-user"
            >
              {isLogin && <Username name={user.name} color={user.color} />}
              {isOpenMenu && (
                <ul>
                  <li>
                    <span onClick={toggleInfoForm}>Editar Perfil</span>
                  </li>
                  <li>
                    <span onClick={toggleAddressForm}>Editar endereço</span>
                  </li>
                  {user.isSeller && (
                    <li>
                      <span onClick={() => navigate("/seller")}>
                        Meus anúncios
                      </span>
                    </li>
                  )}
                  <li>
                    <span onClick={handleLogout}>Sair</span>
                  </li>
                </ul>
              )}
            </div>
          ))}
        {!isLogin && <Unlogged />}
      </div>
    </ContainerHeader>
  );
};

export default Header;
