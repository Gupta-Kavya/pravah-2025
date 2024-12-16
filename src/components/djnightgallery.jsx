import React, { useState, useRef } from 'react';
import Navbarr from './Navbar';
// import '../gallery.css';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const Djnightgallery = () => {

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
       <style>{`
        :root {
          --gap: 1rem;
          --card-width: clamp(280px, 20vw, 100vw);
          --card-aspect-ratio: 5 / 7;
          --card-height: calc(var(--card-width) * (7 / 5));
        }

        .gallery-grid {
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(5, var(--card-width));
          gap: 1rem;
          overflow: hidden;
        }

        .columnn {
          display: grid;
          gap: 1rem;
          align-content: start;
        }

        .columnn img {
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          transition: all 0.3s ease-in-out; 
        }

        .columnn:not(:nth-of-type(3)) {
          animation: scale 1s linear both;
          animation-timeline: scroll(root);
        }

        .columnn:is(:nth-of-type(2), :nth-of-type(4)) {
          --origin: calc(var(--gap) * -1);
          --destination: calc(var(--card-height) * 1.5 + var(--gap));
        }

        .columnn:is(:nth-of-type(1), :nth-of-type(5)) {
          --origin: calc(var(--gap) * -2);
          --destination: calc(var(--card-height) * 3.4 + var(--gap));
        }

        @keyframes scale {
          0% {
            transform: translateY(var(--origin, 0%));
          }
          100% {
            transform: translateY(var(--destination, -50%));
          }
        }
      `}</style>
      <Helmet>
        <title>DJ Night - Electrifying Beats & Energy | SKIT</title>
        <meta
          name="description"
          content="Get ready to groove at DJ Night, an electrifying celebration of music and energy, bringing everyone together to dance under the stars at SKIT."
        />
        <meta
          name="keywords"
          content="DJ Night, music event, Pravah 25, electrifying beats, energy, dance, Incredible India, SKIT, youth fest, celebration"
        />
        <meta
          property="og:title"
          content="DJ Night - Electrifying Beats & Energy | SKIT"
        />
        <meta
          property="og:description"
          content="Join us for an unforgettable night of music, energy, and celebration at DJ Night, where beats and rhythm unite everyone in the spirit of Pravah 25."
        />
        <meta property="og:url" content="http://mysite.com/dj-night" />
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
            <img src="djnight/1.jpg" alt="" />
            <img src="djnight/2.jpg" alt="" />
            <img src="djnight/3.jpg" alt="" />
            <img src="djnight/4.jpg" alt="" />
            <img src="djnight/5.jpg" alt="" />
            <img src="djnight/6.jpg" alt="" />

          </div>
          <div className="columnn">
            <img src="djnight/7.jpg" alt="" />
            <img src="djnight/8.jpg" alt="" />
            <img src="djnight/9.jpg" alt="" />
            <img src="djnight/10.jpg" alt="" />
            <img src="djnight/11.jpg" alt="" />
            <img src="djnight/12.jpg" alt="" />

          </div>
          <div className="columnn">
            <img src="djnight/13.jpg" alt="" />
            <img src="djnight/14.jpg" alt="" />
            <img src="djnight/15.jpg" alt="" />
            <img src="djnight/16.jpg" alt="" />
            <img src="djnight/17.jpg" alt="" />
            <img src="djnight/18.jpg" alt="" />


            <motion.section
              className="text-center"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 20 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="relative mb-20 mt-10">
                {/* Main Heading */}
                <motion.h1
                  className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-300 tracking-widest pattaya-regular"
                >
                  DJ Night
                </motion.h1>

              </div>
            </motion.section>

          </div>
          <div className="columnn">
            <img src="djnight/1.jpg" alt="" />
            <img src="djnight/2.jpg" alt="" />
            <img src="djnight/3.jpg" alt="" />
            <img src="djnight/4.jpg" alt="" />
            <img src="djnight/5.jpg" alt="" />
            <img src="djnight/16.jpg" alt="" />

          </div>
          <div className="columnn">
            <img src="djnight/14.jpg" alt="" />
            <img src="djnight/13.jpg" alt="" />
            <img src="djnight/12.jpg" alt="" />
            <img src="djnight/11.jpg" alt="" />
            <img src="djnight/10.jpg" alt="" />
            <img src="djnight/8.jpg" alt="" />

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
      <audio ref={audioRef} src="/djnight/audio.mp3" />

      <DesktopFooter />
    </div>
  );
};

export default Djnightgallery;
