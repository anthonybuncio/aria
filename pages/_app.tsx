import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quattrocento_Sans } from "next/font/google";
import Head from "next/head";

const quatroSans = Quattrocento_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>A.R.I.A. - AI Assistant</title>
      </Head>
      <main className={quatroSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
