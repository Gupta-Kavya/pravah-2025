import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Importing the call icon
import { motion } from 'framer-motion'; // Importing motion from framer-motion

const Coordinator = ({ name, number }) => {
  return (
    <motion.div
      className="flex justify-center items-center py-6"
      initial={{ opacity: 0, y: 50 }} // Start with the card off-screen
      whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
      viewport={{ once: false, amount: 0.2 }} // Trigger once when 20% of the card is visible
      transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for the animation
    >
      <div
        className={`relative p-5 bg-gray-50 w-full sm:w-[280px] border text-center border-gray-300 rounded-[15px] flex flex-col justify-center ${
          number ? 'pb-12' : 'pb-6'
        }`} // Adjust padding if number is not present
      >
        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800 font-sans">{name}</h2>

        {/* Call Button (Shown Only if the Phone Number Exists) */}
        {number && (
          <a
            href={`tel:${number}`} // Trigger call on click
            className="absolute bottom-0 left-0 right-0 flex justify-center items-center rounded-b-[15px] bg-gradient-to-r from-[#d67c3b] to-[#910891] px-6 py-2 text-center text-sm font-bold text-white transition-all"
          >
            Call Now
            <FaPhoneAlt className="ml-2 h-4 w-4" /> {/* Call icon from React Icons */}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Coordinator;
