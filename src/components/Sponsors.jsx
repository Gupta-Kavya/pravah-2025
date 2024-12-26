import React from 'react';
import Comingsoon from './Comingsoon';
import Navbarr from './Navbar';
import DesktopFooter from './DesktopFooter';
import Sponsorform from './Sponsorform';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Sponsors = () => {
    const handleButtonClick = () => {
        window.location.href = "/sponsorship-form"; // Replace with your form URL or route
    };

    return (
        <div className="text-gray-900 relative overflow-hidden">
            <Helmet>
                <title>Become a Sponsor - Partner with Aaveg and Pravah | SKIT</title>
                <meta
                    name="description"
                    content="Partner with Aaveg and Pravah at SKIT and showcase your brand at one of the largest sports and cultural fests. Support innovation, creativity, and youth engagement."
                />
                <meta
                    name="keywords"
                    content="Aaveg sponsors, Pravah sponsors, SKIT sponsors, sponsor opportunities, brand partnership, youth fest sponsorship, cultural fest sponsorship, sports fest sponsorship"
                />
                <meta
                    property="og:title"
                    content="Become a Sponsor - Partner with Aaveg and Pravah | SKIT"
                />
                <meta
                    property="og:description"
                    content="Gain valuable exposure and support dynamic sports and cultural events by sponsoring Aaveg and Pravah at SKIT. Connect with a vibrant and energetic audience."
                />
                <meta property="og:url" content="https://pravah.skit.ac.in/skit-pravah-2025-sponsors" />
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
            <ParallaxProvider>
                <Parallax speed={-15}>
                    <main className="min-h-screen flex flex-col items-center px-6 md:px-12 mt-16 relative mb-72 ">
                        {/* <Sponsorform /> */}
                        <Comingsoon />
                    </main>

                </Parallax>

                {/* <motion.div
                    className="fixed -bottom-0 left-0 w-full hidden sm:block pointer-events-none -z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="/rb_2149151140.png"
                        alt="Himalayas"
                        className="w-full h-auto object-cover transform translate-y-[200px] translate-x-0 opacity-30"
                    />
                </motion.div>

                <div className="fixed -bottom-0 left-0 w-full hidden sm:block pointer-events-none -z-20">
                    <img
                        src="/rb_2149158780.png"
                        alt="Himalayas"
                        className="w-full h-auto object-cover transform translate-y-[300px] translate-x-0 opacity-10"
                    />
                </div> */}
            </ParallaxProvider>

            <DesktopFooter />
        </div>
    );
};

export default Sponsors;
