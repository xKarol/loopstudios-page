import { StyledNavbar } from "./styles";

function Navbar() {
  return (
    <StyledNavbar>
      <ol>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/">Events</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
      </ol>
    </StyledNavbar>
  );
}

export default Navbar;
