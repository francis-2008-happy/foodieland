// src/components/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  House,
  CookingPot,
  Rss,
  Contact,
  BookUser,
  Menu,
  X,
} from "lucide-react";
import "../styles/Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header-container">
      {/* Logo */}
      <Link to="/">
        <img src="/foodieland logo.webp" alt="Site Logo" className="logo" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="nav-desktop">
        <ul className="nav-links">
          <li>
            <Link to="/">
              {" "}
              <House /> Home
            </Link>
          </li>
          <li>
            <Link to="/recipes">
              {" "}
              <CookingPot /> Recipes
            </Link>
          </li>
          <li>
            <Link to="/blog">
              {" "}
              <Rss /> Blog
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Contact /> Contact
            </Link>
          </li>
          <li>
            <Link to="/about">
              <BookUser /> About Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Social Icons Desktop */}
      <div className="social-icons nav-desktop">
        <a href="#" aria-label="Facebook">
          <Facebook />
        </a>
        <a href="#" aria-label="Twitter">
          <Twitter />
        </a>
        <a href="#" aria-label="Instagram">
          <Instagram />
        </a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <X size={28} className="icon-white" /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-overlay">
          <ul className="mobile-nav-links">
            <li>
              <Link to="/" onClick={toggleMenu}>
                {" "}
                <House /> Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" onClick={toggleMenu}>
                {" "}
                <CookingPot /> Recipes
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={toggleMenu}>
                {" "}
                <Rss /> Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                <Contact /> Contact
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                <BookUser /> About Us
              </Link>
            </li>
          </ul>
          <div className="mobile-social-icons">
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;



