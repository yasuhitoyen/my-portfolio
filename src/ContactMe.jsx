import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import CodingManIcon from "./assets/images/CodingMan.png";
import LampLightIcon from "./assets/images/LampLight.png";
import ArcText from "./ArcText";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const ContactMe = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access environment variables (make sure your .env is in the project root)
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      to_email: "michael.yasu.yen@gmail.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((resp) => {
        console.log("SUCCESS!", resp.status, resp.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message, please try again later.");
      });
  };

  return (
    <section id={id}>
      <motion.div
        className="w-full h-auto flex flex-col items-center text-white relative pb-[30px] c1 mt-[240px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
      
        {/* Arc Text Positioned at the Top */}
        <div className="relative w-full h-[0px] left-[-220px] top-[-160px] z-50 pointer-events-none">
          <ArcText />
        </div>

        {/* Background Icons */}
        <div className="relative w-full">
          <img
            src={CodingManIcon}
            className="w-[200px] h-[200px] absolute top-[-20px] left-[420px] z-10 select-none"
            alt="Coding Man Icon"
          />

          {/* Smooth "flicker" (pulsing) Lamp Light */}
          <motion.img
            src={LampLightIcon}
            alt="Lamp Light Icon"
            className="w-[190px] h-[180px] absolute top-[37px] left-[460px] z-0 select-none"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.45 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse", // smoothly animates back to initial
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Title */}
        <div className="text-center w-full relative z-10">
          <h1 className="c8-text text-[80px] font-bold">Contact Me</h1>
        </div>

        {/* Outer Form Container */}
        <div className="c2 p-4 mt-8 rounded-xl shadow-lg w-full max-w-[600px] mx-auto z-10">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="text-lg font-semibold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="c4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              required
            />

            <label className="text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="c4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              required
            />

            <label className="text-lg font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="c4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 resize-none"
              placeholder="Write your message here..."
              required
            />

            <motion.button
              type="submit"
              className="c9 py-2 px-4 mt-2 rounded-md font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Send
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
