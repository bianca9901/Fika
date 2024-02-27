import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

type SocialMediaIconsProps = {
  iconClassName: string;
};

function SocialMediaIcons({ iconClassName }: SocialMediaIconsProps) {
  return (
    <div>
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
      >
        <Icon icon="arcticons:instagram" className={iconClassName} />
      </Link>
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener"
        aria-label="Facebook"
      >
        <Icon icon="arcticons:facebook" className={iconClassName} />
      </Link>
      <Link
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener"
        aria-label="Linkedin"
      >
        <Icon icon="arcticons:linkedin" className={iconClassName} />
      </Link>
    </div>
  );
}

export default SocialMediaIcons;
