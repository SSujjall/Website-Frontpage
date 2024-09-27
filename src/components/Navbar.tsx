import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import HamburgerMenu from "./HamburgerMenu"; // Import the new component
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

  // Define an array of nav links
  const navLinks = [
    { to: "home", text: "Home" },
    { to: "aboutUs", text: "About Us" },
    { to: "services", text: "Services" },
    { to: "contactUs", text: "Contact" },
  ];

  return (
    <nav
      className={`fixed rounded-xl h-20 top-2 left-0 right-0 mx-auto w-11/12 flex
        items-center justify-between p-4 pl-10 pr-10 z-50 transition-colors duration-300 
        ${isTop ? "bg-transparent" : "bg-white shadow-md"}`}
    >
      {/* Logo */}
      <Link smooth={true} to="home" className="w-20 p-4">
        <img src="/Logo.svg" className="cursor-pointer" alt="Logo" />
      </Link>

      {/* Hamburger icon for mobile */}
      <i
        className={`fa fa-bars text-3xl md:hidden cursor-pointer transition-colors duration-300 ${isTop ? "text-white" : "text-black"
          }`}
        onClick={toggleMenu}
      ></i>

      {/* Links for larger screens */}
      <div className="hidden md:flex  md:space-x-8">
        <ul className="md:flex md:space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              text={link.text}
              isTop={isTop}
            />
          ))}
        </ul>
      </div>

      {/* Hamburger Menu */}
      <HamburgerMenu
        navLinks={navLinks} // Pass the nav links to the hamburger menu
        isOpen={navOpen} // Control the open state
        onClose={toggleMenu} // Close function
      />
    </nav>
  );
};

export default Navbar;
