import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const SpotlightGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState('');
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


  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });

  // Handle mouse movement to update the CSS variables
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Calculate percentage positions relative to the element
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;

    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="radial-grid absolute inset-0"
        style={{ "--mx": mousePos.x, "--my": mousePos.y }}
      />

      <div className="absolute bottom-4 right-4 z-50" style={{ zIndex: 1000 }}>
        <button
          onClick={handleAudioToggle}

          className="p-3 bg-gradient-to-r from-black to-black text-white rounded-full shadow-2xl border-2 border-purple-400"

        >
          {isPlaying ? <FaMicrophoneSlash size={24} color='white' /> : <FaMicrophone size={24} color='white' />}
        </button>

      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="/section2-audio.mp3" />


      <motion.h2
        className="text-4xl font-bold text-center mb-8 my-16 cookie-regular text-white relative left-20"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Unveil Pravah'25
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-[4px] bg-gradient-to-r from-[#FF6A00] to-[#660066] mt-1 rounded-full"></span>




      </motion.h2>


      {selectedVideo && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full h-full">
            <video
              src={
                selectedVideo === 'teaser'
                  ? '/teaser.mp4'
                  : '/path/to/logo-video.mp4'
              }
              autoPlay
              className="w-full h-full object-cover"
              loop
            ></video>
            <button
              className="absolute bottom-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600 font-bold"
              onClick={() => setSelectedVideo(null)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}




      <div className="relative sm:flex sm:flex-row gap-0 min-h-screen hidden justify-center z-10 pointer-events-auto left-20">
        {/* Left Video Card */}
        <motion.div
          className="video-card p-4 hover:scale-105 transform transition self-center relative z-10 pointer-events-auto cursor-pointer bg-gray-800"
          style={{ top: "30px", right: "50px" }}
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          whileInView={{ opacity: 1, y: -120, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onClick={() => setSelectedVideo("teaser")}
        >
          {/* Background effect with dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-10 rounded-lg"></div>

          {/* Video Thumbnail */}
          <iframe src="https://www.youtube.com/embed/DyuUx1obJ_M" title="Teaser Launch of Pravah 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-80 h-44 rounded-lg"></iframe>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 text-center mt-4 z-20 font-mono">
            Pravah Teaser

          </h3>


          {/* Add glow effect */}
          <div className="absolute inset-0 border-4 border-solid border-transparent rounded-lg glow-effect"></div>

        </motion.div>
        {/* Right Video Card */}
        <motion.div
          className="video-card p-4 hover:scale-105 transform transition self-center relative z-10 pointer-events-auto cursor-pointer bg-gray-800"
          style={{ top: '30px', left: '50px' }}
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          whileInView={{ opacity: 1, y: -120, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          onClick={() => setSelectedVideo('logo')}
        >

          {/* Background effect with dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-10 rounded-lg"></div>

          {/* Video Thumbnail */}
          <iframe width="853" height="480" src="https://www.youtube.com/embed/HVL4Fgel8S4" title="Logo Reveal of PRAVAH 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-80 h-44 rounded-lg"></iframe>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 text-center mt-4 z-20 font-mono">
            Logo Reveal
          </h3>


          {/* Add glow effect */}
          <div className="absolute inset-0 border-4 border-solid border-transparent rounded-lg glow-effect"></div>
        </motion.div>






      </div>



      <div className="flex justify-center absolute -right-1 top-6" style={{ zIndex: 1000 }}>
        <button className="px-6 py-3 text-lg font-bold text-purple-100 bg-black border border-white rounded-l-full shadow-lg">
          Discover Technical Events
        </button>
      </div>



      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent opacity-30 z-10"></div>






      <motion.div
  className="absolute bottom-0 -left-40 w-full hidden sm:block z-0 pointer-events-none h-screen"
  initial={{ x: -300, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ once: false }}
>
  <motion.img
    src="rb_2148402774.png"
    alt="Himalayas"
    className="object-cover transform opacity-100 h-screen"
  />
</motion.div>


      <div className="absolute bottom-0 -right-0 w-full hidden sm:block z-0 pointer-events-none">
        <img
          src="rb_2.png"
          alt="Himalayas"
          className="w-full object-cover transform lg:translate-y-[170px] 2xl:translate-y-[170px] opacity-100"
        />
      </div>


    </div>
  );
};

export default SpotlightGrid;
