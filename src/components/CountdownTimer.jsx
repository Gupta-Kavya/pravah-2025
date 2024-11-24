import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="justify-center space-x-4 hidden sm:flex">
        <div className="w-24 h-24 bg-white bg-opacity-10 border-2 border-white rounded-lg flex flex-col items-center justify-center p-4 shadow-md">
          <p className="text-3xl font-bold text-white">{timeLeft.days || 0}</p>
          <p className="text-sm text-white font-bold">Days</p>
        </div>
        <div className="w-24 h-24 bg-white bg-opacity-10 border-2 border-white rounded-lg flex flex-col items-center justify-center p-4 shadow-md">
          <p className="text-3xl font-bold text-white">{timeLeft.hours || 0}</p>
          <p className="text-sm text-white font-bold">Hours</p>
        </div>
        <div className="w-24 h-24 bg-white bg-opacity-10 border-2 border-white rounded-lg flex flex-col items-center justify-center p-4 shadow-md">
          <p className="text-3xl font-bold text-white">{timeLeft.minutes || 0}</p>
          <p className="text-sm text-white font-bold">Minutes</p>
        </div>
        <div className="w-24 h-24 bg-white bg-opacity-10 border-2 border-white rounded-lg flex flex-col items-center justify-center p-4 shadow-md">
          <p className="text-3xl font-bold text-white">{timeLeft.seconds || 0}</p>
          <p className="text-sm text-white font-bold">Seconds</p>
        </div>


      </div>

      <div className="mt-7 text-center text-white font-bold text-xl sm:text-3xl kanit-extrabold">
        <span className="text-lg text-white-400">15<sup>th</sup></span>
        <span className="mx-2 text-lg">-</span>
        <span className="text-lg text-white-400">22<sup>nd</sup></span>
        <span className="text-lg text-white"> February, 2025</span>
      </div>


    </>
  );
};

const EventCountdown = () => {
  const eventDate = "2025-02-15T00:00:00";

  return (
    <div className="p-8 hidden sm:block">
      <h2 className="text-center text-white mb-6 mt-6 kanit-thin">Step into the allure of India! Pravah 2025 begins in...</h2>
      <CountdownTimer eventDate={eventDate} />
    </div>
  );
};

export default EventCountdown;
