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
import Comingsoon from './Comingsoon';
import { Helmet } from 'react-helmet';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

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

        const response = await fetch(`${process.env.REACT_APP_API_URL}api/aaveg`);
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

    <div className=" text-gray-900 relative overflow-hidden  ">

      <Helmet  >
        <title>Aaveg 2025 - Ignite Your Passion | SKIT</title>
        <meta
          name="description"
          content="Join Aaveg 2025 at SKIT and unleash your energy in this dynamic sports and cultural extravaganza celebrating the spirit of Incredible India."
        />
        <meta
          name="keywords"
          content="Aaveg 2025, Incredible India, sports events, cultural events, SKIT, Swami Keshvanand Institute of Technology, youth fest, competitions"
        />
        <meta
          property="og:title"
          content="Aaveg 2025 - Ignite Your Passion | SKIT"
        />
        <meta
          property="og:description"
          content="Experience the thrill of Aaveg 2025 at SKIT, where sportsmanship meets culture, embodying the vibrant essence of Incredible India."
        />
        <meta property="og:url" content="https://pravah.skit.ac.in/skit-pravah-2025-AAVEG" />
        <meta
          name="author"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
        <meta
          name="organization"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
      </Helmet>


      {/* Loading Bar */}
      {/* <LoadingBar
        color="#FF6A00" // Customize the color of the loading bar
        height={3} // Set the height of the loading bar
        ref={loadingBar} // Reference to control loading bar
      /> */}

      {/* Navbar */}
      <Navbarr />
      <ParallaxProvider>
        <Parallax speed={-10}>
          <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 mt-32 relative mb-20">
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
                  className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black tracking-tight"
                >
                  AAVEG'25
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-[4px] bg-gradient-to-r from-[#632a6e] to-[#941694] mt-1 rounded-full"></span>
                </motion.h1>
              </div>




              {/* Search Bar */}
              {/* <motion.div
                className="relative w-96 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <input
                  type="text"
                  placeholder="Search AAVEG events..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full px-5 py-3 text-gray-800 bg-white bg-opacity-70 border border-gray-300 rounded-full shadow-lg focus:outline-none "
                  style={{ backdropFilter: 'blur(10px)' }}
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-purple-600">
                  <FaSearch className="text-lg" />
                </span>

              </motion.div> */}

            </motion.section>

            {/* Render events dynamically */}
            <motion.div className="mt-10 flex flex-wrap justify-center items-center gap-8 w-full max-w-6xl mb-20">
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
                    className="flex flex-col items-center bg-gray-100 rounded-xl overflow-hidden border border-gray-400 cursor-pointer"
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
                    {/* <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center rounded-xl"
                  style={{
                    backgroundImage: 'url(/22501515_15201.jpg)',
                    opacity: 0.1,
                  }}
                ></div> */}

                    <div className="relative w-full h-44 md:h-48 p-3 group">

                      <img
                        className="object-cover w-80 h-40 sm:h-48 rounded-xl border-2 border-gray-100"
                        src={event.eventImage}
                        alt={event.eventName}
                      />


                    </div>

                    <div className="flex flex-col justify-between p-3 leading-normal space-y-4 w-full">
                      <h5
                        className="text-2xl font-bold text-gray-900 tracking-tight text-center mt-2"
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




            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-3 mt-28 cookie-regular relative">
              <motion.span
                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                className="relative inline-block"
              >
                Faculty Coordinator's
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-[3px] bg-gradient-to-r from-[#FF6A00] to-[#660066] mt-1 rounded-full"></span>
              </motion.span>
            </h2>



            {/* Coordinator Cards */}
            <div className="flex justify-center items-center font-sans">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
                <Coordinator name="Mr. M.K. Beniwal" />
                <Coordinator name="Mr. Abhishek Gupta" />
                <Coordinator name="Mr. Ajeet Sihag" />
                <Coordinator name="Mrs. Amrita Bhandari" />
              </div>
            </div>





            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-3 mt-8 cookie-regular relative">
              <motion.span
                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                className="relative inline-block"
              >
                Student Coordinator's
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

        </Parallax>


        <motion.div
          className="fixed -bottom-0 left-0 w-full hidden sm:block pointer-events-none -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/rb_2149151140.png"
            alt="Himalayas"
            className="w-full h-auto object-cover transform translate-y-[200px] translate-x-0 opacity-20"
          />
        </motion.div>

        <div className="fixed -bottom-0 left-0 w-full hidden sm:block pointer-events-none -z-20 ">
          <img
            src="/rb_2149158780.png"
            alt="Himalayas"
            className="w-full h-auto object-cover transform translate-y-[300px] translate-x-0 opacity-10 "
          />
        </div>

      </ParallaxProvider>
      {/* Desktop Footer */}
      <DesktopFooter />
    </div>
  );
};

export default Aaveg;
