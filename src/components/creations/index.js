import Card from "./card";
import Heading from "./heading";
import { StyledCreations } from "./styles";
import cards from "./data.json";

function Creations() {
  return (
    <StyledCreations>
      <Heading />
      {cards.map((card) => (
        <Card key={card.id} text={card.text} image={card.image} />
      ))}
    </StyledCreations>
  );
}

export default Creations;
