import React from 'react'
import Comingsoon from './Comingsoon'
import Navbarr from './Navbar'
import DesktopFooter from './DesktopFooter'
import { Helmet } from 'react-helmet'
import { motion } from "framer-motion";
import Coordinator from './Coordinator'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Teampravah = () => {
    return (
        <div>
                 
            <Helmet>
                <title>Team Pravah - Meet the Minds Behind the Fest | SKIT</title>
                <meta
                    name="description"
                    content="Meet the dedicated team behind Pravah at SKIT. Discover the passionate individuals who bring creativity, organization, and energy to one of the largest cultural fests."
                />
                <meta
                    name="keywords"
                    content="Team Pravah, Pravah organizers, SKIT team, event coordinators, cultural fest team, youth fest leadership, SKIT Pravah committee"
                />
                <meta
                    property="og:title"
                    content="Team Pravah - Meet the Minds Behind the Fest | SKIT"
                />
                <meta
                    property="og:description"
                    content="Get to know the dynamic team behind Pravah at SKIT. These creative minds and organizers are the driving force behind this incredible cultural fest."
                />
                <meta property="og:url" content="https://pravah.skit.ac.in/the-team-behind-skit-pravah-2025" />
                <meta
                    name="author"
                    content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
                />
                <meta
                    name="organization"
                    content="Swami Keshvanand Institute of Technology, Management, and Gramothan"
                />
            </Helmet>

            <Navbarr eventName={"Team Pravah"} />
           
             <ParallaxProvider>
                    <Parallax speed={-15}>
            <main className="min-h-screen flex flex-col items-center justify-center mt-60 relative mb-40 md:p-16 p-4">


            <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Coordinator



                    </motion.span>
                </h2>

                <div className="grid grid-cols-2 gap-x-4 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 gap-8 mt-8">


                    <Coordinator
                        name={"Dipesh Kaushik"}
                        number={9001928479}

                        
                    />

                    <Coordinator
                        name={"Uday Singh Sisodia"}
                        number={7733917219}
                        
                    />


                </div>






                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Documentation / Content



                    </motion.span>
                </h2>


                <div className="grid grid-cols-2 w-full max-w-sm font-sans sm:w-auto sm:max-w-full relative z-50 gap-8">


                    <Coordinator
                        name={"Yashvardhan Sharma"}
                        
                    />

                    <Coordinator
                        name={"Kaynat Ansari"}
                        
                    />


                </div>









                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Technical



                    </motion.span>
                </h2>


                <div className="grid grid-cols-3 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 gap-4 flex-wrap">


                    <Coordinator
                        name={"Amartya Sharma"}
                       
                    />

                    <Coordinator
                        name={"Ansh Kasat"}
                       
                    />

                    <Coordinator
                        name={"Mitesh Jangid"}
                        
                    />

                </div>





                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Non-Technical



                    </motion.span>
                </h2>


                <div className="grid grid-cols-2 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 gap-8 flex-wrap">


                    <Coordinator
                        name={"Dakshesh Sura"}
                        
                    />

                    <Coordinator
                        name={"Sadaf Khan"}
                        
                    />

                </div>






                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Cultural



                    </motion.span>
                </h2>





                <div className="grid grid-cols-2 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 gap-x-8 flex-wrap">


                    <Coordinator
                        name={"Vaibhav Upadhyay"}
                        
                    />

                    <Coordinator
                        name={"Snehal Gajraj"}
                        
                    />

                    <Coordinator
                        name={"Kunal Vishnoi"}
                        
                    />

                    <Coordinator
                        name={"Aditya Sharma"}
                        
                    />

                </div>


                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Decoration

                    </motion.span>
                </h2>


                <div className="grid grid-cols-1 w-full max-w-sm font-sans sm:w-auto sm:max-w-full relative z-50 gap-8 flex-wrap">


                    <Coordinator
                        name={"Aditi"}
                        
                    />

                </div>



                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Designing



                    </motion.span>
                </h2>


                <div className="grid grid-cols-2 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 gap-8 flex-wrap">


                    <Coordinator
                        name={"Harsh Garu"}
                       
                    />

                    <Coordinator
                        name={"Aditya Sharma"}
                     
                    />



                </div>




                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Sponsorship



                    </motion.span>
                </h2>


                <div className="grid grid-cols-3 w-full max-w-sm sm:w-auto sm:max-w-full sm:flex sm:justify-center font-sans relative z-50 gap-3 flex-wrap">


                    <Coordinator
                        name={"Sachin Meena"}
                        
                    />

                    <Coordinator
                        name={"Daksh Meena"}
                       
                    />

                    <Coordinator
                        name={"Sneha Swarnkar"}
                        
                    />

                    <Coordinator
                        name={"Kaynat Ansari"}
                        
                    />

                    <Coordinator
                        name={"Shahaan Khan"}
                        
                    />

                </div>






                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Social



                    </motion.span>
                </h2>


                <div className="grid grid-cols-1 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 gap-8 flex-wrap">


                    <Coordinator
                        name={"Juned Khan"}
                       
                    />



                </div>







                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Publicity & Invitation



                    </motion.span>
                </h2>


                <div className="grid grid-cols-1 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 gap-3 flex-wrap">



                    <Coordinator
                        name={"Kaushal Meena"}
                        
                    />


                </div>



                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Website



                    </motion.span>
                </h2>


                <div className="grid grid-cols-1 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 gap-8 flex-wrap">


                    <Coordinator
                        name={"Kavya Gupta"}
                       
                    />



                </div>



                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Photography / Social Media

                    </motion.span>
                </h2>


                <div className="grid grid-cols-2 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 gap-8 flex-wrap">


                    <Coordinator
                        name={"Aniket Raj"}
                        
                    />

                    <Coordinator
                        name={"Kanishk Khandal"}
                       
                    />

                </div>




    



                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-3 mt-6 relative font-sans  tracking-tight">
                    <motion.span
                        initial={{ opacity: 0, y: 100 }} // Start with the title off-screen and invisible
                        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position when in view
                        viewport={{ once: true, amount: 0.2 }} // Trigger the animation once when 20% of the title is visible
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Duration and easing for smooth transition
                        className="relative inline-block"
                    >

                        Literary

                    </motion.span>
                </h2>


                <div className="grid grid-cols-2 w-full max-w-sm sm:w-auto sm:max-w-full font-sans relative z-50 gap-8 flex-wrap">


                    <Coordinator
                        name={"Yashvardhan Sharma"}
                      
                    />

<Coordinator
                        name={"Parineeta Sharma"}
                      
                    />

                </div>


            </main>
            </Parallax>
            <motion.div
                className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <img
                    src="/rb_2149151140.png"
                    alt="Pravah 2025 - Incredible India | SKIT"
                    className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[200px] translate-x-0 opacity-30"
                />
            </motion.div>

            <div className="fixed -bottom-0 left-0 w-full sm:block pointer-events-none -z-20">
                <img
                    src="/rb_2149158780.png"
                    alt="Pravah 2025 - Incredible India | SKIT"
                    className="w-full h-auto object-cover transform translate-y-[0px] sm:translate-y-[300px] translate-x-0 opacity-10"
                />
            </div>
   </ParallaxProvider>
            <DesktopFooter />
        </div>
    )
}

export default Teampravah