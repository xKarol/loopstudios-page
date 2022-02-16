import Logo from "../logo";
import Hamburger from "./hamburger";
import Navbar from "./navbar";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <Hamburger />
    </StyledHeader>
  );
}

export default Header;
