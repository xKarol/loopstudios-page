import { StyledHamburger } from "./styles";

function Hamburger({ setHamburger, hamburger }) {
  return (
    <StyledHamburger
      className={hamburger ? "active" : ""}
      onClick={() => setHamburger(!hamburger)}
      type="button"
      aria-label="hamburger-menu"
    >
      <span />
      <span />
      <span />
      <span />
    </StyledHamburger>
  );
}

export default Hamburger;
