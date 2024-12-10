import React, { useState, useEffect } from 'react';
import Navbarr from './Navbar';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
        <meta property="og:url" content="http://mysite.com/pravah-2025-events" />
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

      <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 mt-16 relative mb-60">
        {/* Heading Section */}
        <motion.section
          className="text-center space-y-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 100 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="relative">
            <motion.h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-500 tracking-widest pattaya-regular">
              Incredible Events
            </motion.h1>

            <motion.h2
              className="absolute right-0 top-6 md:top-16 text-sm md:text-md font-semibold text-gray-700 italic tracking-widest font-serif"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              of Incredible India
            </motion.h2>
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
                placeholder="Search Event categories..."
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



        {/* Render categories dynamically */}
        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-20">
          {loading ? (
            // Skeleton loading for categories
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
          ) : filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <motion.div
                key={category._id}
                className="flex flex-col items-center bg-gray-50 rounded-xl shadow-lg overflow-hidden w-full border border-black cursor-pointer"
                style={{ position: 'relative' }}
                initial={{ opacity: 0, y: 160 }} // Start animation state
                whileInView={{ opacity: 1, y: 120 }} // Trigger when in view
                viewport={{ once: true, amount: 0.2 }} // Trigger once, when 20% of the card is visible
                transition={{
                  delay: index * 0.2, // Stagger based on index
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                onClick={() => handleCategoryClick(category.categoryName)}
              >

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
                    src={category.categoryImage}
                    alt={category.categoryName}
                  />
                </div>
                <div className="flex flex-col justify-between p-6 leading-normal space-y-4 w-full">
                  <h5 className="text-lg font-bold text-gray-900 tracking-tight cookie-regular text-center mt-2" style={{ fontSize: '35px' }}>
                    {category.categoryName}
                  </h5>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600 relative">No categories available</p>
          )}
        </motion.div>
      </main>

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

      <DesktopFooter />
    </div>
  );
};

export default Events;
