import styled from "styled-components";
import { Button } from "../styles";

const StyledCreations = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledCard = styled.a`
  width: 100%;
  margin-top: 25px;
  position: relative;
  display: flex;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.4962359943977591) 20%,
      rgba(255, 255, 255, 0) 50%
    );
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
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
`;

export { StyledCreations, StyledCard, StyledText, StyledImage, StyledButton };
