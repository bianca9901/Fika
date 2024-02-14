"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function NavTop() {
  return (
    <nav className="hidden sm:flex gap-10 text-black list-none">
        {links.map((link) => (
          <motion.li className="relative" key={link.hash}>
            <Link href={link.hash}>
              {link.name}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300
                rounded-full origin-left"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              ></motion.span>
            </Link>
          </motion.li>
        ))}
    </nav>
  );
}
