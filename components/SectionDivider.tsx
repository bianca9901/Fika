"use client";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="bg-sky-200 dark:bg-sky-900 my-24 h-16 w-2
    rounded-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
    </div>
  );
}
