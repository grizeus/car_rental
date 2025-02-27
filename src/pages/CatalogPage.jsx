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
      id: "324710c7-afe3-4e17-aba4-07e2b278179d",
      year: 2019,
      brand: "Volvo",
      model: "XC90",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9584-ai.jpg",
      description:
        "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",
      fuelConsumption: "8.3",
      engineSize: "2.0L 4-cylinder",
      accessories: [
        "Nappa leather seats",
        "Bowers & Wilkins premium sound system",
        "Head-up display",
      ],
      functionalities: [
        "IntelliSafe advanced safety features",
        "Pilot Assist semi-autonomous driving",
        "Four-zone automatic climate control",
      ],
      rentalPrice: "50",
      rentalCompany: "Premium Auto Rentals",
      address: "456 Example Avenue, Lviv, Ukraine",
      rentalConditions: [
        "Minimum age: 21",
        "Valid driver's license",
        "Proof of insurance required",
      ],
      mileage: 5352,
    },
    {
      id: "5ed1cf8e-d493-459e-9cc6-1a1ca22a1900",
      year: 2020,
      brand: "Volvo",
      model: "XC60",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9586-ai.jpg",
      description:
        "The Volvo XC60 is a compact luxury SUV with a beautiful interior, strong performance, and advanced safety features.",
      fuelConsumption: "7.9",
      engineSize: "2.0L 4-cylinder",
      accessories: [
        "Premium leather seats",
        "Harman Kardon audio system",
        "Hands-free power tailgate",
      ],
      functionalities: [
        "City Safety collision avoidance technology",
        "Pilot Assist with adaptive cruise control",
        "9-inch Sensus touchscreen infotainment system",
      ],
      rentalPrice: "40",
      rentalCompany: "Luxury Car Rentals",
      address: "789 Example Boulevard, Odessa, Ukraine",
      rentalConditions: [
        "Minimum age: 23",
        "Valid driver's license",
        "Credit card required",
      ],
      mileage: 5966,
    },
    {
      id: "e7ffb97e-9fe4-44f1-ae73-34e308afa82d",
      year: 2006,
      brand: "HUMMER",
      model: "H2",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9587-ai.jpg",
      description:
        "The HUMMER H2 is a rugged and powerful SUV that stands out with its imposing presence and off-road capabilities.",
      fuelConsumption: "19.8",
      engineSize: "6.0L V8",
      accessories: [
        "Heated leather seats",
        "Bose premium sound system",
        "Off-road package",
      ],
      functionalities: [
        "Electronic locking front and rear differentials",
        "Stabilitrak stability control",
        "Tire pressure monitoring system",
      ],
      rentalPrice: "50",
      rentalCompany: "Adventure Car Rentals",
      address: "321 Example Road, Kharkiv, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit required",
      ],
      mileage: 4771,
    },
    {
      id: "a57f5544-e771-439d-bf32-06fe429b6352",
      year: 2016,
      brand: "Subaru",
      model: "Outback",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9590-ai.jpg",
      description:
        "The Subaru Outback is a versatile and reliable SUV that combines off-road capability with a comfortable and spacious interior.",
      fuelConsumption: "8.7",
      engineSize: "2.5L 4-cylinder",
      accessories: [
        "Leather upholstery",
        "Power moonroof",
        "Harman Kardon premium audio system",
      ],
      functionalities: [
        "Symmetrical All-Wheel Drive",
        "X-Mode off-road assist",
        "Subaru EyeSight driver-assist system",
      ],
      rentalPrice: "30",
      rentalCompany: "Adventure Car Rentals",
      address: "987 Example Street, Kyiv, Ukraine",
      rentalConditions: [
        "Minimum age: 21",
        "Valid driver's license",
        "Credit card required",
      ],
      mileage: 4061,
    },
    {
      id: "aaa71091-8237-4603-a647-067bb9a1decc",
      year: 2010,
      brand: "Mitsubishi",
      model: "Outlander",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9591-ai.jpg",
      description:
        "The Mitsubishi Outlander is a practical and fuel-efficient SUV with a stylish design and a range of modern features.",
      fuelConsumption: "7.9",
      engineSize: "2.4L 4-cylinder",
      accessories: [
        "Heated front seats",
        "Rockford Fosgate premium audio system",
        "Power liftgate",
      ],
      functionalities: [
        "Super All-Wheel Control",
        "Multi-View camera system",
        "Bluetooth hands-free system",
      ],
      rentalPrice: "30",
      rentalCompany: "City Car Rentals",
      address: "654 Example Avenue, Lviv, Ukraine",
      rentalConditions: [
        "Minimum age: 21",
        "Valid driver's license",
        "Proof of insurance required",
      ],
      mileage: 5374,
    },
    {
      id: "5ef1417b-0b04-465b-9abe-f320a9c499bf",
      year: 2014,
      brand: "Nissan",
      model: "Pathfinder",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9593-ai.jpg",
      description:
        "The Nissan Pathfinder is a versatile and family-friendly SUV that offers a comfortable ride and generous cargo space.",
      fuelConsumption: "9.5",
      engineSize: "3.5L V6",
      accessories: [
        "Tri-Zone Automatic Climate Control",
        "Bose premium audio system",
        "Rear-seat entertainment system",
      ],
      functionalities: [
        "Intelligent 4x4 system",
        "Advanced Drive-Assist Display",
        "Nissan Intelligent Key with push-button ignition",
      ],
      rentalPrice: "40",
      rentalCompany: "Luxury Car Rentals",
      address: "321 Example Road, Odessa, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit required",
      ],
      mileage: 6282,
    },
    {
      id: "5c6891c2-2a56-4e88-9d76-92eb5ab88b1e",
      year: 2009,
      brand: "Lincoln",
      model: "Navigator L",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9596-ai.jpg",
      description:
        "The Lincoln Navigator L is a luxurious and spacious SUV with a refined interior and advanced technology features.",
      fuelConsumption: "18.2",
      engineSize: "5.4L V8",
      accessories: [
        "Premium leather seats",
        "THX II Certified audio system",
        "Power-deployable running boards",
      ],
      functionalities: [
        "AdvanceTrac with Roll Stability Control",
        "Voice-Activated Navigation System",
        "Power liftgate",
      ],
      rentalPrice: "50",
      rentalCompany: "Elite Car Rentals",
      address: "123 Example Boulevard, Kharkiv, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Insurance coverage required",
      ],
      mileage: 6173,
    },
    {
      id: "fd06d36e-5f38-42a5-b323-8ebefa3bac99",
      year: 2000,
      brand: "GMC",
      model: "Yukon Denali",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9597-ai.jpg",
      description:
        "The GMC Yukon Denali is a full-size luxury SUV that offers a powerful engine, a comfortable and spacious interior, and a host of advanced features.",
      fuelConsumption: "14.5",
      engineSize: "6.0L V8",
      accessories: [
        "Heated and ventilated front seats",
        "BOSE premium sound system",
        "Power-folding third-row seats",
      ],
      functionalities: [
        "All-Wheel Drive",
        "Adaptive suspension",
        "Advanced safety features",
      ],
      rentalPrice: "40",
      rentalCompany: "Premium Car Rentals",
      address: "789 Example Square, Dnipro, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit required",
      ],
      mileage: 4989,
    },
    {
      id: "5a995d1d-3432-4bf8-b88d-f730f01b9688",
      year: 2007,
      brand: "Hyundai",
      model: "Tucson",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9598-ai.jpg",
      description:
        "The Hyundai Tucson is a reliable and fuel-efficient SUV that combines practicality with a stylish design and a comfortable ride.",
      fuelConsumption: "8.2",
      engineSize: "2.0L 4-cylinder",
      accessories: [
        "Apple CarPlay and Android Auto integration",
        "Blind Spot Detection",
        "Hands-free smart liftgate",
      ],
      functionalities: [
        "Front-Wheel Drive",
        "Hillstart Assist Control",
        "LED headlights",
      ],
      rentalPrice: "30",
      rentalCompany: "Economy Car Rentals",
      address: "456 Example Lane, Zaporizhzhia, Ukraine",
      rentalConditions: [
        "Minimum age: 21",
        "Valid driver's license",
        "Credit card required",
      ],
      mileage: 4591,
    },
    {
      id: "72883b63-f036-4f92-a081-24ef527a6c01",
      year: 2006,
      brand: "MINI",
      model: "Convertible",
      type: "Convertible",
      img: "https://ac.goit.global/car-rental-task/9583-ai.jpg",
      description:
        "The MINI Convertible is a compact and fun-to-drive convertible that offers a unique and iconic design, agile handling, and an open-air driving experience.",
      fuelConsumption: "6.9",
      engineSize: "1.6L 4-cylinder",
      accessories: [
        "Convertible soft top",
        "Sport seats",
        "MINI Connected infotainment system",
      ],
      functionalities: [
        "Front-Wheel Drive",
        "Dynamic Stability Control",
        "Rain-sensing wipers",
      ],
      rentalPrice: "30",
      rentalCompany: "Fun Car Rentals",
      address: "234 Example Place, Vinnytsia, Ukraine",
      rentalConditions: [
        "Minimum age: 21",
        "Valid driver's license",
        "Proof of insurance required",
      ],
      mileage: 6275,
    },
    {
      id: "bca12fb6-9427-4c85-88c3-1339f1b1ba9f",
      year: 2007,
      brand: "Bentley",
      model: "Azure",
      type: "Convertible",
      img: "https://ac.goit.global/car-rental-task/9606-ai.jpg",
      description:
        "The Bentley Azure is a luxurious and prestigious convertible that combines exceptional craftsmanship, powerful performance, and sophisticated elegance.",
      fuelConsumption: "22.5",
      engineSize: "6.8L V8",
      accessories: [
        "Mulliner Driving Specification",
        "Naim for Bentley premium audio system",
        "Heated steering wheel",
      ],
      functionalities: [
        "Rear-Wheel Drive",
        "Air suspension",
        "Automatic convertible roof",
      ],
      rentalPrice: "80",
      rentalCompany: "Luxury Car Rentals",
      address: "567 Example Street, Lviv, Ukraine",
      rentalConditions: [
        "Minimum age: 30",
        "Valid driver's license",
        "Security deposit and insurance required",
      ],
      mileage: 4317,
    },
    {
      id: "e3b22e49-b28d-4632-8b15-0e40c4cfbb7b",
      year: 2004,
      brand: "Mercedes-Benz",
      model: "SL-Class",
      type: "Convertible",
      img: "https://ac.goit.global/car-rental-task/9612-ai.jpg",
      description:
        "The Mercedes-Benz SL-Class is a legendary luxury convertible that offers a perfect blend of thrilling performance, advanced technology, and opulent comfort.",
      fuelConsumption: "11.8",
      engineSize: "5.0L V8",
      accessories: [
        "Airscarf neck-level heating",
        "Harman Kardon premium audio system",
        "Active Body Control suspension",
      ],
      functionalities: [
        "Rear-Wheel Drive",
        "Retractable hardtop roof",
        "Multi-contour seats",
      ],
      rentalPrice: "70",
      rentalCompany: "Exquisite Car Rentals",
      address: "789 Example Boulevard, Kyiv, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit and proof of insurance required",
      ],
      mileage: 5722,
    },
    {
      id: "718bac4f-839a-45f9-a653-0170d83cc9a1",
      year: 2010,
      brand: "Aston Martin",
      model: "DBS",
      type: "Convertible",
      img: "https://ac.goit.global/car-rental-task/9616-ai.jpg",
      description:
        "The Aston Martin DBS is a stunning and high-performance convertible that exemplifies British luxury and delivers exhilarating driving dynamics.",
      fuelConsumption: "16.5",
      engineSize: "6.0L V12",
      accessories: [
        "Carbon Ceramic brakes",
        "Bang & Olufsen BeoSound audio system",
        "Bridge of Weir leather upholstery",
      ],
      functionalities: [
        "Rear-Wheel Drive",
        "Carbon-fiber body panels",
        "Adaptive Damping System",
      ],
      rentalPrice: "80",
      rentalCompany: "Supreme Car Rentals",
      address: "123 Example Avenue, Odessa, Ukraine",
      rentalConditions: [
        "Minimum age: 30",
        "Valid driver's license",
        "Security deposit and insurance required",
      ],
      mileage: 6464,
    },
    {
      id: "bd2a41fc-9442-4ed5-95de-53f9359a1098",
      year: 1996,
      brand: "Pontiac",
      model: "Firebird",
      type: "Convertible",
      img: "https://ac.goit.global/car-rental-task/9619-ai.jpg",
      description:
        "The Pontiac Firebird is a classic American muscle car with bold styling, powerful engines, and an iconic presence that captures the essence of the golden era of performance.",
      fuelConsumption: "15.2",
      engineSize: "5.7L V8",
      accessories: [
        "T-Top roof",
        "Delco premium audio system",
        "Sport suspension",
      ],
      functionalities: [
        "Rear-Wheel Drive",
        "Limited-slip differential",
        "High-performance exhaust",
      ],
      rentalPrice: "50",
      rentalCompany: "Classic Car Rentals",
      address: "456 Example Street, Lviv, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit required",
      ],
      mileage: 5091,
    },
    {
      id: "3cd1a85c-f575-43ba-99b0-d8198e5d7493",
      year: 2009,
      brand: "Lamborghini",
      model: "Murcielago",
      type: "Convertible",
      img: "https://ac.goit.global/car-rental-task/9629-ai.jpg",
      description:
        "The Lamborghini Murcielago is an exotic and high-performance convertible that represents the epitome of Italian automotive engineering, combining breathtaking design, blistering speed, and a spine-tingling exhaust note.",
      fuelConsumption: "25.0",
      engineSize: "6.5L V12",
      accessories: [
        "Carbon-fiber body panels",
        "Alcantara upholstery",
        "Lamborghini Infotainment System",
      ],
      functionalities: [
        "All-Wheel Drive",
        "Electronic Stability Control",
        "Retractable soft-top roof",
      ],
      rentalPrice: "80",
      rentalCompany: "Supercar Rentals",
      address: "321 Example Road, Kharkiv, Ukraine",
      rentalConditions: [
        "Minimum age: 30",
        "Valid driver's license",
        "Security deposit and insurance required",
      ],
      mileage: 5832,
    },
    {
      id: "2c3945a6-d4d7-4071-bff2-5ab4a79e8fba",
      year: 2011,
      brand: "Audi",
      model: "A5",
      type: "Convertible",
      img: "https://ac.goit.global/car-rental-task/9631-ai.jpg",
      description:
        "The Audi A5 is a stylish and refined convertible that offers a perfect blend of elegance, cutting-edge technology, and exhilarating driving dynamics.",
      fuelConsumption: "8.5",
      engineSize: "2.0L Inline-4",
      accessories: [
        "Bang & Olufsen 3D sound system",
        "Audi Virtual Cockpit",
        "Audi Drive Select",
      ],
      functionalities: [
        "Front-Wheel Drive",
        "Quattro all-wheel drive available",
        "Power-folding acoustic soft-top",
      ],
      rentalPrice: "80",
      rentalCompany: "Luxury Car Rentals",
      address: "987 Example Lane, Dnipro, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit and insurance required",
      ],
      mileage: 4635,
    },
    {
      id: "95a501ad-3d21-4300-a188-8175c495e1b2",
      year: 2001,
      brand: "BMW",
      model: "Z8",
      type: "Convertible",
      img: "https://ac.goit.global/car-rental-task/9634-ai.jpg",
      description:
        "The BMW Z8 is a classic and timeless convertible that combines iconic retro-inspired design, outstanding performance, and luxurious comfort.",
      fuelConsumption: "14.2",
      engineSize: "4.9L V8",
      accessories: [
        "Aluminum space frame",
        "Nappa leather upholstery",
        "Harman Kardon audio system",
      ],
      functionalities: [
        "Rear-Wheel Drive",
        "Dynamic Stability Control",
        "Power-operated soft-top roof",
      ],
      rentalPrice: "80",
      rentalCompany: "Classic Car Rentals",
      address: "654 Example Circle, Zaporizhzhia, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit and proof of insurance required",
      ],
      mileage: 5990,
    },
    {
      id: "ce7f8759-12d6-4bd5-8355-ba19ec00fe8a",
      year: 1998,
      brand: "Chevrolet",
      model: "Camaro",
      type: "Convertible",
      img: "https://ac.goit.global/car-rental-task/9655-ai.jpg",
      description:
        "The Chevrolet Camaro is an American muscle car legend with a rich heritage, boasting aggressive styling, powerful engines, and exhilarating performance.",
      fuelConsumption: "13.5",
      engineSize: "5.7L V8",
      accessories: [
        "Leather upholstery",
        "Bose premium sound system",
        "Performance suspension",
      ],
      functionalities: [
        "Rear-Wheel Drive",
        "Limited-slip differential",
        "Power-operated convertible top",
      ],
      rentalPrice: "80",
      rentalCompany: "Muscle Car Rentals",
      address: "123 Example Street, Lviv, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit and insurance required",
      ],
      mileage: 6330,
    },
    {
      id: "2a32cd84-759f-4e91-b24e-6ec7676129e9",
      year: 2006,
      brand: "Mercedes-Benz",
      model: "SLK-Class",
      type: "Convertible",
      img: "https://ac.goit.global/car-rental-task/9655-ai.jpg",
      description:
        "The Mercedes-Benz SLK-Class is a luxurious and sporty convertible that offers a perfect balance of style, performance, and refinement, delivering an enjoyable open-top driving experience.",
      fuelConsumption: "9.8",
      engineSize: "3.5L V6",
      accessories: [
        "Airscarf neck-level heating",
        "Harman Kardon surround sound system",
        "Magic Sky Control panoramic roof",
      ],
      functionalities: [
        "Rear-Wheel Drive",
        "Dynamic Stability Control",
        "Retractable hardtop roof",
      ],
      rentalPrice: "80",
      rentalCompany: "Luxury Car Rentals",
      address: "456 Example Avenue, Kyiv, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit and insurance required",
      ],
      mileage: 6280,
    },
    {
      id: "3653c109-efc5-4c20-8719-8f53ab2d2fe1",
      year: 2020,
      brand: "Chrysler",
      model: "Voyager",
      type: "Van/Minivan",
      img: "https://ac.goit.global/car-rental-task/9660-ai.jpg",
      description:
        "The Chrysler Voyager is a practical and versatile van/minivan that provides comfortable seating, ample cargo space, and a range of convenient features for family-oriented transportation.",
      fuelConsumption: "8.2",
      engineSize: "3.6L V6",
      accessories: [
        "Stow 'n Go seating",
        "Uconnect infotainment system",
        "Blind Spot Monitoring",
      ],
      functionalities: [
        "Front-Wheel Drive",
        "Electronic Stability Control",
        "Power sliding side doors",
      ],
      rentalPrice: "80",
      rentalCompany: "Family Car Rentals",
      address: "789 Example Boulevard, Odesa, Ukraine",
      rentalConditions: [
        "Minimum age: 21",
        "Valid driver's license",
        "Security deposit and insurance required",
      ],
      mileage: 5807,
    },
    {
      id: "e2c6a148-a9d4-4b53-a45f-dd303005cf02",
      year: 2020,
      brand: "Kia",
      model: "Rio",
      type: "Hatchback",
      img: "https://ac.goit.global/car-rental-task/9630-ai.jpg",
      description:
        "The Kia Rio is a compact and fuel-efficient hatchback that offers a blend of affordability, reliability, and practicality, making it an excellent choice for urban commuting and everyday driving.",
      fuelConsumption: "6.2",
      engineSize: "1.6L 4-cylinder",
      accessories: [
        "Apple CarPlay and Android Auto integration",
        "Smart Key with Push Button Start",
        "Automatic climate control",
      ],
      functionalities: [
        "Front-Wheel Drive",
        "Electronic Stability Control",
        "Rearview camera",
      ],
      rentalPrice: "50",
      rentalCompany: "Economy Car Rentals",
      address: "321 Example Lane, Kharkiv, Ukraine",
      rentalConditions: [
        "Minimum age: 21",
        "Valid driver's license",
        "Security deposit and insurance required",
      ],
      mileage: 4618,
    },
    {
      id: "d2acc02e-8c11-4c93-a7c4-ab2cd72abad6",
      year: 2020,
      brand: "Volvo",
      model: "XC60",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9586-ai.jpg",
      description:
        "The Volvo XC60 is a luxurious and versatile SUV that combines Scandinavian design, advanced safety features, and a comfortable driving experience, making it an ideal choice for families and adventure enthusiasts.",
      fuelConsumption: "8.5",
      engineSize: "2.0L 4-cylinder",
      accessories: [
        "Leather upholstery",
        "Panoramic sunroof",
        "Harman Kardon premium sound system",
      ],
      functionalities: [
        "All-Wheel Drive",
        "City Safety collision avoidance technology",
        "Power tailgate",
      ],
      rentalPrice: "40",
      rentalCompany: "Premium Car Rentals",
      address: "987 Example Road, Dnipro, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit and insurance required",
      ],
      mileage: 6618,
    },
    {
      id: "e8272785-e241-4d70-b7f2-964bd083756c",
      year: 2020,
      brand: "Land Rover",
      model: "Range Rover Sport",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9618-ai.jpg",
      description:
        "The Land Rover Range Rover Sport is a premium SUV that offers a perfect blend of luxury, off-road capability, and dynamic performance, providing a refined driving experience both on and off the road.",
      fuelConsumption: "11.8",
      engineSize: "3.0L V6",
      accessories: [
        "Premium Windsor leather seats",
        "Meridian surround sound system",
        "Adaptive Dynamics suspension",
      ],
      functionalities: [
        "All-Wheel Drive",
        "Terrain Response 2 system",
        "Power-operated gesture tailgate",
      ],
      rentalPrice: "80",
      rentalCompany: "Luxury SUV Rentals",
      address: "654 Example Street, Lviv, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit and insurance required",
      ],
      mileage: 4856,
    },
    {
      id: "e58adcfb-4b16-413d-9380-52a025a66db2",
      year: 2020,
      brand: "Kia",
      model: "Rio",
      type: "Sedan, Hatchback",
      img: "https://ac.goit.global/car-rental-task/9630-ai.jpg",
      description:
        "The Kia Rio is a versatile and fuel-efficient vehicle available in both sedan and hatchback body styles, offering a comfortable cabin, modern features, and a smooth driving experience, making it an attractive choice for urban commuters.",
      fuelConsumption: "6.2",
      engineSize: "1.6L 4-cylinder",
      accessories: [
        "Apple CarPlay and Android Auto integration",
        "Smart Key with Push Button Start",
        "Automatic climate control",
      ],
      functionalities: [
        "Front-Wheel Drive",
        "Electronic Stability Control",
        "Rearview camera",
      ],
      rentalPrice: "50",
      rentalCompany: "Economy Car Rentals",
      address: "321 Example Lane, Kharkiv, Ukraine",
      rentalConditions: [
        "Minimum age: 21",
        "Valid driver's license",
        "Security deposit and insurance required",
      ],
      mileage: 6234,
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
