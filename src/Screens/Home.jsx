"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, DollarSign, Globe, TrendingUp, Cpu, Layers, Settings, Shield, Briefcase, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../Components/Loader.jsx";
import { motion, AnimatePresence } from 'framer-motion';
import bgImage from '../assets/bg.webp';
import architectImage from '../assets/architect.jpg';
import interiorDesignerImage from '../assets/interior designer.jpg';
import bimImage from '../assets/BIM.jpeg';
import threeDVisualImage from '../assets/3d visual.jpg';
import marketingImage from '../assets/marketing.jpg';
import Admin from '../assets/admin.jpg';
import itemimage from '../assets/clock.webp';
import AutoCAD from '../assets/figma.avif';
import { ToastContainer } from 'react-toastify';
import InfinityIcon from '../assets/infinity.svg'; // adjust the path if needed

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center min-h-screen bg-blue-100">
          <h1 className="text-2xl text-blue-800">Something went wrong. Please try again.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

// Main App Component
const App = ({ handleSubmit, formData, handleChange, isSubmitting, PopupButton }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cardRefs = useRef([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const iconHoverVariants = {
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
  };
  const testimonials = [
    {
      quote: `Working with Offshore 365 has been a game-changer for our architectural firm. Their expertise in BIM modeling and design documentation has significantly improved our project delivery timelines.`,
      name: "John Miller",
      title: "Principal Architect",
      stars: 5,
      image: "https://svgur.com/i/1B3F.svg",
    },
    {
      quote: `We needed specialized BIM expertise for a complex infrastructure project, and Offshore 365 delivered beyond our expectations. Their team integrated seamlessly with ours.`,
      name: "Sarah Chen",
      title: "BIM Manager",
      stars: 5,
      image: "https://svgur.com/i/1B3G.svg",
    },
    {
      quote: `One of our initial concerns about working with an offshore team was communication, but Offshore 365 has proven to be responsive and clear in all our interactions.`,
      name: "David Rodriguez",
      title: "Project Manager",
      stars: 5,
      image: "https://svgur.com/i/1B3H.svg",
    },
    {
      quote: `Offshore 365 has provided us with the flexibility to scale our design documentation team up or down based on project demands, which has been invaluable for our business.`,
      name: "Emily Carter",
      title: "CEO",
      stars: 5,
      image: "https://svgur.com/i/1B3I.svg",
    },
    {
      quote: `Offshore 365 is a trusted and reliable partner that consistently delivers high-quality work on time and within budget. They've become an extension of our team.`,
      name: "Michael Lee",
      title: "Director of Operations",
      stars: 5,
      image: "https://svgur.com/i/1B3J.svg",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Understand Business Needs",
      description: "Ensuring solutions that align perfectly for your unique project needs.",
      icon: (
        <svg className="w-8 h-8 text-blue-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Assign the Right Experts",
      description: "Providing right skills for right projects at the right time.",
      icon: (
        <svg className="w-8 h-8 text-blue-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Seamless Integration",
      description: "Our team smoothly works with your existing workflows and tools.",
      icon: (
        <svg className="w-8 h-8 text-blue-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Measure and Optimise",
      description: "Track progress and ensure success.",
      icon: (
        <svg className="w-8 h-8 text-blue-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  const productivityModels = [
    {
      title: "Hourly Billing Model",
      description:
        "Clients are billed based on the number of hours worked by the outsourcing team. Suitable for projects with dynamic requirements and variable scopes.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Image of a clock or workspace
    },
    {
      title: "Fixed Fee Model",
      description:
        "A pre-defined, fixed cost is agreed upon for the entire project. Appropriate for well-defined projects with clear specifications.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21a1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Image of a contract or agreement
    },
    {
      title: "Project Based Model",
      description:
        "Costs are determined based on the overall scope and milestones of the project. Ideal for projects with distinct phases and deliverables.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Image of a project plan or timeline
    },
    {
      title: "Dedicated Team Model",
      description:
        "The outsourcing firm provides a dedicated team of architects and professionals exclusively for the client. Suited for long-term projects requiring ongoing collaboration and support.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Image of a team working together
    },
    {
      title: "Performance Model",
      description:
        "Payment is linked to specific project outcomes or performance metrics. Encourages the outsourcing firm to meet or exceed predefined goals.",
      image: "https://images.unsplash.com/photo-1551288049-b1f3a0a1a93c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Image of charts or performance metrics
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const testimonialsPerPage = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + testimonialsPerPage >= testimonials.length ? 0 : prevIndex + testimonialsPerPage
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top <= windowHeight && rect.bottom >= 0) {
            card.style.zIndex = index + 1;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);

  const testimonialVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <ErrorBoundary>
      <div className="relative">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center py-12 sm:py-24 lg:py-36 bg-fixed bg-cover bg-center bg-no-repeat"
         
        >
          <div className="text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto relative z-10">
            <h1
              className="text-[#0474b3] font-extralight leading-none text-5xl sm:text-7xl md:text-8xl lg:text-[225px] font-light tracking-tight"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Unlock
            </h1>
            <h2
              className=" secondary text-[#0474b3] leading-none text-3xl sm:text-5xl md:text-6xl lg:text-[100px] flex items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img
                src={InfinityIcon}
                alt="Infinity Symbol"
                className="ml-2 lg:ml-4 mr-2 w-[225px] lg:w-[225px] h-full p-0 animate-breathe "
                style={{
                  animation: 'breatheGlow 3s ease-in-out infinite',
                  filter:
                    'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2)) drop-shadow(0 0 20px rgba(173, 216, 230, 0.9))',
                }}
              />
              Productivity
            </h2>
            <p
              className="text-[#0474b3] text-lg sm:text-xl md:text-2xl lg:text-[30px] mt-4 sm:mt-6 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
            >
              With Tech-Powered Global Talent
            </p>
           
            <div className="mt-12 sm:mt-16 lg:mt-24 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
              <a
                href="#contact"
                className="text-[#0474b3] font-light text-lg sm:text-xl lg:text-2xl text-center"
              >
                Offshore AEC partner you can trust, for seamless project delivery!
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="min-h-screen flex flex-col justify-center items-center px-4 bg-blue-30" aria-labelledby="features-title">
          <div className="max-w-4xl mx-auto text-center mb-12" data-aos="fade-up" data-aos-once="true">
            <h2 id="features-title" className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              Achieve the extraordinary!
            </h2>
            <p className="text-gray-500 text-sm md:text-base uppercase tracking-widest mb-24">
              with our features and specialities
            </p>
          </div>

          <div className="max-w-full px-36 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              {
                title: "Global Experts",
                description: "...",
                quote: "250+ skilled AEC professionals, globally trained via Offshore 365 Academy.",
                name: "Daniel Foster",
                role: "...",
                backgroundColor: "text-green-600",
                textColor: "bg-green-50",
                borderColor: "border-green-300",
              },
              {
                title: "Value Leader",
                description: "...",
                quote: "35–40% more economical than in-house teams.",
                name: "Alisha Trent",
                role: "...",
                backgroundColor: "text-gray-700",
                textColor: "bg-gray-200",
                borderColor: "border-gray-300",
              },
              {
                title: "Worldwide Synergy",
                description: "...",
                quote: "Adapting to your standards for consistent, high-quality output.",
                name: "Miguel Santos",
                role: "...",
                backgroundColor: "text-orange-600",
                textColor: "bg-orange-50",
                borderColor: "border-orange-300",
              },
              {
                title: "Growth Partner",
                description: "...",
                quote: "Commitment to exceptional service and lasting client relationships.",
                name: "Tina Kapoor",
                role: "...",
                backgroundColor: "text-gray-100",
                textColor: "bg-gray-800",
                borderColor: "border-gray-300",
              },
              {
                title: "BIM Experts",
                description: "...",
                quote: "Expertise in cutting-edge AEC software and methodologies.",
                name: "Rohan Mehta",
                role: "...",
                backgroundColor: "text-blue-700",
                textColor: "bg-blue-200",
                borderColor: "border-blue-300",
              },
              {
                title: "Workforce Flexibility",
                description: "...",
                quote: "Easily scale teams to meet evolving project needs.",
                name: "Sophie Allen",
                role: "...",
                backgroundColor: "text-green-600",
                textColor: "bg-green-50",
                borderColor: "border-green-300",
              },
              {
                title: "System Efficiency",
                description: "...",
                quote: "Comprehensive management of infrastructure, HR, and benefits.",
                name: "Hiro Tanaka",
                role: "",
                backgroundColor: "text-gray-700",
                textColor: "bg-gray-200",
                borderColor: "border-gray-300",
              },
              {
                title: "Team Power",
                description: "...",
                quote: "Enabling your in-house staff to focus on the strategic growth.",
                name: "Claire Desmond",
                role: "...",
                backgroundColor: "text-orange-600",
                textColor: "bg-orange-50",
                borderColor: "border-orange-300",
              },
              {
                title: "Trusted Proficiency",
                description: "...",
                quote: "450+ projects successfully delivered worldwide.",
                name: "Leo Martins",
                role: "...",
                backgroundColor: "text-gray-100",
                textColor: "bg-gray-800",
                borderColor: "border-gray-300",
              },
              {
                title: "Infra Secure",
                description: "...",
                quote: "Secure, globally connected, and state-of-the-art technology platform.",
                name: "Nina Elroy",
                role: "...",
                backgroundColor: "text-blue-700",
                textColor: "bg-blue-200",
                borderColor: "border-blue-300",
              }
            ].map((card, index) => (
              <div
                key={index}
                className={`${card.textColor} ${card.borderColor} border rounded-xl p-6 flex flex-col items-start justify-between h-48 sm:h-56 transition-transform duration-300 ease-in-out transform hover:scale-y-105 hover:shadow-xl`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="true"
                role="article"
                aria-labelledby={`feature-${index}`}
              >
                <div>
                  <h3 id={`feature-${index}`} className={`text-xl sm:text-2xl font-semibold ${card.backgroundColor} mb-2`}>
                    {card.title}
                  </h3>
                  {card.quote && (
                    <p className={`text-sm sm:text-base ${card.backgroundColor} mt-6 italic px-4`}>
                      "{card.quote}"
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-white">
          <div className="max-w-7xl w-full text-center pb-36">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">Powering 365 Productivity</h2>
            <p className="text-gray-500 text-sm md:text-base uppercase tracking-widest mb-24">
              Our Process, Explained In 4 Simple Steps
            </p>

            <div className="relative flex flex-wrap justify-center md:flex-nowrap items-start gap-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative group">
                  <div
                    className={`absolute top-6 left-6 w-80 h-72 bg-blue-400 rounded-3xl z-0 shadow-md transform ${index % 2 === 0 ? '-rotate-6 animate-slide-in-left' : 'rotate-6 animate-slide-in-right'}`}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                    data-aos-duration="600"
                    data-aos-once="true"
                    className={`relative bg-white rounded-3xl shadow-2xl p-8 w-80 h-72 transition-all duration-500 ease-in-out border border-blue-100 z-10
                    ${index % 2 === 0 ? '-rotate-6 animate-slide-in-left' : 'rotate-6 animate-slide-in-right'} 
                    group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105`}
                  >
                    <div className="absolute -top-8 -left-6 bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-blue-800 group-hover:text-white transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-md leading-relaxed group-hover:text-white transition-colors duration-300">
                      {step.description}
                    </p>
                    {index < steps.length - 1 && (
                      <svg
                        className="absolute top-1/2 -right-24 w-44 h-32 pointer-events-none animate-draw-line"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <path
                          d={index % 2 === 0 ? 'M0,50 Q50,0 100,50' : 'M0,50 Q50,100 100,50'}
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="2"
                          strokeDasharray="200"
                          strokeDashoffset="200"
                          className="path"
                        />
                        <circle cx="0" cy="50" r="4" fill="#2563eb" />
                        <circle cx="100" cy="50" r="4" fill="#2563eb" />
                      </svg>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes slide-in-left {
              0% {
                transform: translateX(-100vw) rotate(0deg);
                opacity: 0;
              }
              100% {
                transform: translateX(0) rotate(-6deg);
                opacity: 1;
              }
            }

            @keyframes slide-in-right {
              0% {
                transform: translateX(100vw) rotate(0deg);
                opacity: 0;
              }
              100% {
                transform: translateX(0) rotate(6deg);
                opacity: 1;
              }
            }

            .animate-slide-in-left {
              animation: slide-in-left 0.8s ease-out forwards;
            }

            .animate-slide-in-right {
              animation: slide-in-right 0.8s ease-out forwards;
            }

            @keyframes draw-line {
              to {
                stroke-dashoffset: 0;
              }
            }

            .animate-draw-line .path {
              animation: draw-line 1s ease-in-out forwards;
            }
          `}</style>
        </section>

        {/* Talent & Technology Section */}
        <section
          id="talent-tech"
          className="min-h-screen flex flex-col justify-center items-center px-4 bg-white"
          aria-labelledby="talent-tech-title"
        >
          <div className="max-w-7xl w-full text-center pb-36">
            <h2 className="text-5xl text-center md:text-6xl font-bold text-blue-900 mb-4">
              Talent & Technology <br /> for your business excellence
            </h2>
            <p className="text-gray-500 text-sm md:text-base uppercase tracking-widest mb-24">
              We bring together the finest talent and the most advanced technologies to empower your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Architectural Design",
                  description: "Transforming spaces with creative designs that blend functionality with beauty. Our architectural designs provide innovative solutions for modern living and working spaces.",
                  url: architectImage
                },
                {
                  title: "Interior Design",
                  description: "Creating harmonious interiors for every space. Our designs are tailored to reflect your personality, offering aesthetics and comfort that perfectly fit your needs.",
                  url: interiorDesignerImage
                },
                {
                  title: "BIM Design",
                  description: "Revolutionizing building design with BIM (Building Information Modeling) technology. We bring together all aspects of construction, from planning to execution, into one digital model.",
                  url: bimImage
                },
                {
                  title: "3D Visualisation",
                  description: "Bringing ideas to life with realistic 3D models. We create immersive, detailed visualizations that help you experience your project before it’s built.",
                  url: threeDVisualImage
                },
                {
                  title: "Administrative Services",
                  description: "Efficient solutions for your business operations. From project management to documentation, we streamline your processes, enabling you to focus on growth.",
                  url: Admin
                },
                {
                  title: "Marketing Services",
                  description: "Strategic marketing to elevate your brand. We offer tailored marketing strategies that help your business reach its audience, generate leads, and increase visibility.",
                  url: marketingImage
                },
              ].map((item, index) => (
                <div key={index} className="relative group" data-aos="zoom-in" data-aos-delay={index * 100} data-aos-once="true">
                  <div className="overflow-hidden rounded-lg relative">
                    <img
                      src={item.url || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-auto sm:h-auto object-cover rounded-lg shadow-sm group-hover:shadow-md transition-all transform group-hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute bottom-0 right-0 text-white text-sm font-semibold py-2 px-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                      {item.title}
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-md mt-2 px-4 animate-pulse">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden mt-24">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white to-transparent z-10" />

              {/* Scrolling Container */}
              <div className="animate-marquee flex whitespace-nowrap gap-10 px-24">
                {[
                  { name: "AutoCAD", url: AutoCAD },
                  { name: "Revit", url: AutoCAD },
                  { name: "3ds Max", url: AutoCAD },
                  { name: "V-Ray", url: AutoCAD },
                  { name: "Lumion", url: AutoCAD },
                  { name: "Photoshop", url: AutoCAD },
                  { name: "Premiere Pro", url: AutoCAD },
                  { name: "Illustrator", url: AutoCAD },
                  { name: "After Effects", url: AutoCAD },
                  { name: "Node.js", url: AutoCAD },
                  { name: "Cinema 4D", url: AutoCAD },
                ]
                  .concat([
                    { name: "AutoCAD", url: AutoCAD },
                    { name: "Revit", url: AutoCAD },
                    { name: "3ds Max", url: AutoCAD },
                    { name: "V-Ray", url: AutoCAD },
                    { name: "Lumion", url: AutoCAD },
                    { name: "Photoshop", url: AutoCAD },
                    { name: "Premiere Pro", url: AutoCAD },
                    { name: "Illustrator", url: AutoCAD },
                    { name: "After Effects", url: AutoCAD },
                    { name: "Node.js", url: AutoCAD },
                    { name: "Cinema 4D", url: AutoCAD },
                  ])
                  .map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-24 shrink-0">
                      <img
                        src={item.url || "/placeholder.svg"}
                        alt={`${item.name} logo`}
                        className="h-10 w-auto"
                      />
                      <p className="text-gray-700 text-xs sm:text-sm mt-2 text-center">{item.name}</p>
                    </div>
                  ))}
              </div>
            </div>


          </div>
        </section>

        {/* Scalable Productivity Section */}
        <section
          id="scalable-productivity"
          className="min-h-screen flex flex-col justify-center items-center px-4 bg-white"
          aria-labelledby="scalable-productivity-title"
        >
          <div className="max-w-[95vw] w-full text-center pb-36">
            <h2
              id="scalable-productivity-title"
              className="text-5xl text-center md:text-6xl font-bold text-blue-900 mb-4"
            >
              Scalable Productivity <br /> Optimized for Your Success
            </h2>
            <p className="text-gray-500 text-sm md:text-base uppercase tracking-widest mb-24">
              We offer a range of flexible productivity models <br /> to optimize your business outcomes with scalability and efficiency.
            </p>

            <div className="space-y-12 relative">
              {productivityModels.map((item, index) => {
                // Define the color themes
                const colorThemes = [
                  { text: "text-green-600", titleText: "text-green-700", bg: "bg-green-50", border: "border-green-300", boxBg: "bg-white" }, // Green Theme
                  { text: "text-gray-700", titleText: "text-gray-800", bg: "bg-gray-200", border: "border-gray-300", boxBg: "bg-white" }, // Gray Theme 1
                  { text: "text-gray-100", titleText: "text-gray-100", bg: "bg-gray-800", border: "border-gray-300", boxBg: "bg-gray-700" }, // Gray Theme 2
                  { text: "text-blue-600", titleText: "text-blue-700", bg: "bg-blue-200", border: "border-blue-300", boxBg: "bg-white" }, // Blue Theme
                  { text: "text-orange-600", titleText: "text-orange-700", bg: "bg-orange-50", border: "border-orange-300", boxBg: "bg-white" }, // Orange Theme
                  { text: "text-red-600", titleText: "text-red-700", bg: "bg-red-50", border: "border-red-300", boxBg: "bg-white" }, // Red Theme
                ];

                // Map the card to a color theme based on its index
                const theme = colorThemes[index % colorThemes.length];

                return (
                  <motion.div
                    key={index}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`${theme.bg} rounded-3xl p-8 flex flex-col md:flex-row items-center text-left shadow-lg sticky top-20 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] w-full  mx-auto`}
                    style={{ zIndex: 1 }}
                    variants={cardVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-once="true"
                    role="article"
                    aria-labelledby={`productivity-${index}`}
                  >
                    {/* Text Box (Left) */}
                    <div className={`md:w-2/4 p-6  bg-opacity-80 rounded-xl   `}>
                      <h3
                        id={`productivity-${index}`}
                        className={`text-xl sm:text-2xl md:text-6xl font-semibold ${theme.titleText} mb-3`}
                      >
                        {item.title}
                      </h3>
                      <p className={`text-base sm:text-md md:text-xl mt-24 px-12 ${theme.text}`}>{item.description}</p>
                    </div>

                    {/* Image Box (Right) */}
                    <div className="md:w-2/4 flex justify-center mt-6 md:mt-0 md:ml-6">
                      <div className={` p-4  flex items-center justify-center w-auto h-auto md:h-full`}>
                        <img
                          src={itemimage}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-white" aria-labelledby="testimonials-title">
          <div className="max-w-7xl mx-auto relative">
            <h2 className="text-5xl md:text-6xl text-center font-bold text-blue-900 mb-4">The Impact is real</h2>
            <p className="text-gray-500 text-sm text-center md:text-base uppercase tracking-widest mb-24">
              with round the clock productivity
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 relative"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={testimonialVariants}
              >
                {displayedTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-start relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    data-aos-once="true"
                    variants={testimonialVariants}
                  >
                    <svg className="w-10 h-10 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 text-lg mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-300 shadow-sm"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-800 text-blue-100 py-12" data-aos="fade-up" data-aos-once="true">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4 tracking-tight">Offshore 365</h3>
                <p className="text-blue-300">
                  Innovative AEC solutions for businesses of all sizes. We help you transform and thrive in the digital age with our global talent pool.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="text-blue-300 hover:text-blue-400 transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-blue-300 hover:text-blue-400 transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="text-blue-300 hover:text-blue-400 transition-colors">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-blue-300 hover:text-blue-400 transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                      Architectural Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                      BIM Modeling
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                      3D Visualization
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                      Interior Design
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                <div className="flex space-x-4 mb-4">
                  <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.5c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2zm10 12.5h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
                <p className="text-blue-300">Subscribe to our newsletter for the latest updates.</p>
                <div className="mt-4 flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-100 bg-opacity-90 backdrop-filter backdrop-blur-sm transition-all"
                  />
                  <button className="bg-blue-500 text-blue-100 px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors shadow-md">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-300">© {new Date().getFullYear()} Offshore 365. All rights reserved.</p>
              <div className="mt-4 md:mt-0">
                <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors mr-4">
                  Privacy Policy
                </a>
                <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default App; 
