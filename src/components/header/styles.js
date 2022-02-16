import styled from "styled-components";

const StyledHeader = styled.header`
  position: absolute;
  top: 50px;
  left: 25px;
  right: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHamburger = styled.div`
  width: 24px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 100;
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

const StyledNavbar = styled.nav`
  display: none; // TODO add media query
  ol {
    display: flex;
    > li {
      &:not(:last-child) {
        margin-right: 25px;
      }
      a {
        color: white;
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
  }
`;

export { StyledHeader, StyledHamburger, StyledNavbar };
