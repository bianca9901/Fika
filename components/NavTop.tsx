"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function NavTop() {
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()

  return (
    <nav className="hidden sm:flex gap-10">
      {links.map((link) => (
        <motion.ul className="relative" key={link.hash}>
          <Link
            href={link.hash}
            onClick={() => {
              setActiveSection(link.name)
              setTimeOfLastClick(Date.now())
            }}
            className={clsx({
              "text-gray-700": activeSection !== link.name,
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
        </motion.ul>
      ))}
    </nav>
  );
}
