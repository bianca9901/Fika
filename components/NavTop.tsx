"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

export default function NavTop() {
  const [activeSection, setActiveSection] = useState("HOME");

  return (
    <nav className="hidden sm:flex gap-10 list-none">
      {links.map((link) => (
        <motion.li className="relative" key={link.hash}>
          <Link
            href={link.hash}
            onClick={() => setActiveSection(link.name)}
            className={clsx({
              "text-gray-500": activeSection !== link.name,
              "text-black": activeSection === link.name,
            })}
          >
            {link.name}
            <motion.span
              className={clsx(
                "absolute bottom-0 left-0 w-full h-1 rounded-full origin-left",
                {
                  "bg-yellow-200": activeSection !== link.name,
                  "bg-yellow-300": activeSection === link.name,
                }
              )}
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
