// src/components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50" data-aos="zoom-in">
      <div className="text-center">
        <h2 className="text-6xl sm:text-8xl font-extrabold text-blue-800 tracking-wide mb-4">
          Offshore365 ∞
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Empowering AEC transformation with infinite scalability, precision, and offshore efficiency.
        </p>
      </div>
    </div>
  );
};

export default Loader;
