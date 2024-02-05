import SEO from "@/components/SEO";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BookNow = () => {
  const router = useRouter();
  const [indivData, setIndivData] = useState(null);
  const getData = async () => {
    const BookData = await axios.get(`/api/hotels/${router.query.id}`);
    setIndivData(BookData.data?.hotelId);
  };

  useEffect(() => {
    const redirectUserLoggedIn = () => {
      const authUser = Cookies.get("userToken");
      if (!authUser) {
        router.push("/login");
      }
    };
    redirectUserLoggedIn();
  }, [router]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <SEO title={`${indivData?.name}`} />
      <>{indivData?.name}</>
    </div>
  );
};

export default BookNow;
