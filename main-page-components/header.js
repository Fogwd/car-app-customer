"use client";

import React from "react";

const Header = ({ cars }) => {
  const currentCar = cars[0]; // Get the first car for display

  return (
    <div className="grid grid-cols-4 gap-4 text-black rounded-lg">
      {/* Left Header */}
      <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center w-9/10">
        <h1 className="text-md font-bold mb-4">Find the car you want</h1>

        <div className="grid grid-cols-2 gap-2 mb-6 w-full text-center">
          <div className="px-3 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition duration-300 items-center cursor-pointer">
            New
          </div>
          <div className="px-3 py-2 bg-white text-blue-500 rounded-md border border-blue-500 hover:bg-blue-100 transition duration-300 items-center cursor-pointer">
            Old
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <div className="flex flex-col w-full items-center space-y-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 w-4/5">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Right Header */}
      <div className="col-span-3 flex bg-white rounded-lg h-60">
        {/* Car Image */}
        <div className="w-1/2 flex justify-center items-center p-6 bg-gray-100 h-full rounded-l-lg">
          <img
            src={currentCar.imageSrc}
            alt={currentCar.name}
            className="object-contain rounded-md p-10"
          />
        </div>

        {/* Car Details */}
        <div className="flex flex-col w-1/2 justify-between space-y-4 p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {currentCar.name}
          </h2>

          <div className="space-y-4 text-sm h-full">
            {[{ label: "Price", value: `$${currentCar.price}` }].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex justify-between py-1 text-gray-800 items-top"
                >
                  <span className="text-gray-600 font-medium">
                    {item.label}:
                  </span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              )
            )}
          </div>

          {/* View Detail Button */}
          <a
            href="/product"
            className="mt-6 w-full bg-orange-600 text-white text-center py-3 rounded-lg hover:bg-orange-700 transition duration-300 font-semibold"
          >
            View Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
