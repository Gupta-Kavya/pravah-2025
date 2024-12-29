import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbarr from "./Navbar";
import DesktopFooter from "./DesktopFooter";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Helmet } from "react-helmet";

const Eventlist = () => {
    const { eventcat } = useParams();
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const loader = useRef(null);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}api/events/category/${eventcat}`
                );
                const data = await response.json();

                // Ensure data is always an array
                const eventsData = Array.isArray(data) ? data : [];

                if (eventsData.length === 0) {
                    setHasMore(false);
                } else {
                    setEvents((prevEvents) => [...prevEvents, ...eventsData]);
                    setFilteredEvents((prevEvents) => [...prevEvents, ...eventsData]);
                }
            } catch (error) {
                setError("Failed to fetch events. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [eventcat]);



    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = events.filter((event) =>
            event.eventTitle.toLowerCase().includes(query)
        );
        setFilteredEvents(filtered);
    };

    return (
        <div>
            <Helmet>
                <title>{`Explore ${eventcat} Events - PRAVAH 2025 | SKIT`}</title>
                <meta
                    name="description"
                    content={`Discover all the exciting ${eventcat} events at SKIT. Join us for an unforgettable journey of innovation, creativity, and excellence in ${eventcat}.`}
                />
                <meta
                    name="keywords"
                    content={`${eventcat} events, SKIT ${eventcat}, Swami Keshvanand Institute of Technology, ${eventcat} programs, workshops, seminars, cultural experiences`}
                />
                <meta
                    property="og:title"
                    content={`Explore ${eventcat} Events - PRAVAH 2025 | SKIT`}
                />
                <meta
                    property="og:description"
                    content={`Explore the vibrant world of ${eventcat} events at SKIT. Join us to experience workshops, seminars, and programs that embody excellence in ${eventcat}.`}
                />
                <meta
                    property="og:url"
                    content={`https://pravah.skit.ac.in/skit-pravah-2025-events/${eventcat}`}
                />
                <meta
                    name="author"
                    content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
                />
                <meta
                    name="organization"
                    content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
                />
            </Helmet>
            <Navbarr />

            <ParallaxProvider>
                <Parallax speed={-15}>
                    <main className="min-h-screen flex flex-col items-center px-6 md:px-12 mt-28 sm:mt-16 relative mb-72">
                        <motion.section
                            className="text-center space-y-8"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 130 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {filteredEvents.length > 0 && (
                                <div className="relative">
                                    <motion.h1
                                        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black font-sans tracking-tight"
                                    >
                                        {eventcat} Events
                                        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-[4px] bg-gradient-to-r from-[#351332] to-[#9e1c9e] mt-1 rounded-full"></span>
                                    </motion.h1>
                                </div>

                            )}

                            {/* <motion.div
                                className="relative w-96 max-w-2xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                <input
                                    type="text"
                                    placeholder={`Search ${eventcat} events...`}
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    className="w-full px-5 py-3 text-gray-800 bg-white bg-opacity-70 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12"
                                    style={{ backdropFilter: 'blur(10px)' }}
                                />
                                <span className="absolute inset-y-0 right-4 flex items-center text-purple-600">
                                    <FaSearch className="text-lg" />
                                </span>

                            </motion.div> */}
                        </motion.section>
                        <motion.div
    className="mt-20 flex flex-wrap justify-center gap-8"
    initial={{ opacity: 0, y: 160 }}
    whileInView={{ opacity: 1, y: 120 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
>
    {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
            <div
                key={event._id}
                className="flex flex-col items-center bg-gray-50 rounded-2xl overflow-hidden border hover:shadow-2xl transition-shadow duration-300 group shadow-lg w-full sm:w-72"
            >
                <div className="relative w-full">
                    <img
                        className="object-cover w-full h-40 rounded-t-2xl"
                        src={event.eventImage}
                        alt={event.eventTitle}
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col items-center w-full mt-4">
                    <h5
                        className="text-xl font-semibold text-gray-800 transition-colors duration-300 font-sans"
                    >
                        {event.eventTitle}
                    </h5>
                </div>
                <div className="w-full p-4">
                    <button
                        onClick={() =>
                            navigate(`/skit-pravah-2025-events/${eventcat}/${event._id}`)
                        }
                        className="w-full bg-gradient-to-r from-black via-gray-800 to-gray-900 hover:from-gray-900 hover:via-black hover:to-gray-800 text-white font-medium py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Book Your Spot
                        <FaArrowRight className="ml-2 inline-block" />
                    </button>
                </div>
            </div>
        ))
    ) : loading ? (
        <div className="flex flex-wrap gap-8 w-full justify-center">
            {[...Array(3)].map((_, index) => (
                <div
                    key={index}
                    className="flex flex-row flex-wrap items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden w-80 border border-gray-200"
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
    ) : (
        <p className="text-gray-600 relative">No events found.</p>
    )}
</motion.div>


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
                        className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[200px] translate-x-0 opacity-30"
                    />
                </motion.div>

                <div className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-20">
                    <img
                        src="/rb_2149158780.png"
                        alt="Pravah 2025 - Incredible India | SKIT"
                        className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[300px]     translate-x-0 opacity-10"
                    />
                </div>
            </ParallaxProvider>

            <DesktopFooter />
        </div>
    );
};

export default Eventlist;
