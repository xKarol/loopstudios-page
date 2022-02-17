import styled from "styled-components";
import { Button, StyledHeading } from "../styles";
import { device } from "../styles/breakpoints";

const StyledCreations = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CardsList = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  @media ${device.tablet} {
    align-items: unset;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const StyledCard = styled.a`
  min-width: 312px;
  min-height: 150px;
  width: 100%;
  position: relative;
  display: flex;
  transition: opacity 200ms ease-in-out;
  &:hover {
    opacity: 0.25;
  }
  @media ${device.tablet} {
    min-width: 250px;
    max-width: 250px;
    min-height: 439.45px;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.5) 20%,
      rgba(255, 255, 255, 0) 50%
    );
    @media ${device.tablet} {
      background: linear-gradient(
        0deg,
        rgba(2, 0, 36, 0.5) 20%,
        rgba(255, 255, 255, 0) 50%
      );
    }
  }
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StyledText = styled.label`
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  bottom: 25px;
  left: 25px;
  text-transform: uppercase;
  font-size: 30px;
  max-width: 50%;
  font-family: ${(props) => props.theme.fonts.second};
  pointer-events: none;
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
  @media ${device.tablet} {
    display: none;
  }
`;

const StyledCreationsHeading = styled(StyledHeading)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 75px;
  @media ${device.tablet} {
    justify-content: space-between;
  }
  > :first-child {
    display: none;
    @media ${device.tablet} {
      display: unset;
    }
  }
`;

export {
  StyledCreations,
  StyledCreationsHeading,
  StyledCard,
  StyledText,
  StyledImage,
  StyledButton,
  CardsList,
};
