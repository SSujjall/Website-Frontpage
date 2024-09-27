// Navbar.tsx
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome styles
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const toggleMenu = () => setNavOpen(!navOpen);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsTop(currentScrollPos <= 50); // Less than 50px from the top to show navbar styles
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed rounded-xl top-0 left-0 w-full flex items-center justify-between p-4 pl-10 pr-10 z-50 transition-colors duration-300 ${
        isTop ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      {/* Logo */}
      <Link smooth={true} to="home">
        <img src="/images/Logo.png" className="w-20" alt="Logo" />
      </Link>

      {/* Hamburger icon for mobile */}
      <i
        className={`fa fa-bars text-2xl md:hidden cursor-pointer transition-colors duration-300 ${
          isTop ? "text-white" : "text-black"
        }`}
        onClick={toggleMenu}
      ></i>

      {/* Links */}
      <div
        className={`fixed top-0 right-0 h-full bg-white p-4 transform ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 md:static md:bg-transparent md:transform-none md:h-auto md:p-0`}
      >
        {/* Close button for mobile */}
        <i
          className="fa fa-window-close md:hidden text-xl cursor-pointer"
          onClick={toggleMenu}
        ></i>

        {/* Nav Links */}
        <ul className="md:flex md:space-x-8">
          <NavLink to="home" text="Home" onClick={toggleMenu} isTop={isTop} />
          <NavLink
            to="aboutUs"
            text="About Us"
            onClick={toggleMenu}
            isTop={isTop}
          />
          <NavLink
            to="services"
            text="Services"
            onClick={toggleMenu}
            isTop={isTop}
          />
          <NavLink
            to="contactUs"
            text="Contact"
            onClick={toggleMenu}
            isTop={isTop}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
