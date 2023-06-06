import { ContainerHeader } from "./style";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <ContainerHeader>
      <div className="container-header">
        <div className="container-logo">
          <img src={logo} alt="Logo Motors Shop" />
        </div>
        <div className="container-user">componente username</div>
      </div>
    </ContainerHeader>
  );
};

export default Header;
