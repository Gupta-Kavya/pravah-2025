import React from 'react'
import { FaLink, FaHeadset, FaGlobe, FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-transparent top-14 relative">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    {/* <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img
                                src="/logo.png"
                                className="w-10 me-3"
                                alt="FlowBite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                Pravah 2025
                            </span>
                        </a>
                    </div> */}
                    <div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3 mt-6">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white flex align-middle items-center">
                                <FaLink className='mr-1' />
                                Quick Links
                            </h2>
                            <ul className="text-white font-medium text-sm">
                                <li>
                                    <a href="#" className="hover:underline">
                                        Team Pravah
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        AAVEG
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Campus Ambassador
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white flex align-middle items-center">
                                <FaHeadset className='mr-1' />
                                Help Desk
                            </h2>
                            <ul className="text-white font-medium text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:underline"
                                    >
                                        Website
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Accomodation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Bug Report
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Pravah Web Team
                                    </a>
                                </li>
                            </ul>
                        </div>






                        <div className="text-white">
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white flex align-middle items-center">
                                <FaPhoneVolume className="mr-2" />
                                Contact Us
                            </h2>
                            <ul className="space-y-4">
                                <li>
                                    <p className="text-sm text-nowrap">
                                        <span className="font-bold">Chief Coordinator, Pravah'25</span>
                                        <br />
                                        Mr. Rohit Mukherjee -{" "}
                                        <a
                                            href="tel:9414051576"
                                            className="underline hover:text-gray-400 transition"
                                        >
                                            9414051576
                                        </a>
                                    </p>
                                </li>
                                <li className="mb-2">
                                    <p className="text-sm text-nowrap">
                                        <span className="font-bold">Chief Co-Coordinator, Pravah'25</span>
                                        <br />
                                        Mr. Amber Srivastava -{" "}
                                        <a href="tel:9828298243" className="underline hover:text-gray-400 transition">
                                            9828298243
                                        </a>
                                    </p>

                                </li>
                                <li>
                                    <p className="text-sm text-nowrap">
                                        <span className="font-bold">Event Queries</span>
                                        <br />
                                        Dipesh Kaushik -{" "}
                                        <a
                                            href="tel:9001928479"
                                            className="underline hover:text-gray-400 transition"
                                        >
                                            9001928479
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm text-nowrap">
                                        <span className="font-bold">For Website</span>
                                        <br />
                                        Kavya Gupta -{" "}
                                        <a
                                            href="tel:7976227748"
                                            className="underline hover:text-gray-400 transition"
                                        >
                                            9057277613
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>


                        {/* 
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white flex align-middle items-center">
                            <FaGlobe className='mr-1' />
                                Reach Us
                            </h2>
                            <ul className="text-white font-medium">
                                <li>
                                    <a href="https://pravah.skit.ac.in/">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" >
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" >
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </div> */}




                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center">
                        © 2025{" "}
                        <a href="#" className="hover:underline">
                            SKIT, Jaipur
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex sm:justify-center sm:mt-0 space-x-4">

                        <span className="text-sm text-white">
                            Designed and Developed by{" "}
                            <a
                                href="https://pravah.skit.ac.in/"
                                className="text-yellow-100 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Pravah Web Team
                            </a>
                        </span>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer