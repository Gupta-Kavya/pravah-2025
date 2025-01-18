import React from 'react';
import Navbarr from './Navbar';
import DesktopFooter from './DesktopFooter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Sponsors = () => {
    return (
        <div className="text-gray-800 relative overflow-hidden">
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
            </Helmet>

            <Navbarr eventName={"Flagship Partners"} />
            <ParallaxProvider>
                <Parallax speed={-15}>
                    <main className="min-h-screen flex flex-col items-center px-4 md:px-16 mt-16 relative mb-32">
                      

                        {/* Sponsors Section */}
                        <motion.section
    className="w-full mt-20"
    initial={{ opacity: 0, y:50 }}
    whileInView={{ opacity: 1, y: 100 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
        {/* Coding Partner */}
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium uppercase tracking-wider mb-6 audiowide-regular">
                Coding Partner
            </h3>
            <img
                src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1736790201/lohvxbi3eujnruxepy43.png"
                alt="Coding Partner"
                className="w-44 h-auto"
            />
        </div>

        {/* Radio Partner */}
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium uppercase tracking-wider mb-6 audiowide-regular">
                Radio Partner
            </h3>
            <img
                src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1736790215/tknvlipq31aaziq5gcvm.png"
                alt="Radio Partner"
                className="w-28 h-auto"
            />
        </div>

        {/* Technology Partner */}
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium uppercase tracking-wider mb-6 audiowide-regular">
                Technology Partner
            </h3>
            <div className="flex gap-8">
                <img
                    src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1736790221/v7fbrrt9malhtx8jmkxy.png"
                    alt="Technology Partner 1"
                    className="w-36 sm:w-60 h-auto"
                />
                <img
                    src="http://res.cloudinary.com/dktkdi3sm/image/upload/v1736790225/adqzj3vrzserlrocygb6.svg"
                    alt="Technology Partner 2"
                    className="w-28 h-auto"
                />
            </div>
        </div>

        {/* Workplace Readiness Solution Partner */}
        <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium uppercase tracking-wider mb-6 audiowide-regular text-center">
                Workplace Readiness Solution Partner
            </h3>
            <img
                src="https://res.cloudinary.com/dktkdi3sm/image/upload/v1736790233/esnjmv4legytq2ohmirj.png"
                alt="Workplace Readiness Solution Partner"
                className="w-96 h-auto"
            />
        </div>
    </div>
</motion.section>









 {/* <motion.section
                            className={`text-center space-y-8 mt-6 `}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 130 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                           
                                <div className="relative">
                                    <motion.h1
                                        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-black font-sans tracking-tight"
                                    >
                                        Sponsors
                                        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-[4px] bg-gradient-to-r from-[#351332] to-[#9e1c9e] mt-1 rounded-full"></span>
                                    </motion.h1>
                                </div>

                           

                        </motion.section> */}




                        {/* Normal Sponsors Section */}
<motion.section
    className="w-full mt-20 flex flex-wrap justify-center items-center gap-10 mb-20"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 100 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
>
    {/* Sponsor 1 */}
    <div className="flex flex-col items-center">
        <img
            src="http://res.cloudinary.com/dktkdi3sm/image/upload/v1736790236/rsnfhxkznnongeu3dhsl.svg"
            alt="Akshat"
            className="w-48 h-auto mb-4"
        />
    </div>

   
</motion.section>



                    </main>
                </Parallax>

                {/* Background Image */}
                <motion.div
                    className="fixed -bottom-0 left-0 w-full hidden sm:block pointer-events-none -z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="/rb_2149151140.png"
                        alt="Pravah 2025 - Incredible India | SKIT"
                        className="w-full h-auto object-cover transform translate-y-[200px] opacity-20"
                    />
                </motion.div>
            </ParallaxProvider>

            <DesktopFooter />
        </div>
    );
};

export default Sponsors;
