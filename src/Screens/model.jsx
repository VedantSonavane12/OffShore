import React, { useEffect, useState } from 'react';
import { Clock, DollarSign, Layers, Users, TrendingUp } from 'lucide-react'; // SVG icons

const Model = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);

  const sections = [
    {
      title: "Hourly Billing Model",
      description: "Clients are billed based on the number of hours worked by the outsourcing team. Suitable for projects with dynamic requirements and variable scopes.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d60?fit=crop&w=900&q=80",
      colorClass: "bg-red-500", // Direct Tailwind class
      icon: <Clock className="h-6 w-6 text-red-500 mr-2" />
    },
    {
      title: "Fixed Fee Model",
      description: "A pre-determined, fixed cost is agreed upon for the entire project. Appropriate for well-defined projects with clear specifications.",
      image: "https://images.unsplash.com/photo-1554224154-260d123e4c3e?fit=crop&w=900&q=80",
      colorClass: "bg-yellow-500", // Direct Tailwind class
      icon: <DollarSign className="h-6 w-6 text-yellow-500 mr-2" />
    },
    {
      title: "Project Based Model",
      description: "Costs are determined based on the overall scope and milestones of the project. Ideal for projects with distinct phases and deliverables.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?fit=crop&w=900&q=80",
      colorClass: "bg-green-500", // Direct Tailwind class
      icon: <Layers className="h-6 w-6 text-green-500 mr-2" />
    },
    {
      title: "Dedicated Team Model",
      description: "The outsourcing firm provides a dedicated team exclusively for the client. Suited for long-term projects requiring ongoing collaboration.",
      image: "https://images.unsplash.com/photo-1516321313936-2790b6a88f71?fit=crop&w=900&q=80",
      colorClass: "bg-blue-500", // Direct Tailwind class
      icon: <Users className="h-6 w-6 text-blue-500 mr-2" />
    },
    {
      title: "Performance Model",
      description: "Payment is tied to specific performance metrics or project outcomes. Encourages the outsourcing firm to meet or exceed predefined goals.",
      image: "https://images.unsplash.com/photo-1551288049-b5f3a7c6f2c9?fit=crop&w=900&q=80",
      colorClass: "bg-purple-500", // Direct Tailwind class
      icon: <TrendingUp className="h-6 w-6 text-purple-500 mr-2" />
    },
  ];

  // Auto rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sections.length]);

  // Animate progress bar when activeSection changes
  useEffect(() => {
    setProgress(0);
    const timer = setTimeout(() => setProgress(100), 50);
    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
          Our Models of Outsourcing
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the perfect model that fits your project needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-7xl px-24 rounded-xl overflow-hidden">
        {/* Left Panel - Accordion */}
        <div className="w-full md:w-1/2 bg-white p-6 space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-4 cursor-pointer relative rounded-md  transition"
              onClick={() => setActiveSection(index)}
            >
              <div className="flex items-center mb-1">
                {section.icon}
                <h3
                  className={`text-3xl font-semibold transition-all duration-300 ${
                    activeSection === index ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  {section.title}
                </h3>
              </div>

              {/* Animated Description */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSection === index ? 'max-h-40 opacity-100 mt-2 p-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-lg text-gray-600 p-4 ">{section.description}</p>
              </div>

              {/* Progress Bar at Bottom */}
              <div className="h-0.5 bg-gray-200 w-full mt-3 rounded">
                {activeSection === index && (
                  <div
                    className={`h-0.5 transition-all duration-[5000ms] ease-in-out rounded ${section.colorClass}`}
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel - Image and Text Overlay */}
        <div className="w-full md:w-1/2 relative overflow-hidden group">
          <div className="relative w-full h-96 md:h-full transition-opacity duration-1000 ease-in-out">
            <img
              key={sections[activeSection].image}
              src={sections[activeSection].image}
              alt={sections[activeSection].title}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-6 text-white text-center">
              <h3 className="text-2xl font-bold">{sections[activeSection].title}</h3>
              <p className="text-sm mt-2">{sections[activeSection].description}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Model;
