"use client";

import React, { useState, useEffect } from "react";
import { Users, DollarSign, Globe, TrendingUp, Cpu, Layers, Settings, Shield, Briefcase, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../Components/Loader.jsx";

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
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Testimonial data
  const testimonials = [
    {
      quote: `Working with Offshore 365 has been a game-changer for our architectural firm. Their expertise in BIM modeling and design documentation has significantly improved our project delivery timelines.`,
      name: "John Miller",
      title: "Principal Architect",
      stars: 5,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      quote: `We needed specialized BIM expertise for a complex infrastructure project, and Offshore 365 delivered beyond our expectations. Their team integrated seamlessly with ours.`,
      name: "Sarah Chen",
      title: "BIM Manager",
      stars: 5,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      quote: `One of our initial concerns about working with an offshore team was communication, but Offshore 365 has proven to be responsive and clear in all our interactions.`,
      name: "David Rodriguez",
      title: "Project Manager",
      stars: 5,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      quote: `Offshore 365 has provided us with the flexibility to scale our design documentation team up or down based on project demands, which has been invaluable for our business.`,
      name: "Emily Carter",
      title: "CEO",
      stars: 5,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      quote: `Offshore 365 is a trusted and reliable partner that consistently delivers high-quality work on time and within budget. They've become an extension of our team.`,
      name: "Michael Lee",
      title: "Director of Operations",
      stars: 5,
      image: "/placeholder.svg?height=64&width=64",
    },
  ];

  // Initialize AOS and handle loader
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

  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen overflow-hidden font-sans text-blue-900 bg-blue-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center" data-aos="fade-up">
          <div className="absolute inset-0 overflow-hidden">
            <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-500 to-blue-800"></div>
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          <div className="text-center px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto relative z-10">
            <h1
              className="text-blue-100 leading-none text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-2 font-bold tracking-tight"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              Unlock
            </h1>
            <h2
              className="font-semibold text-blue-100 leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              ∞ Productivity
            </h2>
            <p
              className="text-blue-200 text-lg sm:text-xl md:text-2xl mt-6 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              With Tech-Powered Global Talent
            </p>
            <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
              <a
                href="#contact"
                className="text-blue-900 font-medium rounded-full bg-blue-200 bg-opacity-90 backdrop-filter backdrop-blur-sm py-3 px-6 text-sm sm:text-base md:text-lg inline-block shadow-lg hover:bg-blue-300 hover:scale-105 transition-all duration-300"
              >
                Your trusted offshore AEC partner for seamless project delivery
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-blue-100" aria-labelledby="features-title">
          <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
            <h2 id="features-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
              Achieve the Extraordinary
            </h2>
            <p className="text-blue-700 text-base sm:text-lg max-w-2xl mx-auto">
              Empowering innovation through world-class expertise and technology.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                title: "Global Experts",
                icon: <Users size={36} />,
                description: "250+ skilled AEC professionals, globally trained via Offshore 365 Academy.",
              },
              {
                title: "Value Leader",
                icon: <DollarSign size={36} />,
                description: "35–40% more economical than in-house teams.",
              },
              {
                title: "Worldwide Synergy",
                icon: <Globe size={36} />,
                description: "Adapting to your standards for consistent, high-quality output.",
              },
              {
                title: "Growth Partner",
                icon: <TrendingUp size={36} />,
                description: "Commitment to exceptional service and lasting client relationships.",
              },
              {
                title: "BIM Experts",
                icon: <Cpu size={36} />,
                description: "Expertise in cutting-edge AEC software and methodologies.",
              },
              {
                title: "Workforce Flexibility",
                icon: <Layers size={36} />,
                description: "Easily scale teams to meet evolving project needs.",
              },
              {
                title: "System Efficiency",
                icon: <Settings size={36} />,
                description: "Comprehensive management of infrastructure, HR, and benefits.",
              },
              {
                title: "Team Power",
                icon: <Briefcase size={36} />,
                description: "Enabling your in-house staff to focus on strategic growth.",
              },
              {
                title: "Trusted Proficiency",
                icon: <Star size={36} />,
                description: "450+ projects successfully delivered worldwide.",
              },
              {
                title: "Infra Secure",
                icon: <Shield size={36} />,
                description: "Secure, globally connected, and state-of-the-art technology platform.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group bg-blue-50 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-sm border border-blue-200 p-6 flex flex-col items-center transition-all hover:scale-105 hover:shadow-xl hover:bg-blue-500"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                role="article"
                aria-labelledby={`feature-${index}`}
              >
                <div className="text-blue-600 mb-4 group-hover:text-blue-100 transition-colors">{card.icon}</div>
                <h3
                  id={`feature-${index}`}
                  className="text-base sm:text-lg font-semibold text-blue-900 mb-2 group-hover:text-blue-100 text-center"
                >
                  {card.title}
                </h3>
                <p className="text-blue-700 text-sm sm:text-base text-center group-hover:text-blue-100 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 ease-in-out">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-blue-50" aria-labelledby="services-title">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8" data-aos="fade-right">
            <div className="lg:w-1/3 text-left">
              <h2
                id="services-title"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight tracking-tight"
                data-aos="fade-up"
              >
                Innovate with Offshore 365
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4" data-aos="fade-up" data-aos-delay="100">
                Across the AEC Landscape
              </h3>
              <p className="text-blue-700 text-base sm:text-lg max-w-md" data-aos="fade-up" data-aos-delay="200">
                Our team supports a diverse range of industries, delivering efficiency and productivity for end-to-end design documentation.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="bg-blue-100 bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-xl h-32 sm:h-40 lg:h-48 shadow-sm hover:shadow-md transition-all transform hover:scale-105 hover:bg-blue-200"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  role="img"
                  aria-label={`Service placeholder ${index + 1}`}
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section id="steps" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-blue-100" aria-labelledby="steps-title">
          <div className="max-w-5xl mx-auto text-center mb-12" data-aos="fade-up">
            <h2 id="steps-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
              Powering 365 Productivity
            </h2>
            <p className="text-lg sm:text-xl text-blue-700">In 4 Simple Steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Understand Business Needs",
                description: "Ensuring solutions that align perfectly for your unique project needs.",
              },
              {
                title: "Assign the Right Experts",
                description: "Providing right skills for right projects at the right time.",
              },
              {
                title: "Seamless Integration",
                description: "Our team smoothly works with your existing workflows and tools.",
              },
              {
                title: "Measure and Optimise",
                description: "Track progress and ensure success.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col bg-blue-50 bg-opacity-80 backdrop-filter backdrop-blur-lg border border-blue-200 py-4 items-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group"
                data-aos="flip-up"
                data-aos-delay={index * 200}
                role="listitem"
              >
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-500 flex items-center justify-center text-blue-100 text-2xl font-bold mb-6 transition-transform group-hover:scale-110">
                  {index + 1}
                </div>
                <div className="flex flex-col items-center p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-blue-700 text-base sm:text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Talent & Technology Section */}
        <section id="talent-tech" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-blue-50" aria-labelledby="talent-tech-title">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8" data-aos="fade-left">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h2
                id="talent-tech-title"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight tracking-tight"
                data-aos="fade-up"
              >
                Talent & Technology for your business excellence
              </h2>
            </div>
            <div className="lg:w-1/2 grid grid-cols-3 gap-4">
              {[
                { title: "Architectural Design", url: "/placeholder.svg?height=300&width=300" },
                { title: "Interior Design", url: "/placeholder.svg?height=300&width=300" },
                { title: "BIM Design", url: "/placeholder.svg?height=300&width=300" },
                { title: "3D Visualisation", url: "/placeholder.svg?height=300&width=300" },
                { title: "Administrative Services", url: "/placeholder.svg?height=300&width=300" },
                { title: "Marketing Services", url: "/placeholder.svg?height=300&width=300" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={item.url || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-24 sm:h-32 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-all transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <p className="text-center text-blue-800 text-sm mt-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { name: "AutoCAD", url: "/placeholder.svg?height=40&width=40" },
              { name: "Revit", url: "/placeholder.svg?height=40&width=40" },
              { name: "3ds Max", url: "/placeholder.svg?height=40&width=40" },
              { name: "V-Ray", url: "/placeholder.svg?height=40&width=40" },
              { name: "Lumion", url: "/placeholder.svg?height=40&width=40" },
              { name: "Photoshop", url: "/placeholder.svg?height=40&width=40" },
              { name: "Premiere Pro", url: "/placeholder.svg?height=40&width=40" },
              { name: "Illustrator", url: "/placeholder.svg?height=40&width=40" },
              { name: "After Effects", url: "/placeholder.svg?height=40&width=40" },
              { name: "Node.js", url: "/placeholder.svg?height=40&width=40" },
              { name: "Cinema 4D", url: "/placeholder.svg?height=40&width=40" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={item.url || "/placeholder.svg"}
                  alt={`${item.name} logo`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-md shadow-sm hover:shadow-md transition-all transform hover:scale-110"
                />
                <p className="text-blue-700 text-xs sm:text-sm mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Scalable Productivity Section */}
        <section id="scalable-productivity" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-blue-100" aria-labelledby="scalable-productivity-title">
          <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2
              id="scalable-productivity-title"
              className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4 leading-tight tracking-tight"
            >
              Scalable Productivity Optimised for Your Success
            </h2>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Hourly Billing Model",
                description: "Clients are billed based on the number of hours worked by the outsourcing team. Suitable for projects with dynamic requirements and variable scopes.",
                icon: (
                  <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Fixed Fee Model",
                description: "A pre-defined, fixed cost is agreed upon for the entire project. Appropriate for well-defined projects with clear specifications.",
                icon: (
                  <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                ),
              },
              {
                title: "Project Based Model",
                description: "Costs are determined based on the overall scope and milestones of the project. Ideal for projects with distinct phases and deliverables.",
                icon: (
                  <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
              {
                title: "Dedicated Team Model",
                description: "The outsourcing firm provides a dedicated team of architects and professionals exclusively for the client. Suited for long-term projects requiring ongoing collaboration and support.",
                icon: (
                  <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M16 3.13a4 4 0 110 7.75M8 3.13a4 4 0 110 7.75" />
                  </svg>
                ),
              },
              {
                title: "Performance Model",
                description: "Payment is linked to specific project outcomes or performance metrics. Encourages the outsourcing firm to meet or exceed predefined goals.",
                icon: (
                  <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M12 20l9-8-9-8v6H3v4h9v6z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 bg-opacity-80 backdrop-filter backdrop-blur-lg border border-blue-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-md transition-all transform hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                role="article"
                aria-labelledby={`productivity-${index}`}
              >
                {item.icon}
                <h3 id={`productivity-${index}`} className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-700 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 px-4 bg-blue-50" aria-labelledby="testimonials-title">
          <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-up">
            <h2 id="testimonials-title" className="text-4xl font-bold text-blue-900 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-blue-700 mt-2">Trusted by industry leaders worldwide</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === activeTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-blue-100 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl border border-blue-200 p-8 md:p-10 shadow-md">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover mb-6 md:mb-0 md:mr-6 border-2 border-blue-300 shadow-sm"
                      />
                      <div>
                        <svg className="w-10 h-10 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-blue-700 text-lg mb-6">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="text-xl font-semibold text-blue-900">{testimonial.name}</h4>
                          <p className="text-blue-600">{testimonial.title}</p>
                        </div>
                        <div className="flex mt-3">
                          {Array.from({ length: testimonial.stars }).map((_, idx) => (
                            <svg key={idx} className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.287 3.973h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455 1.287 3.973c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.973-3.378-2.455c-.784-.57-.38-1.81.588-1.81h4.172l1.287-3.973z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeTestimonial ? "bg-blue-600" : "bg-blue-300"
                    } transition-colors hover:bg-blue-500`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20" aria-labelledby="contact-title">
          <div className="container mx-auto px-6">
            <div
              className="max-w-6xl mx-auto bg-blue-100 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-blue-200"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-blue-500 p-12 text-blue-100">
                  <h2 id="contact-title" className="text-3xl font-bold mb-6 tracking-tight" data-aos="fade-right">
                    Get in Touch
                  </h2>
                  <p className="text-blue-200 mb-8" data-aos="fade-right" data-aos-delay="100">
                    Ready to start your digital transformation journey? Contact us today to discuss how we can help your business thrive.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start" data-aos="fade-right" data-aos-delay="200">
                      <svg
                        className="w-6 h-6 mr-3 text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-blue-300">Address</h3>
                        <p>123 Innovation Drive, Tech City, TC 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start" data-aos="fade-right" data-aos-delay="300">
                      <svg
                        className="w-6 h-6 mr-3 text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-blue-300">Email</h3>
                        <p>info@offshore365.com</p>
                      </div>
                    </div>
                    <div className="flex items-start" data-aos="fade-right" data-aos-delay="400">
                      <svg
                        className="w-6 h-6 mr-3 text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-blue-300">Phone</h3>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-12">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6 tracking-tight" data-aos="fade-left">
                    Send Us a Message
                  </h2>
                  <div className="space-y-6">
                    <div data-aos="fade-left" data-aos-delay="100">
                      <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-100 bg-opacity-90 backdrop-filter backdrop-blur-sm transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200">
                      <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-100 bg-opacity-90 backdrop-filter backdrop-blur-sm transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div data-aos="fade-left" data-aos-delay="300">
                      <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-100 bg-opacity-90 backdrop-filter backdrop-blur-sm transition-all"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="w-full bg-blue-500 text-blue-100 px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
                      data-aos="fade-left"
                      data-aos-delay="400"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

         

          {/* Footer */}
          <footer className="bg-blue-800 text-blue-100 py-12" data-aos="fade-up">
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