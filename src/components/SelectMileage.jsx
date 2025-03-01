import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/filters/slice";

const formatMiles = value => {
  const formatValue = value.replace(/,/g, "");
  if (formatValue) {
    const numericValue = parseInt(formatValue);
    if (!isNaN(numericValue)) {
      return numericValue;
    }
  }
  return null;
};

const SelectMileage = () => {
  const [minMileage, setminMileage] = useState("");
  const [maxMileage, setmaxMileage] = useState("");
  const dispatch = useDispatch();
  const formattedInput = setter => e => {
    let value = e.target.value.replace(/,/g, "");
    if (value) {
      const num = parseInt(value);
      if (!isNaN(value)) {
        setter(num.toLocaleString("en-US"));
      } else {
        setter(value);
      }
    } else {
      setter("");
    }
  };

  useEffect(() => {
    dispatch(
      changeFilter({
        minMileage: formatMiles(minMileage),
        maxMileage: formatMiles(maxMileage),
      })
    );
  }, [minMileage, maxMileage, dispatch]);
  return (
    <div className="flex w-80 flex-col gap-2">
      <label htmlFor="mileage-from" className="text-manatee text-xs">
        Car mileage / km
      </label>
      <div className="bg-smoke grid grid-cols-2 rounded-xl">
        <div className="border-hawkes flex items-center gap-1 border-r pl-6">
          <span>From</span>
          <input
            id="mileage-from"
            value={minMileage}
            onChange={formattedInput(setminMileage)}
            className="py-3 transition-colors duration-[300s] outline-none autofill:!bg-transparent"
          />
        </div>
        <div className="flex items-center gap-1 pl-6">
          <span>To</span>
          <input
            value={maxMileage}
            onChange={formattedInput(setmaxMileage)}
            id="mileage-to"
            className="py-3 transition-colors duration-[300s] outline-none autofill:!bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectMileage;
