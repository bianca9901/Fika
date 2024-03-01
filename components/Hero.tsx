"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import Btn from "./Btn";
import Link from "next/link";
import Image from "next/image";
import heroimg from "@/public/headerimg.png";
import SocialMediaIcons from "./SocialMediaIcons";

function Hero() {
  const { ref } = useSectionInView("HOME");

  return (
    <section ref={ref} id="home">
      <div className="relative w-full h-screen bg-sky-300 dark:bg-black">
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center
        justify-center"
        >
          <div className="ml-4">
            <h1
              className="text-3xl md:text-4xl text-white mb-4 max-w-md
            md:max-w-lg lg:max-w-xl mx-auto uppercase"
            >
              <span className="text-4xl md:text-7xl">Experience</span> the{" "}
              <span className="text-yellow-300 text-4xl md:text-7xl">
                Sweet
              </span>{" "}
              Side of Sweden
              <span className="text-yellow-300">.</span>
            </h1>
            <div className="flex justify-center">
              <Link href="#open-times">
                <Btn>open times</Btn>
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex">
            <Image
              src={heroimg}
              alt="cinnamon bun roll"
              width={300}
              height={300}
              loading="eager"
            />
          </div>
          <div>
            <SocialMediaIcons
              iconClassName="w-8 md:w-[5rem] h-auto text-white
            mr-4 ml-11 mb-[2rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
