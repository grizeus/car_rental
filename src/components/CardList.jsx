import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import { selectFavs } from "../redux/favorites/selectors";

const CardList = ({ cards }) => {
  const favorites = useSelector(selectFavs);
  return (
    <ul className="grid grid-cols-4 gap-x-8 gap-y-12">
      {Array.isArray(cards) &&
        cards.length > 0 &&
        cards.map(card => (
          <li key={card.id}>
            <CardItem options={card} isFavorite={favorites.includes(card.id)} />
          </li>
        ))}
    </ul>
  );
};

export default CardList;
