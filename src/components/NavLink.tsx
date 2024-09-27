// NavLink.tsx
import { Link } from "react-scroll";

interface NavLinkProps {
  to: string;
  text: string;
  onClick?: () => void;
  isTop: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, text, onClick, isTop }) => {
  return (
    <li>
      <Link
        to={to}
        smooth={true}
        duration={500}
        spy={true}
        offset={-88}
        onClick={onClick}
        className={`cursor-pointer text-3xl transition-colors ${isTop ? "text-black" : "text-black"
          } hover:text-cyan-600`}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
