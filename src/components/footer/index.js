import Logo from "../logo";
import Copyright from "./copyright";
import Nav from "./nav";
import Socials from "./socials";
import { StyledFooter } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Nav />
      <Socials />
      <Copyright />
    </StyledFooter>
  );
}

export default Footer;
