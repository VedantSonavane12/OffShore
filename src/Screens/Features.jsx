import React, { useRef, useEffect } from 'react';
import { StackedCarousel } from 'react-stacked-center-carousel';
import { ChevronRightCircle, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { motion } from 'framer-motion'; // Import Framer Motion
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const cardData = [
  {
    title: "Global Experts",
    description: "250+ skilled AEC professionals, globally trained via Offshore 365 Academy.",
  },
  {
    title: "Value Leader",
    description: "35–40% more economical than in-house teams.",
  },
  {
    title: "Worldwide Synergy",
    description: "Adapting to your standards for consistent, high-quality output.",
  },
  {
    title: "Growth Partner",
    description: "Commitment to exceptional service and lasting client relationships.",
  },
  {
    title: "BIM Experts",
    description: "Expertise in cutting-edge AEC software and methodologies.",
  },
  {
    title: "Workforce Flexibility",
    description: "Easily scale teams to meet evolving project needs.",
  },
  {
    title: "System Efficiency",
    description: "Comprehensive management of infrastructure, HR, and benefits.",
  },
  {
    title: "Team Power",
    description: "Enabling your in-house staff to focus on strategic growth.",
  },
];

// Array of colors for the "Read More" background (repeating cycle)
const readMoreColors = [
  'red-500',
  'yellow-500',
  'green-500',
  'blue-500',
];

// Map Tailwind color classes to their corresponding CSS color values
const colorMap = {
  'red-500': '#ef4444',
  'yellow-500': '#eab308',
  'green-500': '#22c45e',
  'blue-500': '#3b82f6',
};

const FeatureCard = React.memo(({ data, dataIndex }) => {
  // Select a color for the "Read More" background based on the card's index
  const readMoreColor = readMoreColors[dataIndex % readMoreColors.length];
  const hoverBgColor = colorMap[readMoreColor]; // Get the CSS color value for hover

  // Framer Motion variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Framer Motion variants for the "Read More" section
  const readMoreVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  // Framer Motion variants for the arrow
  const arrowVariants = {
    hover: { x: 4, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={`relative rounded-2xl shadow-md flex flex-col justify-between px-6 py-8 bg-white border-2 border-gray-300 overflow-hidden group`}
      style={{
        width: '550px',
        height: '250px',
        transition: 'background-color 0.5s ease', // Smooth transition for background color
        backgroundColor: 'white', // Initial background color
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)} // Change background on hover
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')} // Reset background on leave
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title and Description */}
      <div className="flex flex-col justify-start relative z-20">
        <h3 className="text-4xl font-bold text-gray-700 mb-6 text-left tracking-tight group-hover:text-white transition-colors duration-500">
          {data.title}
        </h3>
        <p className="text-sm text-gray-500 text-left leading-relaxed group-hover:text-white transition-colors duration-500">
          {data.description}
        </p>
      </div>

      {/* Read More Text in Bottom-Right */}
      <motion.div
        className="absolute bottom-0 right-0 z-10"
        variants={readMoreVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="relative w-32 h-16">
          <div
            className={`absolute bottom-0 right-0 w-32 h-16 bg-${readMoreColor} rounded-tl-full overflow-hidden flex items-center justify-center`}
          >
            <div className="flex items-center gap-2 text-white text-sm font-medium">
             <p>Check out</p>
              <motion.div variants={arrowVariants}>
                <ChevronRightCircle size={18} />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

const Features = () => {
  const ref = useRef();

  // Auto-scroll every 2 seconds
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a 1s duration and run once
    const interval = setInterval(() => {
      ref.current?.goNext();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 px-6 text-center" data-aos="fade-up">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
        Your Trusted Offshore AEC Partner
      </h1>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        Deliver seamless projects with our exceptional features and expertise.
      </p>

      <div className="flex justify-center">
        <StackedCarousel
          ref={ref}
          slideComponent={(props) => (
            <FeatureCard {...props} data={cardData[props.dataIndex]} />
          )}
          slideWidth={300}
          carouselWidth={1500}
          data={cardData}
          maxVisibleSlide={5}
          customScales={[1, 0.9, 0.8, 0.7]}
          transitionTime={500}
        />
      </div>

      
    </div>
  );
};

export default Features;