import React, { useState, useRef } from 'react';
import Navbarr from './Navbar';
import './gallery.css';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const Celebritygallery = () => {


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
  <title>Celebrity Night - Live Performances & Entertainment | SKIT</title>
  <meta
    name="description"
    content="Celebrity Night at SKIT's Pravah'25 brings together live performances, music, and celebrations of Incredible India with vibrant melodies and diverse traditions."
  />
  <meta
    name="keywords"
    content="Celebrity Night, live performance, cultural events, Incredible India, SKIT, Swami Keshvanand Institute of Technology, Pravah'25, youth fest, gallery"
  />
  <meta
    property="og:title"
    content="Celebrity Night - Experience the Stars | SKIT"
  />
  <meta
    property="og:description"
    content="Celebrate the best of entertainment with live celebrity performances at Pravah'25. A night of music, dance, and memories that will last forever!"
  />
  <meta property="og:url" content="http://mysite.com/celebrity-night-gallery" />
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
            <img src="Celebrity/1.jpg" alt="" />
            <img src="Celebrity/2.jpg" alt="" />
            <img src="Celebrity/3.jpg" alt="" />
            <img src="Celebrity/4.jpg" alt="" />
            <img src="Celebrity/5.jpg" alt="" />
            <img src="Celebrity/6.jpg" alt="" />

          </div>
          <div className="columnn">
            <img src="Celebrity/7.jpg" alt="" />
            <img src="Celebrity/15.jpg" alt="" />
            <img src="Celebrity/24.jpg" alt="" />
            <img src="Celebrity/10.jpg" alt="" />
            <img src="Celebrity/11.jpg" alt="" />
            <img src="Celebrity/15.jpg" alt="" />
          </div>
          <div className="columnn">
            <img src="Celebrity/22.jpg" alt="" />
            <img src="Celebrity/18.jpg" alt="" />
            <img src="Celebrity/9.jpg" alt="" />
            <img src="Celebrity/6.jpg" alt="" />
            <img src="Celebrity/12.jpg" alt="" />
            <img src="Celebrity/18.jpg" alt="" />

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
                  Celebrity Night
                </motion.h1>

              </div>
            </motion.section>

          </div>
          <div className="columnn">
            <img src="Celebrity/12.JPG" alt="" />
            <img src="Celebrity/11.jpg" alt="" />
            <img src="Celebrity/8.jpg" alt="" />
            <img src="Celebrity/20.jpg" alt="" />
            <img src="Celebrity/21.jpg" alt="" />
            <img src="Celebrity/22.jpg" alt="" />
            <img src="Celebrity/8.jpg" alt="" />

          </div>
          <div className="columnn">
            <img src="Celebrity/23.jpg" alt="" />
            <img src="Celebrity/24.jpg" alt="" />
            <img src="Celebrity/6.jpg" alt="" />
            <img src="Celebrity/10.jpg" alt="" />
            <img src="Celebrity/11.jpg" alt="" />
            <img src="Celebrity/12.jpg" alt="" />
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
      <audio ref={audioRef} src="Celebrity/audio.mp3" />

      <DesktopFooter />
    </div>
  );
};

export default Celebritygallery;
