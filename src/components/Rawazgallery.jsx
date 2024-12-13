import React from 'react';
import Navbarr from './Navbar';
import './gallery.css';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Rawazgallery = () => {
  return (
    <div className="text-gray-900 relative overflow-hidden bg-black">
      <Helmet>
        <title>Rawaz Gallery - Showcase Faishon & Culture | SKIT</title>
        <meta
          name="description"
          content="Explore the Rawaz Gallery, a visual celebration of the dynamic faishon show showcasing the spirit of Incredible India at SKIT."
        />
        <meta
          name="keywords"
          content="Rawaz, faishon show, cultural events, Incredible India, SKIT, Swami Keshvanand Institute of Technology, youth fest, gallery"
        />
        <meta
          property="og:title"
          content="Rawaz Gallery - Celebrate Dance & Culture | SKIT"
        />
        <meta
          property="og:description"
          content="Dive into the vibrant visuals of Thirak, the high-energy dance competition at SKIT, celebrating the diverse and colorful culture of India."
        />
        <meta property="og:url" content="http://mysite.com/thirak-gallery" />
        <meta
          name="author"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
        <meta
          name="organization"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
      </Helmet>

    
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      <Navbarr />

      <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 mt-16 relative z-20">
        {/* Heading Section */}
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>

        {/* Gallery Section */}
        <div className="grid gallery-grid">
          <div className="columnn">
            <img src="Rawaz/1.jpg" alt="" />
            <img src="Rawaz/2.jpg" alt="" />
            <img src="Rawaz/3.jpg" alt="" />
            <img src="Rawaz/4.jpg" alt="" />
            <img src="Rawaz/5.jpg" alt="" />
            <img src="Rawaz/6.jpg" alt="" />

          </div>
          <div className="columnn">
          <img src="Rawaz/7.jpg" alt="" />
            <img src="Rawaz/8.jpg" alt="" />
            <img src="Rawaz/9.jpg" alt="" />
            <img src="Rawaz/10.jpg" alt="" />
            <img src="Rawaz/11.jpg" alt="" />
            <img src="Rawaz/12.jpg" alt="" />
          </div>
          <div className="columnn">
          <img src="Rawaz/13.jpg" alt="" />
            <img src="Rawaz/14.jpg" alt="" />
            <img src="Rawaz/15.jpg" alt="" />
            <img src="Rawaz/16.jpg" alt="" />
            <img src="Rawaz/17.jpg" alt="" />
            <img src="Rawaz/18.jpg" alt="" />

            <motion.section
              className="text-center"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 20 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="relative">
                {/* Main Heading */}
                <motion.h1
                  className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-300 tracking-widest pattaya-regular"
                >
                  Rawaz Gallery
                </motion.h1>

              </div>
            </motion.section>

          </div>
          <div className="columnn">
          <img src="Rawaz/13.jpg" alt="" />
            <img src="Rawaz/14.jpg" alt="" />
            <img src="Rawaz/15.jpg" alt="" />
            <img src="Rawaz/16.jpg" alt="" />
            <img src="Rawaz/17.jpg" alt="" />
            <img src="Rawaz/18.jpg" alt="" />

          </div>
          <div className="columnn">
          <img src="Rawaz/7.jpg" alt="" />
            <img src="Rawaz/8.jpg" alt="" />
            <img src="Rawaz/9.jpg" alt="" />
            <img src="Rawaz/10.jpg" alt="" />
            <img src="Rawaz/11.jpg" alt="" />
            <img src="Rawaz/12.jpg" alt="" />
          </div>



        </div>
      </main>

      <DesktopFooter />
    </div>
  );
};

export default Rawazgallery;
