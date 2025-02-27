import { Link } from "react-router-dom";
import sprite from "../assets/sprite.svg";

const CardItem = ({ options, isFavorite }) => {
  return (
    <div className="flex h-106 flex-col justify-between">
      <div>
        <div className="relative w-69 overflow-hidden rounded-[14px] after:absolute after:inset-x-0 after:top-0 after:h-1/2 after:bg-linear-180 after:from-[rgba(18,20,23,0.5)] after:to-transparent">
          <img
            src={options.img}
            alt={`${options.brand} ${options.model}`}
            className="min-h-67 w-full object-cover"
          />
          {isFavorite ? (
            <svg className="fill-royal absolute top-4 right-4 z-2 h-4 w-4">
              <use href={`${sprite}#icon-favorite`}></use>
            </svg>
          ) : (
            <svg className="fill-solitude absolute top-4 right-4 z-2 h-4 w-4">
              <use href={`${sprite}#icon-outline-favorite`}></use>
            </svg>
          )}
        </div>
        <div className="mt-4 flex justify-between text-base leading-5">
          <div>
            <span>{options.brand}</span>
            <span className="text-royal"> {options.model}</span>
            <span>, {options.year}</span>
          </div>
          <span>${options.rentalPrice}</span>
        </div>
        <div className="text-manatee mt-[10px] flex flex-col gap-1 text-xs">
          <div className="flex gap-[6px]">
            <span className="border-r-hawkes border-r pr-[6px]">
              {options.address.split(",")[1]}
            </span>
            <span className="border-r-hawkes border-r pr-[6px]">
              {options.address.split(",")[2]}
            </span>
            <span className="border-r-hawkes border-r pr-[6px]">
              {options.rentalCompany}
            </span>
          </div>
          <div className="flex gap-[6px]">
            <span className="border-r-hawkes border-r pr-[6px]">
              {options.type}
            </span>
            <span>
              {options.mileage.toLocaleString().replace(/,/g, " ")} km
            </span>
          </div>
        </div>
      </div>
      <Link
        to={`/catalog/${options.id}`}
        className="bg-royal flex h-11 w-full items-center justify-center rounded-xl px-[97px] text-base leading-5 font-semibold text-white">
        Read more
      </Link>
    </div>
  );
};

export default CardItem;
