import Hamburger from "@/components/landing/Hamburger";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <header className="flex justify-between items-center">
        <div className="pl-[65px]">
          <Hamburger />
        </div>
        <div>
          <p className="text-5xl py-6 text-center font-bold lg:leading-">Photo Wall</p>
        </div>
        <div></div>
      </header>


      <div className="relative bg-hero bg-no-repeat bg-cover w-full h-full flex flex-col gap-y-2 justify-center items-center text-white">

        <p className="text-[64px] leading-[77px] z-10 font-perp">Picture-Perfect Results</p>
        <p className="text-[32px] max-w-[850px] font-medium text-center z-10">Experience remarkable and awe-inspiring outcomes with the unparalleled capabilities of our robust yet intuitively designed photo application.</p>
        <div className="z-10">
          <Link href={"/auth/register"} >
            <button className=" px-[75px] py-5 bg-black text-white rounded-xl border border-white hover:bg-white hover:text-black hover:border-black  hover:-translate-y-1 hover:translate-x-1 transition-transform font-bold text-3xl mt-[82px] ">Get Started</button>
          </Link>
        </div>
        <div className="h-full outline w-full bg-black absolute top-0 opacity-50"></div>
      </div>


    </main>
  );
}
