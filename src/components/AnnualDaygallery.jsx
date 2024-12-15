import React, { useState, useRef } from 'react';
import Navbarr from './Navbar';
import './gallery.css';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const AnnualDaygallery = () => {


  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <div className="text-gray-900 relative overflow-hidden bg-black">
<Helmet>
  <title>Annual Day - Celebrate Excellence & Talent | SKIT</title>
  <meta
    name="description"
    content="SKIT's Annual Day celebrates excellence, creativity, and talent through vibrant performances, inspiring speeches, and heartfelt moments, showcasing the achievements and unity of our dynamic community in a grand, memorable celebration."
  />
  <meta
    name="keywords"
    content="Annual Day, fashion show, cultural events, creativity, SKIT, Swami Keshvanand Institute of Technology, youth fest, gallery"
  />
  <meta
    property="og:title"
    content="Annual Day Gallery - Celebrate Excellence & Talent | SKIT"
  />
  <meta
    property="og:description"
    content="Experience the unforgettable moments of SKIT's Annual Day, where vibrant performances and inspiring speeches highlight the spirit of creativity and achievement within our community."
  />
  <meta property="og:url" content="http://mysite.com/annual-day-gallery" />
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
            <img src="AnnualDay/1.jpg" alt="" />
            <img src="AnnualDay/2.jpg" alt="" />
            <img src="AnnualDay/3.jpg" alt="" />
            <img src="AnnualDay/4.jpg" alt="" />
            <img src="AnnualDay/5.jpg" alt="" />
            <img src="AnnualDay/6.jpg" alt="" />

          </div>
          <div className="columnn">
            <img src="AnnualDay/7.jpg" alt="" />
            <img src="AnnualDay/8.jpg" alt="" />
            <img src="AnnualDay/9.jpg" alt="" />
            <img src="AnnualDay/10.jpg" alt="" />
            <img src="AnnualDay/11.jpg" alt="" />
            <img src="AnnualDay/12.jpg" alt="" />
          </div>
          <div className="columnn">
            <img src="AnnualDay/13.jpg" alt="" />
            <img src="AnnualDay/14.jpg" alt="" />
            <img src="AnnualDay/15.jpg" alt="" />
            <img src="AnnualDay/16.jpg" alt="" />
            <img src="AnnualDay/17.jpg" alt="" />
            <img src="AnnualDay/18.jpg" alt="" />

            <motion.section
              className="text-center"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 20 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="relative mt-10 mb-20">
                {/* Main Heading */}
                <motion.h1
                  className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-300 tracking-widest pattaya-regular"
                >
                  Annual Day
                </motion.h1>

              </div>
            </motion.section>

          </div>
          <div className="columnn">
            <img src="AnnualDay/19.JPG" alt="" />
            <img src="AnnualDay/20.jpg" alt="" />
            <img src="AnnualDay/21.jpg" alt="" />
            <img src="AnnualDay/22.jpg" alt="" />
            <img src="AnnualDay/23.jpg" alt="" />
            <img src="AnnualDay/24.jpg" alt="" />

          </div>
          <div className="columnn">
            <img src="AnnualDay/25.jpg" alt="" />
            <img src="AnnualDay/26.jpg" alt="" />
            <img src="AnnualDay/27.jpg" alt="" />
            <img src="AnnualDay/6.jpg" alt="" />
            <img src="AnnualDay/12.jpg" alt="" />
            <img src="AnnualDay/18.jpg" alt="" />
          </div>



        </div>
      </main>

      {/* Voice Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleAudioToggle}
          className="p-3 bg-gradient-to-r from-black to-black text-white rounded-full shadow-lg border-2 border-purple-400"

        >
          {isPlaying ? <FaMicrophoneSlash size={24} color='white' /> : <FaMicrophone size={24} color='white' />}
        </button>

      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="AnnualDay/audio.mp3" />

      <DesktopFooter />
    </div>
  );
};

export default AnnualDaygallery;
