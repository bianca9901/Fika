"use client";
import fikaLogo from "@/public/fika-logo.png";
import { motion } from "framer-motion";

function Logo() {
  const fikaLogoSrc = fikaLogo.src;

  const handleLogoClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <motion.img
      onClick={handleLogoClick}
      src={fikaLogoSrc}
      alt="Fika Logo"
      className="w-20 h-auto mr-11 ml-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}

export default Logo;
