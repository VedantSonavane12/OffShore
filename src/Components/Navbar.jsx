import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope, FaCogs, FaPuzzlePiece, FaUsers, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="flex justify-between items-center px-4 md:px-20 py-6 shadow-md fixed w-full z-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, #60A5FA, #2563EB),
            radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.2) 0%, transparent 60%)
          `,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'contrast(1.2) brightness(1.1)',
          transition: 'all 0.3s ease-in-out', // Adding transition to navbar
        }}
        data-aos="fade-down"
      >
        {/* Left Side Logo */}
        <div className="text-2xl font-bold text-white" data-aos="fade-right">
          OffShore365
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {[
            { label: 'Home', icon: <FaHome /> },
            { label: 'About', icon: <FaUserAlt /> },
            { label: 'Projects', icon: <FaProjectDiagram /> },
            { label: 'Contact Me', icon: <FaEnvelope /> },
            { label: 'Services', icon: <FaCogs /> },
            { label: 'Integrations', icon: <FaPuzzlePiece /> },
            { label: 'Team', icon: <FaUsers /> },
          ].map((item, index) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center space-x-2 text-white hover:text-black text-lg"
              data-aos="fade-down"
              data-aos-delay={index * 100}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <button
          className="hidden md:flex bg-black text-white px-6 py-3 rounded-full items-center text-lg hover:bg-gray-800 transition"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          Schedule a Meeting <span className="ml-3">📅</span>
        </button>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-white hover:text-black text-2xl"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#F5F0E9] shadow-lg z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        style={{
          width: '220px', // Slimming down the sidebar
          borderTopLeftRadius: '10px', // Rounded corners for smooth design
        }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-gray-700 hover:text-black text-2xl"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="flex flex-col space-y-4 px-6">
          {[
            { label: 'Home', icon: <FaHome /> },
            { label: 'About', icon: <FaUserAlt /> },
            { label: 'Projects', icon: <FaProjectDiagram /> },
            { label: 'Contact Me', icon: <FaEnvelope /> },
            { label: 'Services', icon: <FaCogs /> },
            { label: 'Integrations', icon: <FaPuzzlePiece /> },
            { label: 'Team', icon: <FaUsers /> },
          ].map((item, index) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center space-x-2 text-gray-700 hover:text-black text-lg"
              data-aos="fade-left"
              data-aos-delay={index * 100}
              onClick={toggleSidebar}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Sidebar Button */}
        <div className="px-6 mt-6">
          <button
            className="w-full bg-black text-white px-6 py-3 rounded-full flex justify-center items-center text-lg hover:bg-gray-800 transition"
            data-aos="fade-up"
            data-aos-delay="500"
            onClick={toggleSidebar}
          >
            Schedule a Meeting <span className="ml-3">📅</span>
          </button>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Navbar;
