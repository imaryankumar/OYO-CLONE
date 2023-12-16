import { useState } from "react";
import { LuBadgePercent } from "react-icons/lu";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import bgImage from '../../public/images/loginimgs.jpg'
import SEO from "@/components/SEO";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react"
const login = () => {
  const router = useRouter();
  const { data: session } = useSession()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  const onSigninHandler = () => {
    const userData = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    if (user.name || user.password || user.email) {
      axios
        .post("/api/auth/register", userData)
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            toast.success(response.data.msg);
            Cookies.set("userToken", response.data.token, { expires: 1 });
            router.back();
          }
        })
        .catch((err) => console.log(err));
    } else {
      toast("All Fields are Mandatory");
    }

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  const onLoginHandler = () => {
    const userData = {
      email: user.email,
      password: user.password,
    };
    if (user.name || user.email) {
      axios
        .post("/api/auth/login", userData)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            toast.success(response.data.msg);
            Cookies.set("userToken", response.data.token, { expires: 1 });
            router.back();
          }
        })
        .catch((err) => toast(err));
    } else {
      toast("All Fields are Mandatory");
    }
    setUser({
      email: "",
      password: "",
    });
  };

  const userLoginHandler = () => {
    setIsLogin(!isLogin);
  };
  return (
    <section className="w-100 h-100 relative" style={{backgroundImage:`url(${bgImage.src})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100vw",height:"100vh"}} >
      <SEO title="OYO:India's Best Online Hotels" />
      <div className="px-20 py-6">
        <nav className="flex items-center justify-start gap-6 text-white opacity-100 ">
          <div className="text-4xl font-black cursor-pointer  text-red-500 " onClick={()=>router.push("/")} >OYO</div>
          <span className="text-2xl font-serif ">
            Hotels and homes across 800 cities, 24+ countries
          </span>
        </nav>
        <main className="flex items-center justify-between w-100 relative  min-h-[30rem] px-24 ">
          <div className="flex flex-col items-start justify-center gap-2 w-[50%]">
            <h2 className="text-5xl font-bold text-white font-serif">
              There’s a smarter way to OYO around
            </h2>
            <p className="text-white text-xl font-serif">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className="w-100 h-100 relative">
            <div className="bg-red-500 text-white text-center flex items-center gap-2 px-2 font-serif ">
              <span>
                <LuBadgePercent size={20} />
              </span>{" "}
              Sign up & Get ₹500 OYO Money
            </div>
            <form
              className="flex flex-col items-start justify-start bg-white px-4 py-4 text-black gap-4 rounded"
              onSubmit={onSubmitHandler}
            >
              <h1 className="text-xl font-medium">Login / Signup</h1>
              {!isLogin && (
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  placeholder="Enter your name..."
                  className="border px-3 rounded py-2 "
                />
              )}

              <input
                type="email"
                name="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email..."
                className="border px-3 rounded py-2  "
              />

              <input
                type="password"
                name="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter your password..."
                className="border px-3 rounded py-2 "
              />

              {isLogin ? (
                <button
                  onClick={onLoginHandler}
                  className="py-1 px-6 rounded bg-red-500 text-white"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={onSigninHandler}
                  className="py-1 px-6 rounded bg-red-500 text-white"
                >
                  Signup
                </button>
              )}
               <div className="w-100 bg-white rounded-full flex items-center justify-center gap-3 border py-2 px-4  cursor-pointer mx-6 " onClick={() => signIn("google")} >
                 <FcGoogle size={25} />
                <span>Continue with Google</span>
               </div>
              <div className="text-sm">
                Prefer to{" "}
                {isLogin ? "Sign in with email" : "Log in with password"}?{" "}
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={userLoginHandler}
                >
                  Click here
                </span>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default login;
