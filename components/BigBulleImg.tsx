"use client"
import React from "react";
import { motion } from "framer-motion";
import bigbulle from "@/public/big-bulle.png";

export default function BigBulle() {
  const bigBulleSrc = bigbulle.src;

  return (
    <div>
      <motion.img
        src={bigBulleSrc}
        alt="Kanel Bulle"
        className=""
        initial={{ x: "100%", scale: 0.5, opacity: 0 }}
        animate={{ x: 0, scale: 2, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          delay: 0.5,
        }}
      />
    </div>
  );
}

