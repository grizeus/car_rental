import sprite from "../assets/sprite.svg";

const IconTextItem = ({ icon, text }) => (
  <li className="flex items-center gap-2 text-base leading-5 font-medium">
    <svg className="h-4 w-4">
      <use href={`${sprite}#icon-${icon}`}></use>
    </svg>
    <span>{text}</span>
  </li>
);

export default IconTextItem;