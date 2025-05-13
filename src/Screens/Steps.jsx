import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    id: 1,
    title: "Understand Business Needs",
    description: "Ensuring solutions that align perfectly for your unique project needs.",
    color: "bg-yellow-500",
    position: "top-[20px] left-50 transform -translate-x-1/2",
  },
  {
    id: 2,
    title: "Collaborate Strategically",
    description: "Our team works closely with you for aligned execution.",
    color: "bg-blue-500",
    position: "top-50 right-[140px] transform -translate-y-1/2",
  },
  {
    id: 3,
    title: "Execute Efficiently",
    description: "Timely project delivery with process excellence.",
    color: "bg-red-500",
    position: "bottom-[20px] left-50 transform -translate-x-1/2",
  },
  {
    id: 4,
    title: "Drive Growth",
    description: "Unlock potential with strategic productivity.",
    color: "bg-green-500",
    position: "top-50 left-[200px] transform -translate-y-1/2",
  },
];

const StepsCircleLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-blue-600 flex items-center justify-center overflow-hidden">
      {/* Central Circle */}
      <div className="relative w-[400px] p-2 h-[400px] rounded-full border-2 border-white flex flex-col items-center justify-center text-white z-10">
        <h2 className="text-5xl font-semibold text-center">Powering 365 Productivity</h2>
        <p className="text-lg text-center mt-2 max-w-xs">Our Process, Explained In 4 Simple Steps</p>

        {/* Corner numbers */}
        {steps.map((step, index) => {
          const positions = [
            { top: "-20px", left: "50%", transform: "translateX(-50%)" }, // Top
            { top: "50%", right: "-20px", transform: "translateY(-50%)" }, // Right
            { bottom: "-20px", left: "50%", transform: "translateX(-50%)" }, // Bottom
            { top: "50%", left: "-20px", transform: "translateY(-50%)" }, // Left
          ];

          const posStyle = positions[index];
          return (
            <div
              key={index}
              className="absolute w-8 h-8  bg-blue-600 text-white font-bold flex items-center justify-center rounded-full border-2 border-white"
              style={{ ...posStyle, transform: posStyle.transform }}
            >
              {step.id}
            </div>
          );
        })}
      </div>

      {/* Step Cards */}
      {steps.map((step) => (
        <motion.div
          key={step.id}
          data-aos="fade-up"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`absolute ${step.position}  rounded-lg text-white p-4 shadow-lg ${step.color}`}
        >
          <h3 className="text-xl font-semibold">{step.title}</h3>
          <p className="text-sm mt-1">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StepsCircleLayout;
