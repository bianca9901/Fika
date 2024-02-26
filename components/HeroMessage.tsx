"use client";
import { motion } from "framer-motion";
import Btn from "./Btn";
import Link from "next/link";

function HeroMessage() {
  return (
    <div className="ml-4">
      <h1
        className="text-3xl md:text-4xl text-white mb-4 max-w-md
      md:max-w-lg lg:max-w-xl mx-auto uppercase"
      >
        <span className="text-4xl md:text-7xl">Experience</span> the{" "}
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
          <span className="text-yellow-300 text-4xl md:text-7xl">Sweet</span>{" "}
          Side of Sweden
        </motion.span>
        <span className="text-yellow-300">.</span>
      </h1>
      <div className="flex justify-center">
        <Link href="#open-times">
          <Btn>open times</Btn>
        </Link>
      </div>
    </div>
  );
}

export default HeroMessage;
