import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import sprite from "../assets/sprite.svg";
import { changeFilter } from "../redux/filters/slice";

const SelectBrand = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [brand, setBrand] = useState(null);
  const dropDownRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    dispatch(changeFilter({ brand }));
  }, [brand, dispatch]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = option => {
    setBrand(option);
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col gap-2">
      <span className="text-manatee text-xs">Car brand</span>
      <div ref={dropDownRef} className="relative cursor-pointer">
        <div
          className="bg-smoke flex items-center justify-between gap-8 rounded-xl py-3 pr-[14px] pl-4"
          onClick={toggleDropdown}>
          <div className="w-31 text-base leading-5 font-medium">
            {brand || "Choose a brand"}
          </div>
          <svg
            className={`h-4 w-4 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""} stroke-midnight`}>
            <use href={`${sprite}#icon-arrow-down`}></use>
          </svg>
        </div>
        {isOpen && (
          <div className="border-smoke scrollbar scrollbar-thumb-hawkes scrollbar-thumb-rounded-xl scrollbar-w-2 absolute top-full left-0 z-10 mt-1 flex h-68 w-full flex-col gap-2 overflow-y-scroll rounded-lg border-1 bg-white py-[14px] pl-[18px] shadow-[0_4px_36px_0_rgba(0,0,0,0.02)]">
            {Array.isArray(options) &&
              options.map((option, i) => (
                <div
                  key={i}
                  onClick={() => handleOptionClick(option)}
                  className={`text-base leading-5 ${brand === option ? "text-midnight" : "text-manatee"}`}>
                  {option}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectBrand;
