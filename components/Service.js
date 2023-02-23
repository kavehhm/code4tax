import  Link  from "next/link";

const Service = (props) => {
  return (
    <div className={props.type === "long" ? "m-6 h-48 md:h-36 flex flex-col relative" : "m-6 h-48 md:h-36 lg:h-40 flex flex-col relative"} >
      <h1 className="text-xl text-[#26176B]">{props.service}</h1>
      <p className="text-base align-top md:text-justify tracking-wide  text-slate-500">{props.description}</p>
      <Link href={`${props.link}`} >
        <button className="bg-slate-100 absolute bottom-0 hover:bg-slate-200 transition-all p-2 rounded-lg">
          More <span className="rounded-full p-0.5 hover:p-1 text-slate-100 transition-all bg-[#26176B] w-8 h-8">➜</span>
        </button>
      </Link>
    </div>
  );
};

export default Service;

