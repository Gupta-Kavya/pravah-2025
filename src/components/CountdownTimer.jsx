import React, { useState, useEffect } from "react";

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
    <div className="text-center">
      {/* Countdown Timer */}
      <div className="flex justify-center space-x-6 sm:space-x-8 mt-8">
        {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
          <div
            key={unit}
            className="w-24 h-24 sm:w-22 sm:h-22 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <p className="text-4xl sm:text-4xl font-extrabold">
              {Object.values(timeLeft)[index] || 0}
            </p>
            <p className="text-xs sm:text-sm font-medium uppercase tracking-wide dynapuff">
              {unit}
            </p>
          </div>
        ))}
      </div>


    </div>
  );
};

const EventCountdown = () => {
  const eventDate = "2025-02-15T00:00:00";

  return (
    <div className="p-0">
      <CountdownTimer eventDate={eventDate} />
    </div>
  );
};

export default EventCountdown;
