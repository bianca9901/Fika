"use client";
import React, { useState } from "react";
import Image from "next/image";
import { profileData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import SpeechBubble from "./SpeechBubble";
import { motion } from "framer-motion";

function About() {
  const { ref } = useSectionInView("ABOUT US");
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);

  return (
    <section ref={ref} id="about-us" className="scroll-mt-28">
      <SectionHeading
        headingText1="only "
        headingText2="true fika lovers work here"
      />
      <div className="flex items-center justify-center space-x-4 flex-wrap">
        {profileData.map((profile, index) => (
          <div
            key={index}
            onMouseEnter={() => setSelectedProfile(index)}
            onMouseLeave={() => setSelectedProfile(null)}
            className="relative inline-block"
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image
                src={profile.image}
                alt={`Profile image ${index + 1} of workers at Fika`}
                className="rounded-full border-[0.35rem] shadow-xl"
                width={137}
              />
            </motion.div>
            {selectedProfile === index && (
              <div className="absolute z-20">
                <SpeechBubble>
                  <p className="text-xs">{profile.text}</p>
                </SpeechBubble>
              </div>
            )}
          </div>
        ))}
        <p className="mt-10">
          Lorem ipsum dolor sit aentium amet tempore culpa saepe dolorum
          dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Velit in laboriosam explicabo repellat sunt accusantium laborum
          voluptatibus, odio harum, reiciendis hic, labore autem earum veniam
          modi repudiandae vitae dolorum! Perspiciatis..
        </p>
      </div>
    </section>
  );
}

export default About;
