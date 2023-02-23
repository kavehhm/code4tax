import { useRouter } from "next/router";
import TopSticky from "@/components/Top-Sticky";
import MainNav from "@/components/Navbar";
import SecondaryNav from "@/components/SecondaryNav";
import { useState } from "react";
import Footer from "@/components/Footer";
import { Head } from "next/head";

export default function ServicePage() {
  const router = useRouter();
  const route = router.query;
  const param = route.service;
  const [header, setHeader] = useState("")
  const [words, setWords] = useState("")

  const moveUp = (title, text) => {
    setHeader(title)
    setWords(text);
  };


  return (
    <div className="min-h-full relative ">
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="The services we provide at Code-4 Tax"
        />
      </Head>
      <TopSticky />
      <div className="topity sticky z-20">
        <MainNav />
      </div>
      <div className="flex mt-12  mb-40 md:flex-row flex-col w-4/5 m-auto">
        <div className="mt-16 sticky z-10">
          <SecondaryNav moveUp={moveUp} />
        </div>
        <div className="md:w-4/5  pb-24 md:ml-12 scroll-mt-16   m-auto mt-12  ">
          <h1  style={{ fontSize: "2em" }} className=" text-[#AA0000] text-center">{header}</h1>
          <p className="md:w-4/5 text-xl m-auto mt-12">{words}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
