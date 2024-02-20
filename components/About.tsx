import Image from "next/image";
import { profileImages } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about-us">
      <SectionHeading
        headingText1="only "
        headingText2="true fika lovers work here"
      />
      <div className="flex items-center justify-center space-x-4 flex-wrap">
        {profileImages.map((profileImage, index) => (
          <Image
            key={index}
            src={profileImage}
            alt={`Profile image ${index + 1} of workers at Fika`}
            width={192}
            height={192}
            quality={95}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem]
            border-yellow-2 shadow-xl"
          />
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
