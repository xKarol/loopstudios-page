import styled from "styled-components";
import thumbnailImage from "../../assets/mobile/image-interactive.jpg";

const StyledThumbnail = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${thumbnailImage});
  background-size: cover;
  background-color: #fafafa;
  margin-bottom: 25px;
`;

const StyledInteractive = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.second};
  margin: 20px 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 35px;
  line-height: 1.2;
`;

const StyledText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.darkGray};
  font-size: 18px;
  line-height: 1.5;
`;

export { StyledThumbnail, StyledInteractive, StyledHeading, StyledText };
