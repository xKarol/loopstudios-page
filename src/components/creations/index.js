import Card from "./card";
import Heading from "./heading";
import { StyledCreations, StyledButton, CardsList } from "./styles";
import cards from "./data.json";

function Creations() {
  return (
    <StyledCreations>
      <Heading />
      <CardsList>
        {cards.map((card) => (
          <Card key={card.id} text={card.text} image={card.image} />
        ))}
      </CardsList>
      <StyledButton type="button" aria-label="See all creations">
        See all
      </StyledButton>
    </StyledCreations>
  );
}

export default Creations;
