import "./globals.css";
import { Montserrat } from "next/font/google";
import HeroP from "@/components/HeroP";
import ContainerMaxWidth from "@/components/ContainerMaxWidth";
import NavBottom from "@/components/NavBottom";
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "200",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-gray-50  relative
         h-[5000] `}
      >
        <div className="bg-blue-100 absolute top-0 -z-10 right-[11rem] h-full
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-yellow-90 absolute top-0 -z-10 left-[-35rem] h-full
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <Header />
        <Hero />
        <HeroP />
        <ContainerMaxWidth>
          {children}
          <Menu />
        </ContainerMaxWidth>
        <NavBottom />
      </body>
    </html>
  );
}
