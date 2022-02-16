import styled from "styled-components";

const StyledLayout = styled.main`
  padding: 80px 5vw;
`;

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.second};
  margin: 20px 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 35px;
  line-height: 1.2;
`;

const Button = styled.button`
  text-transform: uppercase;
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.black};
  padding: 15px 50px;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 20px;
`;

const StyledNavbar = styled.nav`
  ol {
    display: flex;
    > li a {
      color: ${(props) => props.theme.colors.white};
      position: relative;
      padding: 10px 0;
    }
  }
`;

const StyledLogo = styled.a`
  z-index: 100;
`;

export { Button, StyledLayout, StyledHeading, StyledNavbar, StyledLogo };
