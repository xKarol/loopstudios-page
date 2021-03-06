import styled from "styled-components";
import { StyledHeading } from "../styles";
import { device } from "../styles/breakpoints";

const StyledThumbnail = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-color: #fafafa;
  background-repeat: no-repeat;
  background-image: url("/images/mobile/image-interactive.jpg");
  @media ${device.md} {
    height: 500px;
    max-width: 700px;
    background-image: url("/images/desktop/image-interactive.jpg");
  }
`;

const StyledInteractive = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  position: relative;
`;

const StyledText = styled.section`
  text-align: center;
  background: ${(props) => props.theme.colors.white};
  padding: 25px;
  @media ${device.md} {
    padding: 100px 0 0 100px;
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 500px;
    text-align: left;
  }
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.colors.darkGray};
  line-height: 1.5;
  font-size: 18px;
`;

const StyledInteractiveHeading = styled(StyledHeading)`
  margin: 0;
  margin-bottom: 10px;
  @media ${device.md} {
    text-align: left;
  }
`;

export {
  StyledThumbnail,
  StyledInteractive,
  StyledText,
  StyledInteractiveHeading,
  StyledParagraph,
};
