"use client"
import HeroMessage from "./HeroMessage";
import { useSectionInView } from "@/lib/hooks";
import HeroImg from "./HeroImg";
import SocialMediaIcons from "./SocialMediaIcons";

function HeroSection() {
  const { ref } = useSectionInView("HOME")
 
  return (
    <section ref={ref} id="home">
      
    <div className="relative w-full h-screen bg-sky-300 dark:bg-black">
      <div
        className="absolute top-0 left-0 w-full h-full z-10 flex items-center
      justify-center"
      >
        <HeroMessage />
        <HeroImg/>
        <SocialMediaIcons iconClassName="w-8 md:w-[5rem] h-auto text-white mr-4 ml-11" />
      </div>
    </div>
    </section>
  );
}

export default HeroSection;
