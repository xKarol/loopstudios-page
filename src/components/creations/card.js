import { StyledCard, StyledText, StyledImage } from "./styles";

function Card({ image, text }) {
  return (
    <StyledCard>
      <StyledImage src={`/images/mobile${image}`} alt={text} />
      <StyledText>{text}</StyledText>
    </StyledCard>
  );
}

export default Card;
