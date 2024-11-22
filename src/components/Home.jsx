import React, { useState, useRef, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbarr from "./Navbar";
import Footer from "./Footer";
import ReactTypingEffect from 'react-typing-effect';
import CountUp from 'react-countup';
import EventCountdown from "./CountdownTimer";


const Home = () => {






  const [bgColor, setBgColor] = useState('bg-transparent');
  const [textColor, settextColor] = useState('text-white');
  const [filter, setFilter] = useState('filter sm:invert sm:sepia sm:brightness-100 sm:contrast-100');

  const handleLeave = (origin, destination, direction) => {
    if (destination.index === 0) {
      // User is on the first section
      setBgColor('bg-transparent'); // Transparent background
      settextColor("text-white"); // Text color set to white
      setFilter("filter sm:invert sm:sepia sm:brightness-100 sm:contrast-100"); // Apply filter
    } else {
      // User is not on the first section
      setBgColor('bg-transparent'); // Background set to white (or any other color you prefer)
      settextColor("text-black"); // Text color set to black
      setFilter(""); // Remove filter
    }
  };





  const PriorSponsors = [
    {
      id: 1,
      name: "Sponsor 1",
      image: "https://pravah.skit.ac.in/_next/static/media/sp2.41c9d6ea.png", // Replace with the actual image URL
    },
    {
      id: 2,
      name: "Sponsor 2",
      image: "https://pravah.skit.ac.in/_next/static/media/sp9.7118fa8c.png", // Replace with the actual image URL
    },
    {
      id: 3,
      name: "Sponsor 3",
      image: "https://pravah.skit.ac.in/_next/static/media/sp6.f8cffbf3.png", // Replace with the actual image URL
    },
    {
      id: 4,
      name: "Sponsor 4",
      image: "https://pravah.skit.ac.in/_next/static/media/sp5.8b4b3d25.png", // Replace with the actual image URL
    },
    {
      id: 5,
      name: "Sponsor 5",
      image: "https://pravah.skit.ac.in/_next/static/media/sp4.390e7292.png",


    }
  ]



  const highlights = [
    { number: '100+', label: 'Events' },
    { number: '4000+', label: 'Registrations' },
    { number: '6500+', label: 'Footfall' },
    { number: '300+', label: 'Winners' },
    { number: '20+', label: 'Sponsors' },
    { number: '50+', label: 'Cricket' },
  ];

  const [activeIndex, setActiveIndex] = useState(1);


  const events = [
    {
      id: 1,
      name: "Thirak",
      description: "A mesmerizing cultural dance event.",
      image: "https://pravah.skit.ac.in/_next/static/media/thirak.bd3de307.webp",
    },
    {
      id: 2,
      name: "DJ Night",
      description: "An electrifying night with popular DJs.",
      image: "https://pravah.skit.ac.in/_next/static/media/dj.cab3f656.webp",
    },
    {
      id: 5,
      name: "Celebrity Night",
      description: "Meet your favorite celebrities in person.",
      image: "https://pravah.skit.ac.in/_next/static/media/celebrityNight.c24587f0.webp",
    },
  ];



  const devents = [
    {
      id: 1,
      name: "Thirak",
      description: "A mesmerizing cultural dance event.",
      image: "https://pravah.skit.ac.in/_next/static/media/thirak.bd3de307.webp",
    },
    {
      id: 2,
      name: "DJ Night",
      description: "An electrifying night with popular DJs.",
      image: "https://pravah.skit.ac.in/_next/static/media/dj.cab3f656.webp",
    },
    {
      id: 5,
      name: "Celebrity Night",
      description: "Meet your favorite celebrities in person.",
      image: "https://pravah.skit.ac.in/_next/static/media/celebrityNight.c24587f0.webp",
    },
    {
      id: 1,
      name: "Sur",
      description: "Feel the melody of enchanting voices.",
      image: "https://pravah.skit.ac.in/_next/static/media/sur.0af72f62.webp",
    },
    {
      id: 2,
      name: "Rawaz",
      description: "A dazzling showcase of style and elegance through stunning modeling performances.",
      image: "https://pravah.skit.ac.in/_next/static/media/rawaz.2c862ac8.webp",
    },
    {
      id: 5,
      name: "Rapraarazi",
      description: "An electrifying rap battle where words ignite and rhythms collide.",
      image: "https://t3.ftcdn.net/jpg/06/65/37/10/360_F_665371013_CpDsBpze9l3EZAmxNeesl4irAysgXJLK.jpg",
    },
  ];








  const events2 = [
    {
      id: 1,
      name: "Sur",
      description: "Feel the melody of enchanting voices.",
      image: "https://pravah.skit.ac.in/_next/static/media/sur.0af72f62.webp",
    },
    {
      id: 2,
      name: "Rawaz",
      description: "A dazzling showcase of style and elegance through stunning modeling performances.",
      image: "https://pravah.skit.ac.in/_next/static/media/rawaz.2c862ac8.webp",
    },
    {
      id: 5,
      name: "Rapraarazi",
      description: "An electrifying rap battle where words ignite and rhythms collide.",
      image: "https://t3.ftcdn.net/jpg/06/65/37/10/360_F_665371013_CpDsBpze9l3EZAmxNeesl4irAysgXJLK.jpg",
    },
  ];

  const handleClick = (index) => {
    if (activeIndex !== index) {
      // Set the clicked image as active
      setActiveIndex(index);
    }
  };


  const Celebrities = [
    {
      id: 1,
      name: "Nushrrat Bharuccha",
      image: "/nushrat_barucha.jpg",
    },
    {
      id: 2,
      name: "Jassie Gill",
      image: "/jassie_gill.jpg",
    },
    {
      id: 3,
      name: "Navjot Ahuja",
      image: "/navjot_ahuja.jpg",
    },
    {
      id: 4,
      name: "Suniel Shetty",
      image: "/suniel-shetty.jpeg",
    },
    {
      id: 5,
      name: "Nora Fatehi",
      image: "/nora_fatehi.png",
    },

    {
      id: 6,
      name: "Gajendra Verma",
      image: "/gajendra_verma.jpg",
    },
  ];




  const Celebrities1 = [
    {
      id: 1,
      name: "Kumar Vishwas",
      image: "/kumar_vishwas.jpg",
    },
    {
      id: 2,
      name: "Shruti Sinha",
      image: "/shruti_sinha.jpg",
    },
    {
      id: 3,
      name: "Ravindra Upadhyay",
      image: "/ravindra.jpg",
    },
    {
      id: 4,
      name: "Naushad Ali Kawa",
      image: "/naushad.jpg",
    },

  ];
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScrollLeft) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);


  const handleDown = () => {





    // Add a click event listener to the button or element
    document.getElementById("vibrateButton").addEventListener("click", function () {
      // Trigger device vibration
      if (navigator.vibrate) {
        navigator.vibrate(200); // Vibrates for 200ms
      } else {
        console.log("Vibration API is not supported on this device.");
      }
    });



  }

  return (
    <>
      <Navbarr bgColor={bgColor} textColor={textColor} filter={filter} />







      <div className="">

        <ReactFullpage
          // Fullpage.js options
          licenseKey={"YOUR_KEY_HERE"} // Replace with your license key
          scrollingSpeed={200} // Transition speed between sections
          navigation={false} // Enables navigation dots
          scrollOverflow={false}
          onLeave={handleLeave}

          render={({ fullpageApi }) => (
            <ReactFullpage.Wrapper>




              {/* Section 1 */}
              <div className="section relative overflow-hidden" style={{ overflowX: 'hidden' }}>
                {/* Video Background */}
                <video
                  autoPlay
                  loop
                  muted
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -2, // Place the video behind the overlay
                  }}
                >
                  <source src="/bcvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Black with 40% opacity
                    zIndex: -1, // Place it above the video but below the content
                  }}
                ></div>

                {/* Content */}
                <div style={{ position: "relative", zIndex: 1, color: "white", textAlign: "center" }}>
                  {/* <motion.div
                  className="transparent-text mt-0 sm:mt-5"
                  initial={{ scale: 0, rotate: -10 }} // Slight rotation to the left initially
                  animate={{ scale: 1, rotate: 0 }} // Final position with slight left rotation
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Pravah
                  <span className="year">2025</span>
                </motion.div> */}


                  <img src="/logo.png" className="w-full mx-auto sm:w-72 sm:mb-10 sm:hidden" />



                  <ReactTypingEffect
                    text={["Pravah 2025.", "Incredible India.", "Celebrating Culture.", "Pravah 2025.", "India's Vibrant Spirit.", "Pride of India."]}
                    className="text-8xl font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 sm:block hidden"
                    speed={100}  // Typing speed (ms)
                    eraseDelay={2000} // Time before erasing text
                    typingDelay={500} // Time before typing starts
                    displayTextRenderer={(text, i) => {
                      return <h1 className="text-8xl font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 sm:block hidden">{text}</h1>;
                    }}
                  />



                  <EventCountdown />






                  <motion.div
                    className="transparent-text mt-0 sm:mt-5"
                    initial={{ scale: 0, rotate: -10 }} // Slight rotation to the left initially
                    animate={{ scale: 1, rotate: 0 }} // Final position with slight left rotation
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    Pravah
                    <span className="year">2025</span>
                  </motion.div>


                  {/* Adjusted Bar with Extending Beyond Screen */}
                  {/* <div
                  className="bg-gradient-to-r from-[#ffc895] via-[#ffc895] to-[#fac074] text-orange-700 text-sm md:text-base font-medium py-2 block sm:hidden hero-bar1 mt-16 border border-black"
                  style={{
                    marginLeft: "-50vw", // Extend beyond the left
                    marginRight: "-50vw", // Extend beyond the right
                    position: "relative",
                    zIndex: 1, // Make sure it stays on top of the video and overlay
                  }}
                >
                  <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <div className="scrolling-text text-nowrap">
                      Pravah 2025 | Incredible India | Experience the Culture
                    </div>
                  </div>
                </div>





                <div
                  className="bg-gradient-to-r from-[#96b9ff] via-[#96b9ff] to-[#96b9ff] text-white text-sm md:text-base font-medium py-2 block sm:hidden hero-bar mt-3 border border-black"
                  style={{
                    marginLeft: "-50vw", // Extend beyond the left
                    marginRight: "-50vw", // Extend beyond the right
                    position: "relative",
                    zIndex: 1, // Make sure it stays on top of the video and overlay
                  }}
                >
                  <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <div className="scrolling-text text-nowrap">
                      Unity in Diversity | Explore the Vibrance | Your Journey Starts Here
                    </div>
                  </div>
                </div>





                <div
                  className="bg-gradient-to-r from-[#b6ffc2] via-[#b6ffc2] to-[#b6ffc2] text-green-700 text-sm md:text-base font-medium py-2 block sm:hidden hero-bar3 mt-3 border border-black"
                  style={{
                    marginLeft: "-50vw", // Extend beyond the left
                    marginRight: "-50vw", // Extend beyond the right
                    position: "relative",
                    zIndex: 1, // Make sure it stays on top of the video and overlay
                  }}
                >
                  <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <div className="scrolling-text text-nowrap">
                      Amazing India | Wonderful India | Remarkable India | Fascinating India
                    </div>
                  </div>
                </div> */}








                </div>

                <a href="#" className="scroll-down" address="true" onClick={() => { handleDown(); fullpageApi.moveSectionDown(); }} id="vibrateButton"></a>
              </div>


              {/* Section 2 */}
              <div
                className="section p-8 bg-gray-100"
                style={{
                  // backgroundImage:
                  // "url(https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  // backgroundColor:"white"
                }}
              >


                <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-1/2 opacity-10 sm:hidden">
                  <img
                    src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731942286/klovm3j5eouby04wwjpq.png"
                    alt="Bottom Center Pattern"
                    className="w-auto"
                  />
                </div>

                <div className="absolute top-0 right-0 opacity-10 translate-x-1/2 -translate-y-16 sm:hidden">
                  <img
                    src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731942286/klovm3j5eouby04wwjpq.png"
                    alt="Top Right Pattern"
                    className="w-auto"
                  />
                </div>


                <div className="relative hidden sm:block">
                  <motion.img
                    src="rb_166391.png"
                    alt="Top Right Pattern"
                    className="absolute w-60"
                    initial={{ x: 200 }} // Start off-screen to the right
                    whileInView={{ x: 100 }} // Move to its normal position when in view
                    viewport={{ once: false }} // Animation triggers only once when the image comes into view
                    transition={{
                      type: 'spring',
                      stiffness: 50,
                      damping: 20,
                      duration: 10, // Adjust the duration for the speed of the animation
                    }}
                    style={{
                      top: '100px',
                      right: '16px',
                      transform: 'translateX(50%) translateY(-16px)', // Adjust the position to match your design
                    }}
                  />
                </div>




                <div className="relative hidden sm:block">
                  <motion.img
                    src="rb_56649.png"
                    alt="Top Right Pattern"
                    className="absolute w-60"
                    initial={{ x: -200 }} // Start off-screen to the left
                    whileInView={{ x: 0 }} // Move to its normal position when in view (on the leftmost side)
                    viewport={{ once: false }} // Animation triggers only once when the image comes into view
                    transition={{
                      type: 'spring',
                      stiffness: 50,
                      damping: 20,
                      duration: 10, // Adjust the duration for the speed of the animation
                    }}
                    style={{
                      top: '100px', // Adjust as necessary
                      left: '-70px',  // Align to the leftmost side
                      transform: 'translateX(0) translateY(-16px)', // Adjust if necessary
                    }}
                  />
                </div>







                {/* Video Section - desktop */}
                <div
                  className="sm:flex sm:flex-row gap-8 min-h-screen hidden transform justify-center"
                >
                  {/* Left Video Card */}
                  <motion.div
                    className="video-card p-4 hover:scale-105 transform transition self-center"  // Add z-50 and relative to position it above other elements
                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: -70, }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <iframe
                      width="350"
                      height="200"
                      src="https://www.youtube.com/embed/DyuUx1obJ_M"
                      title="Teaser Launch of Pravah"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-sm "
                    ></iframe>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-4">Teaser Launch.</h3>
                  </motion.div>

                  {/* Right Video Card */}
                  <motion.div
                    className="video-card rounded-lg p-4 hover:scale-105 transform transition self-center "  // Add z-50 and relative to position it above other elements
                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: -70 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  >
                    <iframe
                      width="350"
                      height="200"
                      src="https://www.youtube.com/embed/HVL4Fgel8S4"
                      title="Logo Reveal of Pravah"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-sm"
                    ></iframe>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-4">Logo Reveal.</h3>
                  </motion.div>
                </div>



                {/* Video Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 min-h-screen sm:hidden">





                  {/* Left Video Card */}
                  <motion.div
                    className="video-card rounded-lg p-4 hover:scale-105 transform transition self-center z-50"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <iframe
                      width="320"
                      height="180"
                      src="https://www.youtube.com/embed/DyuUx1obJ_M"
                      title="Teaser Launch of Pravah"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-xl"
                    ></iframe>


                    <p className="text-lg text-center font-semibold mt-4 text-black">
                      Teaser Launch
                    </p>

                  </motion.div>



                  <div
                    className="bg-gradient-to-r from-[#fff] via-[#fff] to-[#fff] text-yellow-600 text-sm md:text-base font-medium py-2 block sm:hidden hero-bar border border-black"
                    style={{
                      marginLeft: "-50vw", // Extend beyond the left
                      marginRight: "-50vw", // Extend beyond the right
                      position: "relative",
                      zIndex: 1, // Make sure it stays on top of the video and overlay
                      overflow: "hidden", // Hide overflow to keep it neat
                    }}
                  >
                    <div className="max-w-screen-xl mx-auto px-4 text-center">
                      <div className="marquee">
                        <div className="scrolling-text">
                          Unity in Diversity | Explore the Vibrance | Your Journey Starts Here
                        </div>
                        <div className="scrolling-text">
                          Unity in Diversity | Explore the Vibrance | Your Journey Starts Here
                        </div>
                      </div>
                    </div>
                  </div>



                  {/* Right Video Card */}
                  <motion.div
                    className="video-card rounded-lg p-4 hover:scale-105 transform transition self-center z-50"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  >
                    <iframe
                      width="320"
                      height="180"
                      src="https://www.youtube.com/embed/HVL4Fgel8S4"
                      title="Logo Reveal of Pravah"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-xl"
                    ></iframe>

                    <p className="text-lg text-center font-semibold mt-4 text-black">
                      Logo Reveal
                    </p>

                  </motion.div>
                </div>


                {/* <div className="relative hidden sm:block">
                  <motion.img
                    src="logo.png"
                    alt="Top Right Pattern"
                    className="absolute w-60 opacity-30"
                    initial={{ y: -500 }} // Start off-screen to the left
                    whileInView={{ x: -100, y: -100 }} // Move to its normal position when in view
                    viewport={{ once: false }} // Animation triggers only once when the image comes into view
                    transition={{
                      type: 'spring',
                      stiffness: 50,
                      damping: 20,
                      duration: 10, // Adjust the duration for the speed of the animation
                    }}
                    style={{
                      bottom: '0', // Position at the bottom of the container
                      left: '50%',  // Align to the center horizontally
                      transform: 'translateX(-50%) translateY(0)', // Center the image horizontally and keep vertical at the bottom
                    }}
                  />
                </div> */}




                <div className="absolute bottom-0 left-0 w-full hidden sm:block z-0">
                  <img
                    src="file.png" // Replace with your Everest image URL
                    alt="Himalayas"
                    className="w-full object-cover transform translate-y-[430px]"
                  />
                </div>


              </div>



              {/* Section 3 */}
              <div
                className="section p-8 bg-gray-100"
                style={{
                  // backgroundImage: "url(/pixelbuddha-studio-tCm7ZKIt-yE-unsplash.jpg)", // Your background image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >


                {/* desktop */}




                <div className="py-12 bg-transparent hidden sm:block">
                  {/* Title with Animation */}
                  <motion.div
                    className="text-center text-black font-bold text-4xl mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: -70 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                  >
                    Pravah'24 Milestones
                  </motion.div>

                  {/* Highlights Section */}
                  <div className="flex justify-center gap-6">
                    {/* Highlight Boxes */}
                    <motion.div
                      className="bg-black text-white rounded-lg shadow-md p-6 w-32 text-center"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: -40 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-2xl font-bold"><CountUp end={100} scrollSpyDelay={2000} enableScrollSpy={true} />+</div>
                      <div className="text-sm">Events</div>
                    </motion.div>

                    <motion.div
                      className="bg-black text-white rounded-lg shadow-md p-6 w-32 text-center"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: -40 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-2xl font-bold"><CountUp end={4000} scrollSpyDelay={2000} enableScrollSpy={true} />+</div>
                      <div className="text-sm">Registration</div>
                    </motion.div>

                    <motion.div
                      className="bg-black text-white rounded-lg shadow-md p-6 w-32 text-center"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: -40 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-2xl font-bold"><CountUp end={6500} scrollSpyDelay={2000} enableScrollSpy={true} />+</div>
                      <div className="text-sm">Footfall</div>
                    </motion.div>

                    <motion.div
                      className="bg-black text-white rounded-lg shadow-md p-6 w-32 text-center"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: -40 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-2xl font-bold"><CountUp end={300} scrollSpyDelay={2000} enableScrollSpy={true} />+</div>
                      <div className="text-sm">Winners</div>
                    </motion.div>

                    <motion.div
                      className="bg-black text-white rounded-lg shadow-md p-6 w-32 text-center"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: -40 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-2xl font-bold"><CountUp end={20} scrollSpyDelay={1000} enableScrollSpy={true} />+</div>
                      <div className="text-sm">Sponsors</div>
                    </motion.div>
                  </div>
                </div>












                {/* Animated Title */}
                <motion.h2
                  className="text-xl font-bold text-center text-[#1a1a1a] mt-28 sm:hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }} // Trigger animation only once
                >
                  Pravah'25 Highlights
                </motion.h2>

                {/* Highlight Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 sm:hidden">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="bg-black text-white rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation for cards
                      viewport={{ once: false }} // Trigger animation only once per card
                    >
                      <div className="p-4 text-center">
                        <p className="text-4xl font-bold text-yellow-500">{highlight.number}</p>
                        <p className="text-lg mt-2">{highlight.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>


                <div className="absolute bottom-0 left-0 w-full hidden sm:block">
                  <img
                    src="rb_37172.png" // Replace with your Everest image URL
                    alt="Himalayas"
                    className="w-full object-cover transform translate-y-80"
                  />
                </div>
              </div>



              {/* Section 4 */}
              <div
                className="section p-8 bg-gray-100"
                style={{
                  // backgroundImage:
                  //   "url(/pixelbuddha-studio-tCm7ZKIt-yE-unsplash.jpg)", // Your background image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Bottom Center Pattern */}
                <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-1/2 opacity-50 sm:hidden">
                  <img
                    src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731942286/klovm3j5eouby04wwjpq.png"
                    alt="Bottom Center Pattern"
                    className="w-auto"
                  />
                </div>

                {/* Top Right Pattern */}
                <div className="absolute top-0 right-0 opacity-50 translate-x-1/2 -translate-y-16 sm:hidden">
                  <img
                    src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731942286/klovm3j5eouby04wwjpq.png"
                    alt="Top Right Pattern"
                    className="w-auto"
                  />
                </div>






                {/* Event Cards - desktop*/}


                <div className="relative">
                  {/* Title with animation from top */}
                  <motion.h2
                    className="text-4xl font-bold text-center mb-10"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Cultural Wonders
                  </motion.h2>

                  {/* Slider container animation with whileInView */}
                  <motion.div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-40"
                    initial={{ y: 200, opacity: 0 }} // Start below the viewport with opacity 0
                    whileInView={{ y: 0, opacity: 1 }} // Animate to the final position when in view
                    transition={{ duration: 2, ease: "easeOut" }} // Smooth animation
                    viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the container is visible
                  >
                    {devents.map((event, index) => (
                      <div
                        key={index}
                        className="relative flex-shrink-0 w-96 h-48 rounded-lg bg-cover bg-top snap-center shadow-sm border-4 border-black"
                        style={{ backgroundImage: `url(${event.image})` }}
                      >
                        {/* Darkness overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

                        {/* Event name */}
                        <h3 className="absolute bottom-16 left-4 text-xl font-semibold text-white z-10">
                          {event.name}
                        </h3>

                        {/* Explore button (always visible) */}
                        <button
                          className="absolute left-4 px-4 py-2 bottom-4 text-sm font-medium text-white border-2 border-white rounded-lg z-10 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                          Explore &rarr;
                        </button>
                      </div>
                    ))}
                  </motion.div>
                </div>
















                {/* Event Cards */}
                <div className="space-y-6 top-16 relative sm:hidden">
                  {events.map((event, index) => (
                    <motion.div
                      key={event.id}
                      onClick={() => handleClick(index)}
                      className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${activeIndex === index ? "h-[200px]" : "h-[100px]"
                        }`}
                      style={{
                        backgroundImage: `url(${event.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: false }}
                    >
                      {/* Overlay that is always visible */}
                      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4">
                        <h3 className="text-xl font-bold">{event.name}</h3>

                        {/* Description appears only if active */}
                        {activeIndex === index && (
                          <p className="text-center mt-2 transition-opacity duration-300">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>





                <div className="absolute bottom-0 left-0 w-full hidden sm:block z-0">
                  <img
                    src="rb_24165.png" // Replace with your Everest image URL
                    alt="Himalayas"
                    className="w-full object-cover transform translate-y-[420px]"
                  />
                </div>


              </div>
















              {/* Section 5*/}
              <div
                className="section p-8"
                style={{
                  backgroundImage:
                    "url(/pixelbuddha-studio-tCm7ZKIt-yE-unsplash.jpg)", // Your background image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Bottom Center Pattern */}
                <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-1/2 opacity-50 sm:hidden">
                  <img
                    src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731942286/klovm3j5eouby04wwjpq.png"
                    alt="Bottom Center Pattern"
                    className="w-auto"
                  />
                </div>

                {/* Top Right Pattern */}
                <div className="absolute top-0 right-0 opacity-50 translate-x-1/2 -translate-y-16 sm:hidden">
                  <img
                    src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1731942286/klovm3j5eouby04wwjpq.png"
                    alt="Top Right Pattern"
                    className="w-auto"
                  />
                </div>

                {/* Event Cards */}
                <div className="space-y-6 top-16 relative">
                  {events2.map((event, index) => (
                    <motion.div
                      key={event.id}
                      onClick={() => handleClick(index)}
                      className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 border border-gray-300 ${activeIndex === index ? "h-[200px]" : "h-[100px]"
                        }`}
                      style={{
                        backgroundImage: `url(${event.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: false }}
                    >
                      {/* Always visible event name */}
                      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4">
                        <h3 className="text-xl font-bold">{event.name}</h3>

                        {/* Description only visible if active */}
                        {activeIndex === index && (
                          <p className="text-center mt-2 transition-opacity duration-300">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>















              {/* Section 6*/}
              <div
                className="section p-8 relative"
                style={{
                  backgroundImage: "url(/pixelbuddha-studio-tCm7ZKIt-yE-unsplash.jpg)", // Your background image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-5 z-0"></div>

                {/* Content */}
                <motion.h2
                  className="text-xl font-bold text-center mb-8 relative top-16 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  Meet the Celebrities
                </motion.h2>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative top-16 z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  {Celebrities.map((celebrity) => (
                    <motion.div
                      key={celebrity.id}
                      className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-black border-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: false }}
                    >
                      {/* Image container with fixed height */}
                      <div className="w-full h-20 overflow-hidden">
                        <img
                          src={celebrity.image}
                          alt={celebrity.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Text container */}
                      <div className="p-4 text-center">
                        <h3 className="text-sm font-semibold text-yellow-600 text-nowrap">
                          {celebrity.name}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>




              {/* Section 6.1*/}
              <div
                className="section p-8 relative"
                style={{
                  backgroundImage: "url(/pixelbuddha-studio-tCm7ZKIt-yE-unsplash.jpg)", // Your background image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-5 z-0"></div>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative top-16 z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  {Celebrities1.map((celebrity) => (
                    <motion.div
                      key={celebrity.id}
                      className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border-black border-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: false }}
                    >
                      {/* Image container with fixed height */}
                      <div className="w-full h-20 overflow-hidden">
                        <img
                          src={celebrity.image}
                          alt={celebrity.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Text container */}
                      <div className="p-4 text-center">
                        <h3 className="text-sm font-semibold text-yellow-600 text-nowrap">
                          {celebrity.name}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Seamless Marquee Section */}


                {/* Seamless Marquee Animation */}
                <style jsx>{`
    .marquee {
      display: flex;
      animation: marquee-scroll 15s linear infinite;
    }
    @keyframes marquee-scroll {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `}</style>
              </div>










              {/* Section 7*/}
              <div
                className="section relative"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1653495482635-18acfead7ba8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", // Your background image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative", // Ensure stacking context
                }}
              >
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Black color with 50% opacity
                    zIndex: 1,
                  }}
                />


                <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 opacity-50">
                  <img
                    src="/logo.png"
                    alt="Bottom Center Pattern"
                    className="w-auto"
                  />
                </div>


                {/* Content */}
                <div style={{ position: "relative", zIndex: 2 }}>
                  <Footer />
                </div>
              </div>


            </ReactFullpage.Wrapper>
          )}
        />
      </div>












    </>
  );
};

export default Home;
