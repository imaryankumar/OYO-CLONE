import { useEffect, useState } from "react";
import axios from "axios";

const HotelPriceRangeFilter = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const priceRange = async () => {
    const getHotelPrice = await axios.get(
      `/api/facilities/range?price=${rangeValue}`
    );
    setRangeValue(getHotelPrice.data.rangeHotel);
    console.log(getHotelPrice.data.rangeHotel);
    console.log(rangeValue);
  };
  useEffect(() => {
    const id = setTimeout(() => {
      priceRange();
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <div className=" flex flex-col py-3 border-b-2 gap-3">
      <h2 className="text-xl font-medium">Price</h2>
      <div className="slidecontainer">
        <input
          type="range"
          min="100"
          max="1000"
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
