import SEO from "@/components/SEO";
import Image from "next/image";
import { MdLocationOn, MdStar } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiSolidOffer } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";

const ViewDetails = ({ data }) => {
  const [isNavShow, setIsNavShow] = useState(false);
  const [navReviewBtn, setNavReviewBtn] = useState();
  const ReviewNavData = [
    "Amenities",
    "About this OYO",
    "Choose your room",
    "Ratings and Reviews",
    "Hotel Rules",
    "What's nearby",
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 2,
    },
  };

  const scrollWindow = () => {
    const windowScroll = window.scrollY;
    if (windowScroll > 100) {
      setIsNavShow(true);
    } else {
      setIsNavShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  const onReviewNavHandler = (event) => {
    setNavReviewBtn(event);
  };

  return (
    <section className="w-full h-full">
      <nav
        className={`${
          isNavShow
            ? "fixed z-50 w-full h-20 flex items-center justify-between px-24 text-lg bg-white shadow-xl text-black transition-all"
            : "hidden transition-all"
        }`}>
        <ul className="list-none flex items-center justify-center gap-10">
          {ReviewNavData.map((item) => {
            return (
              <li
                key={item}
                className={`cursor-pointer hover:text-blue-500 ${
                  navReviewBtn === item ? "text-red-500" : "text-black"
                }`}>
                {item}
              </li>
            );
          })}
        </ul>
        <span>
          <FaRegShareFromSquare size={30} />
        </span>
      </nav>
      <div className="w-full h-full relative ">
        <SEO title={data.hotelId?.name} />
        <div className="w-full h-full relative ">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay={false}
            autoPlaySpeed={2000}>
            {data.hotelId?.gallery.map((item, key) => {
              return (
                <Image
                  key={key}
                  src={item}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  alt="Images"
                  style={{ width: "100vw", height: "58vh" }}
                />
              );
            })}
          </Carousel>
        </div>
        <div className="h-100 px-16 py-8 relative flex  items-start justify-center gap-10 max-w-screen-2xl mx-auto  ">
          <div className="w-[65%] flex flex-col gap-3 h-screen ">
            <div className="w-full h-80">
              <div className="w-full  flex items-start justify-between pb-3">
                <h1 className="text-3xl font-medium">{data.hotelId.name}</h1>
                <div className="flex flex-col">
                  <div className="px-5  py-2 rounded-sm text-xl text-white bg-green-600 flex items-center justify-center gap-1 ">
                    <span>{data.hotelId?.rating}</span>
                    <MdStar />
                  </div>
                  <span className="text-center border px-1 text-sm">
                    {data.hotelId?.rating * 100 + 70} Ratings
                  </span>
                </div>
              </div>
              <h2 className="text-base font-light ">
                {data.hotelId.description}
              </h2>
              <div className="flex border my-3 w-[16.5rem] gap-2 text-lg px-1 py-1 rounded bg-orange-100 text-orange-500 items-center justify-center ">
                <IoIosHeartEmpty size={20} />
                Parking Facility | Free Wifi |
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-4 text-black cursor-pointer">
              <h2 className="text-3xl font-semibold">Ratings and reviews</h2>
              <div className="border w-full px-2 py-5">
                <div className="flex flex-col items-center justify-center gap-1">
                  <h2 className="flex items-center justify-center gap-1 bg-green-600 text-white text-xl px-3 py-1 rounded">
                    <span>{data.hotelId?.rating}</span>
                    <MdStar />
                  </h2>
                  <h3 className="font-black">Very Good</h3>
                  <p>{data.hotelId?.rating * 100 + 70} ratings</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="w-[35%] sticky top-24 rounded">
            <div className="w-full h-[50rem] border shadow">
              <div className="w-full py-2 bg-red-500 flex items-center justify-between px-4 text-white rounded-sm">
                <div className="flex gap-2 items-center">
                  <BiSolidOffer size={30} />
                  <p className="px-2">LOGIN NOW TO GET UPTO 15% LOWER PRICES</p>
                </div>
                <button className="bg-slate-400 rounded px-4 py-1">
                  LOGIN
                </button>
              </div>
              <div className="px-4 py-2">
                <div className="flex flex-col items-start justify-start cursor-pointer py-2">
                  <div className="flex items-center justify-start gap-3">
                    <h3 className="text-3xl font-black text-black">
                      ₹{data.hotelId?.price}
                    </h3>
                    <del className="line-through text-gray-400 text-2xl">
                      ₹{data.hotelId?.baseprice}
                    </del>
                    <span className="text-xl text-blue-500">
                      {Math.floor(
                        (data.hotelId?.baseprice - data.hotelId?.price) /
                          data.hotelId?.price
                      ) * 10}
                      % off
                    </span>
                  </div>
                  <span className="text-md text-gray-500">
                    + taxes & fees: ₹132
                  </span>
                </div>
                <div className="w-full border shadow mt-2 py-3 rounded flex items-center justify-between px-3 text-xl ">
                  <span>sat, 9 Mar - sun, 10 Mar</span>
                  <span>1 Room, 1 Guest</span>
                </div>
                <div className="w-full border shadow mt-2 py-3 rounded flex items-center justify-between px-3 text-xl ">
                  <span>Classic</span>
                  <span>1 Room, 1 Guest</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
export default ViewDetails;

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels/${context.query.id}`
  );
  const data = await res.json();
  return { props: { data } };
}
