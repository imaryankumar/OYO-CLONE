import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
const SearchBanner = () => {
  const router = useRouter();
  const searchRef = useRef();
  const [searchInput, setSearchInput] = useState("");
  const [searchHotelValue, setSearchHotelValue] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const getHotelData = async () => {
      const res = await fetch(`/api/hotels`);
      const data = await res.json();
      setSearchHotelValue(data?.allHotels);
    };
    getHotelData();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const duplicateHotel = searchHotelValue.map((item) => item.location);
  const uniqueHotel = [...new Set(duplicateHotel)];

  const filterProducts = () => {
    const filtered = uniqueHotel.filter((product) => {
      return product.toLowerCase().startsWith(searchInput.toLowerCase());
    });
    setFilteredProducts(filtered);
    setShowDropdown(true);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      filterProducts();
    }, 200);
    return () => clearTimeout(id);
  }, [searchInput]);

  const onSearchHandler = () => {
    console.log(searchInput);
    if (searchInput) {
      router.push(`/search?location=${searchInput}`);
    } else {
      toast.error("Please Enter Your Location!");
    }
  };
  const onSearchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const onCityNameHandler = (name) => {
    setSearchInput(name + " ");
  };
  return (
    <section className="w-100 h-60 bg-gradient-to-r from-pink-300 via-red-500 to-red-500 ">
      <div className="flex flex-col items-center justify-center gap-5 px-20 py-6  ">
        <h1 className="text-4xl font-semibold text-white text-center w-100">
          Over 157,000 hotels and homes across 35 countries
        </h1>
        <div className="w-100 h-100 flex items-center justify-center relative">
          <input
            type="text"
            name="search"
            placeholder="Search by city, hotel, or neighborhood "
            onChange={onSearchInputHandler}
            value={searchInput}
            className="w-[32rem] py-4  px-5 rounded-sm  outline-none "
          />
          <button
            className="h-[57px] bg-green-500 outline-none px-12 rounded-sm text-white text-xl font-medium "
            onClick={onSearchHandler}
          >
            Search
          </button>
          {showDropdown && (
            <div
              className="absolute w-100 h-12 left-0 right-40 top-14 rounded-sm  "
              ref={searchRef}
            >
              {filteredProducts.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="bg-blue-400 py-3 px-3 border-b-2 text-white cursor-pointer "
                    onClick={() => onCityNameHandler(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center gap-4 my-2 text-white ">
          <h2 className="font-medium text-lg">Continue your search</h2>
          <button className="border-2 rounded bg-transparent p-2 font-normal ">
            Huda-City-Center-Metro· 1 Guest
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBanner;
