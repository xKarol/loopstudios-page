import styled, { keyframes } from "styled-components";
import { StyledNavbar } from "../styles";
import { device } from "../styles/breakpoints";

const StyledHeader = styled.header`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
`;

const StyledHamburger = styled.button`
  background: none;
  border: none;
  width: 24px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 100;
  @media ${device.tablet} {
    display: none;
  }
  &.active {
    display: unset;
  }
  > span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${(props) => props.theme.colors.white};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 8px;
    }

    &:nth-child(4) {
      top: 16px;
    }
  }
  &.active > span {
    &:nth-child(1) {
      top: 6px;
      width: 0%;
      left: 50%;
    }

    &:nth-child(2) {
      transform: rotate(45deg);
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
    }

    &:nth-child(4) {
      top: 8px;
      width: 0%;
      left: 50%;
    }
  }
`;

const NavbarFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
  opacity: 1;
  }
`;

const StyledHeaderNavbar = styled(StyledNavbar)`
  display: none;
  z-index: 50;
  @media ${device.tablet} {
    display: unset;
  }
  &.active {
    display: unset;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.black};
    padding: 0 10vw;
    padding-top: 250px;
    animation: ${NavbarFadeIn} 400ms ease-in-out;
    > ol {
      flex-direction: column;
      text-transform: uppercase;
      font-size: 30px;
      letter-spacing: 1px;
      font-family: ${(props) => props.theme.fonts.second};
      > li:not(:last-child) {
        margin-bottom: 25px;
      }
    }
  }
  ol > li {
    &:not(:last-child) {
      margin-right: 25px;
    }
  }
`;

export { StyledHeader, StyledHamburger, StyledHeaderNavbar };
