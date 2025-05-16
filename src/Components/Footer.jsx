import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import footerBg from '../assets/footer.png'; // Importing background image from assets folder

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100, // Trigger animation when element is 100px from viewport
    });
  }, []);

  return (
    <footer
      className="relative bg-fixed bg-cover bg-center text-white py-16"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div data-aos="fade-right"> {/* Changed to slide in from left */}
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a modern company dedicated to innovation and excellence, delivering top-notch services to our clients worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-right" data-aos-delay="100"> {/* Changed to slide in from left */}
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="/home"
                className="relative hover:text-gray-300 transition after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="relative hover:text-gray-300 transition after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="relative hover:text-gray-300 transition after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="relative hover:text-gray-300 transition after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-left" data-aos-delay="200"> {/* Changed to slide in from right */}
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="text-sm mb-2">123 Minimal Street, Suite 456</p>
          <p className="text-sm mb-2">City, Country 78910</p>
          <p className="text-sm mb-2">Email: contact@company.com</p>
          <p className="text-sm">Phone: +1 (234) 567-890</p>
        </div>

        {/* Newsletter Subscription */}
        <div data-aos="fade-left" data-aos-delay="300"> {/* Changed to slide in from right */}
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">Join our newsletter for updates and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-white/30 text-white px-4 py-2 rounded-r-md hover:bg-white/50 transition">
              Subscribe
            </button>
          </div>
          <a
            href="/schedule"
            className="inline-block mt-4 px-4 py-2 bg-white/30 border border-white text-white text-sm rounded-md hover:bg-gray-200 transition"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Schedule a Meet
          </a>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="relative container mx-auto px-6 mt-12 flex justify-center space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
          <FaFacebookF className="text-2xl hover:text-gray-300 transition" />
        </a>
      
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="200">
          <FaInstagram className="text-2xl hover:text-gray-300 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="300">
          <FaLinkedinIn className="text-2xl hover:text-gray-300 transition" />
        </a>
      </div>

      {/* Copyright */}
      <div className="relative container mx-auto px-6 mt-8 text-center">
        <p className="text-sm" data-aos="fade-up">
          © {new Date().getFullYear()} Offshore365. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;