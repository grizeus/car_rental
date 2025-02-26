import CardItem from "./CardItem";

const CardList = ({ cards }) => {
  return (
    <ul className="grid grid-cols-4 gap-8">
      {Array.isArray(cards) && cards.map((card) => (
        <li key={card.id}>
          <CardItem options={card} />
        </li>
      ))}
    </ul>
  );
}

export default CardList
