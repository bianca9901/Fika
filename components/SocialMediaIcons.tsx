import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";

type SocialMediaIconsProps = {
  iconClassName: string;
};

const scaleVariants = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
};

function SocialMediaIcons({ iconClassName }: SocialMediaIconsProps) {
  return (
    <>
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
      >
        <motion.div
          variants={scaleVariants}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <Icon icon="arcticons:instagram" className={iconClassName} />
        </motion.div>
      </Link>
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener"
        aria-label="Facebook"
      >
        <motion.div
          variants={scaleVariants}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <Icon icon="arcticons:facebook" className={iconClassName} />
        </motion.div>
      </Link>
      <Link
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener"
        aria-label="Linkedin"
      >
        <motion.div
          variants={scaleVariants}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <Icon icon="arcticons:linkedin" className={iconClassName} />
        </motion.div>
      </Link>
    </>
  );
}

export default SocialMediaIcons;
