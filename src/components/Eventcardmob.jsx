import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Eventcardmob = ({ events }) => {
  const [activeEvent, setActiveEvent] = useState(null);

  const handleCardClick = (event) => {
    setActiveEvent(event);
  };

  const closeDrawer = () => {
    setActiveEvent(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:hidden">
      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="relative overflow-hidden rounded-xl cursor-pointer bg-gray-800 group shadow-lg hover:scale-105 transform transition-all duration-300"
            style={{
              backgroundImage: `url(${event.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '140px', // Reduced height for a compact look
              width: '100%',   // Full width of the parent container
            }}
            onClick={() => handleCardClick(event)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
          >
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-bold mb-3 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {event.name}
              </h3>
            </div>

            {/* Highlight border when active */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-500 rounded-xl transition-all"></div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Drawer (Only shown when a card is clicked) */}
      {activeEvent && (
        <motion.div
          className="fixed bottom-0 left-0 w-full bg-white p-6 rounded-t-3xl shadow-lg z-50"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{activeEvent.name}</h3>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={closeDrawer}
            >
              Close
            </button>
          </div>
          <p className="text-sm text-gray-600">{activeEvent.description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Eventcardmob;
