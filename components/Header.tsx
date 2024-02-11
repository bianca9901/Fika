import NavTop from "./NavTop";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="z-50 fixed top-0 left-1/2 transform -translate-x-1/2 py-4 sm:py-6 sm:h-[9.25rem] sm:w-[36rem] px-6 w-full flex items-center justify-between">
      <Logo />
      <NavTop />
    </header>
  );
}
