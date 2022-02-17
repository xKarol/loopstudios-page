import { StyledSocials } from "./styles";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import NavbarItem from "../navbar-item";

function Socials() {
  return (
    <StyledSocials>
      <ol>
        <NavbarItem href="/">
          <FaFacebookSquare />
        </NavbarItem>
        <NavbarItem href="/">
          <FaTwitter />
        </NavbarItem>
        <NavbarItem href="/">
          <FaPinterest />
        </NavbarItem>
        <NavbarItem href="/">
          <FaInstagram />
        </NavbarItem>
      </ol>
    </StyledSocials>
  );
}

export default Socials;
