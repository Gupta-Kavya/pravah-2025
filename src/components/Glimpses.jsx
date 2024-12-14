import React, { useState } from "react";
import { motion } from "framer-motion";

const Glimpses = () => {
    const images = {
        thirak: [
            [
                "Thirak/19.jpeg",
                "Thirak/22.jpeg",
                "Thirak/3.jpg",
                "Thirak/4.jpg",
                "Thirak/5.JPG",
                "Thirak/6.JPG"
            ],
            [
                "Thirak/20.jpeg",
                "Thirak/8.jpg",
                "Thirak/9.jpg",
                "Thirak/10.jpg",
                "Thirak/11.JPG",
                "Thirak/12.JPG"
            ],
            [
                "Thirak/21.jpeg",
                "Thirak/14.jpg",
                "Thirak/15.jpg",
                "Thirak/16.jpg",
                "Thirak/17.JPG",
                "Thirak/18.JPG"
            ],
        ],
        rawaz: [
            [
                "Rawaz/1.JPG",
                "Rawaz/2.JPG",
                "Rawaz/3.JPG",
                "Rawaz/4.JPG",
                "Rawaz/5.JPG",
                "Rawaz/6.JPG",
            ],
            [
                "Rawaz/7.JPG",
                "Rawaz/8.JPG",
                "Rawaz/9.JPG",
                "Rawaz/10.JPG",
                "Rawaz/11.JPG",
                "Rawaz/12.JPG",
            ],
            [
                "Rawaz/13.JPG",
                "Rawaz/14.JPG",
                "Rawaz/15.JPG",
                "Rawaz/16.JPG",
                "Rawaz/17.JPG",
                "Rawaz/18.JPG",
            ],
        ],
        djnight: [
            [
                "djnight/1.JPG",
                "djnight/2.JPG",
                "djnight/3.JPG",
                "djnight/4.JPG",
                "djnight/5.JPG",
                "djnight/6.JPG",
            ],
            [
                "djnight/7.JPG",
                "djnight/15.JPG",
                "djnight/9.JPG",
                "djnight/10.JPG",
                "djnight/11.JPG",
                "djnight/12.JPG",
            ],
            [
                "djnight/13.JPG",
                "djnight/14.JPG",
                "djnight/8.JPG",
                "djnight/16.JPG",
                "djnight/17.JPG",
                "djnight/18.JPG",
            ],
        ],
        sur: [
            [
                "https://pravah.skit.ac.in/_next/static/media/7.9602e318.webp",
                "https://pravah.skit.ac.in/_next/static/media/12.2e2a2ed5.webp",
                "https://pravah.skit.ac.in/_next/static/media/9.4dc835ab.webp",
                "https://pravah.skit.ac.in/_next/static/media/14.b422f5b8.webp",
                "https://pravah.skit.ac.in/_next/static/media/1.e0ce2e93.webp",
                "https://pravah.skit.ac.in/_next/static/media/10.75a59fc5.webp"
            ],
            [
                "https://pravah.skit.ac.in/_next/static/media/16.72bbc5df.webp",
                "https://pravah.skit.ac.in/_next/static/media/6.5bd28590.webp",
                "https://pravah.skit.ac.in/_next/static/media/3.afbd8132.webp",
                "https://pravah.skit.ac.in/_next/static/media/4.560badd9.webp",
                "https://pravah.skit.ac.in/_next/static/media/17.708da01a.webp"
            ],
            [
                "https://pravah.skit.ac.in/_next/static/media/11.74db53b3.webp",
                "https://pravah.skit.ac.in/_next/static/media/5.052f6cfc.webp",
                "https://pravah.skit.ac.in/_next/static/media/13.a2a2b24e.webp",
                "https://pravah.skit.ac.in/_next/static/media/2.aee62845.webp",
                "https://pravah.skit.ac.in/_next/static/media/8.9b7a19e6.webp",
                "https://pravah.skit.ac.in/_next/static/media/15.88341168.webp"
            ],
        ],
        celebnight: [
            [
                "https://pravah.skit.ac.in/_next/static/media/1.34cb6058.webp",
                "https://pravah.skit.ac.in/_next/static/media/2.d8d896a3.webp",
                "https://pravah.skit.ac.in/_next/static/media/3.dd4b7df0.webp",
                "https://pravah.skit.ac.in/_next/static/media/4.6f770fbc.webp",
                "https://pravah.skit.ac.in/_next/static/media/5.273040f3.webp",
                "https://pravah.skit.ac.in/_next/static/media/6.e96bb34a.webp"
            ],
            [
                "https://pravah.skit.ac.in/_next/static/media/7.cfb544f3.webp",
                "https://pravah.skit.ac.in/_next/static/media/8.428a06de.webp",
                "https://pravah.skit.ac.in/_next/static/media/9.9f47038f.webp",
                "https://pravah.skit.ac.in/_next/static/media/10.2122d74f.webp",
                "https://pravah.skit.ac.in/_next/static/media/11.caa46a4a.webp"
            ],
            [
                "https://pravah.skit.ac.in/_next/static/media/12.0f65612d.webp",
                "https://pravah.skit.ac.in/_next/static/media/5.052f6cfc.webp",
                "https://pravah.skit.ac.in/_next/static/media/6.e96bb34a.webp",
                "https://pravah.skit.ac.in/_next/static/media/5.273040f3.webp",
                "https://pravah.skit.ac.in/_next/static/media/10.2122d74f.webp",
                "https://pravah.skit.ac.in/_next/static/media/11.caa46a4a.webp"
            ],
        ],
    };

    const [selectedCategory, setSelectedCategory] = useState("djnight");
    const [isFading, setIsFading] = useState(false);


    const scrollVariants = (speed) => ({
        animate: {
            y: ["0%", "-100%"],
            transition: {
                duration: speed,
                ease: "linear",
                repeat: Infinity,
            },
        },
    });

    const handleCategoryChange = (category) => {
        if (category !== selectedCategory) {
            setIsFading(true);
            setTimeout(() => {
                setSelectedCategory(category);
                setIsFading(false);
            }, 500);
        }
    };


    return (
        <div className="relative h-screen overflow-hidden bg-black text-white justify-center hidden sm:flex" style={{zIndex:"100"}}>

            
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>
            <h1
                className="absolute z-20 flex items-center justify-center cookie-regular bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300"
                style={{
                    height: "20vh",
                    textAlign: "center",
                    color: "white",
                    fontSize: "50px",
                }}
            >
                Pravah'25 Glimpses
            </h1>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

            {/* Category Buttons */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-16 z-20 cookie-regular">
                {["thirak", "rawaz", "djnight", "sur", "celebnight"].map((category) => (
                    <button
                        key={category}
                        className={`relative text-3xl font-bold transition-all duration-500 ${selectedCategory === category
                            ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300"
                            : "text-white"
                            }`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {/* Button Text */}
                        {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, " $1")}

                        {/* Underline */}
                        <span
                            className={`absolute bottom-0 left-1/2 w-0 h-1 transition-all duration-500 transform -translate-x-1/2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full ${selectedCategory === category ? "w-full" : "w-0"
                                }`}
                        ></span>
                    </button>
                ))}
            </div>



            <div
                className={`flex space-x-4 h-full transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"
                    }`}
            >

                {images[selectedCategory].map((columnImages, columnIndex) => (
                    <div
                        key={columnIndex}
                        className="w-1/3 flex-shrink-1 relative overflow-hidden h-full px-2"
                    >
                        <motion.div
                            variants={scrollVariants(columnIndex + 16)} animate="animate"
                            className="flex flex-col"
                        >
                            {columnImages.map((image, imageIndex) => (
                                <img
                                    key={imageIndex}
                                    src={image}
                                    alt={`Gallery Image ${imageIndex}`}
                                    className="rounded-lg shadow-lg w-full h-auto mb-4 border border-black"
                                    style={{
                                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Glimpses;