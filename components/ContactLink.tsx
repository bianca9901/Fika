import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

type ContactLinkProps = {
  icon: string;
  text: string;
  href: string;
};

function ContactLink({ icon, text, href }: ContactLinkProps) {
  const buttonStyles = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <motion.a
      href={href}
      className="mt-2 w-full bg-sky-500 dark:bg-sky-800 focus:outline-none
      focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 py-1 px-6 rounded
      shadow-md flex justify-center gap-2"
      whileHover={buttonStyles.whileHover}
      whileTap={buttonStyles.whileTap}
    >
      <Icon icon={icon} className="md:w-[2rem] md:h-[2rem] w-[1rem] h-[1rem]" />
      <span>{text}</span>
    </motion.a>
  );
}

export default ContactLink;
