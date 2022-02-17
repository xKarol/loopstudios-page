import styled from "styled-components";

const StyledLayout = styled.main`
  padding: 150px 5vw;
  max-width: 1212px;
  margin: 0 auto;
`;

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.second};
  color: ${(props) => props.theme.colors.black};
  margin: 20px 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 35px;
  line-height: 1.2;
  font-weight: 400;
`;

const Button = styled.button`
  text-transform: uppercase;
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.black};
  padding: 15px 50px;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 20px;
  transition: background-color 200ms ease-in-out;
  font-family: ${(props) => props.theme.fonts.second};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyledNavbar = styled.nav`
  ol {
    display: flex;
    > li a {
      color: ${(props) => props.theme.colors.white};
      position: relative;
      padding: 10px 0;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 2px;
        background-color: ${(props) => props.theme.colors.white};
        opacity: 0;
        transition: all 200ms ease-in-out;
      }
      &:hover::after {
        opacity: 1;
        left: 0;
        right: 0;
        transform: unset;
      }
    }
  }
`;

const StyledLogo = styled.a`
  z-index: 100;
`;

export { Button, StyledLayout, StyledHeading, StyledNavbar, StyledLogo };
