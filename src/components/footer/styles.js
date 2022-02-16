import styled from "styled-components";
import { StyledNavbar } from "../styles";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: ${(props) => props.theme.colors.black};
  > * {
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyledFooterNavbar = styled(StyledNavbar)`
  margin: 40px 0;
  > ol {
    flex-direction: column;
    letter-spacing: 1px;
    align-items: center;
    > li:not(:last-child) {
      margin-bottom: 25px;
    }
  }
`;

const StyledSocials = styled.section`
  display: flex;
  font-size: 35px;
  a {
    color: ${(props) => props.theme.colors.white};
  }
  > * {
    margin-right: 15px;
  }
`;

const StyledCopyright = styled.span`
  color: ${(props) => props.theme.colors.veryDarkGray};
  margin-top: 15px;
`;

export { StyledFooter, StyledFooterNavbar, StyledSocials, StyledCopyright };
