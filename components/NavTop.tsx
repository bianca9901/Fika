"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Logo from "./Logo";

export default function NavTop() {
  return (
    <nav
      className="z-50 fixed top-0 left-1/2 transform -translate-x-1/2 py-4
    sm:py-6 sm:h-[9.25rem] sm:w-[36rem] px-6 w-full flex items-center
    justify-between"
    >
      <Logo />
      <ul
        className="gap-10 text-xl font-semibold text-gray-600 hidden
      sm:flex"
      >
        {links.map((link) => (
          <motion.li className="relative" key={link.hash}>
            <Link href={link.hash}>
              {link.name}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-blue-300
                rounded-full origin-left"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              ></motion.span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
