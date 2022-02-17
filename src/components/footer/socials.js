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
        <NavbarItem href="/" aria-label="facebook">
          <FaFacebookSquare />
        </NavbarItem>
        <NavbarItem href="/" aria-label="twitter">
          <FaTwitter />
        </NavbarItem>
        <NavbarItem href="/" aria-label="pinterest">
          <FaPinterest />
        </NavbarItem>
        <NavbarItem href="/" aria-label="instagram">
          <FaInstagram />
        </NavbarItem>
      </ol>
    </StyledSocials>
  );
}

export default Socials;
