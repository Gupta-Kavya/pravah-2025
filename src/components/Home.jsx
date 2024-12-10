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
import Carousel from "./Carousel";
import DesktopFooter from "./DesktopFooter";
import SponsorCarousel from "./SponsorCarousel";
import { FaArrowRight } from "react-icons/fa6";
import Glimpses from "./Glimpses";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Landing from "./Landing";


const Home = () => {


  const celebrities = [
    { image: "/nushrat_barucha.jpg", name: "Nushrratt Bharuccha" },
    { image: "/jassie_gill.jpg", name: "Jassie Gill" },
    { image: "/navjot_ahuja.jpg", name: "Navjot Ahuja" },
    { image: "/suniel-shetty.jpeg", name: "Suniel Shetty" },
    { image: "/gajendra_verma.jpg", name: "Gajendra Verma" },
    { image: "/nora_fatehi.png", name: "Nora Fatehi" },
    { image: "/kumar_vishwas.jpg", name: "Kumar Vishwas" },
    { image: "/shruti_sinha.jpg", name: "Shruti Sinha" },
    { image: "/ravindra.jpg", name: "Ravindra Upadhyay" },
    { image: "/naushad.jpg", name: "Naushad Ali Kawa" },
  ];


  const sponsors = [
    { image: "https://pravah.skit.ac.in/_next/static/media/sp2.41c9d6ea.png", name: "Nushrratt Bharuccha" },
    { image: "https://pravah.skit.ac.in/_next/static/media/sp1.1ab77316.png", name: "Jassie Gill" },
    { image: "https://pravah.skit.ac.in/_next/static/media/sp8.75f6a318.png", name: "Navjot Ahuja" },
    { image: "https://pravah.skit.ac.in/_next/static/media/sp7.2e4482a2.png", name: "Suniel Shetty" },
    { image: "https://pravah.skit.ac.in/_next/static/media/sp5.8b4b3d25.png", name: "Gajendra Verma" },
    { image: "https://pravah.skit.ac.in/_next/static/media/sp4.390e7292.png", name: "Nora Fatehi" },
    { image: "https://pravah.skit.ac.in/_next/static/media/sp9.7118fa8c.png", name: "Kumar Vishwas" },
    { image: "https://pravah.skit.ac.in/_next/static/media/sp3.336edc77.png", name: "Shruti Sinha" },
    { image: "https://pravah.skit.ac.in/_next/static/media/sp6.f8cffbf3.png", name: "Ravindra Upadhyay" },

  ];

  const [bgColor, setBgColor] = useState('bg-white');
  const [textColor, settextColor] = useState('text-gray-700');
  const [filter, setFilter] = useState();
  const [announce, setAnnounce] = useState();
  const [navbarDisplay, setnavbarDisplay] = useState();

  const handleLeave = (origin, destination, direction) => {
    if (destination.index === 5) {

      setBgColor('bg-white');
      settextColor("text-black");
      // setFilter("filter sm:invert sm:sepia sm:brightness-100 sm:contrast-100");
      setAnnounce("hidden");
      setnavbarDisplay("hidden");
    } else if (destination.index === 0) {
      setAnnounce("block");

    } else {
      setBgColor('bg-white');
      settextColor("text-black");
      setFilter("");
      setAnnounce("hidden");
      setnavbarDisplay("block");
    }
  };

  const [isDesktop, setIsDesktop] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const [isVisible, setIsVisible] = useState({
    events: false,
    registration: false,
    footfall: false,
    winners: false,
    sponsors: false,
  });

  const handleInView = (key) => {
    setIsVisible((prev) => ({ ...prev, [key]: true }));
  };



  const PriorSponsors = [
    {
      id: 1,
      name: "Sponsor 1",
      image: "https://pravah.skit.ac.in/_next/static/media/sp2.41c9d6ea.png",
    },
    {
      id: 2,
      name: "Sponsor 2",
      image: "https://pravah.skit.ac.in/_next/static/media/sp9.7118fa8c.png",
    },
    {
      id: 3,
      name: "Sponsor 3",
      image: "https://pravah.skit.ac.in/_next/static/media/sp6.f8cffbf3.png",
    },
    {
      id: 4,
      name: "Sponsor 4",
      image: "https://pravah.skit.ac.in/_next/static/media/sp5.8b4b3d25.png",
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
      image: "/events/thirak.jpg",
      url: "/skit-pravah-2025-events-thirak-gallery"
    },
    {
      id: 2,
      name: "DJ Night",
      description: "An electrifying night with popular DJs.",
      image: "/events/djnight.jpg",
      url: "/skit-pravah-2025-events-thirak-gallery"
    },
    {
      id: 5,
      name: "Celebrity Night",
      description: "Meet your favorite celebrities in person.",
      image: "/events/cnight.jpg",
      url: "/skit-pravah-2025-events-thirak-gallery"
    },
    {
      id: 1,
      name: "Sur",
      description: "Feel the melody of enchanting voices.",
      image: "/events/sur.jpg",
      url: "/skit-pravah-2025-events-thirak-gallery"
    },
    {
      id: 2,
      name: "Rawaz",
      description: "A dazzling showcase of style and elegance through stunning modeling performances.",
      image: "/events/rawaz.jpg",
      url: "/skit-pravah-2025-events-thirak-gallery"
    },
    {
      id: 5,
      name: "Rapaarazi",
      description: "An electrifying rap battle where words ignite and rhythms collide.",
      image: "/events/raparrazi.jpg",
      url: "/skit-pravah-2025-events-thirak-gallery"
    },
    {
      id: 5,
      name: "Annual Day",
      description: "An electrifying rap battle where words ignite and rhythms collide.",
      image: "/events/annual.jpg",
      url: "/skit-pravah-2025-events-thirak-gallery"
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
      name: "Rapaarazi",
      description: "An electrifying rap battle where words ignite and rhythms collide.",
      image: "https://t3.ftcdn.net/jpg/06/65/37/10/360_F_665371013_CpDsBpze9l3EZAmxNeesl4irAysgXJLK.jpg",
    },
  ];

  const handleClick = (index) => {
    if (activeIndex !== index) {

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
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);


  const handleDown = () => {






    document.getElementById("vibrateButton").addEventListener("click", function () {

      if (navigator.vibrate) {
        navigator.vibrate(200);
      } else {
        console.log("Vibration API is not supported on this device.");
      }
    });



  }

  return (
    <>
      {/* <Landing /> */}
      <Helmet>
        <title>Pravah 2025 - Celebrating Incredible India | SKIT</title>
        <meta
          name="description"
          content="Join Pravah 2025 at SKIT to experience the vibrant culture, heritage, and traditions of Incredible India."
        />
        <meta
          name="keywords"
          content="Pravah 2025, Incredible India, Indian culture, heritage, tourism, SKIT, Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
        <meta
          property="og:title"
          content="Pravah 2025 - Celebrating Incredible India | SKIT"
        />
        <meta
          property="og:description"
          content="Discover the essence of unity in diversity with a spectacular showcase of Indian art, music, and history at SKIT."
        />
        <meta property="og:url" content="http://mysite.com/pravah-2025" />
        <meta
          name="author"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
        <meta
          name="organization"
          content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
        />
      </Helmet>



      <Navbarr bgColor={bgColor} textColor={textColor} filter={filter} announce={announce} navbarDisplay={navbarDisplay} />


      <div className="">

        <ReactFullpage

          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={300}
          navigation={true}
          scrollOverflow={false}
          onLeave={handleLeave}

          render={({ fullpageApi }) => (
            <ReactFullpage.Wrapper>




              {/* Section 1 */}
              <div
                className="section relative overflow-hidden"
                style={{
                  overflowX: "hidden",
                  // backgroundImage: "url('/background.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                }}
              >
                {/* Gradient Overlay */}
                {/* <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
                    zIndex: 0,
                  }}
                ></div> */}

                {/* Main Content */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    color: "white",
                    textAlign: "center",
                    padding: "50px 20px",
                  }}
                >
                  {/* Logo */}
                  {/* <img
                    src="/logo.png"
                    className="w-32 mx-auto sm:w-64 sm:mb-10"
                    alt="Pravah 2025 Logo"
                  /> */}

                  <h1 className="text-7xl sm:text-4xl font-extrabold text-black cookie-regular sm:hidden mt-10">Pravah 2025</h1>

                  {/* Dynamic Typing Effect */}
                  <ReactTypingEffect
                    text={[
                      "Pravah 2025",
                      "Celebrating Incredible India",
                      "The Silver Jubilee Year"
                    ]}
                    className="text-7xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 hidden sm:block"
                    speed={200}
                    eraseDelay={100}
                    typingDelay={300}
                    displayTextRenderer={(text) => (
                      <h1 className="text-7xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500">
                        {text}
                        <span className="text-black">|</span>
                      </h1>
                    )}
                  />





                  {/* Countdown Timer */}
                  <div className="mt-10 mb-20 hidden sm:block">
                    <EventCountdown />
                  </div>

                  {/* Decorative Text */}
                  {/* <motion.div
                    className="mt-5"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <p className="text-lg sm:text-xl font-semibold">
                      Experience the Culture, Colors, and Festivity of India
                    </p>
                  </motion.div> */}

                  {/* Call-to-Action Button */}
                  {/* <div className="mt-8">
                    <a
                      href="#"
                      className="inline-block px-8 py-3 text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-transform"
                      onClick={() => handleDown()}
                    >
                      Learn More
                    </a>
                  </div> */}
                </div>

                {/* Decorative Bars */}
                {/* <div
                  className="absolute bottom-0 w-full h-2"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, #ff9e00, #ff9e00 10px, #d4145a 10px, #d4145a 20px)",
                  }}
                ></div> */}
                {/* <div
  className="absolute top-0 w-full h-2"
  style={{
    background:
      "repeating-linear-gradient(45deg, #1a1a1d, #1a1a1d 10px, #4e4e50 10px, #4e4e50 20px)",
  }}
></div> */}


                {/* Scroll Down Indicator */}
                {/* <a
                  href="#"
                  className="scroll-down sm:hidden"
                  onClick={() => handleDown()}
                  id="vibrateButton"
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    animation: "bounce 2s infinite",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a> */}




                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 hidden sm:block z-50 pointer-events-none">
                  <img
                    src="file (8).png"
                    alt="Himalayas"
                    className="w-full object-cover transform lg:translate-y-[140px] 2xl:translate-y-[140px]"
                  />
                </div>



                <div className="absolute bottom-0 -right-0 w-full hidden sm:block z-20 pointer-events-none">
                  <img
                    src="file (9).png"
                    alt="Himalayas"
                    className="w-full object-cover transform lg:translate-y-[300px] 2xl:translate-y-[380px]"
                  />
                </div>



                <div className="absolute bottom-0 -right-0 w-full hidden sm:block z-0 pointer-events-none">
                  <img
                    src="rb_2149151140.png"
                    alt="Himalayas"
                    className="w-full object-cover transform lg:translate-y-[170px] 2xl:translate-y-[170px] opacity-30"
                  />
                </div>

                <div className="absolute bottom-0 -left-20 w-96 hidden sm:block z-0 pointer-events-none">
                  <img
                    src="rb_24869.png"
                    alt="Himalayas"
                    className="w-full object-cover transform lg:translate-y-[100px] 2xl:translate-y-[100px]"
                  />
                </div>

                <div className="absolute bottom-0 -right-20 w-96 hidden sm:block z-50 pointer-events-none">
                  <img
                    src="rb_2150428350.png"
                    alt="Himalayas"
                    className="w-full object-cover transform lg:translate-y-[40px] 2xl:translate-y-[40px]"
                  />
                </div>


              </div>


              {/* Section 2 */}
              <div
                className="section p-8 sm:bg-white section-2"

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


                {/* <div className="relative hidden sm:block">
                  <motion.img
                    src="rb_166391.png"
                    alt="Top Right Pattern"
                    className="absolute w-60"
                    initial={{ x: 200 }} 
                    whileInView={{ x: 100 }} 
                    viewport={{ once: false }} 
                    transition={{
                      type: 'spring',
                      stiffness: 50,
                      damping: 20,
                      duration: 10, 
                    }}
                    style={{
                      top: '100px',
                      right: '16px',
                      transform: 'translateX(50%) translateY(-16px)', 
                    }}
                  />
                </div>




                <div className="relative hidden sm:block">
                  <motion.img
                    src="rb_56649.png"
                    alt="Top Right Pattern"
                    className="absolute w-60"
                    initial={{ x: -200 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      type: 'spring',
                      stiffness: 50,
                      damping: 20,
                      duration: 10,
                    }}
                    style={{
                      top: '100px', 
                      left: '-70px',
                      transform: 'translateX(0) translateY(-16px)',
                    }}
                  />
                </div> */}







                {/* Video Section - desktop */}
                <div className="relative sm:flex sm:flex-row gap-8 min-h-screen hidden justify-center z-10 pointer-events-auto">
                  {/* Left Video Card */}
                  <motion.div
                    className="video-card p-4 hover:scale-105 transform transition self-center relative z-20 pointer-events-auto"
                    style={{ top: '', right: '50px' }}
                    initial={{ opacity: 0, y: 10, rotate: -15 }}
                    whileInView={{ opacity: 1, y: -50, rotate: -10 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  >


                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-4 pattaya-regular">Teaser Launch</h3>
                    <iframe
                      width="350"
                      height="200"
                      src="https://www.youtube.com/embed/DyuUx1obJ_M"
                      title="Teaser Launch of Pravah"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-sm"
                    ></iframe>
                  </motion.div>

                  {/* Right Video Card */}
                  <motion.div
                    className="video-card p-4 hover:scale-105 transform transition self-center relative z-20 pointer-events-auto"
                    style={{ top: '30px', left: '50px' }}
                    initial={{ opacity: 0, y: 100, rotate: 15 }}
                    whileInView={{ opacity: 1, y: -120, rotate: 10 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-4 pattaya-regular">Logo Reveal</h3>
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


                    <p className="text-lg text-center font-semibold mt-4 text-black pattaya-regular">
                      Teaser Launch
                    </p>

                  </motion.div>





                  <div
                    className="bg-gradient-to-r from-[#fff] via-[#fff] to-[#fff] text-yellow-600 text-sm md:text-base font-medium py-2 block sm:hidden hero-bar border border-black"
                    style={{
                      marginLeft: "-50vw",
                      marginRight: "-50vw",
                      position: "relative",
                      zIndex: 1,
                      overflow: "hidden",
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

                    <p className="text-lg text-center font-semibold mt-4 text-black pattaya-regular">
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
                    whileInView={{ x: -100, y: -100 }} 
                    viewport={{ once: false }} 
                    transition={{
                      type: 'spring',
                      stiffness: 50,
                      damping: 20,
                      duration: 10, 
                    }}
                    style={{
                      bottom: '0', 
                      left: '50%',  
                      transform: 'translateX(-50%) translateY(0)',
                    }}
                  />
                </div> */}




                {/* Overlapping Himalayas Image */}
                <div className="absolute bottom-0 left-0 w-full hidden sm:block z-10 pointer-events-none">
                  <img
                    src="rb_2149158786.png"
                    alt="Himalayas"
                    className="w-full object-cover transform lg:translate-y-[0px] 2xl:translate-y-[0px]"
                  />
                </div>

                <div className="absolute bottom-60 right-0 w-full hidden sm:block z-0 pointer-events-none">
                  <img
                    src="rb_28055.png"
                    alt="Himalayas"
                    className="w-full object-cover transform lg:translate-y-[250px] 2xl:translate-y-[0px] opacity-10"
                  />
                </div>


                {/* <div className="absolute -bottom-20 -left-20 w-96 hidden sm:block z-0 pointer-events-none">
                  <img
                    src="rb_4171.png"
                    alt="Himalayas"
                    className="w-96 object-cover transform lg:-translate-y-[150px] 2xl:translate-y-[0px] opacity-5"
                  />
                </div> */}

                {/* 
                <div className="absolute bottom-60 -right-40 w-96 hidden sm:block z-0 pointer-events-none">
                  <img
                    src="rb_2149353847 (1).png"
                    alt="Himalayas"
                    className="w-96 object-cover transform lg:translate-y-[100px] 2xl:translate-y-[0px] opacity-5"
                  />
                </div> */}

              </div>













              {/* Section 3 */}
              <div
                className="section p-8 sm:p-16 sm:bg-white section-3"
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


                <div className="relative hidden sm:block">
                  {/* Title with animation from top */}
                  <motion.h2
                    className="text-4xl font-bold text-center mb-8 my-16 cookie-regular"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Cultural Wonders
                  </motion.h2>





                  {/* Slider container animation with whileInView */}
                  <div
                    ref={scrollRef}
                    className="space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:mb-80 xl:mb-0 flex z-50 relative bg-white"
                    initial={{ y: 300, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {devents.map((event, index) => (
                      <div
                        key={index}
                        className="relative flex-shrink-0 w-96 h-52 rounded-xl bg-cover bg-center snap-center  transform transition-transform duration-300 ease-in-out bg-clip-padding shadow-xl"
                        style={{
                          backgroundImage: `url(${event.image})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          borderRadius: "1rem",
                        }}
                      >
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl bg-opacity-80"></div>

                        {/* Event name */}
                        <h3 className="absolute bottom-4 left-4 text-3xl font-semibold text-white z-10 drop-shadow-md pattaya-regular">
                          {event.name}
                        </h3>

                        {/* Explore button (styled) */}
                        <Link
                          to={event.url} // Replace with the desired route
                          className="absolute right-4 bottom-4 w-8 h-8 flex items-center justify-center text-lg font-medium text-white border-2 border-white rounded-xl bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 ease-out hover:scale-105 hover:from-orange-500 hover:to-red-600 z-50"
                        >
                          <span className="text-1xl text-white"><FaArrowRight /></span>
                        </Link>

                        {/* 3D Border Effect */}
                        {/* <div className="absolute inset-0 border-2 border-gray-900 transform scale-10  rounded-xl z-0"></div> */}
                      </div>
                    ))}
                  </div>



                  <Link to="/skit-pravah-2025-events">
                    <button className="flex items-center px-6 py-3 text-lg font-semibold text-white border-2 border-white rounded-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 ease-out hover:scale-105 hover:from-orange-400 hover:to-red-500 shadow-sm m-auto mb-24 mt-5 relative z-50 cursor-pointer hover:bg-hsl(0, 100%, 60%)">
                      <span>Explore</span>
                      <span className="ml-3 text-2xl">
                        <FaArrowRight />
                      </span>
                    </button>
                  </Link>

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
                        <h3 className="text-3xl font-bold pattaya-regular">{event.name}</h3>

                        {/* Description appears only if active */}
                        {activeIndex === index && (
                          <p className="text-center mt-2 transition-opacity duration-300 font-sans">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>









                <div className="absolute bottom-0 left-0 w-full hidden sm:block z-0 ">
                  <motion.img
                    src="file (9).png"
                    alt="Himalayas"
                    className="w-full object-cover transform"
                    initial={{ translateY: 400 }}
                    whileInView={{ translateY: 330 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  />
                </div>


              </div>




















              {/* Section 4 */}
              <div
                className="section p-8 sm:bg-white section-4"

              >


                {/* desktop */}




                <div className="py-12 bg-transparent hidden sm:block z-20">
                  {/* Title */}
                  <motion.div
                    className="text-center text-black font-bold text-3xl mb-8 cookie-regular"
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
                      viewport={{ once: true }}
                      onViewportEnter={() => handleInView("events")}
                    >
                      <div className="text-2xl font-bold">
                        {isVisible.events && <CountUp end={150} duration={2} />}+
                      </div>
                      <div className="text-sm">Events</div>
                    </motion.div>

                    <motion.div
                      className="bg-black text-white rounded-lg shadow-md p-6 w-32 text-center"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: -40 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      onViewportEnter={() => handleInView("registration")}
                    >
                      <div className="text-2xl font-bold">
                        {isVisible.registration && <CountUp end={6000} duration={2} />}+
                      </div>
                      <div className="text-sm">Registration</div>
                    </motion.div>

                    <motion.div
                      className="bg-black text-white rounded-lg shadow-md p-6 w-32 text-center"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: -40 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      onViewportEnter={() => handleInView("footfall")}
                    >
                      <div className="text-2xl font-bold">
                        {isVisible.footfall && <CountUp end={800} duration={2} />}+
                      </div>
                      <div className="text-sm">Footfall</div>
                    </motion.div>

                    <motion.div
                      className="bg-black text-white rounded-lg shadow-md p-6 w-32 text-center"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: -40 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                      onViewportEnter={() => handleInView("winners")}
                    >
                      <div className="text-2xl font-bold">
                        {isVisible.winners && <CountUp end={320} duration={2} />}+
                      </div>
                      <div className="text-sm">Winners</div>
                    </motion.div>

                    <motion.div
                      className="bg-black text-white rounded-lg shadow-md p-6 w-32 text-center"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: -40 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true }}
                      onViewportEnter={() => handleInView("sponsors")}
                    >
                      <div className="text-2xl font-bold">
                        {isVisible.sponsors && <CountUp end={100} duration={2} />}+
                      </div>
                      <div className="text-sm">Sponsors</div>
                    </motion.div>
                  </div>
                </div>












                {/* Animated Title */}
                <motion.h2
                  className="text-3xl font-bold text-center text-[#1a1a1a] mt-28 sm:hidden pattaya-regular"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
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
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: false }}
                    >
                      <div className="p-4 text-center">
                        <p className="text-4xl font-bold text-yellow-500">{highlight.number}</p>
                        <p className="text-lg mt-2">{highlight.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>


                <div className="absolute bottom-0 left-0 w-full hidden sm:block z-10">
                  <img
                    src="file (2).png"
                    alt="Himalayas"
                    className="w-full object-cover transform translate-y-0 lg:-translate-y-5 2xl:translate-y-96 opacity-5"
                  />
                </div>


                <div className="absolute bottom-0 left-0 w-full hidden sm:block z-30">
                  <img
                    src="rb_37172.png"
                    alt="Himalayas"
                    className="w-full object-cover transform translate-y-80 lg:translate-y-80 2xl:translate-y-96"
                  />
                </div>



              </div>







              {/* Section 5*/}
              <div
                className="section sm:bg-white p-8 sm:p-0 section-5 z-50"
                style={{
                  // backgroundImage: "url(/background.jpg)",
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
                <div className="space-y-6 top-16 relative sm:hidden">
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
                        <h3 className="text-3xl font-bold pattaya-regular">{event.name}</h3>

                        {/* Description only visible if active */}
                        {activeIndex === index && (
                          <p className="text-center mt-2 transition-opacity duration-300 font-sans">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>


                <motion.h2
                  className="text-3xl font-bold text-center cookie-regular mt-10 hidden sm:block"
                  initial={{ y: 0, opacity: 0 }}
                  whileInView={{ y: 20, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Former Celebrity Guests
                </motion.h2>

                <Carousel celebrities={celebrities} frameImage={"/AdobeStock_727905617.png"} />






                <div className="absolute bottom-0 left-0 w-full hidden sm:block z-0">
                  <motion.img
                    src="vecteezy_abstract-ethnic-geometric-pattern-background-design_13991676.jpg"
                    alt="Himalayas"
                    className="w-full object-cover transform"
                    initial={{ translateY: 150 }}
                    whileInView={{ translateY: 80 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  />
                </div>


                
                <div className="absolute bottom-0 left-0 w-full hidden sm:block z-0">
                  <motion.img
                    src="rb_38558.png"
                    alt="Himalayas"
                    className="w-full object-cover transform opacity-5"
                    initial={{ translateY: 150 }}
                    whileInView={{ translateY: 150 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  />
                </div>

              </div>















              {/* Section 6*/}
              <div
                className="section p-8 sm:p-0 relative sm:bg-black section-6"
                style={{
                  // backgroundImage: "url(/background.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >

                <Glimpses />





                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-0 z-0"></div>

                {/* Content */}
                <motion.h2
                  className="text-3xl font-bold text-center mb-8 relative top-16 z-10 sm:hidden pattaya-regular"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  Meet the Celebrities
                </motion.h2>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative top-16 z-10 sm:hidden"
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















                <div className="relative w-full h-screen z-50 glimpses hidden">
                  <div className="absolute inset-0 flex justify-center items-center">

                    {/* Video 1 */}
                    <motion.div
                      className="absolute w-[300px] h-[200px] bg-white p-3 rounded-xl top-24 border-2 border-black"
                      initial={{ rotate: 6 }}
                      animate={{ rotate: [6, -6, 6] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 2,
                        ease: "easeInOut",
                      }}
                      style={{
                        transformOrigin: "top center",
                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <div className="absolute -top-12 left-[40%] p-2 ">
                        <img
                          src="rb_1524.png"
                          alt="Image 1"
                          className="w-12 h-12 object-cover transform translate-z-1"
                        />
                      </div>

                      <iframe
                        className="w-full h-[150px] rounded-xl shadow-md"
                        src="https://www.youtube.com/embed/V-094flkqjI"
                        title="YouTube video 1"
                        allowFullScreen
                      ></iframe>

                      <p className="mt-2 text-center text-black">
                        #AfterMovie
                      </p>
                    </motion.div>

                    {/* Video 2 */}
                    <motion.div
                      className="absolute top-44 left-0 -rotate-12 transform w-[300px] h-[200px] bg-white p-3 rounded-xl border-2 border-black"
                      initial={{ rotate: -12 }}
                      animate={{ rotate: [6, -6, 6] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 2,
                        ease: "easeInOut",
                      }}
                      style={{
                        transformOrigin: "top center",
                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {/* Image */}
                      <div className="absolute -top-12 left-[40%] p-2">
                        <img
                          src="rb_1524.png"
                          alt="Image 2"
                          className="w-12 h-12 object-cover transform translate-z-1"
                        />
                      </div>

                      {/* Video */}
                      <iframe
                        className="w-full h-[150px] rounded-xl shadow-md"
                        src="https://www.youtube.com/embed/DyuUx1obJ_M"
                        title="YouTube video 2"
                        allowFullScreen
                      ></iframe>

                      {/* Text */}
                      <p className="mt-2 text-center text-black">
                        #AAVEG
                      </p>
                    </motion.div>

                    {/* Video 4 */}
                    <motion.div
                      className="absolute rotate-6 top-52 right-20 w-[300px] h-[200px] bg-white p-3 rounded-xl border-2 border-black"
                      initial={{ rotate: 6 }}
                      animate={{ rotate: [6, -6, 6] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 2,
                        ease: "easeInOut",
                      }}
                      style={{
                        transformOrigin: "top center",
                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {/* Image */}
                      <div className="absolute -top-12 left-[40%] p-2">
                        <img
                          src="rb_1524.png"
                          alt="Image 3"
                          className="w-12 h-12 object-cover transform translate-z-1"
                        />
                      </div>

                      {/* Video */}
                      <iframe
                        className="w-full h-[150px] rounded-xl shadow-md"
                        src="https://www.youtube.com/embed/HVL4Fgel8S4"
                        title="YouTube video 4"
                        allowFullScreen
                      ></iframe>

                      {/* Text */}
                      <p className="mt-2 text-center text-black">
                        #CelebrityNight
                      </p>
                    </motion.div>

                  </div>
                </div>







                <div className="absolute bottom-0 left-0 w-full sm:hidden z-0 hidden">
                  <motion.img
                    src="rb_28055.png"
                    alt="Himalayas"
                    className="w-full object-cover transform"
                    initial={{ translateY: 500 }}
                    whileInView={{ translateY: 170 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  />
                </div>

              </div>














              {/* Section 7*/}
              <div
                className="section relative sm:bg-white section-7"
              >
                {/* Overlay */}
                <div
                  className="sm:hidden"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    zIndex: 1,
                  }}
                />

                <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 opacity-50 sm:hidden">
                  <img
                    src="/logo.png"
                    alt="Bottom Center Pattern"
                    className="w-auto"
                  />
                </div>


                <motion.div
                  className="text-center text-black font-bold text-2xl cookie-regular hidden sm:block"
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 110 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                >
                  Past Patrons
                </motion.div>

                {/* Sponsor Carousel */}
                <SponsorCarousel sponsors={sponsors} />



                {/* Content Section */}
                <div className="sm:hidden" style={{ position: "relative", zIndex: 2 }}>
                  <Footer />
                </div>

                <div className="hidden sm:block" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", zIndex: 2 }}>
                  <DesktopFooter />
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
