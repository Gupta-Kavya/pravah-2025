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
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import RecommendedEventsSlider from "./RecommendedEventsSlider";

const Eventdetails = () => {
  const { eventid } = useParams(); // Get the eventid from URL
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [loadingRelated, setLoadingRelated] = useState(true);

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
          `${process.env.REACT_APP_API_URL}api/events/${eventid}`
        );

        if (response.status === 404) {
          setError("Event not found. Please check the event ID.");
        } else if (!response.ok) {
          setError("Failed to fetch event details. Please try again later.");
        } else {
          const data = await response.json();
          setEvent(data); // Set event details
          fetchRelatedEvents(data.eventCategory); // Fetch related events by category
        }
      } catch (error) {
        setError("Failed to fetch event details. Please check your network connection.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    // Fetch related events by category
    const fetchRelatedEvents = async (category) => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/events/category/${category}`
        );
        const data = await response.json();
        const formattedEvents = data
          .filter((e) => e._id !== eventid && e.eventFees !== 0)
          .map((event) => ({
            name: event.eventTitle,
            image: event.eventImage,
            url: `/skit-pravah-2025-events/${event.eventCategory}/${event._id}`,
          }));
        setRelatedEvents(formattedEvents);
      } catch (error) {
        console.error("Failed to fetch related events:", error);
      } finally {
        setLoadingRelated(false);
      }
    };

    fetchEventDetails();
  }, [eventid]);

  if (loading) {
    return (
      <div className="w-full text-center py-10 text-gray-600">
        Loading event details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div>
      {event && (
        <Helmet>
          <title>{`${event?.eventTitle} - Explore ${event?.eventCategory} Excellence | SKIT`}</title>
          <meta
            name="description"
            content={`Dive into ${event?.eventTitle}, a hallmark of ${event?.eventCategory} excellence at SKIT. Join us for an unforgettable experience celebrating innovation and culture.`}
          />
          <meta
            name="keywords"
            content={`${event?.eventTitle}, ${event?.eventCategory}, ${event?.eventCategory} events, SKIT, Swami Keshvanand Institute of Technology, workshops, seminars, cultural programs`}
          />
          <meta
            property="og:title"
            content={`${event?.eventTitle} - Explore ${event?.eventCategory} Excellence | SKIT`}
          />
          <meta
            property="og:description"
            content={`Join ${event?.eventTitle} to experience the best of ${event?.eventCategory} at SKIT. Unleash your creativity and talents!`}
          />
          <meta
            property="og:url"
            content={`https://pravah.skit.ac.in/skit-pravah-2025-events/${event?.eventCategory}/${eventid}`}
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
      )}
      <Navbarr />
      <ParallaxProvider>
        <Parallax speed={-15}>
          <main className="min-h-screen flex flex-col items-center px-6 md:px-12 mt-32 relative mb-40">
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
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-[5px] bg-gradient-to-r from-[#351332] to-[#9e1c9e] mt-1 rounded-full"></span>
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
                className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-100 to-gray-100 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mb-16 transition-transform transform hover:scale-105 border border-gray-200 mt-0"
                initial={{ opacity: 0, y: 160 }}
                animate={{ opacity: 1, y: 150 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                {/* Copy Link Button */}
                <button
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href)
                        .then(() => {
                          toast.success("Link copied to clipboard!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            theme: "colored",
                          });
                        })
                        .catch((err) => {
                          toast.error("Failed to copy link. Please try again.", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            theme: "colored",
                          });
                          console.error("Clipboard error:", err);
                        });
                    } else {
                      toast.error("Clipboard API not supported in this browser.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "colored",
                      });
                    }
                  }}
                  className="absolute top-4 right-4 bg-gray-200 text-black font-medium text-sm px-3 py-1 rounded-lg  transition duration-300 border border-gray-300 shadow-sm"
                >
                  Copy Link
                </button>

                {/* Event Image */}
                <div className="w-full md:w-1/2 h-60 md:h-80 relative ml-0">
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md">
                    {event.eventparticipationCategory === "Single" ? "Individual Event" : "Team Event"}
                  </div>
                  <img
                    className="object-cover w-full h-full rounded-l-lg"
                    src={event?.eventImage}
                    alt={event?.eventTitle}
                    draggable="false"
                    loading="lazy"
                  />
                  <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>

                </div>

                {/* Event Info */}
                <div className="flex flex-col items-center md:items-start w-full md:w-1/2 p-8 space-y-6 h-full justify-between text-center md:text-left font-sans">
                  {/* Date */}
                  <p className="text-lg text-gray-700">
                    <strong>Date:</strong> {formatDate(event?.eventDate)}
                  </p>

                  {/* Time */}
                  <p className="text-lg text-gray-700 text-nowrap">
                    <strong>Timings:</strong> {formatTime(event?.eventTimings.from)} - {formatTime(event?.eventTimings.to)}
                  </p>

                  {/* Venue */}
                  <p className="text-lg text-gray-700">
                    <strong>Venue:</strong> {event?.eventVenue}
                  </p>

                  {/* Event Fees */}
                  <p className="text-lg text-gray-700">
                    <strong>Registration Fee:</strong>{" "}
                    {event?.eventFees !== 0
                      ? `₹${event?.eventFees} per ${event.eventparticipationCategory === "Single" ? "Individual" : "Team"}`
                      : "FREE"}
                  </p>

                  {/* Conditionally Render Notes */}
                  {event?.eventNote && (
                    <p className="text-lg text-gray-700 italic">
                      <strong>Note:</strong> {event?.eventNote}
                    </p>
                  )}

                  {/* Conditional Button/Message */}
                  <div className="w-full mt-4">
                    {event?.eventFees === 0 ? (
                      <div className="text-green-600 font-semibold text-lg">
                        <button
                          onClick={() => window.open(event?.erpLink, "_blank")}
                          className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold w-full px-6 py-3 rounded-md shadow-lg transform transition duration-300 flex justify-center items-center text-sm"
                          disabled={true}
                        >
                          No Registration Fee Required
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => window.open(event?.erpLink, "_blank")}
                        className="bg-gradient-to-r from-green-400 to-green-600  text-white font-semibold w-full px-6 py-3 rounded-md shadow-lg transform transition duration-300 flex justify-center items-center"
                      >
                        Register Now <FaArrowRight className="ml-2" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>




            )}



            <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-36 relative font-sans  tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                className="relative inline-block"
              >

                {event?.eventCoordinators?.length > 1 ? "Student Coordinator's" : "Student Coordinator"}


                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-[4px] bg-gradient-to-r from-[#280f38] to-[#5a015a] mt-1 rounded-full"></span>
              </motion.span>
            </h2>



            <div className="flex justify-center items-center font-sans relative z-50">
              <div
                className={`${event?.eventCoordinators?.length === 1
                    ? "flex flex-col items-center gap-4 w-full max-w-sm"
                    : "grid grid-cols-2 gap-x-4 w-full max-w-sm"
                  } md:flex md:gap-8 md:justify-center`}
              >
                {event?.eventCoordinators?.map((coordinator, index) => (
                  <Coordinator
                    key={index}
                    name={coordinator.name}
                    number={coordinator.number}
                  />
                ))}
              </div>
            </div>





            <RecommendedEventsSlider devents={relatedEvents} />

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
            className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[300px] translate-x-0 opacity-10"
          />
        </div>


      </ParallaxProvider>


      <DesktopFooter />
      <ToastContainer />
    </div>
  );
};

export default Eventdetails;
