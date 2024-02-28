import Menu from "@/components/Menu";
import HeroSection from "@/components/HeroSection";
import OpenTimes from "@/components/OpenTimes";
import About from "@/components/About";
import SectionDivider from "@/components/SectionDivider";
import ContainerMaxWidth from "@/components/ContainerMaxWidth";
import CustomShapeDividerBottom from "@/components/CustomShapeDividerBottom";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CustomShapeDividerBottom/>
      <ContainerMaxWidth>
      <SectionDivider />
      <Menu />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact/>
      <SectionDivider />
      </ContainerMaxWidth>
      <OpenTimes />
    </main>
  );
}
