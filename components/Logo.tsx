"use client";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import fikaLogo from "@/public/logo-fika.png";
import Image from "next/image";

function Logo() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    if (pathname === '/order') {
      router.push('/');
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <Image
      onClick={handleLogoClick}
      src={fikaLogo}
      alt="Fika Logo"
      className="mr-11 ml-4"
      width={80}
      height={80}
      quality={70}
    />
  );
}

export default Logo;
