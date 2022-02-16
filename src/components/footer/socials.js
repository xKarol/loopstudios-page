import { StyledSocials } from "./styles";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Socials() {
  return (
    <StyledSocials>
      <a href="/">
        <FaFacebookSquare />
      </a>
      <a href="/">
        <FaTwitter />
      </a>
      <a href="/">
        <FaPinterest />
      </a>
      <a href="/">
        <FaInstagram />
      </a>
    </StyledSocials>
  );
}

export default Socials;
