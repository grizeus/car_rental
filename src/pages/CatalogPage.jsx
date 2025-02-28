import SelectBrand from "../components/SelectBrand";
import SelectMileage from "../components/SelectMileage";
import SelectPrice from "../components/SelectPrice";
import CardList from "../components/CardList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBrands,
  fetchCars,
  fetchMore,
  fetchResults,
} from "../redux/cars/operations";
import { selectBrands, selectCars, selectTotal } from "../redux/cars/selectors";
import { selectFilter } from "../redux/filters/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchCars());
    dispatch(fetchBrands());
  }, [dispatch]);
  const totalPages = useSelector(selectTotal);
  const cars = useSelector(selectCars);
  const brands = useSelector(selectBrands);
  const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const filters = useSelector(selectFilter);
  const handleLoad = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (page > 1) {
      dispatch(fetchMore({ ...filters, page: page }));
    }
  }, [dispatch, page]);
  const handleSearch = async () => {
    dispatch(fetchResults(filters));
  };
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
          onClick={handleSearch}
          className="bg-royal hover:bg-persian flex h-11 w-39 items-center justify-center rounded-xl px-[51px] text-base leading-5 font-semibold text-white transition-colors duration-300 ease-in-out">
          Search
        </button>
      </div>
      <div className="mt-14 mb-20">
        <CardList cards={cars} />
      </div>
      {page !== totalPages && totalPages !== 0 && (
        <button
          type="submit"
          className="border-royal hover:border-persian flex h-11 w-39 items-center justify-center self-center rounded-xl border transition-colors duration-300 ease-in-out"
          onClick={handleLoad}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
