import SEO from "@/components/SEO"
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BookNow = () => {
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
  return (
    <div>
      <SEO title="OYO Hotel Booking Page" />
       <h1>BookNow</h1>
    </div>
  )
}

export default BookNow
