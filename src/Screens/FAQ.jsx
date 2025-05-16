import React, { useEffect, useState } from "react";
import AOS from "aos";
import { motion, AnimatePresence } from "framer-motion";
import "aos/dist/aos.css";
import card from '../assets/faq.jpg';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // Auto-cycle after the fifth FAQ
  useEffect(() => {
    let interval;
    if (openIndex >= 5) {
      interval = setInterval(() => {
        setOpenIndex((prevIndex) =>
          prevIndex + 1 >= faqData.length ? 0 : prevIndex + 1
        );
      }, 3000); // change every 3 seconds
    }
    return () => clearInterval(interval);
  }, [openIndex]);

  return (
    <section className="min-h-screen px-4 md:px-20 py-16">
      <h2
        className="text-center text-5xl font-bold mb-14 tracking-tight"
        data-aos="fade"
      >
        Your Questions, Answered
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Image Box */}
        <div className="relative lg:w-1/2" data-aos="fade">
          <img
            src={card}
            alt="FAQ Illustration"
            className="w-full h-full bg-fixed object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              FAQ
            </h2>
          </div>
        </div>

        {/* Right Accordion */}
        <div className="lg:w-1/2 space-y-6" data-aos="fade">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300 pb-4">
      <div
        className="flex justify-between items-center cursor-pointer text-xl font-medium text-gray-900"
        onClick={onClick}
      >
        <span>{faq.question}</span>
        <span
          className={`text-red-500 text-2xl transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-2 text-gray-700 text-base"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const faqData = [
  {
    question: "What’s the difference between a subscription and a custom project?",
    answer:
      "Subscriptions offer ongoing design support, while custom projects are one-time design solutions tailored to specific needs.",
  },
  {
    question: "How fast is the turnaround?",
    answer:
      "Turnaround depends on the complexity, but most tasks are completed within 48–72 hours.",
  },
  {
    question: "How many requests can I make?",
    answer:
      "Unlimited! Add as many as you like, and we’ll work through them one at a time in priority order.",
  },
  {
    question: "What types of design do you handle?",
    answer:
      "We specialize in product design, UI/UX, web, mobile, branding, and presentation design.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer:
      "There are no long-term contracts. You can pause or cancel anytime with no penalty.",
  },
  {
    question: "What tools do you use to deliver designs?",
    answer:
      "Primarily Figma for design, and Notion or Trello for tracking tasks and communication.",
  },
  {
    question: "Can you design websites and mobile apps?",
    answer:
      "Yes, we specialize in responsive websites and intuitive mobile app interfaces.",
  },
];

export default FAQSection;
