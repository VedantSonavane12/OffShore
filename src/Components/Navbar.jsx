import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Contact Me', href: '#' },
    { label: 'Team', href: '#' },
  ];

  const dropdownLinks = [
    { label: 'Integrations', href: '#' },
    { label: 'More', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 font-sans">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo and Nav Links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <a
              href="#"
              className="text-2xl font-semibold text-gray-900"
              data-aos="fade-left"
            >
              OffShore365
            </a>
            {/* Nav Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out group"
                  data-aos="fade-down"
                  data-aos-delay={index * 100}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Schedule Button and Dropdown Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Schedule a Meeting Button */}
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300 ease-in-out"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Schedule a Meeting
            </a>
            {/* Dropdown Toggle with Aesthetic Icon */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:text-blue-600 p-3 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
                aria-label="Toggle dropdown"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-90' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="6" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="18" cy="12" shut r="2" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 bg-white/80 backdrop-blur-md rounded-xl shadow-xl py-3 z-10 ring-1 ring-black/5 transform origin-top-right animate-dropdown"
                  data-aos="zoom-in"
                  data-aos-duration="400"
                >
                  {dropdownLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md mx-2 transition duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
              data-aos="fade-left"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-white shadow-sm"
          data-aos="fade-down"
          data-aos-duration="400"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Nav Links in Mobile */}
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 group"
                onClick={toggleMobileMenu}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            {/* Dropdown in Mobile */}
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                <span>More</span>
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-90' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="6" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="18" cy="12" r="2" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-1" data-aos="fade-down" data-aos-duration="400">
                  {dropdownLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* Schedule a Meeting Button */}
            <a
              href="#"
              className="block bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 text-center"
              onClick={toggleMobileMenu}
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes dropdown {
          0% {
            transform: scaleY(0);
            opacity: 0;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        .animate-dropdown {
          animation: dropdown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;