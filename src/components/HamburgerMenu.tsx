import React from "react";
import NavLink from "./NavLink";

interface HamburgerMenuProps {
  navLinks: { to: string; text: string }[]; // Define the props type for nav links
  isOpen: boolean; // Control whether the menu is open
  onClose: () => void; // Function to close the menu
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  navLinks,
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white pl-5 pr-36 pt-2 transform 
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-500 md:hidden`}
    >
      {/* Close button for mobile */}
      <i
        className="fa fa-window-close text-4xl mt-5 mb-10 cursor-pointer"
        onClick={onClose}
      ></i>

      {/* Nav Links */}
      <ul className="list-none">
        {navLinks.map((link) => (
          <li key={link.to} className="mb-6">
            <NavLink
              to={link.to}
              text={link.text}
              onClick={onClose}
              isTop={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
