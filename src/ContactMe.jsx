import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

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

  const [verified, setVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    setVerified(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verified) {
      alert("Please verify that you are not a robot.");
      return;
    }

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
        setVerified(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message, please try again later.");
      });
  };

  return (
    <section id={id}>
      <div className="relative bg-[#F8F5EF] h-[1200px] flex flex-col items-center justify-center pt-12 md:pt-10 lg:pt-10">
        <motion.div
          className="w-full h-auto flex flex-col items-center relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Title */}
          <div className="text-center w-full relative z-10 mb-10">
            <h1 className="text-[50px] md:text-[60px] font-light text-[#0F1013] select-none">
              Contact Me
            </h1>
          </div>

          {/* Form Container */}
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg w-full max-w-[600px] mx-auto z-10 border border-white/20">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="text-lg font-light text-[#0F1013] block mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/80 text-[#0F1013] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 font-light"
                  required
                />
              </div>

              <div>
                <label
                  className="text-lg font-light text-[#0F1013] block mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/80 text-[#0F1013] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 font-light"
                  required
                />
              </div>

              <div>
                <label
                  className="text-lg font-light text-[#0F1013] block mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/80 text-[#0F1013] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 resize-none font-light"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="not-robot"
                  checked={verified}
                  onChange={handleCheckbox}
                  className="accent-[#0F1013] w-4 h-4"
                />
                <label
                  htmlFor="not-robot"
                  className="text-sm font-light text-[#0F1013]"
                >
                  I'm not a robot
                </label>
              </div>

              <motion.button
                type="submit"
                className="bg-[#0F1013] text-[#F8F5EF] py-3 px-6 mt-4 rounded-lg font-light text-lg transition-all duration-300 hover:bg-[#0F1013]/90"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
        <div className="absolute bottom-2">
          <h1>Copyright © 2024 Michael Yen. All Rights Reserved.</h1>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
