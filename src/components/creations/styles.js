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
  flex-wrap: wrap;
  gap: 25px;
`;

const StyledCard = styled.a`
  position: relative;
  display: flex;
  transition: opacity 200ms ease-in-out;
  &:hover {
    opacity: 0.25;
  }
  @media ${device.md} {
    width: calc((100% - 25px) / 2);
  }
  @media ${device.lg} {
    width: calc((100% - 50px) / 3);
  }
  @media ${device.xlg} {
    width: calc((100% - 75px) / 4);
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
    @media ${device.md} {
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
  @media ${device.md} {
    display: none;
  }
`;

const StyledCreationsHeading = styled(StyledHeading)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 75px;
  @media ${device.md} {
    justify-content: space-between;
  }
  > :first-child {
    display: none;
    @media ${device.md} {
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
