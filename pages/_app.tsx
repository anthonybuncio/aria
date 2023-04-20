import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quattrocento_Sans } from "next/font/google";

const quatroSans = Quattrocento_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quatroSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
