import {
  StyledText,
  StyledInteractiveHeading,
  StyledParagraph,
} from "./styles";

function Text() {
  return (
    <StyledText>
      <StyledInteractiveHeading>
        The leader in interactive VR
      </StyledInteractiveHeading>
      <StyledParagraph>
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </StyledParagraph>
    </StyledText>
  );
}

export default Text;
