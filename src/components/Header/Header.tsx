import { ContainerHeader } from "./style";
import logo from "../../assets/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

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
          <button className="menu-hamburguer">
            <GiHamburgerMenu />
          </button>
        ) : (
          <div className="container-user">componente username</div>
        )}
      </div>
    </ContainerHeader>
  );
};

export default Header;
