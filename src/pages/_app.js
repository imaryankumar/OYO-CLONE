import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import "tailwindcss/tailwind.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </SessionProvider>
  );
}
