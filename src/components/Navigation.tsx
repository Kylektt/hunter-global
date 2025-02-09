'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiPhone } from 'react-icons/ci';

interface Service {
  label: string;
  description: string;
  href: string;
}

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(false);
  const [isMobileServiceExpanded, setIsMobileServiceExpanded] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState<Service | null>(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServiceMenu = () => setExpandedService(!expandedService);

  const services: Service[] = [
    { label: 'LED Lighting', description: 'We provide an end-to-end solution for your commercial lighting needs.', href: '/services/led-lighting' },
    { label: 'Solar PV & Battery', description: 'Innovative solar PV and battery solutions tailored for your needs.', href: '/services/solar-pv' },
    { label: 'Sports Lighting', description: 'High-quality sports lighting for arenas and recreational areas.', href: '/services/sports-lighting' },
    { label: 'Energy Monitoring & Maintenance', description: 'Comprehensive energy monitoring and maintenance solutions.', href: '/services/energy-monitoring' },
    { label: 'Virtual Energy Network', description: 'Revolutionizing energy management with virtual energy solutions.', href: '/services/virtual-energy-network' },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Who are we?' },
    { href: '/services', label: 'Services', isExpandable: true },
    { href: '/clients', label: 'Clients' },
    { href: '/faq', label: 'FAQ' },
  ];

  useEffect(() => {
    const currentService = services.find(service => service.href === pathname);
    if (currentService) {
      setActiveSubNav(currentService);
    } else if (services.length > 0) {
      setActiveSubNav(services[0]);
    }
  }, [pathname]);

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-8xl justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-4xl font-bold text-blue-900 py-2 px-4">
          HunterGlobal
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-16 py-4">
          {navLinks.map((link) => (
            <div key={link.href} className="relative">
              <Link
                href={link.href}
                onClick={(e) => {
                  if (link.isExpandable) {
                    e.preventDefault();
                    toggleServiceMenu();
                  }
                }}
                className={`text-xl transition-colors duration-200 ${expandedService && link.isExpandable ? 'text-red-600' : 'text-blue-900'} hover:text-red-600`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Contact Us Button */}
        <div className="hidden lg:flex h-full">
          <Link
            href="/contact"
            className="bg-blue-900 text-white px-4 py-2 hover:bg-blue-700 transition-colors duration-200 flex items-center gap-x-2 text-xl h-full"
          >
            <CiPhone /> Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="focus:outline-none lg:hidden"
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


      {/* Dropdown for Services */}
      {expandedService && (
        <div className="bg-white border-t-2 border-blue-900 py-8">
          <div className="grid grid-cols-12 gap-0 max-w-7xl mx-auto">
            {/* Sub-navigation */}
            <div className="col-span-4 space-y-0 border-r">
              {services.map((service) => (
                <div key={service.href} className="border-b">
                  <button
                    onClick={() => setActiveSubNav(service)}
                    className={`block w-full text-left px-4 py-3 transition-all duration-200 hover:text-red-600 hover:scale-105 ${activeSubNav?.href === service.href
                      ? 'bg-gray-200 text-red-600'
                      : 'text-blue-900'
                      }`}
                  >
                    {service.label}
                  </button>
                </div>
              ))}
              <Link
                href="/services"
                className="block text-left px-4 py-3 text-blue-900 hover:text-red-600 hover:scale-105 transition-all duration-200"
              >
                All Services
              </Link>
            </div>

            {/* Content area */}
            <div className="col-span-8 bg-gray-200 p-6">
              {activeSubNav ? (
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900">{activeSubNav.label}</h3>
                  <p className="mt-4 text-blue-900">{activeSubNav.description}</p>
                  <Link
                    href={activeSubNav.href}
                    className="mt-4 inline-block bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200"
                  >
                    Learn More
                  </Link>
                </div>
              ) : (
                <p className="text-lg text-blue-900">Select a service to learn more.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Links */}
      <div
        className={`${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col space-y-4 bg-white px-4 py-4 text-blue-900 lg:hidden shadow-md`}
      >
        {navLinks.map((link) => (
          <div key={link.href} className="relative">
            <Link
              href={link.href}
              onClick={(e) => {
                if (link.isExpandable) {
                  e.preventDefault();
                  setIsMobileServiceExpanded(!isMobileServiceExpanded);
                } else {
                  setIsMobileMenuOpen(false);
                }
              }}
              className={`text-xl transition-colors duration-200 ${isMobileServiceExpanded && link.isExpandable ? 'text-red-600' : 'text-blue-900'} hover:text-red-600`}
            >
              {link.label}
            </Link>
          </div>
        ))}

        {/* Sub-Navigation for Mobile */}
        {isMobileServiceExpanded && (
          <div className="flex flex-col bg-gray-50 p-4 rounded-lg mt-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileServiceExpanded(false);
                }}
                className={`block px-4 py-2 transition-colors ${pathname === service.href ? 'text-red-600' : 'text-blue-900'} hover:text-red-600`}
              >
                {service.label}
              </Link>
            ))}
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-blue-900 hover:text-red-600 transition-colors"
            >
              All Services
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
