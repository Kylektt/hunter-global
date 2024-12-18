import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-bold">HunterGlobal</h3>
            <p className="text-sm text-gray-300">
              Connecting businesses across global markets with strategic trading solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <p className="text-sm text-gray-300">
              Victoria, Australia
              <br />
              ABN 77 662 501 920
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} HunterGlobal Australia Pty Ltd | ABN 77 662 501 920</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;