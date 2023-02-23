import Image from 'next/image'
import Link from 'next/link';

const TopSticky = () => {
  return (
    <div className="bg-[#AA0000] items-center  top-0 flex justify-around  fixed  z-50 w-full text-white py-3 md:py-2 px-2 md:px-4 lg:px-24">
      <div className="text-xs  md:ml-0  xl:text-lg  text-white  ">
        <Link
          className="links "
          href="/contact-us"
        >
          Mail To Us 
        </Link>
      </div>
      <div className=" ml-6 md:ml-0  mr-2 md:mr-0 text-white  flex">
       <a href='mailto:eleanor@code-4tax.com' className='text-xs  xl:text-lg'><span className=" cursor-auto hidden lg:inline">E-Mail Us:</span> <span className='links'>eleanor@code-4tax.com</span></a>
      </div>
      <a
        href={"tel:9493642121"}
        className="text-xs w-1/4  lg:w-auto ml-0 md:ml-0 text-center  xl:text-lg  text-white  "
      >
        <span className="hidden lg:inline cursor-auto">

        Call Us:{" "}
        </span>
        
        <span className="block links md:inline text-center">
          <span className=" md:inline  md:text-xl lg:text-xl">✆</span> 1
          (949) 364-2121
        </span>
      </a>
    </div>
  );
};

export default TopSticky