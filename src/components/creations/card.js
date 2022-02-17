import useWindowSize from "../../hooks/useWindowSize";
import { StyledCard, StyledText, StyledImage } from "./styles";
import { deviceWidth } from "../styles/breakpoints";

function Card({ image, text }) {
  const { width } = useWindowSize();
  return (
    <StyledCard href="/" aria-label={text}>
      <StyledImage
        src={`/images/${
          width >= deviceWidth.tablet ? "desktop" : "mobile"
        }${image}`}
        alt={text}
      />
      <StyledText>{text}</StyledText>
    </StyledCard>
  );
}

export default Card;
