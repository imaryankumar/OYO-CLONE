import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const CityNav = () => {
  const cityName = [
    {
      id: 1,
      name: "Bangalore",
    },
    {
      id: 2,
      name: "Chennai",
    },
    {
      id: 3,
      name: "Delhi",
    },
    {
      id: 4,
      name: "Gurgaon",
    },
    {
      id: 5,
      name: "Hyderabad",
    },
    {
      id: 6,
      name: "Kolkata",
    },
    {
      id: 7,
      name: "Mumbai",
    },
    {
      id: 8,
      name: "Noida",
    },
    {
      id: 9,
      name: "Pune",
    },
    {
      id: 10,
      name: "All Cities",
    },
  ];
  const [selectedCity, setSelectedCity] = useState(null);
  const onMouseOverHandler = (id) => {
    if (selectedCity === id) {
      return setSelectedCity(null);
    }
    setSelectedCity(id);
  };
  return (
    <div className="w-100 h-100 bg-slate-200 relative py-2 px-12 ">
      <div className="flex items-center justify-between gap-4">
        {cityName.map((item) => {
          return (
            <div
              key={item.id}
              className="font-light flex gap-2 items-center justify-center cursor-pointer relative  "
              onMouseOver={() => onMouseOverHandler(item.id)}
            >
              <span>{item.name}</span>
              <span>
                <FaAngleDown
                  style={{
                    transform: `rotate(${
                      selectedCity === item.id ? "180deg" : "0deg"
                    })`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </span>
              <div
                className={`absolute left-0 top-8 right-0 ${
                  selectedCity === item.id ? "block" : "hidden"
                } `}
              >
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CityNav;
