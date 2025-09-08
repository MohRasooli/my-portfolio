import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const mobileMenu = useRef(null);

  function handleMenuClose(e) {
    if (isNavOpen && !mobileMenu.current.contains(e.target)) {
      setIsNavOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleMenuClose);
    return () => {
      document.removeEventListener("click", handleMenuClose);
    };
  }, [isNavOpen]);

  function handleNav() {
    setIsNavOpen((prev) => !prev);
  }

  function handleLinkClick() {
    setIsNavOpen(false);
  }

  return (
    <nav>
      <div className="desktop-nav">
        <ul>
          <li>
            <a href="#skills" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li className="desktop-nav-projects">
            {" "}
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            {" "}
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-nav">
        <button ref={mobileMenu} className="hamburger-menu" onClick={handleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isNavOpen && (
          <div className="menu">
            <a href="#skills" onClick={handleLinkClick}>
              Skills
            </a>
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>

            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
