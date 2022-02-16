import Logo from "../logo";
import Navbar from "./navbar";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
    </StyledHeader>
  );
}

export default Header;
