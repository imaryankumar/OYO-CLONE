import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CityNav = () => {
  const cityName = [
    {
      id: 1,
      name: "Bangalore",
      upward: <MdOutlineKeyboardArrowUp />,
      downward: <MdOutlineKeyboardArrowDown />,
    },
    {
      id: 2,
      name: "Chennai",
      upward: <MdOutlineKeyboardArrowUp />,
      downward: <MdOutlineKeyboardArrowDown />,
    },
    {
      id: 3,
      name: "Delhi",
      upward: <MdOutlineKeyboardArrowUp />,
      downward: <MdOutlineKeyboardArrowDown />,
    },
    {
      id: 4,
      name: "Gurgaon",
      upward: <MdOutlineKeyboardArrowUp />,
      downward: <MdOutlineKeyboardArrowDown />,
    },
    {
      id: 5,
      name: "Hyderabad",
      upward: <MdOutlineKeyboardArrowUp />,
      downward: <MdOutlineKeyboardArrowDown />,
    },
    {
      id: 6,
      name: "Kolkata",
      upward: <MdOutlineKeyboardArrowUp />,
      downward: <MdOutlineKeyboardArrowDown />,
    },
    {
      id: 7,
      name: "Mumbai",
      upward: <MdOutlineKeyboardArrowUp />,
      downward: <MdOutlineKeyboardArrowDown />,
    },
    {
      id: 8,
      name: "Noida",
      upward: <MdOutlineKeyboardArrowUp />,
      downward: <MdOutlineKeyboardArrowDown />,
    },
    {
      id: 9,
      name: "Pune",
      upward: <MdOutlineKeyboardArrowUp />,
      downward: <MdOutlineKeyboardArrowDown />,
    },
    {
      id: 10,
      name: "All Cities",
    },
  ];
  const [selectedCity, setSelectedCity] = useState(null);
  const onMouseOverHandler = (id) => {
    setSelectedCity(id);
  };
  return (
    <div className="w-100 h-100 bg-slate-200 relative py-2 px-12 ">
      <div className="flex items-center justify-between gap-4 relative ">
        {cityName.map((item) => {
          return (
            <div
              key={item.id}
              className="font-light flex gap-2 items-center justify-center cursor-pointer "
              onClick={() => onMouseOverHandler(item.id)}
            >
              <span>{item.name}</span>
              <span>{item.downward}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CityNav;
