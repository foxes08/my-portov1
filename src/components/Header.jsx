import { useTheme } from "../context/ThemeContext";
import PillNav from "./ui/PillNav";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Header.css";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="floating-nav">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
        
        <PillNav items={navItems} onNavClick={handleNavClick} />
      </nav>
    </header>
  );
};

export default Header;
