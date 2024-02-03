import { useState } from "react";

const HotelPriceRangeFilter = () => {
  const [rangeValue, setRangeValue] = useState(50);
  return (
    <div className=" flex flex-col py-3 border-b-2 gap-3">
      <h2 className="text-xl font-medium">Price</h2>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value={rangeValue}
          id="rangeInput"
          onChange={(e) => setRangeValue(e.target.value)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default HotelPriceRangeFilter;
