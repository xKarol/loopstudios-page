import { StyledHeaderNavbar } from "./styles";

function Navbar() {
  return (
    <StyledHeaderNavbar>
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
    </StyledHeaderNavbar>
  );
}

export default Navbar;
