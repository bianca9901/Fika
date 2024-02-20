import Menu from "@/components/Menu";
import HeroSection from "@/components/HeroSection";
import OpenTimes from "@/components/OpenTimes";
import About from "@/components/About";
import SectionDivider from "@/components/SectionDivider";
import ContainerMaxWidth from "@/components/ContainerMaxWidth";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContainerMaxWidth>
      <SectionDivider />
      <Menu />
      <SectionDivider />
      <About />
      <SectionDivider />
      </ContainerMaxWidth>
      <OpenTimes />
    </main>
  );
}
