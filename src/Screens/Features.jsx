import React, { useRef, useEffect } from 'react';
import { StackedCarousel } from 'react-stacked-center-carousel';
import { ChevronRightCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import gsap from 'gsap';
import 'aos/dist/aos.css';

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

const readMoreColors = ['red-500', 'yellow-500', 'green-500', 'blue-500'];
const colorMap = {
  'red-500': '#ef4444',
  'yellow-500': '#eab308',
  'green-500': '#22c55e',
  'blue-500': '#3b82f6',
};

const FeatureCard = React.memo(({ data, dataIndex }) => {
  const readMoreColor = readMoreColors[dataIndex % readMoreColors.length];
  const hoverBgColor = colorMap[readMoreColor];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const readMoreVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const arrowVariants = {
    hover: { x: 4, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="relative rounded-2xl shadow-md flex flex-col justify-between px-6 py-8 bg-white border-2 border-gray-300 overflow-hidden group"
      style={{
        width: '550px',
        height: '250px',
        transition: 'background-color 0.5s ease',
        backgroundColor: 'white',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-start relative z-20">
        <h3 className="text-4xl font-bold text-gray-700 mb-6 text-left tracking-tight group-hover:text-white transition-colors duration-500">
          {data.title}
        </h3>
        <p className="text-sm text-gray-500 text-left leading-relaxed group-hover:text-white transition-colors duration-500">
          {data.description}
        </p>
      </div>

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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      ref.current?.goNext();
    }, 2000);

    // GSAP slide-in for heading & subtext
    gsap.from(".gsap-heading span", {
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".gsap-subtext", {
      x: 80,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 px-6 text-center" data-aos="fade-up">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight gsap-heading">
        Your Trusted Offshore AEC Partner
       
      </h1>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto ">
        Deliver seamless projects with our exceptional features and expertise.
      </p>

      <div className="flex justify-center">
        <StackedCarousel
          ref={ref}
          slideComponent={(props) => (
            <FeatureCard {...props} data={cardData[props.dataIndex]} />
          )}
          slideWidth={360}
          carouselWidth={2000}
          data={cardData}
          maxVisibleSlide={5}
          customScales={[1, 0.9, 0.8, 0.7]}
          transitionTime={500}
        />
      </div>

      <div className="relative w-full mt-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-full z-10 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full z-10 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed" data-aos="fade-right">
          We bring together the finest talent and the most advanced technologies to empower your business.
        </p>

        <motion.div
          className="flex gap-12 w-max"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          {[
            'V-Ray', 'Lumion', 'Photoshop', 'Premiere Pro', 'Illustrator',
            'After Effects', 'Node.js', 'Cinema 4D',
          ].flatMap(tool => [tool, tool]).map((tool, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[100px]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt={tool}
                className="w-10 h-10"
              />
              <p className="text-sm text-gray-600 mt-2">{tool}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
