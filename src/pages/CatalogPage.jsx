import SelectBrand from "../components/SelectBrand";
import SelectMileage from "../components/SelectMileage";
import SelectPrice from "../components/SelectPrice";
import CardList from "../components/CardList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands, fetchCars } from "../redux/cars/operations";
import { selectBrands, selectCars } from "../redux/cars/selectors";

const CatalogPage = () => {
  // const [page, setPage] = useState(1);
  const page = 1;
  // const [totalPages, setTotal] = useState(1);
  const totalPages = 2;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars({ page: 1 }));
    dispatch(fetchBrands());
  }, [dispatch]);
  const cars = useSelector(selectCars);
  console.log(cars);
  const brands = useSelector(selectBrands);
  console.log(brands);
  const prices = [1, 2, 23, 34, 34, 34, 45, 56];

  return (
    <div className="flex flex-col pb-31">
      <div className="flex items-end justify-center gap-4 pt-[84px]">
        <ul className="flex gap-4">
          <li>
            <SelectBrand options={brands} />
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
        <CardList cards={cars} />
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
