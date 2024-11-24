import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../style.css';

const Navbarr = ({ bgColor, textColor, filter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-20 top-0 left-0 transition-colors duration-1000 ease-in-out ${isDesktop ? bgColor : 'bg-white'
          }`}
      >
        {/* Announcement Bar */}
        <div className="bg-gradient-to-r from-[#130d00] via-[#01001d] to-[#3d0075] text-white text-sm md:text-base font-medium py-2 sm:hidden">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            Pravah 2024 is about to hit. Have you registered for any event?{' '}
            <a
              href="#"
              className="text-blue-200 underline font-semibold hover:text-blue-600 transition"
            >
              Click here
            </a>{' '}
            for event registration.
          </div>
        </div>

        {/* Navbar */}
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-4">
          {/* Left Links (for desktop) */}
          <div className="hidden md:flex space-x-8 items-center flex-grow justify-start">
            <a
              href="#"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'
                } hover:text-red-700 transition border-r-2 border-gray-400 pr-4`}
            >
              HOME
            </a>
            <a
              href="#"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'
                } hover:text-red-700 transition border-r-2 border-gray-400 pr-4`}
            >
              EVENTS & REGISTRATIONS
            </a>
            <a
              href="#"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'
                } hover:text-red-700 transition pr-4`}
            >
              AAVEG
            </a>
          </div>

          {/* Logo (Centered) */}
          <div className="sm:flex sm:justify-center sm:items-center flex-grow">
            <img
              src="https://pravah.skit.ac.in/_next/static/media/navbarText.cfcb7a68.png"
              className={`sm:w-32 w-32 ${filter ? filter : ''}`} // Apply filter dynamically
              alt="SKIT M & G Logo"
            />

            <img
              src="/logo.png"
              className={`sm:w-32 w-32 hidden sm:block`} // Apply filter dynamically
              alt="SKIT M & G Logo"
            />
          </div>

          {/* Right Links (for desktop) */}
          <div className="hidden md:flex space-x-8 items-center flex-grow justify-end">
            <a
              href="#"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'
                } hover:text-red-700 transition border-r-2 border-gray-400 pr-4`}
            >
              ABOUT US
            </a>
            <a
              href="#"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'
                } hover:text-red-700 transition border-r-2 border-gray-400 pr-4`}
            >
              SPONSORS
            </a>
            <a
              href="#"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'
                } hover:text-red-700 transition`}
            >
              TEAM PRAVAH
            </a>
          </div>

          {/* Toggler Button for Mobile */}
          <button
            className="md:hidden text-yellow-800 focus:outline-none"
            onClick={toggleNavbar}
          >
            <motion.img
              src="https://cdn.iconscout.com/icon/free/png-256/free-diwali-rangoli-icon-download-in-svg-png-gif-file-formats--decoration-festival-celebration-pack-days-icons-1579239.png" // Replace with the path to your image
              alt="Menu Icon"
              className="h-8 w-8 transform transition-transform duration-300"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden transition-all duration-500 bg-white ${isOpen ? 'h-screen w-full' : 'h-0 w-0'
            }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
          }}
          transition={{ duration: 0.5 }}
          style={{
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeNavbar}
            className="absolute top-4 right-4 text-3xl text-black"
          >
            &times;
          </button>

          <div className="flex flex-col items-center space-y-4 py-8">
            <a
              href="#"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              EVENTS & REGISTRATIONS
            </a>
            <a
              href="#"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              AAVEG
            </a>
            <a
              href="#"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              SPONSORS
            </a>
            <a
              href="#"
              className="text-lg font-medium text-black hover:text-yellow-600 transition"
            >
              TEAM PRAVAH
            </a>

            {/* Himalayas graphic image */}
            <img
              src="/himalya.png"
              alt="Himalayas Graphics"
              className="mt-8 w-full max-w-md object-contain transform translate-y-1/2"
            />
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbarr;
