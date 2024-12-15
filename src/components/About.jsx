import React from 'react'
import Navbarr from './Navbar'
import Comingsoon from './Comingsoon'
import { motion } from 'framer-motion';
import DesktopFooter from './DesktopFooter';


const About = () => {
  return (

    <div>
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