import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  {
    id: 1,
    title: "Project Idea",
    description: "Phasellus urna felis, vehicula a ultricie vulp utate ut ultricies.",
    gradient: "linear-gradient(744deg, #8B0000, #B22222 60%, #FF4500)", // Rich Red
  },
  {
    id: 2,
    title: "Finding Inspiration",
    description: "Phasellus urna felis, vehicula a ultricie vulp utate ut ultricies.",
    gradient: "linear-gradient(744deg, #FFD700, #FFC107 60%, #FF8F00)", // Royal Yellow
  },
  {
    id: 3,
    title: "Product Creation",
    description: "Phasellus urna felis, vehicula a ultricie vulp utate ut ultricies.",
    gradient: "linear-gradient(744deg, #006400, #228B22 60%, #32CD32)", // Deep Green
  },
  {
    id: 4,
    title: "Edits Work with Client",
    description: "Phasellus urna felis, vehicula a ultricie vulp utate ut ultricies.",
    gradient: "linear-gradient(744deg, #00008B, #1E90FF 60%, #00BFFF)", // Royal Blue
  },
];

const StepsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 min-h-screen ">
      {/* Header with Framer Motion */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
          Powering 365 Productivity
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our Process, Explained In 4 Simple Steps
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12">
          {steps.map((step, index) => {
            const animationType = index % 2 === 0 ? 'fade-right' : 'fade-left';

            return (
              <motion.div
                key={index}
                data-aos={animationType}
                className="e-card playing relative w-[400px] h-[400px] bg-transparent shadow-2xl rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105"
              >
                {/* Waves */}
                <div
                  className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] rounded-[40%]"
                  style={{ background: step.gradient }}
                ></div>
                <div
                  className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] rounded-[40%]"
                  style={{ background: step.gradient }}
                ></div>
                <div
                  className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] rounded-[40%]"
                  style={{ background: step.gradient }}
                ></div>

                {/* Step Number */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 border-2 border-white text-white font-bold text-xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-10">
                  {step.id}
                </div>

                {/* Card Content */}
                <div className="infotop absolute top-36 left-0 right-0 text-center text-white px-6">
                  <h3 className="text-4xl font-semibold mb-8">{step.title}</h3>
                  <p className="text-xl p-2 font-light">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Wave Animation */}
      <style jsx>{`
        .wave {
          animation: wave 55s infinite linear;
        }

        .playing .wave {
          animation: wave 3000ms infinite linear;
        }

        .wave:nth-child(2) {
          animation-duration: 50s;
        }

        .playing .wave:nth-child(2) {
          animation-duration: 4000ms;
        }

        .wave:nth-child(3) {
          animation-duration: 45s;
        }

        .playing .wave:nth-child(3) {
          animation-duration: 5000ms;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default StepsSection;
