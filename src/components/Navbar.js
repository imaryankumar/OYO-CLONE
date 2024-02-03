import { useEffect, useState } from "react";
import { BiBuildings } from "react-icons/bi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaSortDown } from "react-icons/fa6";
import { HiUserCircle } from "react-icons/hi";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
const Navbar = () => {
  const router = useRouter();
  const [session, setSession] = useState();
  useEffect(() => {
    setSession(Cookies.get("userToken"));
  }, []);
  const userRemoveHandler = () => {
    setSession(Cookies.remove("userToken"));
    toast.success("Logged Out!!");
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };
  return (
    <nav className="w-100 h-100  bg-slate-100 text-black shadow flex items-center justify-between px-8 py-3 ">
      <div className="px-4">
        <span
          className="text-red-500 font-black text-4xl cursor-pointer "
          onClick={() => router.push("/")}
        >
          OYO
        </span>
      </div>
      <ul className="flex items-center justify-between gap-7">
        <li className="flex items-center justify-start gap-3  cursor-pointer  ">
          <MdOutlineBusinessCenter size={35} />
          <div className="flex flex-col items-start justify-center ">
            <span className="font-medium text-base">OYO for Business</span>
            <span className="text-base font-light">
              Trusted by 5000 Corporates
            </span>
          </div>
        </li>
        <li className="flex items-center justify-center gap-3 cursor-pointer ">
          <BiBuildings size={30} />
          <div className="flex flex-col items-start justify-center ">
            <span className="font-medium text-base">List your property</span>
            <span className="text-base font-light">
              Start earning on 30 mins
            </span>
          </div>
        </li>
        <li className="flex items-center justify-center gap-3 cursor-pointer ">
          <IoCallSharp size={30} />
          <div className="flex flex-col items-start justify-center ">
            <span className="font-medium text-base">0124-6201611</span>
            <span className="text-base font-light">Call us to Book now</span>
          </div>
        </li>
        <li className="flex items-center justify-center gap-2 cursor-pointer ">
          <TbWorld size={30} />
          <div className="flex items-start justify-center gap-2 ">
            <span className="font-medium">English</span>
            <FaSortDown size={18} />
          </div>
        </li>

        <li
          onClick={() => router.push("/hoteladd")}
          className="flex items-center justify-center gap-3 cursor-pointer "
        >
          Add Hotels
        </li>

        <li className="flex items-center justify-center gap-2 cursor-pointer ">
          <Link href={session ? "" : "/login"}>
            <HiUserCircle size={30} />
          </Link>
          {session ? (
            <span onClick={userRemoveHandler} className="cursor-pointer">
              Logout
            </span>
          ) : (
            <Link href={"/login"} className="font-medium">
              Login/ Signup
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
