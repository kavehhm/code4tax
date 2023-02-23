import Footer from "@/components/Footer";
import Questions from "@/components/Questions";

import TopSticky from "@/components/Top-Sticky";
import MainNav from "@/components/Navbar";
import Head from "next/head";

export default function Faq() {
  return (
    <div>
      <Head>
        <title>F.A.Q.</title>
        <meta
          name="description"
          content="The frequently asked questions we have received in our many years preparing taxes."
        />
      </Head>
      <TopSticky />
      <div className="topity sticky z-20">
        <MainNav />
      </div>
      <h1
        style={{ fontSize: "3em" }}
        className="font-bold text-[#AA0000] text-center mt-10 -mb-12 md:-mb-24"
      >
        FREQUENTLY ASKED QUESTIONS
      </h1>

      <Questions />

      <Footer />


    </div>
  );
}
