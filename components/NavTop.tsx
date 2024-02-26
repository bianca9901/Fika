"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { usePathname } from "next/navigation";

export default function NavTop() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const pathname = usePathname();

  useEffect(() => {
    // Reset active section if pathname is not in the navbar links
    const isLinkInNavbar = links.some((link) => link.path === pathname);
    if (!isLinkInNavbar) {
      setActiveSection(null);
    }
  }, [pathname, setActiveSection]);

  return (
    <nav className="hidden sm:flex">
      <ul className="flex gap-10">
        {links.map((link) => (
          <motion.li className="relative" key={link.path}>
            <Link
              href={link.path}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              className={clsx({
                "text-gray-700 dark:text-white": activeSection !== link.name,
                "text-black dark:text-white": activeSection === link.name,
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
      </ul>
    </nav>
  );
}
