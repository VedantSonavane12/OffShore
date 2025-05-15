"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Clock({ value, className = "" }) {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [isAM, setIsAM] = useState(true)

  useEffect(() => {
    if (value) {
      const timeParts = value.match(/(\d+):(\d+)\s*(AM|PM)/)
      if (timeParts) {
        let hourValue = Number.parseInt(timeParts[1])
        const minuteValue = Number.parseInt(timeParts[2])
        const period = timeParts[3]

        setIsAM(period === "AM")

        // Convert to 24-hour format for calculations
        if (period === "PM" && hourValue < 12) hourValue += 12
        if (period === "AM" && hourValue === 12) hourValue = 0

        setHour(hourValue)
        setMinute(minuteValue)
      }
    }
  }, [value])

  // Calculate hand rotations
  const hourRotation = hour * 30 + minute * 0.5 // 30 degrees per hour + adjustment for minutes
  const minuteRotation = minute * 6 // 6 degrees per minute

  return (
    <div className={`relative ${className}`}>
      {/* Clock Face */}
      <div className="w-full h-full rounded-full border-4 border-gray-200 bg-white shadow-inner flex items-center justify-center">
        {/* Hour Markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-3 bg-gray-400"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-45%)`,
              transformOrigin: "bottom center",
              top: "5%",
              left: "calc(50% - 0.5px)",
            }}
          />
        ))}

        {/* Minute Markers */}
        {[...Array(60)].map((_, i) => {
          if (i % 5 !== 0) {
            // Skip positions where hour markers are
            return (
              <div
                key={i}
                className="absolute w-0.5 h-1.5 bg-gray-300"
                style={{
                  transform: `rotate(${i * 6}deg) translateY(-45%)`,
                  transformOrigin: "bottom center",
                  top: "5%",
                  left: "calc(50% - 0.25px)",
                }}
              />
            )
          }
          return null
        })}

        {/* AM/PM Indicator */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-2">
          <button
            className={`text-xs font-medium px-2 py-1 rounded-full ${isAM ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
            onClick={() => setIsAM(true)}
          >
            AM
          </button>
          <button
            className={`text-xs font-medium px-2 py-1 rounded-full ${!isAM ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
            onClick={() => setIsAM(false)}
          >
            PM
          </button>
        </div>

        {/* Digital Time Display */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-lg font-semibold text-gray-800">
          {value || "Select Time"}
        </div>

        {/* Hour Hand */}
        <motion.div
          className="absolute w-1 h-[25%] bg-black rounded-full origin-bottom"
          style={{
            transformOrigin: "bottom center",
            rotate: hourRotation,
            left: "calc(50% - 0.5px)",
          }}
          animate={{ rotate: hourRotation }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />

        {/* Minute Hand */}
        <motion.div
          className="absolute w-0.5 h-[40%] bg-blue-600 rounded-full origin-bottom"
          style={{
            transformOrigin: "bottom center",
            rotate: minuteRotation,
            left: "calc(50% - 0.25px)",
          }}
          animate={{ rotate: minuteRotation }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />

        {/* Center Dot */}
        <div className="absolute w-3 h-3 bg-blue-600 rounded-full" />
      </div>
    </div>
  )
}
