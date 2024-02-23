"use client";
import fikaLogo from "@/public/fika-logo.png";
import Image from "next/image";

function Logo() {
  const fikaLogoSrc = fikaLogo.src;

  const handleLogoClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Image
      onClick={handleLogoClick}
      src={fikaLogoSrc}
      alt="Fika Logo"
      className="mr-11 ml-4"
      width={80}
      height={70}
      quality={70}
    />
  );
}

export default Logo;
