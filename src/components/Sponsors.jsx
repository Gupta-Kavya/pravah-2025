import React from 'react';
import Comingsoon from './Comingsoon';
import Navbarr from './Navbar';
import DesktopFooter from './DesktopFooter';
import Sponsorform from './Sponsorform';
import { motion } from 'framer-motion';

const Sponsors = () => {
    const handleButtonClick = () => {
        window.location.href = "/sponsorship-form"; // Replace with your form URL or route
    };

    return (
        <div className="text-gray-900 relative overflow-hidden">
            <Navbarr />

            <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 mt-16 relative">

                <motion.section
                    className="text-center space-y-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 100 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <div className="relative">
                        {/* Main Heading */}
                        <motion.h1
                            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-500 tracking-widest pattaya-regular"
                        >
                            Partner with Pravah'25
                        </motion.h1>

                        {/* Tagline */}
                        <motion.h2
                            className="absolute right-0 top-6 md:top-16 text-sm md:text-md font-semibold text-gray-700 italic tracking-widest font-serif"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            Celebrate 25 years of excellence with us.
                        </motion.h2>
                    </div>






                </motion.section>

      
                    <Sponsorform />
         

            </main>
            <DesktopFooter />
        </div>
    );
};

export default Sponsors;
