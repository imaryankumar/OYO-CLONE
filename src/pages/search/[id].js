import SEO from "@/components/SEO";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdLocationOn, MdStar } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ViewDetails = ({ data }) => {
  // console.log("object", data.hotelId?.gallery);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="w-100 h-100 relative">
      <SEO title={data.hotelId?.name}  />
      <div className="w-100 h-100 relative ">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
        >
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
      <main className=" w-100 h-100 px-16 py-4 relative flex flex-col items-start justify-center gap-2 ">
        <h1 className="text-3xl font-medium">{data.hotelId.name}</h1>
        <h2 className="text-base font-light ">{data.hotelId.description}</h2>
        <div className="flex items-center justify-between gap-1  ">
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
      </main>
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

