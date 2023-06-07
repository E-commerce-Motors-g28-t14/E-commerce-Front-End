import { ContainerHeader } from "./style";
import logo from "../../assets/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import Username from "../Username/Username";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false) 

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
          <img src={logo} alt="Logo Motors Shop" />
        </div>
        {isMobile ? (
          <>
            <div>
              <button className="menu-hamburguer">
                <GiHamburgerMenu onClick={() => setIsOpenMenu(!isOpenMenu)} />
              </button>
              </div>
            {isOpenMenu && (
              <ul className='container-list-menu'>
                <li>
                  <span>Editar Perfil</span>
                </li>
                <li>
                  <span>Editar endereço</span>
                </li>
                <li>
                  <span>Sair</span>
                </li>
              </ul>
            )}
          </>
        ) : (
          <div onClick={() => setIsOpenMenu(!isOpenMenu)} className="container-user">
            <Username/>
            {isOpenMenu && (
              <ul>
                <li>
                  <span>Editar Perfil</span>
                </li>
                <li>
                  <span>Editar endereço</span>
                </li>
                <li>
                  <span>Sair</span>
                </li>
              </ul>
            )}

          </div>
        )}
      </div>
    </ContainerHeader>
  );
};

export default Header;
