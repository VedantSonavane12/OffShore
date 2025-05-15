"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"

const steps = [
  {
    id: 1,
    title: "Project Idea",
    description: "Phasellus urna felis, vehicula a ultricie vulp utate ut ultricies.",
    gradient: "linear-gradient(744deg, #006400, #228B22 60%, #32CD32)", // Green
  },
  {
    id: 2,
    title: "Finding Inspiration",
    description: "Phasellus urna felis, vehicula a ultricie vulp utate ut ultricies.",
    gradient: "linear-gradient(744deg, #FFD700, #FFC107 60%, #FF8F00)", // Yellow
  },
  {
    id: 3,
    title: "Product Creation",
    description: "Phasellus urna felis, vehicula a ultricie vulp utate ut ultricies.",
    gradient: "linear-gradient(744deg, #00008B, #1E90FF 60%, #00BFFF)", // Blue
  },
  {
    id: 4,
    title: "Edits Work with Client",
    description: "Phasellus urna felis, vehicula a ultricie vulp utate ut ultricies.",
    gradient: "linear-gradient(744deg, #8B0000, #B22222 60%, #FF4500)", // Red
  },
]

const StepsSection = () => {
  const [activeGradientIndex, setActiveGradientIndex] = useState(0)
  const [hoveredGradient, setHoveredGradient] = useState("")
  const intervalRef = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 1000 })

    // Start the interval for auto-changing cards
    startInterval()

    return () => clearInterval(intervalRef.current)
  }, [])

  const startInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveGradientIndex((prevIndex) => (prevIndex + 1) % steps.length)
    }, 5000) // Change gradient every 5 seconds
  }

  const handleDotClick = (index) => {
    setActiveGradientIndex(index)
    // Reset the interval when manually changing
    startInterval()
  }

  const activeGradient = hoveredGradient || steps[activeGradientIndex].gradient

  return (
    <section
      className="py-20 min-h-screen transition-all duration-1000 text-white relative overflow-hidden"
      style={{ background: activeGradient }}
    >
      {/* Section Background Waves */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`bg-wave-${i}`}
          className={`section-wave absolute w-[100%] h-[100%] opacity-30 left-[-50%] top-[-50%] rounded-[40%]`}
          style={{
            background: activeGradient,
            animationDelay: `${i * 2}s`,
            animationDuration: `${15 + i * 5}s`,
          }}
        />
      ))}

      {/* Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Powering 365 Productivity</h1>
        <p className="text-lg max-w-2xl mx-auto">Our Process, Explained In 4 Simple Steps</p>
      </motion.div>

      {/* Cards */}
      <div className="mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-12">
          {steps.map((step, index) => {
            const isActive = activeGradientIndex === index
            const animationType = index % 2 === 0 ? "fade-right" : "fade-left"

            return (
              <motion.div
                key={index}
              
                className={`group e-card playing relative w-[300px] h-[400px] bg-transparent shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 ${
                  isActive ? "scale-105 shadow-white/30 shadow-lg z-20" : "hover:scale-105 z-10"
                }`}
                onMouseEnter={() => setHoveredGradient(step.gradient)}
                onMouseLeave={() => setHoveredGradient("")}
                onClick={() => handleDotClick(index)}
                style={{
                  border: isActive ? "2px solid white" : "2px solid transparent",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`wave absolute w-[540px] h-[700px] opacity-60 left-0 ${
                      i === 0 ? "top-0 -mt-[70%]" : "top-[210px]"
                    } -ml-[50%] rounded-[40%]`}
                    style={{ background: step.gradient }}
                  />
                ))}

                {/* Step Number */}
                <div className="absolute group-hover:scale-110 top-20 left-1/2 transform -translate-x-1/2 border-2 border-white text-white font-bold text-xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-10">
                  {step.id}
                </div>

                {/* Card Content */}
                <div className="infotop absolute top-36 left-0 right-0 text-center text-white px-6">
                  <h3 className="text-4xl font-semibold mb-8 transition-transform duration-300 group-hover:scale-110">
                    {step.title}
                  </h3>
                  <p className="text-xl p-2 font-light transition-transform duration-300 group-hover:scale-110">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Liquid Dots Navigation */}
      <div className="flex justify-center mt-16 relative z-10" data-aos="fade-up">
        <div className="flex space-x-4">
          {steps.map((step, index) => {
            const isActive = activeGradientIndex === index
            return (
              <button
                key={`dot-${index}`}
                onClick={() => handleDotClick(index)}
                className="relative focus:outline-none group"
                aria-label={`Go to step ${step.id}: ${step.title}`}
              >
                <div
                  className={`liquid-dot w-3 h-3 border border-white rounded-full transition-all duration-500 flex items-center justify-center ${
                    isActive ? "scale-125" : "scale-100 opacity-70 hover:opacity-100"
                  }`}
                  style={{ background: step.gradient }}
                >
                  {/* Liquid Bubble Effect */}
                  <div className={`absolute inset-0 rounded-full overflow-hidden ${isActive ? "animate-pulse" : ""}`}>
                    <div
                      className="liquid-bubble absolute w-5 h-5 rounded-full"
                      style={{ background: step.gradient }}
                    />
                  </div>

                  {/* Dot Number */}
              
                </div>

               
              </button>
            )
          })}
        </div>
      </div>

      {/* Wave and Liquid Animations */}
      <style jsx>{`
        .wave {
          animation: wave 155s infinite linear;
          pointer-events: none;
        }

        .section-wave {
          animation: wave 30s infinite linear;
          pointer-events: none;
        }

        .playing .wave {
          animation: wave 3000ms infinite linear;
        }

        .wave:nth-child(2) {
          animation-duration: 100s;
        }

        .playing .wave:nth-child(2) {
          animation-duration: 8000ms;
        }

        .wave:nth-child(3) {
          animation-duration: 145s;
        }

        .playing .wave:nth-child(3) {
          animation-duration: 10000ms;
        }

        .group:hover .wave {
          animation-play-state: paused;
        }

        .liquid-bubble {
          animation: liquidBubble 8s infinite ease-in-out;
          transform-origin: center;
        }

        .liquid-dot:hover .liquid-bubble {
          animation-duration: 3s;
        }

        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes liquidBubble {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 60% 30% 60% / 40% 30% 70% 50%;
          }
          75% {
            border-radius: 40% 60% 70% 30% / 60% 40% 30% 60%;
          }
        }
      `}</style>
    </section>
  )
}

export default StepsSection
