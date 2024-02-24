import React from 'react';
import { Icon } from "@iconify/react";
import Link from 'next/link'

function HeroFollowUs() {
  return (
    <div>
      <Link href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
        <Icon
          icon="arcticons:instagram"
          className="w-8 md:w-[5rem] h-auto text-white mr-4 ml-11"
        />
      </Link>
      <Link href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
        <Icon
          icon="arcticons:facebook"
          className="w-8 md:w-[5rem] h-auto text-white mr-4 ml-11"
        />
      </Link>
      <Link href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="Linkedin">
        <Icon
          icon="arcticons:linkedin"
          className="w-8 md:w-[5rem] h-auto text-white mr-4 ml-11"
        />
      </Link>
    </div>
  );
}

export default HeroFollowUs;
