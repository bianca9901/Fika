"use client"
import { motion } from "framer-motion";

type SectionHeadingProps = {
  headingText1: string
  headingText2: string
}

function SectionHeading({ headingText1, headingText2 }: SectionHeadingProps) {
  return (
    <div className="py-4 sm:py-6 px-6 w-full">
      <h1 className="text-3xl text-white mt-12 max-w-md
      md:max-w-lg lg:max-w-xl mx-auto uppercase">
        {headingText1}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 10,
            type: "spring",
            stiffness: 100,
          }}
          style={{ display: "inline-block" }}
        >
          <span className="text-yellow-300">{headingText2}</span>
        </motion.span>
      </h1>
    </div>
  );
}

export default SectionHeading;