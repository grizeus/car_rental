import sprite from "../assets/sprite.svg";

const CheckedItem = ({ text }) => (
  <li className="flex items-center gap-2 text-base leading-5 font-medium">
    <svg className="h-4 w-4">
      <use href={`${sprite}#icon-checked`}></use>
    </svg>
    <span>{text}</span>
  </li>
);

export default CheckedItem;