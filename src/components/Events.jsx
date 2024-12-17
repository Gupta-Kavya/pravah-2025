import React, { useState, useEffect } from 'react';
import Navbarr from './Navbar';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Comingsoon from './Comingsoon';

const Events = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]); // State for filtered categories
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [loading, setLoading] = useState(true); // Track loading state
  const navigate = useNavigate();

  // Fetch categories data from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://skit-pravah-backend.vercel.app/api/categories');
        const data = await response.json();
        setCategories(data); // Store the fetched categories
        setFilteredCategories(data); // Initialize filtered categories with all categories
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error('Error fetching categories data:', error);
        setLoading(false); // Handle error and stop loading
      }
    };

    fetchCategories();
  }, []);

  // Handle search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = categories.filter((category) =>
      category.categoryName.toLowerCase().includes(query)
    );
    setFilteredCategories(filtered);
  };

  // Handle navigation to category-specific page
  const handleCategoryClick = (categoryName) => {
    navigate(`/skit-pravah-2025-events/${categoryName}`);
  };

  return (
    <div>

      <Helmet>
        <title>Events & Registrations - Pravah 2025 | SKIT</title>
        <meta
          name="description"
          content="Explore the exciting events at Pravah 2025 and register to be a part of the grand celebration of Incredible India at SKIT."
        />
        <meta
          name="keywords"
          content="Pravah 2025 events, Incredible India, event registrations, SKIT, Swami Keshvanand Institute of Technology, Indian culture, celebrations"
        />
        <meta
          property="og:title"
          content="Events & Registrations - Pravah 2025 | SKIT"
        />
        <meta
          property="og:description"
          content="Join us at Pravah 2025, hosted by SKIT, to participate in vibrant events showcasing the cultural heritage and unity of Incredible India."
        />
        <meta property="og:url" content="https://pravah.skit.ac.in/skit-pravah-2025-events" />
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


      {/* <div className="absolute bottom-0 left-0 w-full hidden sm:block z-0 ">
                  <motion.img
                    src="/file (14).png"
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

      <Comingsoon />

      <DesktopFooter />
    </div>
  );
};

export default Events;
