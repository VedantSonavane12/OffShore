import React, { useState, useEffect } from 'react';
import { Briefcase, Code, Brain, Monitor, Users } from 'lucide-react';
import Loader from '../Components/Loader'; // Ensure path is correct

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section with image background */}
      <div className="relative min-h-screen animate-gradient bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-200 bg-[length:300%_300%] overflow-hidden">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 pt-48">
          <h1
            className="font-extrabold text-white leading-none"
            style={{ fontSize: '140px', marginBottom: '-10px' }}
            data-aos="fade-up"
          >
            Unlock
          </h1>
          <h2
            className="font-bold text-white leading-none"
            style={{ fontSize: '5.5vw' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            ∞ Productivity
          </h2>
          <p
            className="text-white"
            style={{ fontSize: '1.5vw' }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            With Tech-Powered Global Talent
          </p>
          <p
            className="text-blue-600 font-bold mt-36 rounded-full bg-white py-2 px-8 max-w-full"
            style={{ fontSize: '1.2vw' }}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            ∞ Offshore AEC partner you can trust, for seamless project delivery!
          </p>
        </div>
      </div>

      {/* Features Section with 6 feature cards */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-blue-800 mb-4">
            Achieving the Extraordinary
          </h2>
          <p className="text-blue-800 text-opacity-90">
            Empowering innovation through world-class expertise and technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Skilled Virtual Teams',
              icon: <Users size={40} />,
              description:
                'Connect with top-tier professionals across the globe to scale your projects efficiently.',
            },
            {
              title: 'AI-Driven Efficiency',
              icon: <Brain size={40} />,
              description:
                'Leverage artificial intelligence to streamline design, analysis, and execution workflows.',
            },
            {
              title: 'AEC Specialization',
              icon: <Monitor size={40} />,
              description:
                'Tailored for Architecture, Engineering, and Construction industries with deep domain knowledge.',
            },
            {
              title: 'Project Management',
              icon: <Briefcase size={40} />,
              description:
                'Integrated tools to manage timelines, teams, and deliverables with precision.',
            },
            {
              title: 'Custom Development',
              icon: <Code size={40} />,
              description:
                'Build custom solutions that fit your unique business needs and technical requirements.',
            },
            {
              title: 'Global Collaboration',
              icon: <Users size={40} />,
              description:
                'Collaborate with professionals from around the world to enhance project quality and delivery.',
            },
          ].map((card, index) => (
            <div
            key={index}
            className="  group bg-white rounded-md shadow-lg border border-blue-300 p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:bg-blue-700  "
           
          >
            <div className="text-blue-700 mb-4 group-hover:text-white">{card.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2 group-hover:text-white">{card.title}</h3>
            <p className="text-blue-700 text-opacity-90 text-center group-hover:text-white">{card.description}</p>
          </div>
          
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 md:px-10 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side: Heading and Description */}
          <div className="md:w-1/3 text-left mb-8 md:mb-0" data-aos="fade-right">
            <h2 className="text-5xl font-bold text-blue-800 mb-4">
             Innovative with <br/> Offshore365
            </h2>
            <p className="text-blue-800 text-opacity-90">
              Comprehensive solutions for the AEC industry, from concept to completion.
              Accross the AEC Landscape
            </p>
          </div>

          {/* Right Side: Grid of Placeholder Cards */}
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-2">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-blue-200 rounded-md h-52 shadow-md"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-blue-600 text-opacity-80">
        © {new Date().getFullYear()} Offshore365. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;