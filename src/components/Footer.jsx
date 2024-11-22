import React from 'react'
import { FaLink, FaHeadset, FaGlobe, FaPhoneVolume  } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-transparent top-14 relative">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img
                                src="/logo.png"
                                className="w-10 me-3"
                                alt="FlowBite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                Pravah 2025
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white flex align-middle items-center">
                                <FaLink className='mr-1' />
                                Quick Links
                            </h2>
                            <ul className="text-white font-medium text-sm">
                                <li>
                                    <a href="https://flowbite.com/" className="hover:underline">
                                        Team Pravah
                                    </a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">
                                        AAVEG
                                    </a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">
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
                                        href="https://github.com/themesberg/flowbite"
                                        className="hover:underline"
                                    >
                                        Website
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                                        Accomodation
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                                        Bug Report
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
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
        Mr. Abhishek Gupta -{" "}
        <a
          href="tel:9462326804"
          className="underline hover:text-gray-400 transition"
        >
          9462326804
        </a>
      </p>
    </li>
    <li>
      <p className="text-sm text-nowrap">
        <span className="font-bold">Event Queries</span>
        <br />
        Paridhi Jain -{" "}
        <a
          href="tel:9929425337"
          className="underline hover:text-gray-400 transition"
        >
          9929425337
        </a>
      </p>
    </li>
    <li>
      <p className="text-sm text-nowrap">
        <span className="font-bold">Website Head</span>
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
    <a href="https://flowbite.com/" className="hover:underline">
      SKIT, Jaipur
    </a>
    . All Rights Reserved.
  </span>
  <div className="flex sm:justify-center sm:mt-0 space-x-4">

    <span className="text-sm text-white">
      Designed and Developed by{" "}
      <a
        href="https://pravah.skit.ac.in/"
        className="text-yellow-600 hover:underline"
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