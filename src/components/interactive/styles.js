import styled from "styled-components";
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
    background-image: url("/images/desktop/image-interactive.jpg");
  }
`;

const StyledInteractive = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;

const StyledText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.darkGray};
  font-size: 18px;
  line-height: 1.5;
`;

export { StyledThumbnail, StyledInteractive, StyledText };
