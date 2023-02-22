import Image from 'next/image'

const TopSticky = () => {
  return (
    <div className="bg-[#AA0000] items-center  top-0 flex justify-around  fixed  z-50 w-full text-white py-3 md:py-2 px-2 md:px-4 lg:px-24">
      <div className="text-xs  md:ml-0  xl:text-lg  text-white  ">
        <a
          target="_blank"
          className="links "
          rel="noreferrer"
          href="google.com"
        >
          <span className="hidden lg:inline cursor-auto">P.O. Box:</span> 22341 Antonio Parkway B160-482 <span className="hidden lg:inline"> - RSM </span> 
        </a>
      </div>
      <div className=" ml-6 md:ml-0  mr-2 md:mr-0 text-white  flex">
       <p className='text-xs xl:text-lg'><span className="hidden lg:inline">E-Mail Us:</span> eleanor@code-4tax.com</p>
      </div>
      <a
        href={"tel:9493642121"}
        className="text-xs w-1/4  lg:w-auto ml-0 md:ml-0 text-center  xl:text-lg  text-white  "
      >
        <span className="hidden lg:inline cursor-auto">

        Call Us:{" "}
        </span>
        
        <span className="block links md:inline text-center">
          <span className=" md:inline text-base md:text-xl lg:text-xl">✆</span> 1
          (949) 364-2121
        </span>
      </a>
    </div>
  );
};

export default TopSticky