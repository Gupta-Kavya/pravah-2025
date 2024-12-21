import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "../style.css";
import { FaArrowRight } from "react-icons/fa";
import Home from "./Home";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { RiVoiceprintFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Landing = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDiveIntoPravah = () => {
    setShowLanding(false);
  };

  return (


    <>


      <div
        className="relative h-screen overflow-hidden bg-gradient-to-b from-[#F3E5F5] to-[#D1C4E9] "
        style={{ zIndex: 1000 }}
      >
        {/* Logo Container */}
        {/* <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-lg shadow-lg z-20">
        <div className="flex flex-row items-center space-y-2">
          <img src="/skit_logo.png" alt="Logo 1" className="w-16 h-16" />
        </div>
      </div> */}

      

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFEBEE] to-[#E1F5FE] bg-pattern-stripes"></div>

        <div className="fixed bottom-4 right-4 z-50" style={{ zIndex: 100 }}>
          <button
            onClick={handleAudioToggle}
            className="p-3 bg-gradient-to-r from-black to-black text-white rounded-full shadow-lg border-2 border-purple-400"
          >
            {isPlaying ? (
              <FaMicrophoneSlash size={24} color="white" />
            ) : (
              <RiVoiceprintFill size={24} color="white" />
            )}
          </button>
        </div>

        {/* Audio Element */}
        <audio ref={audioRef} src="/section1-audio.mp3" />

        {/* Landing Page */}
        {showLanding && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full z-50"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="relative h-screen flex flex-col justify-center items-center">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFEBEE] to-[#E1F5FE] opacity-80"></div>
              <div className="absolute top-10 left-20 w-60 h-60 bg-[#ffa79f] rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#80DEEA] rounded-full filter blur-2xl opacity-80 animate-pulse"></div>

              <div className="fixed bottom-4 left-4 z-50">
  <img
    src="/skit_logo.png"
    alt="Logo"
    className="w-16 h-16 sm:w-20 sm:h-20 object-contain hidden sm:block"
  />
</div>



<div className="fixed -bottom-20 left-1/2 transform -translate-x-1/2 z-0 flex justify-center w-full">
  <img
    src="/rb_38558.png"
    alt="Logo"
    className="w-full h-full sm:w-full sm:h-full object-contain opacity-5"
    draggable="false"
  />
</div>

<div className="fixed -top-28 left-1/2 transform -translate-x-1/2 z-0 flex justify-center w-full">
  <img
    src="/rb_37172 - Copy.png"
    alt="Logo"
    className="w-full h-full sm:w-full sm:h-full object-contain opacity-5"
    draggable="false"
  />
</div>





              <div className="text-center px-6 relative z-10 hidden sm:block">

                
                <motion.h1
                  className="uppercase text-[18vw] sm:text-[16vw] md:text-[14vw] font-bold lexend sm:tracking-[15px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #D32F2F, #FF5252, #D32F2F)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                >
                  Pravah'25
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-4xl md:text-3xl font-light text-gray-800 mb-2 tracking-wide"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                >
                  Swami Keshvanand Institute of Technology, Management & Gramothan, Jaipur
                </motion.p>

                <motion.p
                  className="text-2xl sm:text-3xl font-medium text-gradient mb-6 text-pink-700 kanit-thin"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                >
                  Celebrating 25 Years of Excellence and the Spirit of Incredible India
                </motion.p>

                <motion.p
                  className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 transition-transform transform hover:scale-105"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
                >
                  <span className="font-bold dynapuff">Annual</span>
                  <span className="font-bold silkscreen-regular ml-4">Techno</span>
                  <span className="font-medium ml-4 pacifico-regular">Cultural</span>
                  <span className="font-light ml-4 audiowide-regular">Sports</span>
                  <span className="font-bold ml-4 font-mono">Fest</span>
                </motion.p>

                <motion.button
                  className="relative px-8 py-4 text-white rounded-full bg-gradient-to-r from-[#311321] to-[#311321] transition-all duration-300 hover:scale-110 text-xl shadow-xl transform hover:rotate-12 border-none"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDiveIntoPravah}
                >
                  <span className="relative z-10 font-medium">Dive Into Pravah</span>
                  <FaArrowRight className="inline-block ml-3 animate-bounce" />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#9C27B0] to-[#6200EA] opacity-20 blur-sm"></div>
                </motion.button>
              </div>



              <div className="flex flex-col justify-center items-center px-4 relative z-10 sm:hidden text-center max-h-screen">

{/* <img
  src="/skit_logo.png"
  alt="Logo"
  className="w-16 h-16 object-contain m-auto mb-10"
/> */}

<motion.h1
  className="uppercase text-[10vw] sm:text-[8vw] md:text-[6vw] font-bold lexend sm:tracking-[15px]"
  style={{
    backgroundImage: "linear-gradient(to right, #D32F2F, #FF5252, #D32F2F)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: -50 }}
  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
>
  Pravah'25
</motion.h1>

<motion.p
  className="text-sm sm:text-lg md:text-xl font-light text-gray-800 mb-2 tracking-wide"
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -50 }}
  transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
>
  Swami Keshvanand Institute of Technology, Management & Gramothan, Jaipur
</motion.p>

<motion.p
  className="text-base sm:text-xl md:text-2xl font-medium text-gradient mb-6 text-pink-700 kanit-thin"
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: 50 }}
  transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
>
  Celebrating 25 Years of Excellence and the Spirit of Incredible India
</motion.p>

<motion.p
  className="text-base sm:text-lg md:text-xl font-semibold mb-6 text-gray-800 transition-transform transform hover:scale-105 break-words"
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -50 }}
  transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
>
  <span className="font-bold dynapuff">Annual</span>
  <span className="font-bold silkscreen-regular ml-2 sm:ml-4">Techno</span>
  <span className="font-medium ml-2 sm:ml-4 pacifico-regular">Cultural</span>
  <span className="font-light ml-2 sm:ml-4 audiowide-regular">Sports</span>
  <span className="font-bold ml-2 sm:ml-4 font-mono">Fest</span>
</motion.p>

<motion.button
  className="relative px-4 sm:px-8 py-2 sm:py-4 text-white rounded-full bg-gradient-to-r from-[#311321] to-[#311321] transition-all duration-300 hover:scale-110 text-sm sm:text-xl shadow-xl transform hover:rotate-12 border-none"
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.95 }}
  onClick={handleDiveIntoPravah}
>
  <span className="relative z-10 font-medium">Dive Into Pravah</span>
  <FaArrowRight className="inline-block ml-2 sm:ml-3 animate-bounce" />
  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#9C27B0] to-[#6200EA] opacity-20 blur-sm"></div>
</motion.button>
</div>



            </div>
          </motion.div>
        )}

        {/* Curtain Animation */}
        {!showLanding && (
          <>
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFEBEE] to-[#E8EAF6] opacity-100"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#FFEBEE] to-[#E8EAF6] opacity-100"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </>
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













 

    </>
  );
};

export default Landing;
