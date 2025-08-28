'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link href="/" className="logo-link">
            <Image src="/assets/skilldesk-logo.png" alt="Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="navbar-links">
        <Link href="/" className="nav-link active">Home</Link>
        <Link href="/pricing" className="nav-link">Pricing</Link>
        <Link href="/faq" className="nav-link">FAQ</Link>
        <Link href="/contact" className="nav-link">Contact Us</Link>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="navbar-auth">
        <button className="auth-btn auth-btn-login">Log in</button>
        <button className="auth-btn auth-btn-signup">Sign Up</button>
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <Link href="/" className="mobile-nav-link active" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/pricing" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/faq" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </Link>
          <Link href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
        <div className="mobile-menu-auth">
          <button className="auth-btn auth-btn-login">Log in</button>
          <button className="auth-btn auth-btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
