import React, { useState } from "react";
import { ReactSVG } from "react-svg";

// Define the data for the RestDetails components
const restDetailsData = [
  {
    text: "Total Staff",
    value: "108",
    icon: "/svgs/glass.svg"
  },
  {
    text: "Total Department",
    value: "10",
    icon: "/svgs/users.svg"
  },
  {
    text: "Total Revenue",
    value: "103,856",
    icon: "/svgs/salesman.svg"
  },
 
];

export default function RestDetails() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white/50 w-full h-auto max-w-full rounded-[20px]">
      <div className="p-5">
        <p className="text-[20px] font-semibold text-left">Restaurants Details</p>
        <div className="relative">
          <div
            className="bg-white/90 shadow-md w-full flex justify-between mt-5 items-center px-5 rounded-md h-[46px] cursor-pointer"
            onClick={toggleDropdown}
          >
            <p>Select Restaurant</p>
            <ReactSVG src="/svgs/down.svg" className="mt-1" />
          </div>
          {isDropdownOpen && (
            <div className="absolute top-[calc(100%+10px)] left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Restaurant 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Restaurant 2</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Restaurant 3</li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-wrap mt-5 gap-9">
          {restDetailsData.map((details, index) => (
            <div
              key={index}
              className="inline-flex min-w-max h-[56px] rounded-[10px] mb-2"
            >
              <div className="px-4 pb-2 mt-1 flex items-center space-x-4 h-full">
                <div className="bg-white shadow-md w-11 h-11 rounded-[10px] flex justify-center items-center">
                  <div className="bg-[#FFECEC] h-9 w-9 rounded-[10px] flex justify-center items-center transition-all duration-300">
                    <ReactSVG src={details.icon} className="mt-1" />
                  </div>
                </div>
                <div>
                  <p className="text-[14px] text-left font-semibold text-[#8E8E8E]">{details.text}</p>
                  <p className="text-[20px] text-left font-semibold">{details.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
