import SelectBrand from "../components/SelectBrand";
import SelectMileage from "../components/SelectMileage";
import SelectPrice from "../components/SelectPrice";

const CatalogPage = () => {
  const cars = [
    "volks",
    "audi",
    "aston martin",
    "volks",
    "bmw",
    "audi",
    "aston martin",
    "honda",
    "renault",
    "buick",
  ];
  const prices = [1, 2, 23, 34, 34, 34, 45, 56];
  return (
    <div className="flex pt-[84px] justify-center items-end gap-4">
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
        className="bg-royal px-[51px] flex h-11 w-[156px] items-center justify-center rounded-xl text-base leading-tight font-semibold text-white">
        Search
      </button>
    </div>
  );
};

export default CatalogPage;
