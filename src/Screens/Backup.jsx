import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { InlineWidget } from "react-calendly";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      owner: "bot",
      text: "Hello! How can I assist you today? Choose a question below or ask your own.",
    },
  ]);
  const messagesEndRef = useRef(null);

  const predefinedQuestions = [
    {
      question: "What services do you offer?",
      answer:
        "We provide UX/UI design, Framer development, and digital solutions for startups and brands, focusing on user-centered, engaging interfaces.",
    },
    {
      question: "How can I hire you?",
      answer:
        'You can hire us through our monthly membership plan ($4,995/month, billed yearly). Click "Schedule a Meeting" below to book an intro call!',
    },
    {
      question: "Tell me about your process",
      answer:
        "Our process involves discovery, brainstorming, design, and execution, ensuring innovative and precise solutions aligned with your goals.",
    },
    {
      question: "What is Athos 2.0?",
      answer:
        "Athos 2.0 is a free Framer UX portfolio template designed for UX designers to create stunning, user-friendly portfolios.",
    },
  ];

  const handleQuestionClick = (question, answer) => {
    setMessages((prev) => [
      ...prev,
      { owner: "user", text: question },
      { owner: "bot", text: answer },
    ]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToCalendly = () => {
    document
      .getElementById("schedule-meeting")
      ?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm md:max-w-md h-[400px] flex flex-col sticky bottom-6 right-6 z-50">
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="text-lg font-bold">Chat Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  msg.owner === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                    msg.owner === "user"
                      ? "bg-white text-gray-800 border border-gray-200"
                      : "bg-blue-100 text-gray-900"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex flex-wrap gap-2 mb-2">
              {predefinedQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(q.question, q.answer)}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-transform transform hover:scale-105"
                >
                  {q.question}
                </button>
              ))}
            </div>
            <button
              onClick={scrollToCalendly}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Schedule a Meeting
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div
      className="min-h-screen text-white pt-8"
      style={{
        backgroundImage: `
          linear-gradient(to right, #60A5FA, #2563EB),
          radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.2) 0%, transparent 60%)
        `,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        filter: "contrast(1.2) brightness(1.1)",
      }}
    >
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-24">
        <div className="md:w-1/2 mb-16 md:mb-0" data-aos="fade-up">
          <div className="flex items-center space-x-3 mb-8">
            <span
              className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Athos 2.0 - Free Framer UX Portfolio Template
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight md:leading-loose">
            Your Strategic Partner for Digital Solutions
          </h1>
          <p className="text-lg md:text-xl mb-12 leading-relaxed">
            Helping startups and brands to craft expressive and engaging
            solutions for their software needs.
          </p>
          <div className="flex space-x-6">
            <button
              className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Remix Template
            </button>
            <button
              className="border border-blue-400 text-blue-400 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Dark Mode
            </button>
          </div>
        </div>
        <div className="md:w-1/2" data-aos="zoom-in" data-aos-delay="400">
          <img
            src="https://source.unsplash.com/400x400/?software,technology,modern"
            alt="Digital Solutions"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      {/* Tools Section */}
      <section className="text-center py-16">
        <p className="text-lg md:text-xl mb-8" data-aos="fade-up">
          Tools which I use on a daily basis.
        </p>
        <div className="flex justify-center flex-wrap gap-6 md:gap-8">
          {["code", "design", "analytics", "cloud", "git", "terminal", "ux"].map(
            (tool, index) => (
              <img
                key={tool}
                src={`https://source.unsplash.com/64x64/?${tool},icon`}
                alt={`${tool} Tool`}
                className="rounded-full w-16 h-16 object-cover"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              />
            )
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 md:px-24 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore My Projects
        </h2>
        <p
          className="text-lg md:text-xl text-center mb-16 leading-loose"
          data-aos="fade-up"
        >
          Our works are a blend of innovative thinking and practical solutions,
          ensuring they are both unique and effective.
        </p>
        <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-16">
          <div
            className="bg-blue-900 bg-opacity-80 p-8 md:p-10 rounded-2xl shadow-md md:w-1/2"
            data-aos="fade-right"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              Budget Planner Finance App
            </h3>
            <p className="mb-8 leading-relaxed">
              With user-centered approach, the goal was to create an intuitive
              interface for effortless financial management while incorporating
              gamification.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Digital Brand Assets", "Brand Strategy", "UX/UI Design"].map(
                (tag, index) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <a
              href="#"
              className="text-blue-400 font-semibold flex items-center text-base md:text-lg hover:text-blue-300 transition-colors"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              View Project <span className="ml-3">→</span>
            </a>
          </div>
          <div
            className="md:w-1/2 flex flex-col space-y-8"
            data-aos="fade-left"
          >
            <img
              src="https://source.unsplash.com/400x300/?finance,app"
              alt="Project Tech Services"
              className="rounded-lg shadow-md w-full"
            />
            <img
              src="https://source.unsplash.com/400x300/?software,development,modern"
              alt="Project Software Development"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 md:px-24 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Process
        </h2>
        <p
          className="text-lg md:text-xl text-center mb-16 leading-loose"
          data-aos="fade-up"
        >
          Your compass to innovation and design excellence. From exploration to
          execution, this dynamic framework fuels creativity and precision,
          ensuring your product journey aligns seamlessly with user desires.
        </p>
        <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-16">
          <div className="md:w-1/2" data-aos="fade-left">
            <button
              className="bg-blue-100 text-blue-800 text-sm px-5 py-2 rounded-full mb-8"
              data-aos="fade-up"
            >
              Discover
            </button>
            <h3 className="text-xl md:text-2xl font-bold leading-relaxed">
              Brainstorming sessions in order to take their needs and company
              goals into account.
            </h3>
          </div>
          <div className="md:w-1/2" data-aos="fade-right">
            <img
              src="https://source.unsplash.com/400x300/?brainstorm,team"
              alt="Process Brainstorm"
              className="rounded-lg shadow-md w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Schedule a Meeting Section */}
      <section id="schedule-meeting" className="px-6 md:px-24 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Schedule a Meeting
        </h2>
        <p
          className="text-lg md:text-xl text-center mb-16 leading-loose"
          data-aos="fade-up"
        >
          Book a time to discuss your project needs with our team and discover
          how we can bring your vision to life.
        </p>
        <div
          className="bg-blue-900 bg-opacity-80 p-8 md:p-10 rounded-2xl shadow-md"
          data-aos="fade-up"
        >
          <InlineWidget
            url="https://calendly.com/your-calendly-link"
            styles={{
              height: "600px",
            }}
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "1e3a8a",
              textColor: "1f2937",
            }}
          />
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-24 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p
            className="text-sm md:text-base text-blue-300 mb-6 tracking-widest"
            data-aos="fade-up"
          >
            2 spots available
          </p>
          <h2
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's Connect
          </h2>
          <p
            className="text-lg md:text-2xl mb-12 leading-relaxed text-blue-200 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Feel free to contact me if having any questions. I'm available for
            new projects or just for chatting.
          </p>
          <button
            className="bg-blue-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Book a free intro call →
          </button>
          <div
            className="flex justify-center space-x-6 mt-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {["email", "twitter", "linkedin", "instagram"].map(
              (platform, index) => (
                <a
                  key={platform}
                  href="#"
                  className="text-blue-300 hover:text-white transition-colors"
                >
                  <img
                    src={`https://source.unsplash.com/32x32/?${platform},icon`}
                    alt={`${platform} icon`}
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 md:px-24 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Product design for easy community access
        </h2>
        <p
          className="text-lg md:text-xl text-center mb-16 leading-loose"
          data-aos="fade-up"
        >
          Helping startups and brands to craft expressive and engaging solutions
          for their software needs.
        </p>
        <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-16">
          <div className="md:w-1/2" data-aos="fade-up">
            <img
              src="https://source.unsplash.com/400x300/?design,ui,modern"
              alt="Experience Design"
              className="rounded-lg shadow-md w-full h-72 object-cover"
            />
          </div>
          <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-blue-900 bg-opacity-80 p-8 md:p-10 rounded-2xl shadow-md">
              <div className="flex justify-between items-center mb-8">
                <div className="text-blue-400 font-bold text-xl">{"//"}</div>
                <div className="flex space-x-4 md:space-x-5">
                  {["Cases", "Blog", "FAQ", "Get in Touch"].map(
                    (item, index) => (
                      <a
                        key={item}
                        href="#"
                        className="text-blue-300 text-base md:text-lg hover:text-blue-200 transition-colors"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                Athos: Framer Portfolio Templates for UX Designers that Users
                Will Love
              </h3>
              <p className="mb-8 leading-relaxed">
                Helping startups and brands to craft expressive and engaging
                solutions for their software needs.
              </p>
              <button
                className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Get Athos Templates for Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Me Section */}
      <section className="px-6 md:px-24 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Hire me
        </h2>
        <p
          className="text-lg md:text-xl text-center mb-16 leading-loose"
          data-aos="fade-up"
        >
          Whatever your goal – we will get you there
        </p>
        <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-16">
          <div className="md:w-1/2" data-aos="zoom-in">
            <div className="bg-blue-900 bg-opacity-80 p-8 md:p-10 rounded-2xl shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-6">Acme Corp</h3>
              <p className="mb-8 leading-relaxed">
                “As a fellow UI/UX designer, I’m truly impressed by Athos 2.0’s
                ability to create visually stunning and user-friendly
                interfaces. Their Framer development skills bring designs to
                life effortlessly. A true professional in the field!”
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gray-200 rounded-full mr-6">
                  <img
                    src="https://source.unsplash.com/56x56/?person,portrait"
                    alt="Maria Septimus"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-base md:text-lg">
                    Maria Septimus
                  </p>
                  <p className="text-blue-300 text-sm md:text-base">
                    Lead Designer, Acme Corp
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="md:w-1/2 bg-blue-900 bg-opacity-80 p-8 md:p-10 rounded-2xl shadow-md"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p className="text-sm text-blue-300 mb-6">
              Membership. Pause or cancel anytime.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              $4,995 /month, billed yearly
            </h3>
            <button
              className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full mb-8 text-base md:text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              data-aos="fade-up"
            >
              Book an intro
            </button>
            <ul className="space-y-4 text-base md:text-lg">
              {[
                "One request at a time",
                "Average 48 hour delivery",
                "Unlimited brands",
                "Framer development",
                "Unlimited stock photos",
                "Pause or cancel anytime",
              ].map((item, index) => (
                <li key={item} data-aos="fade-up" data-aos-delay={index * 100}>
                  ✔ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-24 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Relied upon by a fresh generation of Companies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              bg: "blue-100",
              content: (
                <>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">99%</h3>
                  <p className="mb-6 text-base md:text-lg">
                    reduction in hiring costs
                  </p>
                  <p className="text-blue-300 text-sm md:text-base">
                    Nolan Vaccaro, Director, Continental
                  </p>
                </>
              ),
            },
            {
              bg: "blue-100",
              content: (
                <>
                  <p className="mb-6 text-base md:text-lg">
                    Finding, hiring and managing remote tech talent with Athos
                    has never been faster, easier or more flexible.
                  </p>
                  <p className="text-blue-300 text-sm md:text-base">
                    Carla Dorwart, CEO, Lev19
                  </p>
                </>
              ),
            },
            {
              bg: "blue-100",
              content: (
                <>
                  <p className="mb-6 text-base md:text-lg">
                    Athos has allowed us to deliver on relevant projects on time
                    and strengthened our team.
                  </p>
                  <p className="text-blue-300 text-sm md:text-base">
                    Justin Rhiel Madsen, Design Director, 3Lateral
                  </p>
                </>
              ),
            },
            {
              bg: "blue-100",
              content: (
                <>
                  <img
                    src="https://source.unsplash.com/150x150/?tech,logo"
                    alt="AlphaWave"
                    className="mx-auto mb-6 rounded-full w-24 h-24 object-cover"
                  />
                  <p className="text-blue-300 text-sm md:text-base">
                    AlphaWave
                  </p>
                </>
              ),
            },
            {
              bg: "blue-100",
              content: (
                <>
                  <img
                    src="https://source.unsplash.com/150x150/?services,logo"
                    alt="Acme Corp"
                    className="mx-auto mb-6 rounded-full w-24 h-24 object-cover"
                  />
                  <p className="text-blue-300 text-sm md:text-base">
                    Acme Corp
                  </p>
                </>
              ),
            },
            {
              bg: "blue-100",
              content: (
                <>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">7X</h3>
                  <p className="mb-6 text-base md:text-lg">
                    Faster than traditional hiring
                  </p>
                  <p className="text-blue-300 text-sm md:text-base">
                    Ashlynn Gouse, Head of Product, LogiTech
                  </p>
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-${item.bg} p-6 md:p-8 rounded-2xl text-center`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {item.content}
            </div>
          ))}
        </div>
      </section>



      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Home;
"use client"
