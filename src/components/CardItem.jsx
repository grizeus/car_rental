import { Link } from "react-router-dom";

const CardItem = ({ options }) => {
  return (
    <div className="w-[276px]">
      <div className="overflow-hidden rounded-[14px]">
        <img src={options.img} alt="car" className="object-cover" />
      </div>
      <div className="mt-4 flex justify-between text-base leading-5">
        <div>
          <span>{options.brand}</span>
          <span className="text-royal"> {options.model}</span>
          <span>, {options.year}</span>
        </div>
        <span className="place-self-end">${options.rentalPrice}</span>
      </div>
      <div className="text-manatee mt-[10px] flex flex-col gap-1 text-xs mb-7">
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
      <Link
        to={`/catalog/${options.id}`}
        className="bg-royal flex h-11 w-full items-center justify-center rounded-xl px-[97px] text-base leading-5 font-semibold text-white">
        Read more
      </Link>
    </div>
  );
}

export default CardItem;
