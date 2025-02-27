// import { useParams } from "react-router-dom";
import sprite from "../assets/sprite.svg";
import ContactForm from "../components/ContactForm";
const DetailsPage = () => {
  const details = {
    id: "11a3ab35-07b8-4336-b06b-602cdc309f2c",
    year: 2008,
    brand: "Buick",
    model: "Enclave",
    type: "SUV",
    img: "https://ac.goit.global/car-rental-task/9582-ai.jpg",
    description:
      "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
    fuelConsumption: "10.5",
    engineSize: "3.6L V6",
    accessories: ["Leather seats", "Panoramic sunroof", "Premium audio system"],
    functionalities: [
      "Power liftgate",
      "Remote start",
      "Blind-spot monitoring",
    ],
    rentalPrice: "40",
    rentalCompany: "Luxury Car Rentals",
    address: "123 Example Street, Kiev, Ukraine",
    rentalConditions: [
      "Minimum age: 25",
      "Valid driver's license",
      "Security deposit required",
    ],
    mileage: 5858,
  };
  // const { id } = useParams();
  const descrId = details.img.split("/").pop().split("-").shift();
  return (
    <div className="flex gap-x-18 pt-21 pb-26">
      <div className="flex flex-col gap-10">
        <div className="h-128 w-160 overflow-hidden rounded-[14px]">
          <img src={details.img} alt="car" className="h-full object-cover" />
        </div>
        <ContactForm />
      </div>

      <div className="flex w-122 pt-5 flex-col">
        <div className="mb-2 flex items-baseline gap-4">
          <h1 className="text-2xl font-semibold">
            {`${details.brand}
              ${details.model}, ${details.year}`}
          </h1>
          <span className="text-manatee text-base leading-5">
            id: {descrId}
          </span>
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
    </div>
  );
};

export default DetailsPage;
