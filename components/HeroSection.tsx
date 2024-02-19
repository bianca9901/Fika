import Image from "next/image";
import heroimg from "@/public/hero-img.png";
import HeroMessage from "./HeroMessage";

function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full z-10 flex items-center
      justify-center"
      >
        <HeroMessage />
      </div>
      <Image
        src={heroimg}
        alt="Coffe shop interior"
        fill
        className="object-cover"
      />
    </div>
  );
}

export default HeroSection;
