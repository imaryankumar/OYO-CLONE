import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FilterSideSection = () => {
  const [showallCity, setShowallcity] = useState(false);
  const insideSateCity = [
    "Golden Temple",
    "Shivpur",
    "Noida City",
    "Golf Course",
    "Amargarh",
    "Amloh",
    "Amritsar",
  ];
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [allInsideCity, setAllInsideCity] = useState(insideSateCity);
  useEffect(() => {
    const id = setTimeout(() => {
      setAllInsideCity(insideFilterCity);
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [searchInput]);
  const insideFilterCity = insideSateCity.filter((city) => {
    return city.toLowerCase().includes(searchInput);
  });
  return (
    <div className="flex flex-col gap-1  ">
      <div className="border-b-2 py-5 ">
        <h2 className="text-xl font-medium">Filters</h2>
        <h3 className="text-sm font-medium">
          Popular locations in {router.query.location}, India
        </h3>
        <div className="w-100 h-auto py-4 flex flex-col gap-5">
          <input
            className="border px-3 py-2 w-[100%] rounded-sm outline-1 "
            placeholder="Search.."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="flex flex-wrap items-center justify-start gap-2  text-sm text-white">
            {allInsideCity?.slice(0, 5).map((city, key) => {
              return (
                <span key={key} className="bg-citytab   px-2 py-1 rounded">
                  {city}
                </span>
              );
            })}

            {showallCity && (
              <>
                {allInsideCity?.slice(5).map((city, key) => {
                  return (
                    <span key={key} className="bg-citytab   px-2 py-1 rounded">
                      {city}
                    </span>
                  );
                })}
              </>
            )}
            {allInsideCity?.length > 5 && (
              <>
                {showallCity ? (
                  <span
                    className="text-red-500 cursor-pointer font-medium"
                    onClick={() => setShowallcity((prev) => !prev)}
                  >
                    - View Less
                  </span>
                ) : (
                  <span
                    className="text-red-500 cursor-pointer font-medium"
                    onClick={() => setShowallcity((prev) => !prev)}
                  >
                    + View More
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSideSection;
