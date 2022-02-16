import Logo from "../logo";
import Copyright from "./copyright";
import Nav from "./nav";
import Socials from "./socials";
import { StyledFooter, Box } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <Box>
        <Logo />
        <Nav />
      </Box>
      <Box>
        <Socials />
        <Copyright />
      </Box>
    </StyledFooter>
  );
}

export default Footer;
