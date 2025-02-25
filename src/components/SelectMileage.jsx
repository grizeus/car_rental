import { useState } from "react";

const SelectMileage = () => {
  const [fromVal, setFromVal] = useState("");
  const [toVal, setToVal] = useState("");
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
            value={fromVal}
            onChange={formattedInput(setFromVal)}
            className="appearance-none py-3 outline-none"
          />
        </div>
        <div className="flex items-center gap-1 pl-6">
          <span>To</span>
          <input
            value={toVal}
            onChange={formattedInput(setToVal)}
            id="mileage-to"
            className="outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectMileage;
