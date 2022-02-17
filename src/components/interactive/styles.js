import styled from "styled-components";
import { StyledHeading } from "../styles";
import { device } from "../styles/breakpoints";

const StyledThumbnail = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-color: #fafafa;
  background-repeat: no-repeat;
  margin-bottom: 25px;
  background-image: url("/images/mobile/image-interactive.jpg");
  @media ${device.tablet} {
    height: 500px;
    width: 700px;
    background-image: url("/images/desktop/image-interactive.jpg");
  }
`;

const StyledInteractive = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
  position: relative;
  @media ${device.tablet} {
    align-items: unset;
  }
`;

const StyledText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.darkGray};
  font-size: 18px;
  line-height: 1.5;
  background: ${(props) => props.theme.colors.white};
  @media ${device.tablet} {
    padding: 100px 0 0 100px;
    position: absolute;
    right: -25px;
    bottom: 25px;
    max-width: 500px;
    text-align: left;
  }
`;

const StyledInteractiveHeading = styled(StyledHeading)`
  @media ${device.tablet} {
    text-align: left;
  }
`;

export {
  StyledThumbnail,
  StyledInteractive,
  StyledText,
  StyledInteractiveHeading,
};
