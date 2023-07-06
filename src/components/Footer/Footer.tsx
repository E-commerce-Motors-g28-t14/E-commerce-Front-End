import { StyledFooter } from "./style";
import logo from "../../assets/Motors shop.png";
import {} from "react-icons";
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <StyledFooter className="StyledFooter">
      <img src={logo} alt="logo Motors shop" />
      <p>
        © 2023 Copyright:
        <a href="https://github.com/orgs/E-commerce-Motors-g28-t14/people">
          G28 Team - T14
        </a>
      </p>
      <div className="scrool" onClick={handleScrollToTop}>
        <p>^</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
