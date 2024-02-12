import NavTop from "./NavTop";
import Logo from "./Logo";
import Cart from "./Cart";

export default function Header() {
    return (
      <header
      className="z-50 fixed top-0 left-0 right-0 py-4 sm:h-[10.25rem] flex
      justify-center bg-blue-50 bg-opacity-90">
        <div className="flex items-center">
          <Logo />
          <NavTop />
          <Cart />
        </div>
      </header>
    );
  }
