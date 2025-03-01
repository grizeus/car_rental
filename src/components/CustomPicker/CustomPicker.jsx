import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./CustomPicker.css";

const CustomPicker = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="bg-smoke rounded-xl px-5 py-[14px] outline-none">
      <DatePicker
        selected={startDate}
        className="h-5 outline-none"
        onChange={date => setStartDate(date)}
        placeholderText="Booking date"
      />
    </div>
  );
};

export default CustomPicker;
