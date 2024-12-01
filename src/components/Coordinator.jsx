import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Importing the call icon
import { Popover } from "flowbite-react"; // Importing Popover from Flowbite
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
      <div className="relative p-5 bg-gray-50 w-full sm:w-[280px] border text-center border-gray-300 rounded-[15px] flex flex-col">
        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800 mb-8">{name}</h2>

        {/* Popover on Hover and Call Button */}
        <Popover
          trigger="hover" // This will show the popover on hover
          aria-labelledby="default-popover"
          content={
            <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
              <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">Contact Info</h3>
              </div>
              <div className="px-3 py-2">
                <p>Phone number: {number}</p>
              </div>
            </div>
          }
        >
          <a
            href={`tel:${number}`} // Trigger call on click
            className="absolute bottom-0 left-0 right-0 flex justify-center items-center rounded-b-[15px] bg-gradient-to-r from-[#d67c3b] to-[#910891] px-6 py-2 text-center text-sm font-bold text-white transition-all"
          >
            Call Now
            <FaPhoneAlt className="ml-2 h-4 w-4" /> {/* Call icon from React Icons */}
          </a>
        </Popover>
      </div>
    </motion.div>
  );
};

export default Coordinator;
