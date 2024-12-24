import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbarr from "./Navbar";
import DesktopFooter from "./DesktopFooter";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaArrowRight } from "react-icons/fa";
import Coordinator from "./Coordinator";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Eventdetails = () => {
  const { eventid } = useParams(); // Get the eventid from URL
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to format date in '12 December 2024' format
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  // Function to format time in AM/PM format
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  // Fetch event details using event ID
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(
          `https://skit-pravah-backend.vercel.app/api/events/${eventid}`
        );
        const data = await response.json();
        setEvent(data); // Set event details
      } catch (error) {
        setError("Failed to fetch event details. Please try again.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchEventDetails();
  }, [eventid]);

  return (
    <div>
      <Navbarr />
      <ParallaxProvider>
        <Parallax speed={-15}>
          <main className="min-h-screen flex flex-col items-center px-6 md:px-12 mt-28 relative mb-40">
            {/* Heading Section */}
            <motion.section
              className="text-center space-y-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative">
                <motion.h1
                  className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black font-sans tracking-tight"
                >
                  {loading ? <Skeleton width={300} /> : event?.eventTitle}
                </motion.h1>
                {/* <motion.h2
                  className="absolute right-0 top-6 md:top-16 text-sm md:text-md font-semibold text-gray-500 italic tracking-widest font-serif"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  {loading ? <Skeleton width={150} /> : event?.eventCategory}
                </motion.h2> */}
              </div>
            </motion.section>

            {/* Event Details */}
            {loading ? (
              <div className="w-full max-w-6xl mb-40">
                <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden w-full border border-gray-200">
                  <Skeleton height={300} width="100%" />
                  <div className="p-6 w-full">
                    <Skeleton height={40} width="80%" />
                    <Skeleton height={20} width="40%" />
                    <Skeleton height={40} width="60%" />
                    <Skeleton height={20} width="30%" />
                  </div>
                </div>
              </div>
            ) : error ? (
              <p className="text-red-500 relative">{error}</p>
            ) : (
              <motion.div
                className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mb-16 transition-transform transform hover:scale-105 border border-gray-200 mt-0"
                initial={{ opacity: 0, y: 160 }}
                animate={{ opacity: 1, y: 150 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >


                {/* Event Image */}
                <div className="w-full md:w-1/2 h-60 md:h-80 relative ml-0">
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md">
                    {event.eventparticipationCategory === "Single" ? "Individual Event" : "Team Event"}
                  </div>
                  <img
                    className="object-cover w-full h-full rounded-l-lg"
                    src={event?.eventImage}
                    alt={event?.eventTitle}
                  />
                </div>

                {/* Event Info */}
                <div className="flex flex-col items-center md:items-start w-full md:w-1/2 p-8 space-y-6 h-full justify-between text-center md:text-left font-sans">
                  {/* Event Title */}
                  {/* <h2 className="text-3xl font-bold text-gray-800 tracking-tight">{event?.eventTitle}</h2> */}

                  {/* Date */}
                  <p className="text-lg text-gray-700">
                    <strong>Date:</strong> {formatDate(event?.eventDate)}
                  </p>

                  {/* Time */}
                  <p className="text-lg text-gray-700">
                    <strong>Timings:</strong> {formatTime(event?.eventTimings.from)} - {formatTime(event?.eventTimings.to)}
                  </p>

                  {/* Venue */}
                  <p className="text-lg text-gray-700">
                    <strong>Venue:</strong> {event?.eventVenue}
                  </p>

                  {/* Event Fees */}
                  <p className="text-lg text-gray-700">
                    <strong>Registration Fee:</strong> ₹{event?.eventFees} per{" "}
                    {event.eventparticipationCategory === "Single" ? "Individual" : "Team"}
                  </p>

                  {/* Conditionally Render Notes */}
                  {event?.eventNote && (
                    <p className="text-lg text-gray-700 italic">
                      <strong>Note:</strong> {event?.eventNote}
                    </p>
                  )}

                  {/* Register Button */}
                  <div className="w-full mt-4">
                    <button
                      onClick={() => window.open(event?.erpLink, "_blank")}
                      className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-semibold w-full px-6 py-3 rounded-md shadow-lg transform transition duration-300 hover:scale-105 flex justify-center items-center"
                    >
                      Register Now <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>


            )}






            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-3 mt-36 cookie-regular relative">
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
            <div className="flex justify-center items-center font-sans relative z-50">
              <div className="flex flex-wrap gap-8 w-full justify-center">
                {event?.eventCoordinators?.map((coordinator, index) => (
                  <Coordinator
                    key={index} // Use a unique key for each item in the list
                    name={coordinator.name}
                    number={coordinator.number}
                  />
                ))}
              </div>
            </div>


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
            className="w-full h-auto object-cover transform translate-y-[200px] translate-x-0 opacity-30"
          />
        </motion.div>

        <div className="fixed -bottom-0 left-0 w-full hidden sm:block pointer-events-none -z-20">
          <img
            src="/rb_2149158780.png"
            alt="Himalayas"
            className="w-full h-auto object-cover transform translate-y-[300px] translate-x-0 opacity-10"
          />
        </div>


      </ParallaxProvider>


      <DesktopFooter />
    </div>
  );
};

export default Eventdetails;
