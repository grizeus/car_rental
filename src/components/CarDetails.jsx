import sprite from "../assets/sprite.svg";

const CarDetails = ({ details }) => {
  const descrId = details.img.split("/").pop().split("-").shift();
  return (
    <div className="flex w-122 flex-col pt-5">
      <div className="mb-2 flex items-baseline gap-4">
        <h1 className="text-2xl font-semibold">
          {`${details.brand}
              ${details.model}, ${details.year}`}
        </h1>
        <span className="text-manatee text-base leading-5">id: {descrId}</span>
      </div>
      <div className="flex items-center text-base leading-5 font-medium">
        <svg className="mr-1 h-[15px] w-3">
          <use href={`${sprite}#icon-location`}></use>
        </svg>
        <span>{details.address.slice(details.address.search(",") + 1)}</span>
        <span className="ml-4">
          {details.mileage.toLocaleString().replace(/,/g, " ")} km
        </span>
      </div>
      <span className="text-royal mt-4 text-2xl font-semibold">
        ${details.rentalPrice}
      </span>
      <span className="mt-8 w-122 text-base leading-5 font-medium">
        {details.description}
      </span>
      <div className="mt-17">
        <span className="mb-5 block text-xl leading-6 font-semibold">
          Rental Conditions:
        </span>
        <ul className="flex flex-col gap-4">
          {details.rentalConditions.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-base leading-5 font-medium">
              <svg className="h-4 w-4">
                <use href={`${sprite}#icon-checked`}></use>
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-[110px]">
        <span className="mb-5 block text-xl leading-6 font-semibold">
          Car specifications:
        </span>
        <ul className="flex flex-col gap-4 text-base leading-5 font-medium">
          <li className="flex items-center gap-2">
            <svg className="h-4 w-4">
              <use href={`${sprite}#icon-calendar`}></use>
            </svg>
            <span>Year: {details.year}</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="h-4 w-4">
              <use href={`${sprite}#icon-car`}></use>
            </svg>
            <span>Type: {details.type}</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="h-4 w-4">
              <use href={`${sprite}#icon-fuel-pump`}></use>
            </svg>
            <span>Fuel consumption: {details.fuelConsumption}</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="h-4 w-4">
              <use href={`${sprite}#icon-gear`}></use>
            </svg>
            <span>Engine size: {details.engineSize}</span>
          </li>
        </ul>
      </div>
      <div className="mt-[110px]">
        <span className="mb-5 block text-xl leading-6 font-semibold">
          Accessories and functionalities:
        </span>
        <ul className="flex flex-col gap-4">
          {details.accessories.map((item, i) => (
            <li
              key={`acc-${i}`}
              className="flex items-center gap-2 text-base leading-5 font-medium">
              <svg className="h-4 w-4">
                <use href={`${sprite}#icon-checked`}></use>
              </svg>
              <span>{item}</span>
            </li>
          ))}
          {details.functionalities.map((item, i) => (
            <li
              key={`func-${i}`}
              className="flex items-center gap-2 text-base leading-5 font-medium">
              <svg className="h-4 w-4">
                <use href={`${sprite}#icon-checked`}></use>
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;
