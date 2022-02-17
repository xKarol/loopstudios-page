import { StyledHeaderNavbar } from "./styles";
import Hamburger from "./hamburger";
import { useEffect, useState } from "react";
import NavbarItem from "../navbar-item";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    if (hamburger) {
      window.scrollTo(0, 0);
      document.body.classList.add("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [hamburger]);

  return (
    <>
      <StyledHeaderNavbar className={hamburger ? "active" : ""}>
        <ol>
          <NavbarItem href="/">About</NavbarItem>
          <NavbarItem href="/">Careers</NavbarItem>
          <NavbarItem href="/">Events</NavbarItem>
          <NavbarItem href="/">Products</NavbarItem>
          <NavbarItem href="/">Support</NavbarItem>
        </ol>
      </StyledHeaderNavbar>
      <Hamburger hamburger={hamburger} setHamburger={setHamburger} />
    </>
  );
}

export default Navbar;
