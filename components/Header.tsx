import NavTop from "./NavTop";
import Logo from "./Logo";
import Cart from "./Cart";

export default function Header() {
  return (
    <header className="z-50 fixed top-0 left-0 right-0 py-4 flex
     justify-center bg-sky-50 bg-opacity-90 dark:bg-black">
      <div className="flex items-center w-full max-w-screen-xl px-6">
        <Logo />
        <div className="flex-grow" />
        <NavTop />
        <div className="flex-grow" />
        <Cart />
      </div>
    </header>
  );
}
