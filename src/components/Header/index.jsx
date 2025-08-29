import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 60;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header ref={headerRef}>
      <div href="/" onClick={() => scrollToSection("hero")} className="logo">
        Edoardo.
      </div>
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("experiences")}>
          Experiences
        </button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
      </div>
      <div className="social">
        <a href="https://www.linkedin.com/in/edoyang/" target="_blank">
          <img src="/icons/linkedin.svg" alt="linkedin icon" />
        </a>
        <a href="https://github.com/edoyang" target="_blank">
          <img src="/tech-stacks/github.svg" alt="github icon" />
        </a>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
