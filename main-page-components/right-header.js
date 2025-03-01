import React from "react";

const RightHeader = ({ car }) => {
  return (
    <div className="bg-white flex justify-between rounded-lg shadow-md gap-6 col-span-2">
      {/* Car Image */}
      <div className="md:w-1/2 bg-gray-100 roundled-l-lg flex justify-center items-center p-6">
        <img
          src={car.imageSrc}
          alt={car.name}
          className="w-full h-auto object-contain rounded-md"
        />
      </div>

      {/* Car Details */}
      <div className="flex flex-col md:w-1/2 justify-between space-y-4 p-6">
        <h2 className="text-3xl font-bold text-gray-900">{car.name}</h2>

        <div className="space-y-4">
          {[
            { label: "Manufacturer", value: car.manufacturer },
            { label: "Fuel Type", value: car.fuel_type },
            { label: "Transmission", value: car.transmission },
            { label: "Mileage", value: `${car.mileage} km/l` },
            {
              label: "Seating Capacity",
              value: `${car.seating_capacity} seats`,
            },
            { label: "Price", value: `$${car.price}` },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-300 py-2 text-gray-800"
            >
              <span className="text-gray-600 font-medium">{item.label}:</span>
              <span className="font-semibold">{item.value}</span>
            </div>
          ))}
        </div>

        {/* View Detail Button */}
        <a
          href="/product"
          className="mt-6 w-full bg-orange-600 text-white text-center py-3 rounded-lg hover:bg-orange-700 transition duration-300 font-semibold shadow-md"
        >
          View Detail
        </a>
      </div>
    </div>
  );
};

export default RightHeader;
