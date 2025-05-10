import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = [
    { label: 'Architecture', href: '#' },
    { label: 'Interior', href: '#' },
    { label: 'BIM', href: '#' },
    { label: '3D Visualisation', href: '#' },
    { label: 'IT', href: '#' },
    { label: 'Marketing', href: '#' },
    { label: 'Admin', href: '#' },
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
    <nav
      className={`fixed z-50 top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
        isScrolled
          ? 'mt-4 bg-white backdrop-blur-md rounded-full  px-6  max-w-6xl shadow-lg'
          : 'w-full  bg-transparent'
      }`}
    >
      <div className="flex items-center px-6 p-6 justify-between  border-b border-white h-14">
        {/* Left Side: Logo and Nav Links */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <a
            href="#"
            className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'} tracking-wide`}
            data-aos="fade-left"
          >
            OffShore365
          </a>
          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative ${isScrolled ? 'text-blue-600' : 'text-white'} px-3 py-2 rounded-lg text-sm font-medium transition duration-300 ease-in-out group`}
                data-aos="fade-down"
                data-aos-delay={index * 100}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Schedule Button and Dropdown Toggle */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Schedule a Meeting Button (Hidden in Capsule Mode) */}
          {!isScrolled && (
            <a
              href="#"
              className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out shadow-md"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Schedule a Meeting
            </a>
          )}
          {/* Dropdown Toggle with Aesthetic Icon */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`${
                isScrolled
                  ? 'text-blue-600 bg-white/20 hover:bg-white/30'
                  : 'text-white bg-white/20 hover:bg-white/30'
              } p-2 rounded-full focus:outline-none transition duration-300 ease-in-out transform hover:scale-105`}
              aria-label="Toggle dropdown"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${
                  isDropdownOpen ? 'rotate-90' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-4 w-60 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl py-2 z-10 ring-1 ring-black/10 transform origin-top-right animate-dropdown"
                data-aos="zoom-in"
                data-aos-duration="400"
              >
                {dropdownLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 hover:text-blue-700 rounded-md mx-1 transition duration-200"
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
            className={`${isScrolled ? 'text-blue-600' : 'text-white'} hover:text-blue-200 focus:outline-none`}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden ${
            isScrolled
              ? 'bg-white backdrop-blur-md'
              : 'bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-lg'
          } rounded-b-2xl shadow-lg`}
          data-aos="fade-down"
          data-aos-duration="400"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Nav Links in Mobile */}
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative block px-3 py-2 rounded-md text-base font-medium ${
                  isScrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/20'
                } group`}
                onClick={toggleMobileMenu}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-1 ${
                    isScrolled ? 'bg-blue-600' : 'bg-white'
                  } transition-all duration-300 group-hover:w-full`}
                ></span>
              </a>
            ))}
            {/* Dropdown in Mobile */}
            <div>
              <button
                onClick={toggleDropdown}
                className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                  isScrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/20'
                }`}
              >
                <span>More</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-90' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  className="pl-4 space-y-1"
                  data-aos="fade-down"
                  data-aos-duration="400"
                >
                  {dropdownLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isScrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/20'
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* Schedule a Meeting Button (Hidden in Capsule Mode) */}
            {!isScrolled && (
              <a
                href="#"
                className="block bg-white text-blue-600 px-3 py-2 rounded-full text-base font-medium hover:bg-blue-100 text-center"
                onClick={toggleMobileMenu}
              >
                Schedule a Meeting
              </a>
            )}
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
        nav {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;