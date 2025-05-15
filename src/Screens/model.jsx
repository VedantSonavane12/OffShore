import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Clock, DollarSign, Layers, Users, TrendingUp } from 'lucide-react';
import card1 from "../assets/architecture.webp";
import card2 from "../assets/interior.webp";
import card3 from "../assets/BIM.webp";
import card4 from "../assets/3DVisualization.webp";
import card6 from "../assets/it.webp";

const Model = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);

  const sections = [
    {
      title: "Hourly Billing Model",
      description:
        "Clients are billed based on the number of hours worked by the outsourcing team. Suitable for projects with dynamic requirements and variable scopes.",
      image: card3,
      colorClass: "bg-red-500",
      icon: <Clock className="h-6 w-6 text-red-500 mr-2" />,
    },
    {
      title: "Fixed Fee Model",
      description:
        "A pre-determined, fixed cost is agreed upon for the entire project. Appropriate for well-defined projects with clear specifications.",
      image: card2,
      colorClass: "bg-yellow-500",
      icon: <DollarSign className="h-6 w-6 text-yellow-500 mr-2" />,
    },
    {
      title: "Project Based Model",
      description:
        "Costs are determined based on the overall scope and milestones of the project. Ideal for projects with distinct phases and deliverables.",
      image: card4,
      colorClass: "bg-green-500",
      icon: <Layers className="h-6 w-6 text-green-500 mr-2" />,
    },
    {
      title: "Dedicated Team Model",
      description:
        "The outsourcing firm provides a dedicated team exclusively for the client. Suited for long-term projects requiring ongoing collaboration.",
      image: card1,
      colorClass: "bg-blue-500",
      icon: <Users className="h-6 w-6 text-blue-500 mr-2" />,
    },
    {
      title: "Performance Model",
      description:
        "Payment is tied to specific performance metrics or project outcomes. Encourages the outsourcing firm to meet or exceed predefined goals.",
      image: card6,
      colorClass: "bg-purple-500",
      icon: <TrendingUp className="h-6 w-6 text-purple-500 mr-2" />,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sections.length]);

  useEffect(() => {
    setProgress(0);
    const timer = setTimeout(() => setProgress(100), 50);
    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10">
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
          Our Models of Outsourcing
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the perfect model that fits your project needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-7xl px-4 md:px-24 rounded-xl overflow-hidden">
        {/* Left Panel - Accordion */}
        <div className="w-full md:w-1/2 bg-white p-6 space-y-4" data-aos="fade-right">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-4 cursor-pointer relative rounded-md transition"
              onClick={() => setActiveSection(index)}
            >
              <div className="flex items-center mb-1">
                {section.icon}
                <h3
                  className={`text-xl  transition-all duration-300 ${
                    activeSection === index ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  {section.title}
                </h3>
              </div>

              {/* Description */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSection === index ? "max-h-40 opacity-100 mt-2 p-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-md text-gray-600">{section.description}</p>
              </div>

              {/* Progress Bar */}
              <div className="h-0.5 bg-gray-200 w-full mt-3 rounded">
                {activeSection === index && (
                  <div
                    className={`h-0.5 transition-all duration-[5000ms] ease-in-out rounded ${section.colorClass}`}
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel - Image with Button */}
        <div
          className="w-full md:w-1/2 relative rounded-md overflow-hidden group"
          data-aos="fade-left"
        >
          <div className="relative w-full h-96 md:h-full transition-opacity duration-1000 ease-in-out">
            <img
              key={sections[activeSection].image}
              src={sections[activeSection].image}
              alt={sections[activeSection].title}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />

            {/* "Choose Model" Button */}
            <div className="absolute bottom-4 right-4">
              <button className="bg-white/30 text-white px-4 py-2 rounded-full backdrop-blur-full  shadow-md hover:bg-white/50 transition duration-300">
              <p>Choose Model</p>  
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
