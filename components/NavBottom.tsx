"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useScrollDirection }  from '@/lib/hooks';
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function NavBottom() {
  const {activeSection, setActiveSection} = useActiveSectionContext()

  const scrollDirection = useScrollDirection();
  const shouldApplyOpacity = scrollDirection === 'down';

  return (
    <nav
      className={`h-[4.25rem] fixed bottom-0 left-0 w-full bg-yellow-300
      border-t border-gray-200 rounded-t-3xl flex flex-row justify-around
      items-center sm:hidden 
      ${ shouldApplyOpacity ? 'bg-opacity-70' : ''}`}
    >
      <ul className="flex gap-10 text-lg font-semibold ">
        {links.map((link) => (
          <motion.li
            className="relative"
            key={link.hash}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
            href={link.hash}
            onClick={() => setActiveSection(link.name)}
            className={clsx({
              "text-blue-300": activeSection !== link.name,
              "text-blue-400": activeSection === link.name,
            })}>
              <Icon className="w-[36px] h-[36px]" icon={link.icon}/>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
