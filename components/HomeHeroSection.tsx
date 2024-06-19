'use client';
import Image from "next/image";

export default function HeroSection({text, subtext} : {text: string, subtext: string}) {
    return (
      <div className='hero flex-col justify-center h-screen text-center content-center bg-[#adf08b] '>
        <Image
          src={'/flat-world-vegetarian-day-background.png'}
          fill={true}
          alt=""
          className="z-0 absolute w-100 object-contain lg:object-cover mt-24"
          />
        <div className="hero-text z-10 relative text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
         <h1 className="text-6xl p-5">{text}</h1>
         <h3>{subtext}</h3>
        </div>
        <div className="mt-28 mx-auto flex-col relative">
          <button
            type="button"
            onClick={() => console.log("Clicked")}
            className="bg-green-200 p-3 m-1 rounded font-bold text-lg w-40"
          >
              Get Started
          </button>
          <button
            type="button"
            onClick={() => console.log("Clicked")}
            className="bg-green-200 p-3 m-1 rounded font-bold text-lg w-40"
          >
              Login
          </button>
        </div>
      </div>
    );
}

// bg-[#dbdbdb]
// bg-[#daffd6]
// bg-[#adf08b]
