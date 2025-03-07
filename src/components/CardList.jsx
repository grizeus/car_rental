import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import { selectFavs } from "../redux/favorites/selectors";

const CardList = ({ cards }) => {
  const favorites = useSelector(selectFavs);
  return (
    <ul className="grid grid-cols-4 gap-x-8 gap-y-12">
      {cards.map(card => (
        <li key={card.id} className="flex h-106 flex-col justify-between">
          <CardItem options={card} isFavorite={favorites.includes(card.id)} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
