import React from 'react'
import Navbarr from './Navbar'
import Comingsoon from './Comingsoon'
import { motion } from 'framer-motion';
import DesktopFooter from './DesktopFooter';
import { Helmet } from 'react-helmet';


const About = () => {
  return (

    <div>
      <Helmet>
  <title>Pravah 2025 - Celebrate Culture and Tradition | SKIT</title>
  <meta
    name="description"
    content="Immerse yourself in Pravah 2025 at SKIT, a vibrant celebration of cultural diversity, creativity, and tradition, showcasing the spirit of Incredible India."
  />
  <meta
    name="keywords"
    content="Pravah 2025, cultural events, SKIT, Swami Keshvanand Institute of Technology, youth fest, traditional events, creative arts, Incredible India"
  />
  <meta
    property="og:title"
    content="Pravah 2025 - Celebrate Culture and Tradition | SKIT"
  />
  <meta
    property="og:description"
    content="Experience the essence of culture and tradition at Pravah 2025, SKIT's premier cultural festival, featuring dynamic performances, arts, and creativity."
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

      <Navbarr />



      <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 mt-16 relative">





        <h1 className='bungee-shade-regular mt-10 text-7xl'>
          <motion.span
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Pravah'25
          </motion.span>
        </h1>

        {/* Animated Section */}
        <div className="flex items-center justify-between w-full max-w-4xl bg-black rounded-full overflow-hidden shadow-xl mt-10 border-4 border-black">

          {/* Left Image */}
          <motion.div
            className="w-1/3 h-64 bg-cover bg-center rounded-l-xl relative -left-5"
            style={{ backgroundImage: 'url("/logo.png")' }}
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
          </motion.div>

          {/* Text on the right */}
          <motion.div
            className="w-2/3 px-8 py-6 text-white"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4 cookie-regular">Welcome to Pravah'25</h2>
            <p className="text-lg leading-relaxed abeezee-regular">
              Pravah is the annual college fest that brings together a celebration of culture, technology, sports, and more. A platform for innovation and creativity, attracting students nationwide.
            </p>
          </motion.div>

        </div>








      </main>

      <DesktopFooter />

    </div>
  )
}

export default About