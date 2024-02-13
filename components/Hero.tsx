import Image from "next/image";
import heroimg from "@/public/hero-bakeries.png";

function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={heroimg}
        alt="Hero Image"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default Hero;
