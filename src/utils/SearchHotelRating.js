import {
  MdOutlineWorkspacePremium,
  MdOutlineDoorSliding,
  MdStar,
} from "react-icons/md";
import { IoWifiOutline } from "react-icons/io5";
import { GiWaterFountain } from "react-icons/gi";
const SearchHotelRating = ({ item }) => {
  return (
    <div className="flex flex-col py-2 items-start justify-center gap-3 ">
      <div className="flex items-center justify-center gap-4">
        <div className="px-1 text-white rounded-sm bg-green-600 flex items-center justify-center gap-1 ">
          <span>{item?.rating}</span>
          <MdStar />
        </div>
        <span>({item.rating * 100} Ratings)</span>
        <span>· Excellent</span>
      </div>
      <div className="flex items-center justify-center gap-2">
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
      <div className=" bg-gradiant p-2 flex items-center justify-center gap-1 rounded text-white ">
        <span>
          <MdOutlineWorkspacePremium size={25} />
        </span>
        <span>WIZARD MEMBER</span>
      </div>
    </div>
  );
};

export default SearchHotelRating;

