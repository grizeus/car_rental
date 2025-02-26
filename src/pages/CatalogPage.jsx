import SelectBrand from "../components/SelectBrand";
import SelectMileage from "../components/SelectMileage";
import SelectPrice from "../components/SelectPrice";
import CardList from "../components/CardList";

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
  const totalPages = 3;
  const page = 2;
  const prices = [1, 2, 23, 34, 34, 34, 45, 56];
  const info = [
    {
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
      accessories: [
        "Leather seats",
        "Panoramic sunroof",
        "Premium audio system",
      ],
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
    },

    {
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
      accessories: [
        "Leather seats",
        "Panoramic sunroof",
        "Premium audio system",
      ],
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
    },
    {
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
      accessories: [
        "Leather seats",
        "Panoramic sunroof",
        "Premium audio system",
      ],
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
    },
    {
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
      accessories: [
        "Leather seats",
        "Panoramic sunroof",
        "Premium audio system",
      ],
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
    },
    {
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
      accessories: [
        "Leather seats",
        "Panoramic sunroof",
        "Premium audio system",
      ],
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
    },
  ];
  return (
    <div className="flex flex-col pb-31">
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
          className="bg-royal flex h-11 w-39 items-center justify-center rounded-xl px-[51px] text-base leading-5 font-semibold text-white">
          Search
        </button>
      </div>
      <div className="mt-14 mb-20">
        <CardList cards={info} />
      </div>
      {page !== totalPages && (
        <button
          type="submit"
          className="border-royal flex h-11 w-39 items-center justify-center self-center rounded-xl border">
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
