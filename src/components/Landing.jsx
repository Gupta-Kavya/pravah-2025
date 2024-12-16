import React, { useState } from "react";
import { motion } from "framer-motion";
import "../style.css";
import { FaArrowRight } from "react-icons/fa";
import Home from "./Home";

const Landing = () => {
  const [showLanding, setShowLanding] = useState(true);

  const handleDiveIntoPravah = () => {
    setShowLanding(false);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Landing Page */}
      {showLanding && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-black z-50"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="relative h-screen flex flex-col lg:flex-row">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 bg-black flex flex-col justify-center items-center p-4">
              <div className="mt-4 text-center px-6">
                <motion.img
                  src="https://pravah.skit.ac.in/_next/static/media/navbarText.cfcb7a68.png"
                  alt=""
                  className="filter invert sepia-0 saturate-0 brightness-200 w-40"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>

              <div className="mt-8 text-center px-6">
                <motion.p
                  className="text-xl font-semibold lexend mb-2 text-white"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                >
                  Presents Our
                </motion.p>

                <motion.p
                  className="text-4xl md:text-6xl lg:text-7xl font-bold lexend"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #FF6F00, #00A859, #FFFFFF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                >
                  Annual Techno Cultural Sports Fest
                </motion.p>
              </div>

              <div className="mt-6 w-2/3 h-1 bg-gradient-to-r from-[#797979] to-[#7c7c7c] rounded-full"></div>

              <div className="mt-6 text-center px-6">
                <motion.p
                  className="text-white text-lg font-semibold lexend"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
                >
                  Celebrating Diversity, Culture, and Innovation
                </motion.p>


              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 relative overflow-hidden">
              <video
                className="absolute top-0 left-0 w-full h-[100vh] object-cover hidden sm:block"
                src="/teaser.mp4"
                autoPlay
                loop
                muted
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

                {/* Logos Section */}
                <div className="flex justify-center items-center space-x-4 mb-8">
                  <img
                    src="/logo.png"
                    alt="Logo 1"
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                  <img
                    src="/skit_logo.png"
                    alt="Logo 2"
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                  {/* <img
                    src="/file (13).png"
                    alt="Logo 3"
                    className="w-16 h-16 md:w-20 md:h-20"
                  /> */}
                </div>

                <motion.h1
                  className="uppercase bungee-shade-regular text-4xl sm:text-8xl md:text-[6rem] lg:text-[5rem]"
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  PRAVAH'25
                </motion.h1>

                <div className="mt-8">
                  <motion.button
                    className="px-6 py-3 text-white rounded-full border-2 border-transparent bg-transparent transition-all duration-300 hover:scale-105 squada-one-regular text-lg"
                    style={{
                      borderImage: "linear-gradient(to right, #FF7E5F, #FEB47B) 1",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDiveIntoPravah}
                  >
                    Dive Into Pravah <FaArrowRight className="inline-block ml-2" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Home Page */}
      <motion.div
        className="relative h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLanding ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Home />
      </motion.div>
    </div>
  );
};

export default Landing;
