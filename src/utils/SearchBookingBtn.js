import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import Link from "next/link";

const SearchBookingBtn = ({ item }) => {
  let cookie = Cookies.get("userToken");
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
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex gap-3 items-center justify-center cursor-pointer">
        <h3 className="text-xl font-medium text-red-500">₹{item?.price}</h3>
        <del className="line-through text-sm">₹{item?.baseprice}</del>
        <span className="text-sm text-blue-500">
          {Math.floor((item.baseprice - item.price) / item.price) * 10}% off
        </span>
      </div>
      <Link href={`/search/${item?._id}`} target="_blank">
        <button className=" text-black px-4 py-1 rounded font-normal border-2 border-black cursor-pointer bg-white ">
          View Details
        </button>
      </Link>

      <button
        className="px-5 py-2 bg-green-500 rounded text-white font-medium cursor-pointer "
        onClick={onHotelBookHandler}
      >
        Book Now
      </button>
    </div>
  );
};

export default SearchBookingBtn;
