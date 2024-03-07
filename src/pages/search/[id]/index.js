import SEO from "@/components/SEO";
import Image from "next/image";
import { MdLocationOn, MdStar } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiSolidOffer } from "react-icons/bi";
const ViewDetails = ({ data }) => {
  // console.log("object", data.hotelId?.gallery);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="w-100 h-100 relative ">
      <SEO title={data.hotelId?.name} />
      <div className="w-100 h-100 relative ">
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
      <div className="h-100 px-16 py-8 relative flex  items-start justify-center gap-2 max-w-screen-2xl mx-auto ">
        <div className="w-[65%] flex flex-col gap-3 h-screen">
          <h1 className="text-3xl font-medium">{data.hotelId.name}</h1>
          <h2 className="text-base font-light ">{data.hotelId.description}</h2>
          <div className="flex items-center  gap-1  ">
            <MdLocationOn size={25} color="blue" />
            <h3 className="text-lg font-medium">{data.hotelId.location}</h3>
          </div>
          <div className="flex flex-col py-5 items-start justify-center gap-3 ">
            <div className="flex items-center justify-center gap-4">
              <div className="px-1 text-white rounded-sm bg-green-600 flex items-center justify-center gap-1 ">
                <span>{data.hotelId?.rating}</span>
                <MdStar />
              </div>
              <span>({data.hotelId?.rating * 100} Ratings)</span>
              <span>· Excellent</span>
            </div>
          </div>
        </div>
        <div className="w-[35%] sticky top-14 rounded">
          <div className="w-full h-[50rem] border shadow">
            <div className="w-full py-2 bg-red-500 flex items-center justify-between px-4 text-white">
              <div className="flex gap-2 items-center">
                <BiSolidOffer size={30} />
                <p className="px-2">LOGIN NOW TO GET UPTO 15% LOWER PRICES</p>
              </div>
              <button className="bg-slate-400 rounded px-4 py-1">LOGIN</button>
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
