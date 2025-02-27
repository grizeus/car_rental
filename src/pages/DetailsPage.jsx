// import { useParams } from "react-router-dom";
import CarDetails from "../components/CarDetails";
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
  return (
    <div className="flex gap-x-18 pt-21 pb-26">
      <div className="flex flex-col gap-10">
        <div className="h-128 w-160 overflow-hidden rounded-[14px]">
          <img src={details.img} alt="car" className="h-full object-cover" />
        </div>
        <ContactForm />
      </div>

      <CarDetails details={details} />
    </div>
  );
};

export default DetailsPage;
