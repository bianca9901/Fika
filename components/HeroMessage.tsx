"use client"
import { motion } from "framer-motion";
import HeroBtn from "./HeroBtn"

function HeroMessage() {
  return (
    <div className="py-4 sm:py-6 px-6 bg-blue-50 opacity-1 rounded">
      <h1 className="text-3xl font-bold text-black mb-4 mt-12 max-w-md
      md:max-w-lg lg:max-w-xl mx-auto uppercase">
        Experience the{" "}
        <motion.span
          animate={{
            y: [-10, 10],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            },
          }}
          style={{ display: "inline-block" }}
        >
          <span className="text-blue-300">Sweet</span> Side of Sweden
        </motion.span>
        <span className="text-blue-300">.</span>
      </h1>
      <HeroBtn />
    </div>
  );
}

export default HeroMessage;