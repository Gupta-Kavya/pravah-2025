import React from 'react'
import '../style.css';
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="App overflow-hidden">
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center text-black p-8"
        style={{
          backgroundImage: 'url(/background.jpg)', // Replace with your texture background image path
        }}
      >
        {/* Left Corner Image Patterns (Hidden on mobile) */}
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-20 hidden sm:block">
          <img
            src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731942286/klovm3j5eouby04wwjpq.png"
            alt="Left Pattern 1"
            className="w-80"
          />
        </div>
        <div className="absolute bottom-0 left-0 transform -translate-x-8 translate-y-1/2 opacity-90 hidden sm:block">
          <img
            src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731942286/klovm3j5eouby04wwjpq.png"
            alt="Left Pattern 2"
            className="w-80"
          />
        </div>

        {/* Right Corner Image Patterns (Hidden on mobile) */}
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-80 hidden sm:block">
          <img
            src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731942286/klovm3j5eouby04wwjpq.png"
            alt="Right Pattern 1"
            className="w-80"
          />
        </div>

        <div className="absolute bottom-0 right-0 transform translate-x-16 translate-y-16 opacity-80 hidden sm:block">
          <img
            src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731942286/klovm3j5eouby04wwjpq.png"
            alt="Right Pattern 2"
            className="w-100"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-md text-center">
          {/* Logos */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <motion.img
              src="https://baselius.ac.in/wp-content/uploads/2022/10/download__10_-removebg-preview.png"
              alt="NAAC Logo"
              className="h-12"
              initial={{ opacity: 0, y: 20 }} // Initial state (invisible and slightly down)
              animate={{ opacity: 1, y: 0 }} // Final state (fully visible and moved to normal position)
              transition={{ duration: 1 }} // Duration of the animation
            />
            <div className="border-l-2 border-gray-300 h-8 mx-4"></div> {/* Vertical line */}
            <motion.img
              src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731940821/brltooiipjnbypobpw9x.png"
              alt="SKIT Logo"
              className="h-12"
              initial={{ opacity: 0, y: 20 }} // Initial state (invisible and slightly down)
              animate={{ opacity: 1, y: 0 }} // Final state (fully visible and moved to normal position)
              transition={{ duration: 1 }} // Duration of the animation
            />
            <div className="border-l-2 border-gray-300 h-8 mx-4"></div> {/* Vertical line */}
            <motion.img
              src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731940965/iekobc4hutqgbs5ton7c.png"
              alt="Another Logo"
              className="h-12"
              initial={{ opacity: 0, y: 20 }} // Initial state (invisible and slightly down)
              animate={{ opacity: 1, y: 0 }} // Final state (fully visible and moved to normal position)
              transition={{ duration: 1 }} // Duration of the animation
            />
          </div>

          {/* Institute Name */}
          <h1 className="text-sm font-semibold text-gray-800 sm:text-lg">
            <motion.span
              initial={{ opacity: 0, y: 20 }} // Initial state (invisible and slightly down)
              animate={{ opacity: 1, y: 0 }} // Final state (fully visible and moved to normal position)
              transition={{ duration: 1 }} // Duration of the animation
            >
              Swami Keshvanand Institute of Technology, Management Gramothan, Jaipur
            </motion.span>
          </h1>

          {/* Welcome Text */}
          <motion.p
            className="mt-4 text-lg font-sans text-[#B8860B]"
            initial={{ opacity: 0, y: 20 }} // Initial state (invisible and slightly down)
            animate={{ opacity: 1, y: 0 }} // Final state (fully visible and moved to normal position)
            transition={{ duration: 1 }} // Duration of the animation
          >
            Welcomes You To
          </motion.p>

          {/* Event Image */}
          <div className="mt-6">
            <motion.img
              src="/logo-text.png" // Replace with the actual path to the "Pravah 2025" image
              alt="Pravah 2025"
              className="mx-auto w-100"
              initial={{ opacity: 0, y: 50, scale: 0.8 }} // Initial state: hidden, positioned down, and slightly zoomed out
              animate={{ opacity: 1, y: 0, scale: 1 }} // Animate to fully visible, original position, and normal scale
              transition={{ duration: 1, ease: "easeInOut" }} // Animation duration and easing
            />
          </div>



          

          {/* Button */}
          <div className="mt-14">
            <motion.button
              className="button-transition px-6 py-3 bg-[#996515] text-white font-semibold rounded-full"
              initial={{ opacity: 0, y: 50, scale: 0.9 }} // Initial state: hidden, positioned down, and slightly zoomed out
              animate={{ opacity: 1, y: 0, scale: 1 }} // Animate to fully visible, original position, and normal scale
              transition={{ duration: 0.7, ease: 'easeInOut' }} // Animation duration and easing
            >
              <span className="text">Dive into Pravah</span>
              <span className="group-hover:inline-block ml-3">
                <img
                  src="https://pravah.skit.ac.in/_next/static/media/cursorTwo.349a9f8e.png"
                  alt="Right Arrow"
                  className="w-5 h-5 inline-block"
                />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
