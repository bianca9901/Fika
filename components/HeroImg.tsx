import React from 'react'
import heroimg from '@/public/headerimg.png'
import Image from "next/image";

function HeroImg() {
  return (
    <div>
    <Image
        src={heroimg}
        alt="cinnamun bun roll"
        width={300}
        height={300}
      />
      </div>
  )
}

export default HeroImg