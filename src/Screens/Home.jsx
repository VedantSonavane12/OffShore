import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { InlineWidget } from "react-calendly";

// Enhanced ChatBot component with improved styling
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
    <div className="fixed bottom-8 right-8 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-blue-600 p-5 rounded-full shadow-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-110"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
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
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm md:max-w-md h-[450px] flex flex-col">
          <div className="bg-blue-600 text-white p-5 rounded-t-2xl flex justify-between items-center">
            <h3 className="text-xl font-bold">Chat Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-5 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-5 flex ${
                  msg.owner === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-lg shadow-md ${
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

          <div className="p-5 border-t">
            <div className="flex flex-wrap gap-2 mb-3">
              {predefinedQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(q.question, q.answer)}
                  className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                >
                  {q.question}
                </button>
              ))}
            </div>
            <button
              onClick={scrollToCalendly}
              className="w-full bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
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
  // Breathing animation for the gradient circle
  const [scale, setScale] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Initialize AOS with enhanced settings
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false, // Changed to false to allow animations to occur every time the element comes into view
      mirror: true, // Mirror animations when scrolling back up
      offset: 120,
      delay: 100,
    });

    // Breathing animation for the gradient circle
    const breathingInterval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.05 : 1));
    }, 3000);

    // Track scroll position for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(breathingInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // High-quality image URLs
  const images = {
    tools: [
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=64&h=64&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=64&h=64&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=64&h=64&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=64&h=64&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=64&h=64&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=64&h=64&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=64&h=64&auto=format&fit=crop",
    ],
    projects: [
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    ],
    process:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    experience:
      "https://images.unsplash.com/photo-1561070791-32d8b5eb76df?q=80&w=800&auto=format&fit=crop",
    social: [
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=32&h=32&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=32&h=32&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=32&h=32&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=32&h=32&auto=format&fit=crop",
    ],
    testimonials: [
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=56&h=56&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&h=150&auto=format&fit=crop",
    ],
  };

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      {/* Fixed Background with Sunrays - similar to the logo's blue background */}
      <div
        className="fixed inset-0 bg-blue-600 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 10%, rgba(255, 255, 255, 0.25) 0%, transparent 50%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top-left sunray effect */}
        <div
          className="absolute top-0 left-0 w-[800px] h-[800px]"
          style={{
            background: `
              radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.3) 0%, transparent 60%),
              linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.15) 50%, transparent 60%)
            `,
            opacity: 0.8,
            mixBlendMode: "overlay",
          }}
        />

        {/* Additional light beams */}
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
            filter: "blur(40px)",
            opacity: 0.6,
            animation: "pulse 15s infinite alternate ease-in-out",
          }}
        />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${
                  Math.random() * 15 + 10
                }s infinite alternate ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container - all content will scroll over the fixed background */}
      <div className="relative z-10">
        {/* Hero Section with Enhanced Breathing Gradient Circle */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-28 lg:px-36 py-28 text-center md:text-left min-h-screen">
          <div
            className="md:w-1/2 mb-20 md:mb-0"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-10">
              <span
                className="bg-white/20 text-white text-sm px-5 py-2.5 rounded-full shadow-sm backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Athos 2.0 - Free Framer UX Portfolio Template
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight md:leading-relaxed text-white">
              Your Strategic Partner for Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-blue-100 max-w-xl">
              Helping startups and brands to craft expressive and engaging
              solutions for their software needs with precision and creativity.
            </p>
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8">
              <button
                className="bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-medium hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Remix Template
              </button>
              <button
                className="border-2 border-white text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Dark Mode
              </button>
            </div>
          </div>
          <div
            className="md:w-1/2 relative flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="1800"
          >
            {/* Enhanced breathing gradient circle with white, light red, and yellow colors */}
            <div
              className="w-[450px] h-[450px] md:w-[550px] md:h-[550px] rounded-full absolute transition-all duration-3000 ease-in-out"
              style={{
                background:
                  "radial-gradient(circle, #FFFFFF, #FFEB3B, #FF8A80)",
                boxShadow:
                  "0 0 50px rgba(255, 235, 59, 0.6), 0 0 100px rgba(255, 138, 128, 0.3)",
                filter: "blur(15px)",
                opacity: 0.85,
                transform: `scale(${scale})`,
                transition: "transform 3s ease-in-out",
              }}
            />
            {/* Additional inner circle for more dynamic effect */}
            <div
              className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full absolute animate-pulse"
              style={{
                background: "radial-gradient(circle, #FFFFFF, #FFECB3)",
                boxShadow: "0 0 30px rgba(255, 236, 179, 0.5)",
                filter: "blur(10px)",
                opacity: 0.7,
                animation: "pulse 6s infinite alternate",
              }}
            />
          </div>
        </section>

        {/* Tools Section with Enhanced Spacing */}
        <section className="text-center py-24 px-8 md:px-28 lg:px-36 bg-white/10 backdrop-blur-md">
          <p
            className="text-xl md:text-2xl mb-12 text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools which I use on a daily basis.
          </p>
          <div className="flex justify-center flex-wrap gap-8 md:gap-10">
            {images.tools.map((imgUrl, index) => (
              <div
                key={index}
                className="transform transition-all duration-300 hover:scale-110"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <img
                  src={imgUrl || "/placeholder.svg"}
                  alt={`Tool ${index + 1}`}
                  className="rounded-full w-16 h-16 md:w-20 md:h-20 object-cover shadow-lg border-2 border-white"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section with Enhanced Spacing */}
        <section className="px-8 md:px-28 lg:px-36 py-28 bg-white/5 backdrop-blur-md">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
            data-aos="fade-up"
          >
            Explore My Projects
          </h2>
          <p
            className="text-xl md:text-2xl text-center mb-20 leading-relaxed text-blue-100 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our works are a blend of innovative thinking and practical
            solutions, ensuring they are both unique and effective for our
            clients' needs.
          </p>
          <div className="flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-20">
            <div
              className="bg-white/10 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-xl md:w-1/2 transform transition-all duration-500 hover:shadow-2xl border border-white/20 text-white"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                Budget Planner Finance App
              </h3>
              <p className="text-blue-100 mb-10 leading-relaxed text-lg">
                With user-centered approach, the goal was to create an intuitive
                interface for effortless financial management while
                incorporating gamification elements to make budgeting enjoyable.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                {[
                  { tag: "Digital Brand Assets", color: "orange" },
                  { tag: "Brand Strategy", color: "pink" },
                  { tag: "UX/UI Design", color: "purple" },
                ].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white/20 text-white text-sm px-5 py-2.5 rounded-full shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    {item.tag}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="text-white font-semibold flex items-center text-lg md:text-xl hover:text-blue-200 transition-colors group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                View Project{" "}
                <span className="ml-3 group-hover:ml-5 transition-all duration-300">
                  →
                </span>
              </a>
            </div>
            <div
              className="md:w-1/2 flex flex-col space-y-10"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src={images.projects[0] || "/placeholder.svg"}
                alt="Project Finance App"
                className="rounded-2xl shadow-xl w-full h-64 md:h-72 object-cover hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              />
              <img
                src={images.projects[1] || "/placeholder.svg"}
                alt="Project Software Development"
                className="rounded-2xl shadow-xl w-full h-64 md:h-72 object-cover hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay="200"
              />
            </div>
          </div>
        </section>

        {/* Process Section with Enhanced Spacing */}
        <section className="px-8 md:px-28 lg:px-36 py-28 bg-white/10 backdrop-blur-md">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
            data-aos="fade-up"
          >
            Process
          </h2>
          <p
            className="text-xl md:text-2xl text-center mb-20 leading-relaxed text-blue-100 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Your compass to innovation and design excellence. From exploration
            to execution, this dynamic framework fuels creativity and precision,
            ensuring your product journey aligns seamlessly with user desires.
          </p>
          <div className="flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-20">
            <div
              className="md:w-1/2 flex flex-col justify-center"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <button
                className="bg-white/20 text-white text-sm px-6 py-3 rounded-full mb-10 shadow-sm w-fit backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Discover
              </button>
              <h3 className="text-2xl md:text-3xl font-bold leading-relaxed mb-8 text-white">
                Brainstorming sessions in order to take their needs and company
                goals into account.
              </h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                We begin with deep discovery sessions to understand your vision,
                challenges, and objectives. This collaborative approach ensures
                we're aligned from the start and can craft solutions that truly
                resonate with your audience and business goals.
              </p>
            </div>
            <div
              className="md:w-1/2"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src={images.process || "/placeholder.svg"}
                alt="Process Brainstorm"
                className="rounded-2xl shadow-xl w-full h-80 md:h-96 object-cover hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              />
            </div>
          </div>
        </section>

        {/* Schedule a Meeting Section with Enhanced Spacing */}
        <section
          id="schedule-meeting"
          className="px-8 md:px-28 lg:px-36 py-28 bg-white/5 backdrop-blur-md"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
            data-aos="fade-up"
          >
            Schedule a Meeting
          </h2>
          <p
            className="text-xl md:text-2xl text-center mb-20 leading-relaxed text-blue-100 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Book a time to discuss your project needs with our team and discover
            how we can bring your vision to life with our expertise and creative
            approach.
          </p>
          <div
            className="bg-white/10 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-xl border border-white/20"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <InlineWidget
              url="https://calendly.com/your-calendly-link"
              styles={{
                height: "650px",
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

        {/* Let's Connect Section - Enhanced with Blue Background, Sunrays and Sunlight Effects */}
        <section className="relative text-white w-full min-h-screen flex items-center justify-center px-8 md:px-28 lg:px-36 text-center overflow-hidden py-28 bg-white/5 backdrop-blur-md">
          {/* Enhanced light effects for this section */}
          <div className="absolute inset-0">
            {/* Additional light beams specific to this section */}
            <div
              className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full animate-pulse"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)",
                filter: "blur(40px)",
                opacity: 0.6,
                animation: "pulse 8s infinite alternate ease-in-out",
              }}
            />

            <div
              className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full animate-pulse"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                filter: "blur(30px)",
                opacity: 0.5,
                animation: "pulse 12s infinite alternate-reverse ease-in-out",
              }}
            />
          </div>

          {/* Content with Enhanced Spacing and Animations */}
          <div className="relative z-10 max-w-5xl mx-auto">
            <p
              className="text-base md:text-lg text-blue-200 mb-8 tracking-widest uppercase"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              2 spots available
            </p>
            <h2
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-10 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              Let's Connect
            </h2>
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-16 leading-relaxed text-blue-100 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              Feel free to contact me if having any questions. I'm available for
              new projects or just for chatting about creative ideas and
              possibilities.
            </p>
            <button
              className="bg-white text-blue-600 px-10 md:px-12 py-5 md:py-6 rounded-full text-xl md:text-2xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Book a free intro call →
            </button>
            <div
              className="flex justify-center space-x-8 mt-20"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {images.social.map((imgUrl, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-blue-200 hover:text-white transition-all duration-300 transform hover:scale-125"
                >
                  <img
                    src={imgUrl || "/placeholder.svg"}
                    alt={`Social icon ${index + 1}`}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-200 hover:border-white transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section with Enhanced Spacing */}
        <section className="px-8 md:px-28 lg:px-36 py-28 bg-white/10 backdrop-blur-md">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
            data-aos="fade-up"
          >
            Product design for easy community access
          </h2>
          <p
            className="text-xl md:text-2xl text-center mb-20 leading-relaxed text-blue-100 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Helping startups and brands to craft expressive and engaging
            solutions for their software needs with innovative design thinking.
          </p>
          <div className="flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-20">
            <div
              className="md:w-1/2"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src={images.experience || "/placeholder.svg"}
                alt="Experience Design"
                className="rounded-2xl shadow-xl w-full h-80 md:h-96 object-cover hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              />
            </div>
            <div
              className="md:w-1/2"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="bg-white/10 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-xl h-full border border-white/20">
                <div className="flex justify-between items-center mb-10">
                  <div className="text-blue-200 font-bold text-2xl">{"//"}</div>
                  <div className="flex space-x-6 md:space-x-8">
                    {["Cases", "Blog", "FAQ", "Get in Touch"].map(
                      (item, index) => (
                        <a
                          key={item}
                          href="#"
                          className="text-blue-200 text-base md:text-lg hover:text-white transition-colors"
                          data-aos="fade-up"
                          data-aos-delay={index * 100}
                        >
                          {item}
                        </a>
                      )
                    )}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                  Athos: Framer Portfolio Templates for UX Designers that Users
                  Will Love
                </h3>
                <p className="text-blue-100 mb-10 leading-relaxed text-lg">
                  Helping startups and brands to craft expressive and engaging
                  solutions for their software needs with a focus on user
                  experience and aesthetic appeal that drives engagement.
                </p>
                <button
                  className="bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Get Athos Templates for Free
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hire Me Section with Enhanced Spacing */}
        <section className="px-8 md:px-28 lg:px-36 py-28 bg-white/5 backdrop-blur-md">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
            data-aos="fade-up"
          >
            Hire me
          </h2>
          <p
            className="text-xl md:text-2xl text-center mb-20 leading-relaxed text-blue-100 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Whatever your goal – we will get you there with our expertise and
            dedication
          </p>
          <div className="flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-20">
            <div
              className="md:w-1/2"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <div className="bg-white/10 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-xl h-full hover:shadow-2xl transition-all duration-500 border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">
                  Acme Corp
                </h3>
                <p className="text-blue-100 mb-10 leading-relaxed text-lg">
                  "As a fellow UI/UX designer, I'm truly impressed by Athos
                  2.0's ability to create visually stunning and user-friendly
                  interfaces. Their Framer development skills bring designs to
                  life effortlessly. A true professional in the field who
                  delivers beyond expectations every time!"
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-800/50 rounded-full mr-6 overflow-hidden">
                    <img
                      src={images.testimonials[0] || "/placeholder.svg"}
                      alt="Maria Septimus"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg md:text-xl text-white">
                      Maria Septimus
                    </p>
                    <p className="text-blue-200 text-base md:text-lg">
                      Lead Designer, Acme Corp
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="md:w-1/2 bg-white/10 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <p className="text-sm text-blue-200 mb-6">
                Membership. Pause or cancel anytime.
              </p>
              <h3 className="text-3xl md:text-4xl font-bold mb-10 text-white">
                $4,995 /month, billed yearly
              </h3>
              <button
                className="bg-white text-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-full mb-10 text-lg md:text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-aos="fade-up"
              >
                Book an intro
              </button>
              <ul className="space-y-5 text-blue-100 text-lg md:text-xl">
                {[
                  "One request at a time",
                  "Average 48 hour delivery",
                  "Unlimited brands",
                  "Framer development",
                  "Unlimited stock photos",
                  "Pause or cancel anytime",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <span className="text-green-300 mr-3">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials Section with Enhanced Spacing */}
        <section className="px-8 md:px-28 lg:px-36 py-28 bg-white/10 backdrop-blur-md">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-20 text-white"
            data-aos="fade-up"
          >
            Relied upon by a fresh generation of Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {[
              {
                bg: "green",
                content: (
                  <>
                    <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                      99%
                    </h3>
                    <p className="text-blue-100 mb-8 text-lg md:text-xl">
                      reduction in hiring costs
                    </p>
                    <p className="text-blue-200 text-base md:text-lg">
                      Nolan Vaccaro, Director, Continental
                    </p>
                  </>
                ),
              },
              {
                bg: "purple",
                content: (
                  <>
                    <p className="text-blue-100 mb-8 text-lg md:text-xl">
                      Finding, hiring and managing remote tech talent with Athos
                      has never been faster, easier or more flexible for our
                      growing team.
                    </p>
                    <p className="text-blue-200 text-base md:text-lg">
                      Carla Dorwart, CEO, Lev19
                    </p>
                  </>
                ),
              },
              {
                bg: "blue",
                content: (
                  <>
                    <p className="text-blue-100 mb-8 text-lg md:text-xl">
                      Athos has allowed us to deliver on relevant projects on
                      time and strengthened our team with exceptional talent and
                      vision.
                    </p>
                    <p className="text-blue-200 text-base md:text-lg">
                      Justin Rhiel Madsen, Design Director, 3Lateral
                    </p>
                  </>
                ),
              },
              {
                bg: "gray",
                content: (
                  <>
                    <img
                      src={images.testimonials[1] || "/placeholder.svg"}
                      alt="AlphaWave"
                      className="mx-auto mb-8 rounded-full w-28 h-28 object-cover border-4 border-white/30 shadow-md"
                    />
                    <p className="text-blue-200 text-lg md:text-xl font-medium">
                      AlphaWave Technologies
                    </p>
                  </>
                ),
              },
              {
                bg: "orange",
                content: (
                  <>
                    <img
                      src={images.testimonials[2] || "/placeholder.svg"}
                      alt="Acme Corp"
                      className="mx-auto mb-8 rounded-full w-28 h-28 object-cover border-4 border-white/30 shadow-md"
                    />
                    <p className="text-blue-200 text-lg md:text-xl font-medium">
                      Acme Corporation
                    </p>
                  </>
                ),
              },
              {
                bg: "pink",
                content: (
                  <>
                    <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                      7X
                    </h3>
                    <p className="text-blue-100 mb-8 text-lg md:text-xl">
                      Faster than traditional hiring methods
                    </p>
                    <p className="text-blue-200 text-base md:text-lg">
                      Ashlynn Gouse, Head of Product, LogiTech
                    </p>
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-white/20"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))`,
                }}
              >
                {item.content}
              </div>
            ))}
          </div>
        </section>

        {/* Footer with Enhanced Spacing */}
        <footer
          className="flex flex-col md:flex-row justify-between items-center px-8 md:px-28 lg:px-36 py-12 text-blue-100 border-t border-white/20 bg-white/5 backdrop-blur-md"
          data-aos="fade-up"
        >
          <p className="text-lg md:text-xl mb-4 md:mb-0">
            © Hanzo Studio, {new Date().getFullYear()}
          </p>
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-blue-100 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-blue-100 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <p className="text-lg md:text-xl">Made with ❤️ in Framer</p>
          </div>
        </footer>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
        }

        /* Add scroll animation for parallax effect */
        .parallax {
          transform: translateY(calc(var(--scrollY) * -0.1px));
          transition: transform 0.1s ease-out;
        }
      `}</style>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Home;
