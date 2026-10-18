
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "" },
    { label: "About", href: "" },
    { label: "Education", href: "" },
    { label: "Skills", href: "" },
    { label: "Projects", href: "" },
    { label: "Gallery", href: "" },
    { label: "Contact", href: "" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo and brand */}
        <a
          href=""
          className="navbar-brand"
          aria-label="Portfolio home"
        >
          <span className="navbar-logo">V</span>
          <span className="navbar-brand-name">
            Vivek
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation links */}
        <nav
          id="navbar-menu"
          className={`navbar-menu ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
