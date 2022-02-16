import { StyledHeaderNavbar } from "./styles";
import Hamburger from "./hamburger";
import { useState } from "react";
import NavbarItem from "../navbar-item";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <>
      <StyledHeaderNavbar className={active ? "active" : ""}>
        <ol>
          <NavbarItem href="/">About</NavbarItem>
          <NavbarItem href="/">Careers</NavbarItem>
          <NavbarItem href="/">Events</NavbarItem>
          <NavbarItem href="/">Products</NavbarItem>
          <NavbarItem href="/">Support</NavbarItem>
        </ol>
      </StyledHeaderNavbar>
      <Hamburger active={active} setActive={setActive} />
    </>
  );
}

export default Navbar;
