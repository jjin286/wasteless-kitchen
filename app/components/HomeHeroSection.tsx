"use client";

import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/app/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { getUser } from "../api/spoonacular/route";

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
          <Link
            href={'/signup'}
            className="bg-green-200 p-3 m-1 rounded font-bold text-lg w-40"
          >
              Get Started
          </Link>
          <Link
            href={'/login'}
            className="bg-green-200 p-3 m-1 rounded font-bold text-lg w-40"
          >
              Login
          </Link>
          <Button
            // className="bg-green-200 p-3 m-1 rounded font-bold text-lg w-40"
            onClick={getUser}
          >
              Check user now
          </Button>
        </div>
      </div>
    );
}

// bg-[#dbdbdb]
// bg-[#daffd6]
// bg-[#adf08b]
