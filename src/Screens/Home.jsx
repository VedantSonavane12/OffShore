import React, { useState, useEffect } from 'react';
import { Users, DollarSign, Globe, TrendingUp, Cpu, Layers, Settings, Shield, Briefcase, Star, ChevronRight } from 'lucide-react';

const Loader = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    import('https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.min.js').then(() => {
      window.AOS.init({ duration: 800, once: true, easing: 'ease-out' });
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen animate-gradient bg-gradient-to-br from-blue-800 via-blue-500 to-indigo-300 bg-[length:400%_400%] flex items-center justify-center" aria-labelledby="hero-title">
        <div className="text-center px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
          <h1
            id="hero-title"
            className="font-extralight text-white leading-none text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-2"
            data-aos="fade-up"
          >
            Unlock
          </h1>
          <h2
            className="font-semibold text-white leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            ∞ Productivity
          </h2>
          <p
            className="text-white text-lg sm:text-xl md:text-2xl mt-6 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            With Tech-Powered Global Talent
          </p>
          <p
            className="text-blue-600 font-medium mt-8 rounded-full bg-white py-3 px-6 text-sm sm:text-base md:text-lg inline-block shadow-lg hover:bg-blue-50 transition-colors"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Your trusted offshore AEC partner for seamless project delivery
          </p>
        </div>
      </section>

      {/* Talent & Technology Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-blue-50" aria-labelledby="talent-tech-title">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0" data-aos="fade-right">
            <h2 id="talent-tech-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
              Talent & Technology for your business excellence
            </h2>
          </div>
          <div className="lg:w-1/2 grid grid-cols-3 gap-4">
            {[
              { title: 'Architectural Design', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop' },
              { title: 'Interior Design', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop' },
              { title: 'BIM Design', url: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=300&h=300&fit=crop' },
              { title: '3D Visualisation', url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop' },
              { title: 'Administrative Services', url: 'https://images.unsplash.com/photo-1553877522-43269d82d3e9?w=300&h=300&fit=crop' },
              { title: 'Marketing Services', url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop' },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-24 sm:h-32 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                />
                <p className="text-center text-blue-800 text-sm mt-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            { name: 'AutoCAD', url: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=A' },
            { name: 'Revit', url: 'https://via.placeholder.com/40/0046A0/FFFFFF?text=R' },
            { name: '3ds Max', url: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=3ds' },
            { name: 'V-Ray', url: 'https://via.placeholder.com/40/00A693/FFFFFF?text=V' },
            { name: 'Lumion', url: 'https://via.placeholder.com/40/00C4B4/FFFFFF?text=L' },
            { name: 'Photoshop', url: 'https://via.placeholder.com/40/00C4B4/FFFFFF?text=Ps' },
            { name: 'Premiere Pro', url: 'https://via.placeholder.com/40/9000FF/FFFFFF?text=Pr' },
            { name: 'Illustrator', url: 'https://via.placeholder.com/40/FF6F00/FFFFFF?text=Ai' },
            { name: 'After Effects', url: 'https://via.placeholder.com/40/00C4B4/FFFFFF?text=Ae' },
            { name: 'Node.js', url: 'https://via.placeholder.com/40/68A063/FFFFFF?text=Node' },
            { name: 'Cinema 4D', url: 'https://via.placeholder.com/40/C71585/FFFFFF?text=C4D' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.url}
                alt={`${item.name} logo`}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-md shadow-sm hover:shadow-md transition-shadow"
              />
              <p className="text-blue-700 text-xs sm:text-sm mt-2">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="features-title">
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 id="features-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Achieve the Extraordinary
          </h2>
          <p className="text-blue-800 text-opacity-80 text-base sm:text-lg max-w-2xl mx-auto">
            Empowering innovation through world-class expertise and technology.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {[
            { title: 'Global Experts', icon: <Users size={36} />, description: '250+ skilled AEC professionals, globally trained via Offshore 365 Academy.' },
            { title: 'Value Leader', icon: <DollarSign size={36} />, description: '35–40% more economical than in-house teams.' },
            { title: 'Worldwide Synergy', icon: <Globe size={36} />, description: 'Adapting to your standards for consistent, high-quality output.' },
            { title: 'Growth Partner', icon: <TrendingUp size={36} />, description: 'Commitment to exceptional service and lasting client relationships.' },
            { title: 'BIM Experts', icon: <Cpu size={36} />, description: 'Expertise in cutting-edge AEC software and methodologies.' },
            { title: 'Workforce Flexibility', icon: <Layers size={36} />, description: 'Easily scale teams to meet evolving project needs.' },
            { title: 'System Efficiency', icon: <Settings size={36} />, description: 'Comprehensive management of infrastructure, HR, and benefits.' },
            { title: 'Team Power', icon: <Briefcase size={36} />, description: 'Enabling your in-house staff to focus on strategic growth.' },
            { title: 'Trusted Proficiency', icon: <Star size={36} />, description: '450+ projects successfully delivered worldwide.' },
            { title: 'Infra Secure', icon: <Shield size={36} />, description: 'Secure, globally connected, and state-of-the-art technology platform.' },
          ].map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm border border-blue-100 p-6 flex flex-col items-center transition-all hover:scale-105 hover:shadow-md hover:bg-blue-600"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              role="article"
              aria-labelledby={`feature-${index}`}
            >
              <div className="text-blue-600 mb-4 group-hover:text-white transition-colors">{card.icon}</div>
              <h3 id={`feature-${index}`} className="text-base sm:text-lg font-medium text-blue-900 mb-2 group-hover:text-white text-center">
                {card.title}
              </h3>
              <p className="text-blue-700 text-opacity-80 text-sm sm:text-base text-center group-hover:text-white max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 ease-in-out">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="services-title">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/3 text-left" data-aos="fade-right">
            <h2 id="services-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
              Innovate with Offshore 365
            </h2>
            <h3 className="text-xl sm:text-2xl font-medium text-blue-800 mb-4">Across the AEC Landscape</h3>
            <p className="text-blue-800 text-opacity-80 text-base sm:text-lg max-w-md">
              Our team supports a diverse range of industries, delivering efficiency and productivity for end-to-end design documentation.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-blue-100 rounded-xl h-32 sm:h-40 lg:h-48 shadow-sm hover:shadow-md transition-shadow"
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="steps-title">
        <div className="max-w-5xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 id="steps-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Powering 365 Productivity
          </h2>
          <p className="text-lg sm:text-xl text-blue-800 text-opacity-80">In 4 Simple Steps</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {[
            { title: 'Understand Business Needs', description: 'Ensuring solutions that align perfectly for your unique project needs.' },
            { title: 'Assign the Right Experts', description: 'Providing right skills for right projects at the right time.' },
            { title: 'Seamless Integration', description: 'Our team smoothly works with your existing workflows and tools.' },
            { title: 'Measure and Optimise', description: 'Track progress and ensure success.' },
          ].map((step, index) => (
            <div
              key={index}
              className="relative flex items-center mb-8 sm:mb-12 last:mb-0 group"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              role="listitem"
            >
              <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 mr-4 sm:mr-6">
                <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold transition-transform group-hover:scale-110">
                  {index + 1}
                </div>
                {index < 3 && (
                  <div className="absolute top-12 sm:top-14 left-6 sm:left-7 w-0.5 h-28 sm:h-28 bg-blue-200"></div>
                )}
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 flex-1 border border-blue-100 transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
                <p className="text-blue-700 text-opacity-80 text-sm sm:text-base">{step.description}</p>
              </div>
              <div className="ml-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>

     

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="talent-tech-title">
        {/* Navigation Links */}


        {/* Heading and Image Grid */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0" data-aos="fade-right">
            <h2 id="talent-tech-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
              Talent & Technology for your business excellence
            </h2>
          </div>
          <div className="lg:w-1/2 grid grid-cols-3 gap-4">
            {[
              { title: 'Architectural Design', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop' },
              { title: 'Interior Design', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop' },
              { title: 'BIM Design', url: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=300&h=300&fit=crop' },
              { title: '3D Visualisation', url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop' },
              { title: 'Administrative Services', url: 'https://images.unsplash.com/photo-1553877522-43269d82d3e9?w=300&h=300&fit=crop' },
              { title: 'Marketing Services', url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop' },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-24 sm:h-32 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                />
                <p className="text-center text-blue-800 text-sm mt-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Software Icons */}
        <div className="max-w-6xl mx-auto mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            { name: 'AutoCAD', url: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=A' },
            { name: 'Revit', url: 'https://via.placeholder.com/40/0046A0/FFFFFF?text=R' },
            { name: '3ds Max', url: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=3ds' },
            { name: 'V-Ray', url: 'https://via.placeholder.com/40/00A693/FFFFFF?text=V' },
            { name: 'Lumion', url: 'https://via.placeholder.com/40/00C4B4/FFFFFF?text=L' },
            { name: 'Photoshop', url: 'https://via.placeholder.com/40/00C4B4/FFFFFF?text=Ps' },
            { name: 'Premiere Pro', url: 'https://via.placeholder.com/40/9000FF/FFFFFF?text=Pr' },
            { name: 'Illustrator', url: 'https://via.placeholder.com/40/FF6F00/FFFFFF?text=Ai' },
            { name: 'After Effects', url: 'https://via.placeholder.com/40/00C4B4/FFFFFF?text=Ae' },
            { name: 'Node.js', url: 'https://via.placeholder.com/40/68A063/FFFFFF?text=Node' },
            { name: 'Cinema 4D', url: 'https://via.placeholder.com/40/C71585/FFFFFF?text=C4D' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.url}
                alt={`${item.name} logo`}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-md shadow-sm hover:shadow-md transition-shadow"
              />
              <p className="text-blue-700 text-xs sm:text-sm mt-2">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
       {/* New Scalable Productivity Section */}
       <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="scalable-productivity-title">
        <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 id="scalable-productivity-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
            Scalable Productivity Optimised for your success
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {[
            {
              title: 'Hourly Billing Model',
              description: 'Clients are billed based on the number of hours worked by the outsourcing team. Suitable for projects with dynamic requirements and variable scopes.',
            },
            {
              title: 'Fixed Fee Model',
              description: 'A pre-defined, fixed cost is agreed upon for the entire project. Appropriate for well-defined projects with clear specifications.',
            },
            {
              title: 'Project Based Model',
              description: 'Costs are determined based on the overall scope and milestones of the project. Ideal for projects with distinct phases and deliverables.',
            },
            {
              title: 'Dedicated Team Model',
              description: 'The outsourcing firm provides a dedicated team of architects and professionals exclusively for the client. Suited for long-term projects requiring ongoing collaboration and support.',
            },
            {
              title: 'Performance Model',
              description: 'Payment is linked to specific project outcomes or performance metrics. Encourages the outsourcing firm to meet or exceed predefined goals.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-blue-100 p-6 flex flex-col transition-all hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              role="article"
              aria-labelledby={`productivity-${index}`}
            >
              <h3 id={`productivity-${index}`} className="text-base sm:text-lg font-medium text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-blue-700 text-opacity-80 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center py-8 text-blue-600 text-opacity-80 bg-white border-t border-blue-100">
        <p>© {new Date().getFullYear()} Offshore365. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;