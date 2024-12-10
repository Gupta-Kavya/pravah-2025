import React from 'react';
import Navbarr from './Navbar';
import './gallery.css';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Thirakgallery = () => {
  return (
    <div className="text-gray-900 relative overflow-hidden bg-black">
      <Helmet>
        <title>Thirak Gallery - Celebrate Dance & Culture | SKIT</title>
        <meta
          name="description"
          content="Explore the Thirak Gallery, a visual celebration of the dynamic dance competition showcasing the spirit of Incredible India at SKIT."
        />
        <meta
          name="keywords"
          content="Thirak, dance competition, cultural events, Incredible India, SKIT, Swami Keshvanand Institute of Technology, youth fest, gallery"
        />
        <meta
          property="og:title"
          content="Thirak Gallery - Celebrate Dance & Culture | SKIT"
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
            <img src="https://pravah.skit.ac.in/_next/static/media/1.1c9659af.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/2.16458c60.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/4.d89f0a77.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/5.25f0e39c.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/6.9cfa68e3.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/8.0db58226.webp" alt="" />
          </div>
          <div className="columnn">
            <img src="https://pravah.skit.ac.in/_next/static/media/9.bf49675c.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/11.48c8791b.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/12.f15cb5e6.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/13.e3f8585b.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/14.e0c98f1e.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/15.1f1c488c.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/16.c3a84896.webp" alt="" />
          </div>
          <div className="columnn">
            <img src="https://pravah.skit.ac.in/_next/static/media/17.67359ed9.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/18.e2bdc5e6.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/19.c8c4260a.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/13.e3f8585b.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/14.e0c98f1e.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/15.1f1c488c.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/16.c3a84896.webp" alt="" />

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
                  Thirak Gallery
                </motion.h1>

              </div>
            </motion.section>

          </div>
          <div className="columnn">
            <img src="https://pravah.skit.ac.in/_next/static/media/17.67359ed9.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/18.e2bdc5e6.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/19.c8c4260a.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/5.25f0e39c.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/6.9cfa68e3.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/8.0db58226.webp" alt="" />
          </div>
          <div className="columnn">
            <img src="https://pravah.skit.ac.in/_next/static/media/9.bf49675c.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/11.48c8791b.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/12.f15cb5e6.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/13.e3f8585b.webp" alt="" />
            <img src="https://pravah.skit.ac.in/_next/static/media/14.e0c98f1e.webp" alt="" />
          </div>



        </div>
      </main>

      <DesktopFooter />
    </div>
  );
};

export default Thirakgallery;
