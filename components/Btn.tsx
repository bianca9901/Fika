"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type BtnProps = {
  onClick?: () => void;
  type?: "submit";
  children?: ReactNode;
};

function Btn({ children, onClick, type }: BtnProps) {
  const defaultStyles = {
    whileHover: { scale: 1.05, backgroundColor: "#FFD700" },
    whileTap: { scale: 0.95 },
    className:
      "uppercase bg-yellow-300 focus:outline-none focus:ring-2focus:ring-yellow-400 focus:ring-opacity-50 text-black py-1 px-6 rounded shadow-md",
  };

  return (
    <motion.button {...defaultStyles} onClick={onClick} type={type}>
      {children}
    </motion.button>
  );
}

export default Btn;
