"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import "../styles/navbar.scss";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.navbar__mobile-menu') && !target.closest('.navbar__mobile-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent body scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/courses", label: "Courses" },
    { href: "/blog", label: "Blog" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          {/* Mobile Menu Button */}
          <button 
            className="navbar__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                <Link href={link.href} className="main-font navbar__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="navbar__auth">
            <a href="#" className="main-font navbar__btn navbar__btn--login">
              Login
            </a>
            <a href="#" className="main-font navbar__btn navbar__btn--signup">
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div 
          className={`navbar__mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Side Menu */}
        <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {/* Mobile Menu Header */}
          <div className="navbar__mobile-menu-header">
            <div className="navbar__mobile-logo">
              <Image
                src="/assets/skilldesk-logo.png"
                width={120}
                height={40}
                alt="SkillDesk Logo"
              />
            </div>
            <button 
              className="navbar__mobile-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <ul className="navbar__mobile-menu-list">
            {navLinks.map((link, index) => (
              <li key={index} className="navbar__item">
                <Link 
                  href={link.href} 
                  className="main-font navbar__link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="navbar__mobile-auth">
            <a 
              href="#" 
              className="main-font navbar__btn navbar__btn--login"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </a>
            <a 
              href="#" 
              className="main-font navbar__btn navbar__btn--signup"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
