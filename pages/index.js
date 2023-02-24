import MainNav from "@/components/Navbar";
import Treatments from "@/components/Services";
import TopSticky from "@/components/Top-Sticky";
import Image from "next/image";
import homeimg from "../public/msc/homeimg2.jpg";
import prep from "../public/msc/prep2.jpg";
import eevee from "../public/msc/eevee.png";
import Footer from "@/components/Footer";
import { useRef } from "react";
import Head from "next/head";

export default function Home() {
  const resultRef = useRef();

  const buttonHandler = () => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Head>
        <title>Code-4 Tax</title>
        <meta
          name="description"
          content="At Code-4 Tax, we specialize in providing full-service tax preparation for individuals and small businesses, specializing in public safety (law enforcement and fire services), healthcare providers, and educators"
        />
      </Head>
      <TopSticky />
      <div className="topity sticky z-10">
        <MainNav />
      </div>
      <Image className="w-full" src={homeimg} />
      <div
        onClick={buttonHandler}
        className="bg-[#AA0000] absolute left-1/2 -mt-28 text-2xl   hidden md:flex content-center font-bold items-center justify-center rounded-full  cursor-pointer shadow-md transition-all duration-75 hover:shadow-[#c83f3f] opacity-80 w-16 h-16 text-center text-white"
      >
        <p className="arrow-down">↓</p>
      </div>

      <h1
        style={{ fontSize: "2.5em" }}
        className=" text-center scroll-mt-16 font-bold mt-6 text-[#26176B]"
        ref={resultRef}
      >
        WELCOME TO<br></br>CODE-4 TAX SERVICES
      </h1>

      <div className="mt-6 text-xl w-4/5 m-auto">
        <p>
          At Code-4 Tax, we specialize in providing full-service tax preparation
          for individuals and small businesses, specializing in public safety
          (law enforcement and fire services), healthcare providers, and
          educators. We are available to our clients year-round.
        </p>
        <p className="mt-6">
          Our comprehensive range of services includes annual personal income
          tax filings, small business and rental property, corporate and
          partnership returns, non-profit organizations, IRS audits, audit
          appeals, responses to IRS notices, late filings, and amended returns.
          No matter what your tax needs may be, we are here to help you navigate
          the complexities of the tax system with ease and confidence.
        </p>
        <p className="mt-6">
          At Code-4 Tax, our ultimate goal is to ensure that every client gets
          the maximum legal deduction possible. Taxes can be overwhelming and
          stressful, but we are here to simplify the process and make it as
          stress-free as possible. Every client receives personalized, friendly,
          and reliable service. We take pride in building long term
          relationships with clients, and minimizing their tax liability so they
          can achieve their financial goals.
        </p>
        <p className="mt-6">
          We strive to exceed your expectations by providing exceptional service
          every step of the way. We are grateful for the opportunity to serve
          each and every client to the best of our abilities.
        </p>
      </div>
      <p
        className="text-center m-auto w-5/6 mt-6 text-[#AA0000]"
        style={{ fontSize: "2em" }}
      >
        Unfortunately, we are not accepting new clients at this time.{" "}
      </p>

      <Image src={prep} className="mt-6 w-4/5 m-auto" />

      <div className="flex flex-col lg:flex-row w-4/5 mt-3 m-auto justify-between items-around">
        <div>
          <p className="text-2xl font-bold text-[#AA0000]">CALL US:</p>
          <a href={"tel:9493642121"} className="text-[#26176B] links text-xl">
            (949) 364-2121
          </a>
        </div>
        <div className="mt-3 lg:mt-0">
          <p className="text-2xl font-bold text-[#AA0000]">
            MAIL DOCUMENTS TO US:
          </p>
          <p className="text-[#26176B] text-xl">
            22431 Antonio Parkway, B160-482 Rancho Santa Margarita, CA
            92688
          </p>
        </div>
      </div>
      <Treatments />

      <Image
        src={eevee}
        className="md:w-2/5 md:3/5 m-auto mt-12"
        alt="Dog of the founders"
      />
      <p className="text-xl text-[#AA0000] text-center mb-12 mt-3">
        Meet EEVEE, Our Customer Service Representative
      </p>

      <Footer />
    </div>
  );
}
