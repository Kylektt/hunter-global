'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { CiPhone } from "react-icons/ci";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Who are we?" },
    { href: "/services", label: "Services" },
    { href: "/clients", label: "Clients" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-4xl font-bold text-blue-900">
          HunterGlobal
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-red-600 transition-colors duration-200 text-blue-900 text-xl"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 flex items-center gap-x-2 text-xl"
          >
            <CiPhone /> Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="focus:outline-none md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-blue-900"
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
      </div>

      {/* Mobile Links */}
      <div
        className={`${isMobileMenuOpen ? 'flex' : 'hidden'
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
        {/* Mobile Contact Us Button */}
        <Link
          href="/contact"
          className="block bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Nav;