import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to detect active link
import '../style.css';

const Navbarr = ({ bgColor, textColor, filter, announce }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const location = useLocation(); // Get the current location

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

  // Function to determine if the current link is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 transition-colors duration-1000 ease-in-out bg-white  ${isDesktop ? bgColor : 'bg-white'}`}
        style={{ zIndex: 1000 }}
      >
        {/* Announcement Bar */}
        <div className={`bg-gradient-to-r from-[#221b63] via-[#01001d] to-[#3d0075] text-white text-sm md:text-base font-medium py-2 ${isDesktop ? announce : 'hidden'} `}>
          <div className="max-w-screen-xl mx-auto px-4 text-center font-sans">
            Pravah 2024 is about to hit. Have you registered for any event?{' '}
            <Link
              to="/event-registration"
              className="text-blue-200 underline font-semibold hover:text-blue-600 transition"
            >
              Click here
            </Link>{' '}
            for event registration.
          </div>
        </div>

        {/* Navbar */}
        <div className="max-w-screen-xl flex items-center justify-center mx-auto px-4 py-4 dynapuff bg-white">
          {/* Left Links (for desktop) */}
          <div className="flex space-x-8 items-center flex-shrink-0 justify-end">
            <Link
              to="/skit-pravah-2025"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
            >
              HOME
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/skit-pravah-2025') ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
            <Link
              to="/skit-pravah-2025-events"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
            >
              EVENTS & REGISTRATIONS
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/skit-pravah-2025-events') ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
            <Link
              to="/skit-pravah-2025-AAVEG"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
            >
              AAVEG
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/skit-pravah-2025-AAVEG') ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
          </div>

          {/* Logo (Centered) */}
          <div className="flex justify-center items-center flex-grow">
            <img
              src="https://pravah.skit.ac.in/_next/static/media/navbarText.cfcb7a68.png"
              className={`sm:w-28 w-28 ${filter ? filter : ''}`} // Apply filter dynamically
              alt="SKIT M & G Logo"
            />
            <img
              src="/logo.png"
              className="sm:w-28 w-28 hidden sm:block"
              alt="SKIT M & G Logo"
            />
          </div>

          {/* Right Links (for desktop) */}
          <div className="flex space-x-8 items-center flex-shrink-0 justify-start">
            <Link
              to="/about-skit-pravah-2025"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
            >
              ABOUT US
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/about-skit-pravah-2025') ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
            <Link
              to="/skit-pravah-2025-sponsors"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
            >
              SPONSORS
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/skit-pravah-2025-sponsors') ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
            <Link
              to="/team"
              className={`text-md font-medium ${isDesktop ? textColor : 'text-black'} relative pb-1 group`}
            >
              TEAM PRAVAH
              <span
                className={`absolute bottom-0 left-0 h-1 bg-yellow-900 rounded-full transition-all duration-500 group-hover:w-full ${isActiveLink('/team') ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
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
          className={`md:hidden transition-all duration-500 bg-white ${isOpen ? 'h-screen w-full' : 'h-0 w-0'}`}
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
            <Link
              to="/"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              HOME
            </Link>
            <Link
              to="/events"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              EVENTS & REGISTRATIONS
            </Link>
            <Link
              to="/aaveg"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              AAVEG
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              ABOUT US
            </Link>
            <Link
              to="/sponsors"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              SPONSORS
            </Link>
            <Link
              to="/team"
              className="text-lg font-medium text-black hover:text-yellow-600 transition pb-4"
            >
              TEAM PRAVAH
            </Link>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbarr;
