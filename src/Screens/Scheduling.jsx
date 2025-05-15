import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  { name: "Architecture", bgColor: "bg-red-500" },
  { name: "Interior Design", bgColor: "bg-yellow-500" },
  { name: "3D Visualization", bgColor: "bg-blue-500" },
  { name: "BIM Services", bgColor: "bg-green-500" },
  { name: "IT Services", bgColor: "bg-purple-500" },
  { name: "Admin Services", bgColor: "bg-pink-500" },
  { name: "Marketing", bgColor: "bg-gray-500" },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const employeeOptions = ["0-5", "5-20", "20-50", "50+"];

// Custom Clock Component
const MinimalClock = ({ value }) => {
  const [hourAngle, minuteAngle] = value
    ? [
        (parseInt(value.split(":")[0]) % 12) * 30 + parseInt(value.split(":")[1]) / 2,
        parseInt(value.split(":")[1]) * 6,
      ]
    : [0, 0];

  return (
    <motion.div
      className="relative w-40 h-40 rounded-full bg-gray-50 flex items-center justify-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute w-36 h-36 border-2 border-gray-200 rounded-full" />
      <motion.div
        className="absolute w-1 h-12 bg-blue-600 origin-bottom"
        style={{ transform: `rotate(${hourAngle}deg)` }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute w-1 h-16 bg-blue-400 origin-bottom"
        style={{ transform: `rotate(${minuteAngle}deg)` }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute w-3 h-3 bg-blue-600 rounded-full" />
    </motion.div>
  );
};

const ScheduleMeeting = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    service: "",
    date: null,
    time: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    companyLocation: "",
    employees: "",
  });
  const [animationComplete, setAnimationComplete] = useState([false, false, false, false]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const newAnimationComplete = [...animationComplete];
    newAnimationComplete[step - 1] = true;
    setAnimationComplete(newAnimationComplete);
  }, [step]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceSelect = (service) => {
    setForm((prev) => ({ ...prev, service: service.name }));
  };

  const handleDateSelect = (date) => {
    setForm((prev) => ({ ...prev, date }));
  };

  const handleTimeSelect = (time) => {
    setForm((prev) => ({ ...prev, time }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    alert("Meeting Scheduled!");
    console.log(form);
  };

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return !!form.service;
      case 2:
        return !!form.date;
      case 3:
        return !!form.time;
      case 4:
        return !!form.name && !!form.email;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen px-4 py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
        <motion.h1
          className="text-4xl font-light text-gray-800 mb-3 tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Schedule a Meeting
        </motion.h1>
        <motion.p
          className="text-gray-500 text-lg max-w-xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Connect with our team to explore how we can elevate your AEC business.
        </motion.p>
      </div>

      {/* Progress Bar */}
      <div className="max-w-6xl mx-auto mb-12 relative" data-aos="fade-up" data-aos-delay="100">
        <div className="flex items-center justify-between relative z-10">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <motion.div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-medium ${
                  step >= s ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"
                } relative overflow-hidden`}
                initial={{ scale: 0.8 }}
                animate={{ scale: step === s ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-blue-500"
                  initial={{ height: "0%" }}
                  animate={{ height: step >= s ? "100%" : "0%" }}
                  transition={{ duration: 0.8, delay: (s - 1) * 0.2 }}
                />
                <span
                  className={`relative z-10 ${
                    step > s ? "text-white" : step === s ? "text-white" : "text-gray-600"
                  }`}
                >
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </span>
              </motion.div>
              <span className="mt-2 text-sm font-medium text-gray-600">
                {s === 1 ? "Service" : s === 2 ? "Date" : s === 3 ? "Time" : "Details"}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute top-5 left-0 right-0 flex justify-between z-0 px-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 relative h-1 mx-2">
              <div className="absolute inset-0 bg-gray-200 rounded-full" />
              <motion.div
                className="absolute inset-0 bg-blue-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: animationComplete[s] ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Side - Image */}
          <div
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg"
            data-aos="fade-right"
          >
            <img
              src="https://images.unsplash.com/photo-1516321310762-47943772f58f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
              alt="Meeting illustration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20" />
            <motion.div
              className="absolute bottom-0 left remota la funcion de los botones de navegacion y cambialos por botones de tailwind que tengan un diseño similar pero que sean solo de color azul y que tengan un icono de flecha a la izquierda y derecha respectivamente, ademas de que el texto sea blanco y el fondo azul, y que el boton de submit sea verde con el mismo diseño -0 right-0 p-6 text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xl font-light tracking-wide">Let's Collaborate</h2>
              <p className="text-white/80 text-sm">Ready to transform your business goals.</p>
            </motion.div>
          </div>

          {/* Right Side - Form Steps */}
          <div
            className="bg-white rounded-2xl shadow-lg p-6 min-h-[500px] flex flex-col"
            data-aos="fade-left"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1"
              >
                {step === 1 && (
                  <div className="h-full flex flex-col">
                    <motion.h2
                      className="text-2xl font-light text-gray-800 mb-6 tracking-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Select a Service
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                      {services.map((service) => (
                        <motion.button
                          key={service.name}
                          onClick={() => handleServiceSelect(service)}
                          className={`p-4 rounded-xl text-white font-medium text-sm transition-all ${
                            form.service === service.name
                              ? `${service.bgColor} ring-2 ring-offset-2 ring-white`
                              : service.bgColor
                          } hover:brightness-110`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {service.name}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="h-full flex flex-col">
                    <motion.h2
                      className="text-2xl font-light text-gray-800 mb-6 tracking-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Choose a Date
                    </motion.h2>
                    <div className="flex-1 flex justify-center">
                      <DatePicker
                        selected={form.date}
                        onChange={handleDateSelect}
                        inline
                        className="rounded-xl border border-gray-100 p-4 shadow-sm"
                        disabled={(date) =>
                          date < new Date() || date.getDay() === 0 || date.getDay() === 6
                        }
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="h-full flex flex-col">
                    <motion.h2
                      className="text-2xl font-light text-gray-800 mb-6 tracking-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Select Time
                    </motion.h2>
                    <div className="flex-1">
                      <div className="mb-6 flex justify-center">
                        <MinimalClock value={form.time} />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <motion.button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`p-3 rounded-lg border ${
                              form.time === time
                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                : "border-gray-100 bg-gray-50 text-gray-700"
                            } hover:border-blue-300 transition-all text-sm font-medium`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {time}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="h-full flex flex-col">
                    <motion.h2
                      className="text-2xl font-light text-gray-800 mb-6 tracking-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Your Information
                    </motion.h2>
                    <div className="space-y-4 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-600 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none text-sm"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-600 mb-1">
                            Company Location
                          </label>
                          <input
                            type="text"
                            name="companyLocation"
                            value={form.companyLocation}
                            onChange={handleChange}
                            placeholder="New York, NY"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-600 mb-1">
                            Number of Employees
                          </label>
                          <select
                            name="employees"
                            value={form.employees}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none text-sm"
                          >
                            <option value="">Select number of employees</option>
                            {employeeOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Message (Optional)
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          rows={4}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 focus:outline-none text-sm"
                        />
                      </div>
                      <motion.div
                        className="bg-blue-50 p-4 rounded-lg border border-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="font-medium text-blue-800 text-sm mb-2">
                          Meeting Summary
                        </h3>
                        <ul className="space-y-1 text-sm text-blue-700">
                          <li>
                            <span className="font-medium">Service:</span> {form.service}
                          </li>
                          <li>
                            <span className="font-medium">Date:</span>{" "}
                            {form.date ? form.date.toLocaleDateString() : "Not selected"}
                          </li>
                          <li>
                            <span className="font-medium">Time:</span>{" "}
                            {form.time || "Not selected"}
                          </li>
                          <li>
                            <span className="font-medium">Company Location:</span>{" "}
                            {form.companyLocation || "Not provided"}
                          </li>
                          <li>
                            <span className="font-medium">Employees:</span>{" "}
                            {form.employees || "Not selected"}
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>
              {step < 4 ? (
                <button
                  onClick={handleNext}
                  disabled={!isStepComplete()}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepComplete()}
                  className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Schedule Meeting
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeeting;