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
import { Modal } from "flowbite-react";


const Aaveg = () => {
  const [openModal, setOpenModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]); // State for filtered events
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [loading, setLoading] = useState(true); // Track loading state
  const loadingBar = useRef(null); // Create a reference for the LoadingBar
  const [isOpen, setIsOpen] = useState(false);
  const [form, setform] = useState("")
  const [title, setTitle] = useState("second")
  const [fees, setFees] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
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
      <Navbarr logo="https://res.cloudinary.com/dktkdi3sm/image/upload/v1735466875/aaveg_logo_wiqp6x.png" />
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
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-[4px] bg-gradient-to-r from-[#632a6e] to-[#7c087c] mt-1 rounded-full hidden sm:block"></span>
                </motion.h1>
              </div>


   

              {/* Search Bar */}
              <motion.div
                className="relative w-96 max-w-2xl hidden sm:block"
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

              </motion.div>

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
                    className="flex flex-col items-center bg-gray-100 rounded-xl overflow-hidden border border-gray-400 cursor-pointer opacity-10"
                    style={{
                      position: 'relative',


                    }}
                    initial={{ opacity: 0, y: 160 }} // Start animation state
                    whileInView={{ opacity: 1, y: 120 }} // Trigger when in view
                    viewport={{ once: false, amount: 0.2 }} // Trigger once, when 20% of the card is visible
                    transition={{
                      duration: 0.4,
                      ease: 'easeOut',
                    }}
                  >
                    {/* Background Image with Opacity Overlay */}
                    <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center rounded-xl hidden"
                  style={{
                    backgroundImage: 'url(/rb_36380.png)',
                    opacity: 0.1,
                  }}
                ></div>

                    <div className="relative w-72 sm:w-64 h-40 sm:h-32 p-3 group">
                      {/* Main Image */}
                      <img
                        className="object-cover w-72 sm:w-64 h-40 sm:h-32 rounded-xl"
                        src={event.eventImage}
                        alt={event.eventName}
                        draggable="false"
                      />

                      {/* Border Image */}
                      <div
                        className="absolute inset-0 w-72 sm:w-64 h-40 sm:h-32 pointer-events-none hidden sm:hidden"
                        style={{
                          backgroundImage: `url('/rb_2149086440.png')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'cover',
                        }}
                      />
                    </div>



                    <div className="flex flex-col justify-between p-3 leading-normal space-y-4 w-full">
                      <h5
                        className="text-xl font-bold text-gray-900 tracking-tight text-center mt-2"
                      >
                        {event.eventName}
                      </h5>
                      <button
                        className="bg-gradient-to-r from-black to-black text-white font-medium w-full px-6 py-3 rounded-lg shadow-sm  relative z-50 hidden sm:block"
                        // onClick={() =>
                        //   window.open(event.eventRegistrationLink, '_blank')
                        // }

                        onClick={() => { setOpenModal(true); setform(event.eventRegistrationLink); setTitle(event.eventName); setFees(event.eventFees) }}

                      >
                        Join the Game
                        <FaArrowRight className="ml-2 inline" />

                      </button>


                      <button
                        className="bg-gradient-to-r from-black to-black text-white font-medium w-full px-6 py-3 rounded-lg shadow-sm  relative z-50 sm:hidden"
                        // onClick={() =>
                        //   window.open(event.eventRegistrationLink, '_blank')
                        // }

                        onClick={() => { setIsOpen(true); setform(event.eventRegistrationLink); setTitle(event.eventName); setFees(event.eventFees) }}

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
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-8 w-full">
                <Coordinator name="Mr. M.K. Beniwal" number="9414201634" />
                <Coordinator name="Mr. Chandan Kumar" number="9460481589" />
                <Coordinator name="Mr. Ajeet Sihag" number="9680190888" />
                <Coordinator name="Mrs. Amrita Bhandari" number="8619438737" />
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
                  <Coordinator name="Chahat Shrimali" number="9929715052" />
                  <Coordinator name="Harsh Nagori" number="9672419399   " />
                </div>
              </div>
            </center>



          </main>

        </Parallax>


        <motion.div
          className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/rb_2149151140.png"
            alt="Pravah 2025 - Incredible India | SKIT"
            className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[200px] translate-x-0 opacity-20"
          />
        </motion.div>

        <div className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-20 ">
          <img
            src="/rb_2149158780.png"
            alt="Pravah 2025 - Incredible India | SKIT"
            className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[300px] translate-x-0 opacity-10 "
          />
        </div>

      </ParallaxProvider>

      <Modal
        show={openModal}
        onClose={() => { setOpenModal(false); setIsLoading(true); }}
        style={{ zIndex: 2000 }}
        size="lg"
        className='backdrop-filter backdrop-blur-lg'
      >
        <Modal.Header className="border-b border-gray-300 py-4 px-6 bg-gray-100 rounded-t-2xl">
          <h2 className="text-xl font-bold text-gray-800">{title} Registration</h2>
        </Modal.Header>

        <Modal.Body className="h-[100vh] relative p-0 bg-gray-100 overflow-hidden" >
          {isLoading && (
            <div className="flex items-center justify-center absolute inset-0 bg-white bg-opacity-60">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-600 border-t-transparent"></div>
            </div>
          )}

          <iframe
            src={form}
            frameBorder="0"
            className={`w-full h-96 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}  `}
            onLoad={() => setIsLoading(false)}
          />
        </Modal.Body>

        <Modal.Footer className="bg-gray-50 border-t border-gray-300 py-5 px-6 shadow-md rounded-b-2xl">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-lg font-semibold text-gray-800">Registration Fee</h3>
            <span className="text-xl font-bold text-gray-600">
              {fees === 0 ? "Available Soon" : "₹" + fees}
            </span>
          </div>
        </Modal.Footer>
      </Modal>



      <Drawer
        open={isOpen}
        onClose={() => {
          handleClose();
          setIsLoading(true);
        }}
        style={{ zIndex: 2000 }}
        className="w-full sm:w-[500px] bg-white h-full shadow-lg"
      >
        {/* Header Section */}
        <Drawer.Header title={title + ' - Registration'}>
          <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-t-xl shadow-md">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={handleClose}
              className="text-white text-2xl hover:text-gray-300 transition-all"
            >
              ×
            </button>
          </div>
        </Drawer.Header>

        {/* Drawer Content */}
        <Drawer.Items className="h-[calc(100vh-120px)] overflow-hidden relative p-0 bg-gray-100">
          {/* Loading Spinner */}
          {isLoading && (
            <div className="flex items-center justify-center absolute inset-0 bg-white bg-opacity-50">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-600 border-t-transparent"></div>
            </div>
          )}

          {/* Iframe Content */}
          <iframe
            src={form}
            frameBorder="0"
            className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
          />
        </Drawer.Items>

        {/* Footer Section */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-50 border-t border-gray-300 rounded-b-xl shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Registration Fee</h3>
            <span className="text-xl font-bold text-blue-700">
              {fees === 0 ? 'Available Soon' : `₹${fees}`}
            </span>
          </div>
        </div>
      </Drawer>


      {/* Desktop Footer */}
      <DesktopFooter />
    </div>
  );
};

export default Aaveg;
