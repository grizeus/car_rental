import SelectBrand from "../components/SelectBrand";
import SelectMileage from "../components/SelectMileage";
import SelectPrice from "../components/SelectPrice";
import car from "../assets/img/hero.jpg";
import { Link } from "react-router-dom";

const CatalogPage = () => {
  const cars = [
    "Aston Martin",
    "Audi",
    "BMW",
    "Bentley",
    "Buick",
    "Chevrolet",
    "Chrysler",
    "GMC",
    "HUMMER",
    "Hyundai",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lincoln",
    "MINI",
    "Mercedes-Benz",
    "Mitsubishi",
    "Nissan",
    "Pontiac",
    "Subaru",
    "Volvo",
  ];
  const prices = [1, 2, 23, 34, 34, 34, 45, 56];
  const info = {
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
  return (
    <>
      <div className="flex items-end justify-center gap-4 pt-[84px]">
        <ul className="flex gap-4">
          <li>
            <SelectBrand options={cars} />
          </li>
          <li>
            <SelectPrice options={prices} />
          </li>
          <li>
            <SelectMileage />
          </li>
        </ul>
        <button
          type="submit"
          className="bg-royal flex h-11 w-[156px] items-center justify-center rounded-xl px-[51px] text-base leading-5 font-semibold text-white">
          Search
        </button>
      </div>
      <div className="mt-14">
        <ul className="grid grid-cols-4 gap-8">
          <li>
            <div className="w-[276px]">
              <div className="overflow-hidden rounded-[14px]">
                <img src={car} alt="car" className="object-cover" />
              </div>
              <div className="mt-4 flex justify-between text-base leading-5">
                <div>
                  <span>{info.brand}</span>
                  <span className="text-royal"> {info.model}</span>
                  <span>, {info.year}</span>
                </div>
                <span className="place-self-end">${info.rentalPrice}</span>
              </div>
              <div className="text-manatee mt-[10px] flex flex-col gap-1 text-xs mb-7">
                <div className="flex gap-[6px]">
                  <span className="border-r-hawkes border-r pr-[6px]">
                    {info.address.split(",")[1]}
                  </span>
                  <span className="border-r-hawkes border-r pr-[6px]">
                    {info.address.split(",")[2]}
                  </span>
                  <span className="border-r-hawkes border-r pr-[6px]">
                    {info.rentalCompany}
                  </span>
                </div>
                <div className="flex gap-[6px]">
                  <span className="border-r-hawkes border-r pr-[6px]">
                    {info.type}
                  </span>
                  <span>
                    {info.mileage.toLocaleString().replace(/,/g, " ")} km
                  </span>
                </div>
              </div>
              <Link
                to={`/catalog/${info.id}`}
                className="bg-royal flex h-11 w-full items-center justify-center rounded-xl px-[97px] text-base leading-5 font-semibold text-white">
                Read more
              </Link>
            </div>
          </li>
          <li>
            <div className="w-[276px]">
              <img src={car} alt="car" />
            </div>
          </li>
          <li>
            <div className="w-[276px]">
              <img src={car} alt="car" />
            </div>
          </li>
          <li>
            <div className="w-[276px]">
              <img src={car} alt="car" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CatalogPage;
