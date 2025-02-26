import CardItem from "./CardItem";

const CardList = ({ cards }) => {
  return (
    <ul className="grid grid-cols-4 gap-x-8 gap-y-12">
      {Array.isArray(cards) && cards.map((card) => (
        <li key={card.id}>
          <CardItem options={card} />
        </li>
      ))}
    </ul>
  );
}

export default CardList
