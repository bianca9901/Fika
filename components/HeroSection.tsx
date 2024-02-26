"use client"
import HeroMessage from "./HeroMessage";
import { useSectionInView } from "@/lib/hooks";
import HeroImg from "./HeroImg";
import HeroFollowUs from "./HeroFollowUs";

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
        <HeroFollowUs/>
      </div>
    </div>
    </section>
  );
}

export default HeroSection;
