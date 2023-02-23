import TopSticky from "@/components/Top-Sticky";
import MainNav from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div>
      <TopSticky />
      <div className="topity sticky z-20">
        <MainNav />
      </div>
      <h1
        style={{ fontSize: "3em" }}
        className="font-bold text-[#AA0000] text-center mt-10 mb-10 md:mb-24"
      >
        CONTACT US
      </h1>
      <div className="flex flex-col mb-12 md:mb-28 items-center md:items-start md:flex-row text-xl justify-center">
        <div className="mb-8  md:ml-0 md:mr-24">
          <h1 className="mb-8 text-xl text-[#26176B] font-bold">Code-4 Tax</h1>
          <p className=" mb-6 font-semibold text-xl">
            Mailing Address:{" "}
            <a
              className="text-black links font-normal inline  "
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/dir//Blossoming+Smiles/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80dceba6554e13e3:0xe91cae007c5e6261?sa=X&ved=2ahUKEwjGman3m7n8AhXWC0QIHeRKAsEQ9Rd6BAhsEAQ"
            >
              22431 Antonio Parkway,<br></br> Suite B160-482   Rancho Santa
              Margarita, <br></br> CA 92688
            </a>{" "}
          </p>
          <p className="mb-6 font-semibold ">
            Phone:{" "}
            <a href={"tel:9493642121"}>
              <span className="text-black font-normal  links inline ">
                (949) 364-2121
              </span>
            </a>
          </p>
          <p className="mb-6 font-semibold  ">
            Email:{" "}
            <a href="mailto:eleanor@code-4tax.com">
              <span className="text-black font-normal  links inline ">
                eleanor@code-4tax.com
              </span>
            </a>
          </p>
        </div>
        <div className="">
          <h2 className="font-bold text-[#26176B] mb-8">Hours of Operation:</h2>
          <div className="flex">
            <div className="mr-24 md:mr-8">
              <p className="font-semibold pb-[1px]">Monday</p>
              <p className="font-semibold pb-[1px]">Tuesday</p>
              <p className="font-semibold pb-[1px]">Wednesday</p>
              <p className="font-semibold pb-[1px]">Thursday</p>
              <p className="font-semibold pb-[1px]">Friday</p>
              <p className="font-semibold pb-[1px]">Saturday</p>
              <p className="font-semibold pb-[1px]">Sunday</p>
            </div>
            <div>
              <p className="pb-[1px]">9:00 AM - 7:00 PM</p>
              <p className="pb-[1px]">9:00 AM - 7:00 PM</p>
              <p className="pb-[1px]">9:00 AM - 7:00 PM</p>
              <p className="pb-[1px]">9:00 AM - 7:00 PM</p>
              <p className="pb-[1px]">9:00 AM - 7:00 PM</p>
              <p className="whitespace-nowrap pb-[1px]">9:00 AM - 7:00 PM</p>
              <p className="pb-[1px]">Closed</p>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}