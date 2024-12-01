import React, { useState, useEffect, useRef } from 'react';
import Navbarr from './Navbar';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import LoadingBar from 'react-top-loading-bar';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import styles for skeletons
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import { Button, Drawer } from "flowbite-react";
import Coordinator from './Coordinator';

const Aaveg = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]); // State for filtered events
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [loading, setLoading] = useState(true); // Track loading state
  const loadingBar = useRef(null); // Create a reference for the LoadingBar
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  // Fetch Aaveg data from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // loadingBar.current.continuousStart(); // Start loading bar when fetch begins

        const response = await fetch('https://skit-pravah-backend.vercel.app/api/aaveg');
        const data = await response.json();
        setEvents(data); // Store the fetched events data
        setFilteredEvents(data); // Initialize filtered events with all events

        // loadingBar.current.complete(); // Complete the loading bar when the data is loaded
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching Aaveg data:', error);
        // loadingBar.current.complete(); // Ensure loading bar completes even on error
        setLoading(false); // Handle error and stop loading
      }
    };

    fetchEvents();
  }, []);

  // Filter events based on search query
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = events.filter((event) =>
      event.eventName.toLowerCase().includes(query)
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className="font-serif text-gray-900 relative overflow-hidden">
      {/* Loading Bar */}
      {/* <LoadingBar
        color="#FF6A00" // Customize the color of the loading bar
        height={3} // Set the height of the loading bar
        ref={loadingBar} // Reference to control loading bar
      /> */}

      {/* Navbar */}
      <Navbarr />

      {/* Main Content */}
      <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 mt-16 relative">
        {/* Heading Section */}
        <motion.section
          className="text-center space-y-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 100 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="relative">
            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-500 tracking-widest pattaya-regular"
            >
              AAVEG'25
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              className="absolute right-0 top-6 md:top-16 text-sm md:text-md font-semibold text-gray-700 italic tracking-widest font-serif"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              The Silver Jubilee Year
            </motion.h2>

            {/* Circular Button */}
            <div className="absolute -right-14 top-4 md:top-12">
              <button
                className="w-2 h-2 rounded-full border-2 border-gray-400 bg-gray-100 relative flex items-center justify-center transition transform hover:scale-110"
                onClick={() => setIsOpen(true)}
              >
                {/* Concentric Circles */}
                <div className="absolute w-full h-full rounded-full border border-black animate-ping"></div>
                <div className="absolute w-4 h-4 rounded-full border border-black"></div>
              </button>

            </div>
          </div>




          {/* Search Bar */}
          <motion.div
            className="top-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative w-96 max-w-lg font-sans">
              <input
                type="text"
                placeholder="Search AAVEG events..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-5 py-3 text-gray-800 bg-white border border-gray-900 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-950 focus:border-transparent pr-12"
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
                <FaSearch className="text-lg" />
              </span>
            </div>
          </motion.div>

        </motion.section>

        {/* Render events dynamically */}
        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-40">
  {/* Check if events are loaded */}
  {loading ? (
    // Skeleton loading for events
    <div className="flex flex-wrap gap-8 w-full">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden w-full border border-gray-200"
        >
          <div className="w-full h-44 md:h-48 relative p-3">
            <Skeleton height={192} width="100%" />
          </div>
          <div className="flex flex-col justify-between p-6 leading-normal space-y-4 w-full">
            <Skeleton height={30} width="80%" />
            <Skeleton height={40} width="100%" />
          </div>
        </div>
      ))}
    </div>
  ) : filteredEvents.length > 0 ? (
    filteredEvents.map((event, index) => (
      <motion.div
        key={event._id}
        className="flex flex-col items-center bg-gray-50 rounded-xl shadow-lg overflow-hidden w-full border border-black"
        style={{ position: 'relative' }}
        initial={{ opacity: 0, y: 160 }} // Start animation state
        whileInView={{ opacity: 1, y: 120 }} // Trigger when in view
        viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% of the card is visible
        transition={{
          delay: index * 0.2, // Stagger based on index
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        {/* Background Image with Opacity Overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: 'url(/22501515_15201.jpg)',
            opacity: 0.1,
          }}
        ></div>

        <div className="w-full h-44 md:h-48 relative p-3">
          <img
            className="object-cover w-full h-48 rounded-xl border-2 border-gray-100"
            src={event.eventImage}
            alt={event.eventName}
          />
        </div>
        <div className="flex flex-col justify-between p-6 leading-normal space-y-4 w-full">
          <h5
            className="text-lg font-bold text-gray-900 tracking-tight cookie-regular text-center mt-2"
            style={{ fontSize: '35px' }}
          >
            {event.eventName}
          </h5>
          <button
            className="bg-gradient-to-r from-black to-black text-white font-bold w-full px-6 py-3 rounded-lg shadow-sm hover:bg-gradient-to-r hover:from-[#FF6A00] hover:to-[#660066] transition duration-300 abeezee-regular relative z-50"
            onClick={() =>
              window.open(event.eventRegistrationLink, '_blank')
            }
          >
            Join the Game
            <FaArrowRight className="ml-2 inline" />
          </button>
        </div>
      </motion.div>
    ))
  ) : (
    <p className="text-gray-600 relative"></p>
  )}


</motion.div>




<h2 className="text-3xl font-semibold text-gray-800 text-center mb-3 mt-8 cookie-regular relative">
  <motion.span
    initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
    whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
    viewport={{ once: false, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
    transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
    className="relative inline-block"
  >
    Faculty Coordinators
    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-[3px] bg-gradient-to-r from-[#FF6A00] to-[#660066] mt-1 rounded-full"></span>
  </motion.span>
</h2>



  {/* Coordinator Cards */}
  <div className="flex justify-center items-center font-sans">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
      <Coordinator name="M.K. Beniwal" number="9414201634" />
      <Coordinator name="Abhishek Gupta" number="9462326804" />
      <Coordinator name="Ajeet Sihag" number="9680190888" />
      <Coordinator name="Amrita Bhandari" number="8619438737" />
    </div>
  </div>





  <h2 className="text-3xl font-semibold text-gray-800 text-center mb-3 mt-8 cookie-regular relative">
  <motion.span
    initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
    whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
    viewport={{ once: false, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
    transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
    className="relative inline-block"
  >
    Student Coordinators
    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-[3px] bg-gradient-to-r from-[#FF6A00] to-[#660066] mt-1 rounded-full"></span>
  </motion.span>
</h2>




  {/* Coordinator Cards */}
  
<center>
<div className="flex justify-center items-center font-sans mb-8">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 w-full max-w-6xl">
    <Coordinator name="Ishan Yadav" number="9414201634" />
    <Coordinator name="Yogesh Kumar" number="9462326804" />
  </div>
</div>
</center>  



      </main>



      {/* Desktop Footer */}
      <DesktopFooter />
    </div>
  );
};

export default Aaveg;
