import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbarr from "./Navbar";
import DesktopFooter from "./DesktopFooter";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaArrowRight } from "react-icons/fa";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Helmet } from "react-helmet";

const Eventlist = () => {
    const { eventcat } = useParams();
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const loader = useRef(null);


    const fetchEvents = useCallback(async (page = 1) => {
        setLoading(true);
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}api/events/category/${eventcat}?page=${page}`
            );
            const data = await response.json();

            const eventsData = Array.isArray(data.events) ? data.events : [];
         
            if (eventsData.length === 0) {
                setHasMore(false);
            } else {
                setEvents((prevEvents) => [...prevEvents, ...eventsData]);
            }
        } catch (error) {
            setError("Failed to fetch events. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [eventcat]);

    useEffect(() => {
        fetchEvents();
        console.log("object");
    }, [eventcat, fetchEvents]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    fetchEvents(Math.ceil(events.length / 10) + 1);
                }
            },
            { threshold: 1.0 }
        );

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [loader, hasMore, loading, fetchEvents, events.length]);

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
            <Navbarr eventName={eventcat + " Events"} />

            <ParallaxProvider>
                <Parallax speed={-15}>
                    
                    <main className="min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-0 mt-8 sm:mt-24 relative mb-72 gap-8">
                    <motion.div
    className="mt-20 grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8 sm:justify-center"
    initial={{ opacity: 0, y: 160 }}
    whileInView={{ opacity: 1, y: 120 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
>
    {events.map((event) => (
        <div
    key={event._id}
    className="flex flex-col items-center bg-gray-50 rounded-lg sm:rounded-2xl overflow-hidden border hover:shadow-2xl transition-shadow duration-300 group shadow-sm sm:shadow-lg 
    w-full sm:w-[calc(33.33%-1rem)] md:w-[calc(25%-1rem)] lg:w-64 border-gray-300"
>



 
            <div className="relative w-full">
                <img
                    className="object-cover w-full h-20 sm:h-40 rounded-t-lg sm:rounded-t-2xl"
                    src={event.eventImage}
                    alt={event.eventTitle}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className={`flex flex-col items-center w-full mt-4 `}>
                <h5
                    className="text-sm sm:text-lg font-semibold text-gray-800 transition-colors duration-300 font-sans text-center px-4"
                >
                    {event.eventTitle}
                </h5>
            </div>


            <div className="w-full sm:p-4 p-2">
                <button
                    onClick={() =>
                        navigate(`/skit-pravah-2025-events/${eventcat}/${event._id}`)
                    }
                    className="w-full bg-gradient-to-r from-black via-gray-800 to-gray-900 hover:from-gray-900 hover:via-black hover:to-gray-800 text-white font-medium py-2 sm:py-3 rounded-xl sm:rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm"
                >
                    Book Your Spot
                    <FaArrowRight className="ml-2 inline-block" />
                </button>
            </div>

              

        </div>
    ))}
</motion.div>


                        {loading && (
                            <div className="flex justify-center mt-10">
                                Loading...
                            </div>
                        )}

                        {error && (
                            <p className="text-red-600 mt-4">{error}</p>
                        )}

                        <div ref={loader} className="w-full h-10"></div>
                    </main>
                </Parallax>

                <motion.div
                    className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-10 hidden "
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

                <div className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-20 hidden">
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
