import { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header({ isDark, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <a href="#home" onClick={closeMenu}>
          <span id="span-header">Ken Castillo</span>
        </a>
      </div>

      <div
        id="mobile-nav"
        className={isMenuOpen ? "header-right mobile-open" : "header-right"}
      >
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#aboutme" onClick={closeMenu}>About Me</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? (
            <LightModeIcon className="dark-mode-icon" />
          ) : (
            <DarkModeIcon className="dark-mode-icon" />
          )}
        </button>
      </div>

      <button
        type="button"
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav"
      >
        {isMenuOpen ? (
          <CloseIcon className="hamburger-menu-icon" />
        ) : (
          <MenuIcon className="hamburger-menu-icon" />
        )}
      </button>
    </header>
  );
}

export default Header;