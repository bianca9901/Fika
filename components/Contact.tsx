"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { Icon } from "@iconify/react";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";
import { motion } from "framer-motion";

function Contact() {
  const { ref } = useSectionInView("CONTACT");

  const buttonStyles =
    "mt-2 w-full bg-sky-500 dark:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 py-1 px-6 rounded shadow-md flex justify-center gap-2";

    const scaleVariants = {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
    };

  return (
    <section ref={ref} id="contact" className="scroll-mt-28 text-white">
      <SectionHeading headingText1="get in " headingText2="touch" />
      <p className="text-lg text-center mb-10">
        How can we help you? We would love to hear from you:
      </p>

      <div className="flex justify-center gap-20 flex-wrap">
        <div className="flex flex-col items-center">
          <p className="text-lg mb-5 font-semibold">Talk to us now!</p>
          <motion.button className={buttonStyles}
            variants={scaleVariants}
            whileHover="whileHover"
            whileTap="whileTap">
            <Icon
              icon="ph:phone-thin"
              className="md:w-[2rem] md:h-[2rem] w-[1rem] h-[1rem]"
            />
            <span>+46 023093028</span>
          </motion.button>
          <motion.button className={buttonStyles}
            variants={scaleVariants}
            whileHover="whileHover"
            whileTap="whileTap">
            <Icon
              icon="iconamoon:email-thin"
              className="md:w-[2rem] md:h-[2rem] w-[1rem] h-[1rem]"
            />
            <span>bw@email.com</span>
          </motion.button>
          <div className="flex justify-center mt-8">
            <SocialMediaIcons iconClassName="w-8 md:w-[2rem] h-auto mr-4 ml-4 mt-2" />
          </div>
        </div>

        <div>
          <p className="text-lg mb-5 font-semibold text-center">
            Come get a Fika!
          </p>
          <p>Tideliusgatan 33</p>
          <p>118 69</p>
          <p>Stockholm</p>
          <p>Sweden</p>
          <div className="flex items-center mt-8">
            <Icon
              icon="ph:map-pin-thin"
              className="w-8 md:w-[2rem] h-auto mt-2"
            />
            <Link
              href="https://maps.app.goo.gl/v3XE3acKRADmDLxp7"
              className="text-white hover:underline cursor-pointer"
            >
              Open in Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
