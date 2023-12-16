import SEO from "@/components/SEO";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { IoWifiOutline, IoSearchOutline } from "react-icons/io5";
import { GiWaterFountain } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import {
  MdLightMode,
  MdOutlineWorkspacePremium,
  MdOutlineDoorSliding,
  MdStar,
  MdDarkMode,
} from "react-icons/md";

const search = ({ data }) => {
  const [isMode, setIsMode] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [spinLoader, setSpinLoader] = useState(true);
  const [productSorting, setProductSorting] = useState("Recommended");
  const [sortedProduct, setSortedProduct] = useState(data?.allHotels);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  let cookie = Cookies.get("userToken");

  useEffect(() => {
    const id = setTimeout(() => {
      setSortedProduct(filtered);
      setSpinLoader(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [searchInput]);

  //Search Filter Method
  const filtered = data.allHotels?.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const onHotelBookHandler = () => {
    if (!cookie) {
      toast.error("Please Logged In!");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } else {
      router.push("/booking");
    }
  };
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
  
  const locationHotel = data.allHotels.filter((item)=>router.query.location === item.location);
  const allhotelLocation = data.allHotels.map((item)=>item.location);
  const uniqueHotel = [...new Set(allhotelLocation)]
  // console.log("Hotel",uniqueHotel)
  const myData = data.allHotels[1].location;
  const onModeHanlder = () => {
    setIsMode((prev) => !prev);
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <section
      className={
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }
    >
      <div className="w-100 h-100 relative flex ">
        <SEO title={`Hotels in India starting @399`} />
        <div className="w-[20%] h-screen border-r border-gray-300  ">
          <div className="px-5 py-6 flex flex-col gap-1">
            <h2 className="text-xl font-medium">Filters</h2>
            <h3 className="text-sm font-medium">
              Popular locations in Delhi, India
            </h3>
          </div>
        </div>
        <main className="w-[80%] px-8 py-1 ">
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
                className="flex items-center justify-center gap-2 cursor-pointer"
                onClick={onModeHanlder}
              >
                {isMode ? "Light mode" : "Dark mode"}
                {isMode ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
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
                      <div className="w-[50%]">
                        <Image
                          src={item.banner}
                          width={0}
                          height={0}
                          sizes="100vw"
                          priority
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "5px",
                          }}
                          alt="Hotelsimages"
                        />
                      </div>
                      <div className="w-[50%] flex flex-col items-start justify-between  h-80 ">
                        <div className="flex flex-col">
                          <h1 className="text-xl font-medium">{item?.name}</h1>
                          <h3 className="text-sm font-light">
                            {item?.description}
                          </h3>
                        </div>
                        <div className="flex flex-col py-5 items-start justify-center gap-3 ">
                          <div className="flex items-center justify-center gap-4">
                            <div className="px-1 text-white rounded-sm bg-green-600 flex items-center justify-center gap-1 ">
                              <span>{item?.rating}</span>
                              <MdStar />
                            </div>
                            <span>({item.rating * 100} Ratings)</span>
                            <span>· Excellent</span>
                          </div>
                          <div className="flex items-center justify-center gap-4">
                            <div className="flex gap-1 items-center justify-center">
                              <MdOutlineDoorSliding size={20} />
                              <span>Elevator</span>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                              <IoWifiOutline size={20} />
                              <span>Free Wifi</span>
                            </div>
                            <div className="flex gap-1 items-center justify-center">
                              <GiWaterFountain size={20} />
                              <span>Geyser</span>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-whhite p-2 text-white rounded-sm flex items-center justify-between gap-3">
                            <span>
                              <MdOutlineWorkspacePremium size={25} />
                            </span>
                            <span>WIZARD MEMBER</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-6">
                          <div className="flex gap-3 items-center justify-center cursor-pointer">
                            <h3 className="text-xl font-medium text-red-500">
                              ₹{item?.price}
                            </h3>
                            <span className="line-through text-sm">
                              ₹{item?.baseprice}
                            </span>
                            <span className="text-sm text-blue-500">
                              {Math.floor(
                                (item.baseprice - item.price) / item.price
                              ) * 10}
                              % off
                            </span>
                          </div>
                          <button
                            className=" text-black px-4 py-1 rounded font-normal border-2 border-black cursor-pointer bg-white "
                            onClick={() => router.push(`/search/${item?._id}`)}
                          >
                            View Details
                          </button>
                          <button
                            className="px-5 py-2 bg-green-500 rounded text-white font-medium cursor-pointer "
                            onClick={onHotelBookHandler}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          ) : (
            <div className="text-center my-5 font-medium text-2xl ">No hotels found matching your search criteria !!</div>
          )}
        </main>
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
