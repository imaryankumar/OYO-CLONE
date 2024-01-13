import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
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
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
}
