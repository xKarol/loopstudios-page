import styled from "styled-components";
import { StyledNavbar } from "../styles";
import { device } from "../styles/breakpoints";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10vw;
  background-color: ${(props) => props.theme.colors.black};
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
  > * {
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyledFooterNavbar = styled(StyledNavbar)`
  margin-top: 25px;
  @media ${device.tablet} {
    margin-top: 0;
  }
  > ol {
    flex-direction: column;
    letter-spacing: 1px;
    align-items: center;
    @media ${device.tablet} {
      flex-direction: row;
    }
    > li:not(:last-child) {
      margin-bottom: 25px;
      @media ${device.tablet} {
        margin-bottom: 0;
        margin-right: 25px;
      }
    }
  }
`;

const StyledSocials = styled(StyledNavbar)`
  > ol {
    display: flex;
    font-size: 25px;
    > li {
      :not(:last-child) {
        margin-right: 15px;
      }
      a::after {
        bottom: 10px;
      }
    }
  }
`;

const StyledCopyright = styled.span`
  color: ${(props) => props.theme.colors.veryDarkGray};
  text-align: right;
  margin-top: 15px;
  @media ${device.tablet} {
    margin-top: 0;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:first-child {
    margin-bottom: 40px;
  }

  @media ${device.tablet} {
    margin-bottom: 0;
    height: 75px;
    justify-content: space-between;
    align-items: flex-end;
    &:first-child {
      align-items: unset;
      margin-bottom: 0;
    }
  }
`;

export {
  StyledFooter,
  StyledFooterNavbar,
  StyledSocials,
  StyledCopyright,
  Box,
};
