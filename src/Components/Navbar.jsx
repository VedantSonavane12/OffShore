// Components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const navLinks = [
    { label: "Architecture", href: "#service1" },
    { label: "Interior ", href: "#service2" },
    { label: "BIM ", href: "#service3" },
    { label: "3DVisualization ", href: "#service4" },
    { label: "IT ", href: "#service5" },
    { label: "Marketing ", href: "#service5" },

  ];
  const moreLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Project", href: "#project" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full py-2 text-white shadow-md">
      {/* Background Waves */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/waves.svg')] bg-no-repeat bg-cover bg-center animate-wave" />
        </div>
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-3 md:py-2">
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-6" data-aos="fade-right">
          <div className="text-2xl font-bold">OffShore365</div>
          <ul className="hidden md:flex gap-8 text-sm">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Schedule Button + Toggle (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4" data-aos="fade-left">
          <button className="bg-white/30 text-sm border border-white text-white px-4 py-2 rounded-md  hover:bg-blue-500 transition">
            Schedule a Meet
          </button>
          <div
            onClick={() => setMoreOpen(!moreOpen)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border border-white cursor-pointer transition ${moreOpen ? "bg-white text-black" : ""
              }`}
          >
            ⓘ
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-20" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="md:hidden bg-black/90 text-white p-6 fixed top-0 right-0 h-full w-3/4 z-50"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-bold">Menu</div>
            <X size={24} onClick={() => setMobileOpen(false)} className="cursor-pointer" />
          </div>
          <ul className="space-y-6 text-lg">
            {navLinks.map((link, idx) => (
              <li key={idx} className="hover:text-gray-300 cursor-pointer">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <hr className="my-4 border-white/30" />
            <p className="font-semibold">More Pages</p>
            {moreLinks.map((link, idx) => (
              <li key={idx} className="hover:text-gray-300 cursor-pointer">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* More Dropdown (Desktop) */}
      {moreOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-6 mt-2 z-40"
        >
          <div className="bg-white text-black p-6 rounded-2xl shadow-2xl w-64">
            <ul className="space-y-2">
              {moreLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="hover:bg-gray-100 px-4 py-2 rounded cursor-pointer"
                >
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;

// Add this CSS to your global stylesheet (e.g. index.css or a Tailwind config plugin):
/*

*/