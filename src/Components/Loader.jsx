// src/components/Loader.jsx
import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo.jpeg';

const Loader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 3000); // 3 seconds before hiding

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
        hide ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <img
        src={Logo}
        alt="Offshore365 Logo"
        className="w-full h-full object-contain animate-fadeInScale"
      />
    </div>
  );
};

export default Loader;
