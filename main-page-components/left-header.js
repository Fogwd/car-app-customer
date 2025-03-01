import React from "react";

const LeftHeader = () => {
  const [fuelType, setFuelType] = React.useState("");
  const [category, setCategory] = React.useState("");

  return (
    <div className="h-full text-white rounded-l-lg mr-5 flex flex-col justify-between mb-8">
      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-orange-500">Fuel Types</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition duration-300 flex items-center"
            >
              <span className="mr-2">⚡</span>
              Electric
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition duration-300 flex items-center"
            >
              <span className="mr-2">⛽</span>
              Petrol
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition duration-300 flex items-center"
            >
              <span className="mr-2">🛢️</span>
              Diesel
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg shadow-md flex-1 mt-4">
        <h2 className="text-2xl font-bold mb-2 text-orange-500">
          Popular Brands
        </h2>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition duration-300 flex items-center"
            >
              <span className="mr-2">🚗</span>
              Honda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition duration-300 flex items-center"
            >
              <span className="mr-2">🚗</span>
              Honda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition duration-300 flex items-center"
            >
              <span className="mr-2">🚗</span>
              Honda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition duration-300 flex items-center"
            >
              <span className="mr-2">🚗</span>
              Honda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition duration-300 flex items-center"
            >
              <span className="mr-2">🚗</span>
              Honda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition duration-300 flex items-center"
            >
              <span className="mr-2">🚗</span>
              Honda
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftHeader;
