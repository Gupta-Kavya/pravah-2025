import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbarr from "./Navbar";
import DesktopFooter from "./DesktopFooter";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const Eventlist = () => {
    const { eventcat } = useParams(); // Get the category name from URL
    const navigate = useNavigate(); // For navigation
    const [events, setEvents] = useState([]); // Store events data
    const [filteredEvents, setFilteredEvents] = useState([]); // Store filtered events
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [searchQuery, setSearchQuery] = useState(""); // Search query state

    // Fetch events for the specific category
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(
                    `https://skit-pravah-backend.vercel.app/api/events/category/${eventcat}`
                );
                const data = await response.json();
                setEvents(data); // Update state with fetched events
                setFilteredEvents(data); // Initialize filtered events
            } catch (error) {
                setError("Failed to fetch events. Please try again.");
            } finally {
                setLoading(false); // End loading state
            }
        };

        fetchEvents();
    }, [eventcat]);

    // Handle search input change
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter events based on the search query
        const filtered = events.filter((event) =>
            event.eventTitle.toLowerCase().includes(query)
        );
        setFilteredEvents(filtered);
    };

    return (
        <div>
            <Navbarr />

            <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 mt-16 relative mb-20">
                {/* Heading Section */}
                <motion.section
                    className="text-center space-y-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 100 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="relative">
                        <motion.h1
                            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-green-600 tracking-widest pattaya-regular"
                        >
                            {eventcat} Events
                        </motion.h1>
                        <motion.h2
                            className="absolute right-0 top-6 md:top-16 text-sm md:text-md font-semibold text-gray-700 italic tracking-widest font-serif"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            The Silver Jubilee Year
                        </motion.h2>
                    </div>

                    {/* Search Bar */}
                    <motion.div
                        className="top-4 relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="relative w-96 max-w-lg font-sans mb-6">
                            <input
                                type="text"
                                placeholder={`Search ${eventcat} events...`}
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
                <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-40">
                    {loading ? (
                        // Skeleton loading for events
                        <div className="flex flex-wrap gap-8 w-full">
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden w-full border border-gray-200"
                                >
                                    <div className="w-full h-20 md:h-24 relative p-3">
                                        <Skeleton height={60} width="100%" />
                                    </div>
                                    <div className="flex justify-between items-center p-4 w-full">
                                        <Skeleton height={30} width="40%" />
                                        <Skeleton height={40} width={60} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : error ? (
                        <p className="text-red-500 relative">{error}</p>
                    ) : filteredEvents.length > 0 ? (
                        filteredEvents.map((event, index) => (
                            <motion.div
                                key={event._id}
                                className="flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden w-full border border-gray-300 transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
                                initial={{ opacity: 0, y: 160 }}
                                whileInView={{ opacity: 1, y: 120 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.8,
                                    ease: "easeOut",
                                }}
                            >
                                {/* Event Image */}
                                <div className="w-full h-44 md:h-48 relative p-3">
                                    <img
                                        className="object-cover w-full h-48 rounded-xl"
                                        src={event.eventImage}
                                        alt={event.eventTitle}
                                    />
                                </div>

                                {/* Event Title */}
                                <div className="flex flex-col items-center w-full p-6">
                                    <h5
                                        className="text-lg font-bold text-gray-900 tracking-tight cookie-regular text-center mt-2"
                                        style={{ fontSize: "40px" }}
                                    >
                                        {event.eventTitle}
                                    </h5>
                                </div>

                                {/* Register Button */}
                                <div className="flex flex-col justify-between w-full h-full px-3 pb-3">
                                    <button
                                        onClick={() => navigate(`/skit-pravah-2025-events/${eventcat}/${event._id}`)}
                                        className="bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-purple-700 hover:to-indigo-900 text-white font-bold w-full px-6 py-3 rounded-lg shadow-sm hover:bg-gradient-to-r transition duration-300 abeezee-regular relative z-50"
                                    >
                                        Book Your Spot <FaArrowRight className="ml-2 inline" />
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-600 relative"></p>
                    )}
                </motion.div>
            </main>


            {/* <div className="absolute bottom-0 left-0 w-full hidden sm:block z-0 ">
                  <motion.img
                    src="/file (2).png"
                    alt="Himalayas"
                    className="w-full object-cover transform"
                    initial={{ translateY: 600 }}
                    whileInView={{ translateY: 450 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  />
                </div> */}

            <DesktopFooter />
        </div>
    );
};

export default Eventlist;
