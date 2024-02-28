"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";
import ContactLink from "./ContactLink";
import { Icon } from "@iconify/react";

function Contact() {
  const { ref } = useSectionInView("CONTACT");

  return (
    <section ref={ref} id="contact" className="scroll-mt-28 text-white">
      <SectionHeading headingText1="get in " headingText2="touch" />
      <p className="text-lg text-center mb-10">
        How can we help you? We would love to hear from you:
      </p>

      <div className="flex justify-center gap-20 flex-wrap">
        <div className="flex flex-col items-center">
          <p className="text-lg mb-5 font-semibold">Talk to us now!</p>
          <ContactLink
            icon="ph:phone-thin"
            text="+46 023093028"
            href="tel:+46023093028"
          />

          <ContactLink
            icon="iconamoon:email-thin"
            text="bw@email.com"
            href="mailto:biancawikberg99@yahoo.com"
          />

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
              target="_blank"
              rel="noopener"
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
