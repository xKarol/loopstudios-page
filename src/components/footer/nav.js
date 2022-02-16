import { StyledFooterNavbar } from "./styles";

function Nav() {
  return (
    <StyledFooterNavbar>
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
    </StyledFooterNavbar>
  );
}

export default Nav;
