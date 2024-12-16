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
        <meta property="og:url" content="http://mysite.com/aaveg-2025" />
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

      {/* Main Content */}


      <Comingsoon />

      {/* 
<Comingsoon /> */}


      {/* Desktop Footer */}
      <DesktopFooter />
    </div>
  );
};

export default Aaveg;
