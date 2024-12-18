'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/clients", label: "Clients" },
    { href: "/products", label: "Products" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="bg-blue-900 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          HunterGlobal
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="focus:outline-none md:hidden" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="h-6 w-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden space-x-4 text-white md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-red-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Links */}
      <div 
        className={`${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } flex-col space-y-4 bg-blue-900 px-4 py-4 text-white md:hidden`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block hover:text-red-600 transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;