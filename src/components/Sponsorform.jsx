import React from 'react';

const Sponsorform = () => {
  return (
    <div className="w-full flex justify-center items-center mt-40 mb-20 ">
      <form
        className="w-full max-w-6xl bg-white p-8 shadow-lg rounded-lg flex flex-col border-l-8 border-orange-500 space-y-6"
      >
        <div className="grid grid-cols-3 gap-6 w-full">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="font-medium text-black">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          
          {/* Last Name */}
          <div className="flex flex-col">
            <label className="font-medium text-black">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Mobile No */}
          <div className="flex flex-col">
            <label className="font-medium text-black">Mobile No</label>
            <input
              type="text"
              placeholder="Mobile No"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email ID */}
          <div className="flex flex-col">
            <label className="font-medium text-black">Email ID</label>
            <input
              type="email"
              placeholder="Email ID"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="font-medium text-black">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Designation */}
          <div className="flex flex-col">
            <label className="font-medium text-black">Designation</label>
            <input
              type="text"
              placeholder="Designation"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Company Full Address */}
          <div className="flex flex-col col-span-3">
            <label className="font-medium text-black">Company Full Address</label>
            <input
              type="text"
              placeholder="Company Full Address"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Monetary / Non-Monetary */}
          <div className="flex flex-col">
            <label className="font-medium text-black">Monetary / Non-Monetary</label>
            <select
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="monetary">Monetary</option>
              <option value="non-monetary">Non-Monetary</option>
            </select>
          </div>

          {/* Queries */}
          <div className="flex flex-col col-span-2">
            <label className="font-medium text-black">Queries</label>
            <textarea
              placeholder="Describe your Queries"
              rows="2"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          {/* Your Consent */}
          <div className="flex flex-col col-span-3">
            <label className="font-medium text-black">Your Consent</label>
            <textarea
              placeholder="Describe here"
              rows="2"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
          >
            Submit Proposal
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sponsorform;
