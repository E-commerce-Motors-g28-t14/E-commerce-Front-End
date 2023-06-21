import { ContainerHeader } from "./style";
import logo from "../../assets/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import Username from "../Username/Username";
import { useUserHook } from "../../hooks";
import { Unlogged } from "../Unlogged/Unlogged";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { isLogin, user } = useUserHook();

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileWidth = 768;
      setIsMobile(window.innerWidth < mobileWidth);
    };

    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  return (
    <ContainerHeader>
      <div className="container-header">
        <div className="container-logo">
        <Link to={`/`}>   <img src={logo} alt="Logo Motors Shop" /></Link></div>
        {isLogin && (
          isMobile ? (
            <>
              <div>
                <button className="menu-hamburguer">
                  <GiHamburgerMenu onClick={() => setIsOpenMenu(!isOpenMenu)} />
                </button>
              </div>
              {isOpenMenu && (
                <ul className="container-list-menu">
                  <li>
                    <span>Editar Perfil</span>
                  </li>
                  <li>
                    <span>Editar endereço</span>
                  </li>
                  {user.isSeller && (
                    <li>
                      <span>Meus anúncio</span>
                    </li>
                  )}
                  <li>
                    <span>Sair</span>
                  </li>
                </ul>
              )}
            </>
          ) : (
            <div
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="container-user"
            >
              {isLogin && <Username name={user.name} />}
              {isOpenMenu && (
                <ul>
                  <li>
                    <span>Editar Perfil</span>
                  </li>
                  <li>
                    <span>Editar endereço</span>
                  </li>
                  {user.isSeller && (
                    <li>
                      <span>Meus anúncios</span>
                    </li>
                  )}
                  <li>
                    <span>Sair</span>
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
