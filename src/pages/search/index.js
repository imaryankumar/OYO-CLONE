import SEO from "@/components/SEO";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { RotatingLines } from "react-loader-spinner";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import SearchImageSlider from "@/utils/SearchImageSlider";
import SearchBookingBtn from "@/utils/SearchBookingBtn";
import SearchHotelRating from "@/utils/SearchHotelRating";
import { useTheme } from "../../utils/ThemeContext";
import FilterSideSection from "@/utils/FilterSections/FilterSideSection";
import HotelPriceRangeFilter from "@/utils/FilterSections/HotelPriceRangeFilter";
import HotelFilterCollection from "@/utils/FilterSections/HotelFilterCollection";
import HotelFilterCatageory from "@/utils/FilterSections/HotelFilterCatageory";
import HotelAccomodationType from "@/utils/FilterSections/HotelAccomodationType";
import HotelFilterFacilities from "@/utils/FilterSections/HotelFilterFacilities";
import HotelFilterCheckIn from "@/utils/FilterSections/HotelFilterCheckIn";
import WizardHotelMember from "@/utils/FilterSections/WizardHotelMember";

const search = ({ data }) => {
  const { darkMode, toggleTheme } = useTheme();
  const [isMode, setIsMode] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [spinLoader, setSpinLoader] = useState(true);
  const [productSorting, setProductSorting] = useState("Recommended");
  const [sortedProduct, setSortedProduct] = useState(data?.allHotels);
  const router = useRouter();

  useEffect(() => {
    const id = setTimeout(() => {
      setSortedProduct(filtered);
      setSpinLoader(false);
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [searchInput]);

  //Search Filter Method
  const filtered = data.allHotels?.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const onPopularityHandler = () => {
    const sortedPopularity = data.allHotels
      .slice()
      .sort((a, b) => b.rating - a.rating);
    setSortedProduct(sortedPopularity);
    setProductSorting("Popularity");
  };
  const onHightolowHandler = () => {
    const sortedHightoLow = data.allHotels
      .slice()
      .sort((a, b) => b.price - a.price);
    setSortedProduct(sortedHightoLow);
    setProductSorting("Price: High to Low");
  };
  const onLowtohighHandler = () => {
    const sortedLowtoHigh = data.allHotels
      .slice()
      .sort((a, b) => a.price - b.price);
    setSortedProduct(sortedLowtoHigh);
    setProductSorting("Price: Low to High");
  };
  const Recommended = () => {
    setProductSorting(sortedProduct);
  };
  const onModeHanlder = () => {
    setIsMode((prev) => !prev);
    toggleTheme((prev) => !prev);
  };
  return (
    <section className={darkMode ? "dark" : "light"}>
      <div className="w-100 h-100 relative flex ">
        <SEO title={`Hotels in India starting @399`} />
        <div className="w-[20%] h-screen border-r border-gray-300 px-5 overflow-auto scrollbar-hide ">
          <FilterSideSection />
          <HotelPriceRangeFilter />
          <HotelFilterCollection />
          <HotelFilterCatageory />
          <HotelAccomodationType />
          <HotelFilterFacilities />
          <WizardHotelMember />
          <HotelFilterCheckIn />
        </div>
        <div className="w-[80%] px-8 py-1 ">
          <div className="w-100 border-b border-gray-300 flex items-center justify-between py-4 ">
            <h2 className="text-2xl font-semibold opacity-80 ">
              {sortedProduct.length}{" "}
              <span className="cursor-pointer" onClick={() => router.push("/")}>
                OYOs
              </span>{" "}
              in {router.query.location}, India
            </h2>

            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center justify-center relative ">
                <IoSearchOutline className="absolute top-50 left-2 text-xl" />
                <input
                  type="type"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search..."
                  className="w-56 py-1 px-8  bg-transparent text-black outline-none rounded border-4 "
                />
              </div>
              <div
                className="flex items-center justify-end gap-2 cursor-pointer  "
                onClick={onModeHanlder}
              >
                {isMode ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
              </div>
              <div className="flex items-center justify-center gap-3">
                <span>Sort By</span>
                <div
                  className="border-2 rounded bg-transparent px-2 py-1 font-normal flex items-center w-56 justify-between cursor-pointer relative "
                  onClick={() => setIsSort(!isSort)}
                >
                  <span>{productSorting}</span>
                  <span>
                    {isSort ? (
                      <IoMdArrowDropup size={20} />
                    ) : (
                      <IoMdArrowDropdown size={20} />
                    )}
                  </span>
                  {isSort && (
                    <div className="absolute top-10 right-0 left-0 bg-white text-black p-2 border-2 flex flex-col items-start justify-center gap-3 font-light ">
                      <span onClick={onPopularityHandler}>Popularity</span>
                      <span onClick={onHightolowHandler}>
                        Price: High to Low
                      </span>
                      <span onClick={onLowtohighHandler}>
                        Price: Low to High
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {spinLoader ? (
            <div className="w-100 h-auto mt-5 flex items-center justify-center">
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            </div>
          ) : sortedProduct.length > 0 ? (
            <section className="h-[86vh] overflow-y-auto scrollbar-hide">
              {sortedProduct?.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="py-4 flex flex-col border-b border-gray-300  "
                  >
                    <div className=" w-100 h-100 flex items-center justify-between gap-6 cursor-pointer ">
                      <SearchImageSlider item={item} />
                      <div className="w-[50%] flex flex-col items-start justify-between  h-64 ">
                        <div className="flex flex-col">
                          <h1 className="text-xl font-medium overflow-hidden line-clamp-1 ">
                            {item?.name}
                          </h1>
                          <h3 className="text-sm font-light overflow-hidden line-clamp-3  ">
                            {item?.description}
                          </h3>
                        </div>
                        <SearchHotelRating item={item} />
                        <SearchBookingBtn item={item} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          ) : (
            <div className="text-center my-5 font-medium text-2xl ">
              No hotels found matching your search criteria !!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default search;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels`);
  const data = await res.json();
  return { props: { data } };
}
