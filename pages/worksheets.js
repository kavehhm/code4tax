import TopSticky from "@/components/Top-Sticky";
import MainNav from "@/components/Navbar";
import Dropdown from "@/components/Select";
import { useEffect, useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";
import Head from "next/head";


export default function Worksheets() {
  const [pdf, setPDF] = useState("");

  const moveSelected = (item) => {
    setPDF(item);
  };

  useEffect(() => {
    console.log(pdf);
  }, [pdf]);

  return (
    <div>
    <Head>
        <title>Worksheets</title>
        <meta
          name="description"
          content="Here you can download the worksheets you will need for your appointment with us."
        />
    </Head>
      <TopSticky />
      <div className="topity sticky z-20">
        <MainNav />
      </div>
      <h1
        style={{ fontSize: "3em" }}
        className="font-bold text-[#AA0000] text-center mt-10 mb-10 lg:mb-16"
      >
        WORKSHEET DOWNLOADS
      </h1>
      <div className="flex mb-24 lg:px-24 flex-col lg:flex-row  items-center justify-center">
        <div className="lg:w-2/3 h-full w-4/5 flex flex-col   lg:mr-24 ">
          <p className="mb-12   text-2xl">
            These worksheets have been prepared to help you organize your
            information prior to your tax appointment.
          </p>
          <p className="mb-12 text-2xl">
            Every client should be using the General Information worksheet. The
            other worksheets are based on your particular situation or needs
          </p>
          <p className="text-2xl">
            Although the worksheets were created with these professions in mind,
            much of the information is helpful to any taxpayer, so feel free to
            use the worksheets even if you are not in one of these fields.
            Please keep in mind that these worksheets are not meant to be all
            inclusive of deductible expenses. There are often exceptions that
            apply, so if you have any questions, be sure to ask. These
            worksheets are intended to be used as a general guideline in your
            tax preparation process.
          </p>
        </div>
        <div className="lg:w-1/3 w-4/5 mt-6 lg:mt-0">
          <Dropdown moveSelected={moveSelected} />
          <iframe
            className="mt-4"
            height="400px"
            width="100%"
            src={`${pdf.path}`}
          ></iframe>
          <a  href={pdf.path} download>
            <button
              type="button"
              className="inline-flex items-center justify-center mt-4 rounded-md border border-transparent bg-[#26176B] px-6 w-full py-6 text-2xl font-medium text-white shadow-sm hover:bg-[#321e8c] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Download
              <ArrowDownTrayIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </button>{" "}
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
