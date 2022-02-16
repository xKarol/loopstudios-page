import { StyledHamburger } from "./styles";

function Hamburger({ setActive, active }) {
  return (
    <StyledHamburger
      className={active ? "active" : ""}
      onClick={() => setActive(!active)}
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
