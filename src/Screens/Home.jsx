import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  BriefcaseIcon, GlobeAltIcon, ChartBarIcon, ShieldCheckIcon, 
  UserGroupIcon, CogIcon, CheckBadgeIcon, LockClosedIcon,
  DocumentTextIcon, LightBulbIcon, ClockIcon, RocketLaunchIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cardsSection1 = [
    { title: 'Global Experts', icon: GlobeAltIcon, description: 'Leverage worldwide talent for your AEC projects.' },
    { title: 'Value Leader', icon: ChartBarIcon, description: 'Achieve cost-efficiency without compromise.' },
    { title: 'Growth Partner', icon: BriefcaseIcon, description: 'We scale with your project needs.' },
    { title: 'BIM Experts', icon: UserGroupIcon, description: 'Industry specialists delivering precise models.' },
    { title: 'Workforce Flexibility', icon: CogIcon, description: 'Dynamic teams for evolving demands.' },
    { title: 'System Efficiency', icon: CheckBadgeIcon, description: 'Optimized processes and tech integration.' },
    { title: 'Trusted Proficiency', icon: ShieldCheckIcon, description: 'Proven track record in project success.' },
    { title: 'Infra Secure', icon: LockClosedIcon, description: 'Robust infrastructure and data security.' },
  ];

  const cardsSection2 = [
    { title: 'Comprehensive Docs', icon: DocumentTextIcon, description: 'End-to-end design documentation.' },
    { title: 'Innovative Solutions', icon: LightBulbIcon, description: 'Creative approaches to complex challenges.' },
    { title: 'Timely Delivery', icon: ClockIcon, description: 'On-schedule project milestones.' },
    { title: 'Scalable Growth', icon: RocketLaunchIcon, description: 'Support for expanding project scopes.' },
  ];

  return (
    <div className="relative min-h-screen animate-gradient bg-gradient-to-br from-blue-900 via-blue-600 to-blue-900 bg-[length:300%_300%] overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-12 pt-48">
        <h1 className="font-extrabold text-white leading-none" style={{ fontSize: '140px', marginBottom: '-10px' }} data-aos="fade-up">Unlock</h1>
        <h2 className="font-bold text-white leading-none" style={{ fontSize: '5.5vw' }} data-aos="fade-up" data-aos-delay="200">∞ Productivity</h2>
        <p className="text-white" style={{ fontSize: '1.5vw' }} data-aos="fade-up" data-aos-delay="400">With Tech-Powered Global Talent</p>
        <p className="text-blue-600 font-bold mt-36 rounded-full bg-white py-2 px-8 max-w-full" style={{ fontSize: '1.2vw' }} data-aos="fade-up" data-aos-delay="600">∞ Offshore AEC partner you can trust, for seamless project delivery!</p>
      </div>

      {/* Section 1: Achieve the Extraordinary */}
      <h2 className="text-4xl py-24 px-6 text-center sm:text-5xl font-bold text-white mb-8" data-aos="fade-up">Achieve the extraordinary!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {cardsSection1.map((card, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl shadow-lg pt-12 px-4 gap-4 pb-6 text-center transition-all duration-300 transform ${
              hoveredCard === index ? 'hover:-translate-y-2 hover:shadow-2xl' : 'hover:none'
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white text-blue-700 rounded-full flex items-center justify-center border-2 border-blue-500 shadow-md transition-transform duration-300">
              <card.icon className="w-8 h-8" />
            </div>
          
            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold text-blue-800">{card.title}</h3>
          
            {/* Description: Only show on hover */}
            <div
              className={`max-h-0 overflow-hidden transition-all duration-500 ease-in-out ${
                hoveredCard === index ? 'max-h-40 opacity-100' : 'opacity-0'
              }`}
            >
              <p className="mt-3 text-sm text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 2: Transform Your Workflow */}
      <h2 className="text-4xl py-24 px-6 text-center sm:text-5xl font-bold text-white mb-8" data-aos="fade-up">Transform Your Workflow!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {cardsSection2.map((card, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl shadow-lg pt-12 px-4 gap-4 pb-6 text-center transition-all duration-300 transform ${
              hoveredCard === index + cardsSection1.length ? 'hover:-translate-y-2 hover:shadow-2xl' : 'hover:none'
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onMouseEnter={() => setHoveredCard(index + cardsSection1.length)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white text-blue-700 rounded-full flex items-center justify-center border-2 border-blue-500 shadow-md transition-transform duration-300">
              <card.icon className="w-8 h-8" />
            </div>
          
            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold text-blue-800">{card.title}</h3>
          
            {/* Description: Only show on hover */}
            <div
              className={`max-h-0 overflow-hidden transition-all duration-500 ease-in-out ${
                hoveredCard === index + cardsSection1.length ? 'max-h-40 opacity-100' : 'opacity-0'
              }`}
            >
              <p className="mt-3 text-sm text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 3: Innovate with Offshore 365 (Image Layout) */}
      <div className="flex flex-col lg:flex-row items-center justify-center py-24 px-6 max-w-6xl mx-auto">
        {/* Left Text */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0" data-aos="fade-right">
          <h2 className="text-5xl font-bold text-white leading-tight mb-4">Innovate with<br />Offshore 365</h2>
          <p className="text-white text-lg">Across the AEC Landscape</p>
          <p className="text-gray-300 mt-4">offshore 365 team supports diverse range of industries, providing efficiency and productivity for end to end design documentation.</p>
        </div>

        {/* Right Gray Boxes */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="h-48 bg-gray-300 rounded-lg" data-aos="fade-left" data-aos-delay="100"></div>
          <div className="h-48 bg-gray-300 rounded-lg" data-aos="fade-left" data-aos-delay="200"></div>
          <div className="h-48 bg-gray-300 rounded-lg" data-aos="fade-left" data-aos-delay="300"></div>
          <div className="h-48 bg-gray-300 rounded-lg" data-aos="fade-left" data-aos-delay="400"></div>
          <div className="h-48 bg-gray-300 rounded-lg" data-aos="fade-left" data-aos-delay="500"></div>
          <div className="h-48 bg-gray-300 rounded-lg" data-aos="fade-left" data-aos-delay="600"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;