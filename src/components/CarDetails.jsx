import sprite from "../assets/sprite.svg";
import CheckedItem from "./CheckedItem";
import IconTextItem from "./IconTextItem";

const CarDetails = ({ details }) => {
  // extract id from image name
  const descriptionId = details.img.split("/").pop().split("-").shift();

  // Format the location by removing everything before the first comma
  const location = details.address.slice(details.address.search(",") + 1);

  // Format mileage with spaces instead of commas
  const formattedMileage = details.mileage.toLocaleString().replace(/,/g, " ");

  return (
    <div className="flex w-122 flex-col pt-5">
      {/* Header section */}
      <div className="mb-2 flex items-baseline gap-4">
        <h1 className="text-2xl font-semibold">
          {`${details.brand} ${details.model}, ${details.year}`}
        </h1>
        <span className="text-manatee text-base leading-5">
          id: {descriptionId}
        </span>
      </div>

      {/* Location and mileage */}
      <div className="flex items-center text-base leading-5 font-medium">
        <svg className="mr-1 h-[15px] w-3">
          <use href={`${sprite}#icon-location`}></use>
        </svg>
        <span>{location}</span>
        <span className="ml-4">{formattedMileage} km</span>
      </div>

      {/* Price */}
      <span className="text-royal mt-4 text-2xl font-semibold">
        ${details.rentalPrice}
      </span>

      {/* Description */}
      <span className="mt-8 w-122 text-base leading-5 font-medium">
        {details.description}
      </span>

      {/* Rental Conditions */}
      <div className="mt-17">
        <span className="mb-5 block text-xl leading-6 font-semibold">
          Rental Conditions:
        </span>
        <ul className="flex flex-col gap-4">
          {Array.isArray(details?.rentalConditions) &&
            details.rentalConditions.length > 0 &&
            details.rentalConditions.map((item, i) => (
              <CheckedItem key={`cond-${i}`} text={item} />
            ))}
        </ul>
      </div>

      {/* Car specifications */}
      <div className="mt-[110px]">
        <span className="mb-5 block text-xl leading-6 font-semibold">
          Car specifications:
        </span>
        <ul className="flex flex-col gap-4 text-base leading-5 font-medium">
          <IconTextItem icon="calendar" text={`Year: ${details.year}`} />
          <IconTextItem icon="car" text={`Type: ${details.type}`} />
          <IconTextItem
            icon="fuel-pump"
            text={`Fuel consumption: ${details.fuelConsumption}`}
          />
          <IconTextItem
            icon="gear"
            text={`Engine size: ${details.engineSize}`}
          />
        </ul>
      </div>

      {/* Accessories and functionalities */}
      <div className="mt-[110px]">
        <span className="mb-5 block text-xl leading-6 font-semibold">
          Accessories and functionalities:
        </span>
        <ul className="flex flex-col gap-4">
          {Array.isArray(details?.accessories) &&
            details.accessories.length > 0 &&
            details.accessories.map((item, i) => (
              <CheckedItem key={`acc-${i}`} text={item} />
            ))}
          {Array.isArray(details?.functionalities) &&
            details.functionalities.length > 0 &&
            details.functionalities.map((item, i) => (
              <CheckedItem key={`func-${i}`} text={item} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;
