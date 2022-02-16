import NavbarItem from "../navbar-item";
import { StyledFooterNavbar } from "./styles";

function Nav() {
  return (
    <StyledFooterNavbar>
      <ol>
        <NavbarItem href="/">About</NavbarItem>
        <NavbarItem href="/">Careers</NavbarItem>
        <NavbarItem href="/">Events</NavbarItem>
        <NavbarItem href="/">Products</NavbarItem>
        <NavbarItem href="/">Support</NavbarItem>
      </ol>
    </StyledFooterNavbar>
  );
}

export default Nav;
