import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import contactImg from "../assets/faq.jpg"; // Replace with your image path

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", reason: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-white px-20 py-20 text-black">
      <ToastContainer />
      {/* Heading + Tagline */}
      <div className="mb-12 text-center" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold mb-2">Contact Us</h2>
        <p className="text-lg">
          We'd love to help you. Drop us a message and we’ll get back to you shortly.
        </p>
      </div>

      {/* Container with Image and Form side by side */}
      <div
        className="max-w-full mx-auto bg-gray-50 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row"
        data-aos="fade-up"
        data-aos-delay="200"
      >
       

        {/* Right side - Form box */}
        <div className="md:w-1/2 p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Row for Name & Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block font-semibold mb-1 text-black">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-1 text-black">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Reason for Contact */}
            <div>
              <label className="block font-semibold mb-1 text-black">Reason for Contact</label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a reason</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-1 text-black">Your Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Write your message here..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
         {/* Left side - Image box */}
        <div className="md:w-1/2 h-80 md:h-auto">
          <img
            src={contactImg}
            alt="Contact visual"
            className="object-cover bg-fixed w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
