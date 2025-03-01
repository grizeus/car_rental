import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-[url(src/assets/img/hero@2x.jpg)] bg-cover bg-local bg-center bg-no-repeat">
      <h1 className="max-w-[783px] pt-[436px] text-center text-6xl leading-[1.2] font-bold text-white">
        Find your perfect rental car
      </h1>
      <span className="mt-4 mb-10 block text-2xl font-semibold text-white">
        Reliable and budget-friendly rentals for any journey
      </span>
      <Link
        to={"/catalog"}
        className="bg-royal hover:bg-persian mb-15 w-69 rounded-xl px-22 py-3 text-base leading-tight font-semibold text-white transition-colors duration-300 ease-in-out">
        View Catalog
      </Link>
    </div>
  );
};

export default HomePage;
