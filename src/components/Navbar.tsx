"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import "../styles/navbar.scss";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#", label: "Courses" },
    { href: "#", label: "Contact" }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        {sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar} />}
        
        <div className="navbar__container">
          {/* Mobile Menu Button */}
          <button 
            className="navbar__mobile-toggle"
            onClick={() => setSidebar(!sidebar)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Logo */}
          <div className="navbar__logo">
            <Link href="/">
              <Image
                src="/assets/skilldesk-logo.png"
                width={140}
                height={50}
                alt="SkillDesk Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="navbar__menu">
            {navLinks.map((link, index) => (
              <li key={index} className="navbar__item">
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="navbar__auth">
            <a href="#" className="navbar__btn navbar__btn--login">
              Login
            </a>
            <a href="#" className="navbar__btn navbar__btn--signup">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
