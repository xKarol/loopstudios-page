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

const StyledText = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.darkGray};
  font-size: 18px;
  line-height: 1.5;
`;

export { StyledThumbnail, StyledInteractive, StyledText };
