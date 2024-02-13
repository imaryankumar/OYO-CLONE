import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const hoteladd = () => {
  const router = useRouter();
  useEffect(() => {
    const redirectUserLoggedIn = () => {
      const authUser = Cookies.get("userToken");
      if (!authUser) {
        router.push("/login");
      }
    };
    redirectUserLoggedIn();
  }, [router]);
  const [hotelDataAdd, setHotelDataAdd] = useState({
    name: "",
    description: "",
    banner: "",
    gallery: [],
    price: "",
    baseprice: "",
    location: "",
    rating: "",
  });
  const onHotelDataHandler = (e) => {
    e.preventDefault();
    console.log("hotelDataAdd", hotelDataAdd);
    try {
      const allHotelData = {
        name: hotelDataAdd.name,
        description: hotelDataAdd.description,
        banner: hotelDataAdd.banner,
        gallery: hotelDataAdd.gallery,
        price: hotelDataAdd.price,
        baseprice: hotelDataAdd.baseprice,
        location: hotelDataAdd.location,
        rating: hotelDataAdd.rating,
      };
      axios
        .post("/api/hotels", allHotelData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }

    setHotelDataAdd({
      name: "",
      description: "",
      banner: "",
      gallery: "",
      price: "",
      baseprice: "",
      location: "",
      rating: "",
    });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center py-3 text-3xl font-semibold ">
        <span
          className="text-red-500 text-3xl font-semibold cursor-pointer"
          onClick={() => router.push("/")}>
          OYO
        </span>{" "}
        Add Hotel
      </h1>
      <form
        onSubmit={(e) => onHotelDataHandler(e)}
        className="w-[50%] mx-auto bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name">
            Hotel Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter name"
            value={hotelDataAdd.name}
            onChange={(e) =>
              setHotelDataAdd({ ...hotelDataAdd, name: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description">
            Hotel Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter description"
            rows="4" // Adjust rows based on the desired height
            value={hotelDataAdd.description}
            onChange={(e) =>
              setHotelDataAdd({ ...hotelDataAdd, description: e.target.value })
            }></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bannerImage">
            Banner Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bannerImage"
            type="text"
            placeholder="Enter name"
            value={hotelDataAdd.banner}
            onChange={(e) =>
              setHotelDataAdd({ ...hotelDataAdd, banner: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="galleryImage">
            Gallery Image URL
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="galleryImage"
            placeholder="Enter description"
            rows="4"
            value={hotelDataAdd.gallery}
            onChange={(e) =>
              setHotelDataAdd({
                ...hotelDataAdd,
                gallery: e.target.value.split(","),
              })
            }></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="Enter name"
            value={hotelDataAdd.price}
            onChange={(e) =>
              setHotelDataAdd({ ...hotelDataAdd, price: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="basePrice">
            Base Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="basePrice"
            type="text"
            placeholder="Enter name"
            value={hotelDataAdd.baseprice}
            onChange={(e) =>
              setHotelDataAdd({ ...hotelDataAdd, baseprice: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Enter name"
            value={hotelDataAdd.location}
            onChange={(e) =>
              setHotelDataAdd({ ...hotelDataAdd, location: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rating">
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            type="text"
            placeholder="Enter name"
            value={hotelDataAdd.rating}
            onChange={(e) =>
              setHotelDataAdd({ ...hotelDataAdd, rating: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 w-[100%] hover:bg-blue-700 text-white font-bold py-3 px-4  rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default hoteladd;
