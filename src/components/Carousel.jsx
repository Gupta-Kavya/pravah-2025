import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Carousel = ({ celebrities }) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % celebrities.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + celebrities.length) % celebrities.length
        );
    };

    const images = [...celebrities, ...celebrities];

    return (
        <div className="relative w-full h-96 flex items-center justify-center overflow-hidden lg:mb-5 2xl:mb-28">
            <button
                className="absolute left-4 bg-black p-2 rounded-full shadow-md z-20 text-white font-extrabold"
                onClick={handlePrev}
            >
                &#8249;
            </button>
            <div className="relative w-full flex items-center justify-center overflow-hidden ">
                <motion.div
                    className="flex items-center transition-transform ease-in-out duration-3000 "
                    style={{
                        transform: `translateX(-${currentIndex * 160}px)`,
                        transitionDuration: "3000ms",
                    }}
                >
                    {images.map((celebrity, index) => (
                        <div className="flex flex-col">
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center w-44 h-44 space-y-2 mx-7"
                            >
                                <div className="w-44 h-44 rounded-full border-4 p-1 flex items-center justify-center overflow-hidden border-yellow-500 relative">
                                    <img
                                        src={celebrity.image}
                                        alt={celebrity.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-20 rounded-full"></div>
                                </div>

                            </motion.div>

                            <div className="text-center text-base text-black px-3 py-1 font-semibold">
                                {celebrity.name}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            <button
                className="absolute right-4 p-2 rounded-full shadow-md z-20 bg-black text-white font-extrabold"
                onClick={handleNext}
            >
                &#8250;
            </button>
        </div>
    );
};

export default Carousel;
