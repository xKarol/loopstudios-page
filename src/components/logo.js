import logo from "../assets/logo.svg";
import { StyledLogo } from "./styles";

function Logo() {
  return (
    <StyledLogo href="/" aria-label="loopstudios logo">
      <img src={logo} alt="loopstudios logo" />
    </StyledLogo>
  );
}

export default Logo;
