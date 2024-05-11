import Hamburger from "@/components/landing/Hamburger";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <header className="flex justify-between items-center lg:px-0 px-3">
        <div className="lg:pl-[65px] lg:order-1 order-2">
          <Hamburger />
        </div>
        <div className="lg:order-2 order-1">
          <p className="lg:text-5xl text-xl py-6 text-center font-bold ">Photo Wall</p>
        </div>
        <div className="lg:block hidden order-3"></div>
      </header>


      <div className="relative bg-hero bg-no-repeat bg-cover w-full h-full flex flex-col gap-y-2 justify-center items-center text-white px-3">

        <p className="lg:text-[64px] lg:leading-[77px] text-4xl z-10 font-perp text-center">Picture-Perfect Results</p>
        <p className="lg:text-[32px] max-w-[850px] text-xl font-medium text-center z-10">Experience remarkable and awe-inspiring outcomes with the unparalleled capabilities of our robust yet intuitively designed photo application.</p>
        <Link href={"/auth/register"} className="z-10" >
          <button className="cursor-pointer lg:px-[75px] lg:py-5 py-3 px-[40px] bg-black text-white rounded-xl border border-white hover:bg-white hover:text-black hover:border-black hover:-translate-y-1 hover:translate-x-1 transition-transform font-bold lg:text-3xl text-xl lg:mt-[82px] mt-[50px]">Get Started</button>
        </Link>

        <div className="h-full outline w-full bg-black absolute top-0 opacity-50"></div>
      </div>


    </main>
  );
}
