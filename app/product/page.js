"use client";

import React, { useState } from "react";
import Layout from "@/components/layout";

const CarDetails = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const car = {
    imageSrc: "/car-image/toyota-corolla-cross-2024.png",
    imageAlt: "Toyota Corolla Cross 2024",
    name: "Toyota Corolla Cross",
    manufacturer: "Toyota",
    fuel_type: "Gasoline",
    transmission: "Automatic",
    mileage: 30.5,
    seating_capacity: 5,
    price: "$27,000",
  };

  const similarCars = [
    {
      imageSrc: "/car-image/toyota-corolla-cross-2024.png",
      imageAlt: "Honda CR-V 2024",
      name: "Honda CR-V",
      manufacturer: "Honda",
      price: "$28,500",
    },
    {
      imageSrc: "/car-image/toyota-corolla-cross-2024.png",
      imageAlt: "Honda CR-V 2024",
      name: "Honda CR-V",
      manufacturer: "Honda",
      price: "$28,500",
    },
    {
      imageSrc: "/car-image/toyota-corolla-cross-2024.png",
      imageAlt: "Honda CR-V 2024",
      name: "Honda CR-V",
      manufacturer: "Honda",
      price: "$28,500",
    },
    {
      imageSrc: "/car-image/toyota-corolla-cross-2024.png",
      imageAlt: "Honda CR-V 2024",
      name: "Honda CR-V",
      manufacturer: "Honda",
      price: "$28,500",
    },

  ];

  const handleNavigation = (direction) => {
    setSimilarCarsIndex((prev) => {
      const newIndex = direction === "left" ? prev - 1 : prev + 1;
      return Math.max(0, Math.min(newIndex, similarCars.length - 4));
    });
  };


  const toggleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };

  return (
    <Layout>
      <div className="md:flex flex-col items-center justify-center py-12 px-4">
        <div className="md:flex items-start justify-center w-full max-w-6xl">
          <div className="xl:w-2/6 lg:w-2/5 w-80 mr-40 md:block hidden">
            <img className="w-full" alt={car.imageAlt} src={car.imageSrc} />
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm text-gray-600">{car.manufacturer}</p>
              <h1 className="lg:text-2xl text-xl font-semibold text-gray-800 mt-2">
                {car.name}
              </h1>
            </div>
            <div className="py-4 border-b border-gray-200">
              <p className="text-base text-gray-800">
                Fuel Type: {car.fuel_type}
              </p>
              <p className="text-base text-gray-800 mt-2">
                Transmission: {car.transmission}
              </p>
              <p className="text-base text-gray-800 mt-2">
                Mileage: {car.mileage} MPG
              </p>
              <p className="text-base text-gray-800 mt-2">
                Seating Capacity: {car.seating_capacity}
              </p>
              <p className="text-lg font-semibold text-gray-800 mt-4">
                Price: {car.price}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <button className="text-white bg-blue-800 w-4/5 py-4 mt-4 hover:bg-blue-900 rounded-md">
                Contact seller
              </button>

              <button
                className="w-1/5 ml-8 text-red-500 hover:text-red-700 mt-4"
                onClick={toggleFavorite}
              >
                {isFavorited ? (
  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12 text-orange-500"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                ) : (
              
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-12 h-12 text-orange-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
         
          <div className="flex overflow-x-auto space-x-6 mt-10">
            {similarCars.map((similarCar, index) => (
              <div
                key={index}
                className="min-w-[250px] border p-4 rounded-lg shadow-md bg-white"
              >
                <img
                  className="w-full h-40 object-contain"
                  alt={similarCar.imageAlt}
                  src={similarCar.imageSrc}
                />
                <p className="text-lg font-semibold mt-2">{similarCar.name}</p>
                <p className="text-sm text-gray-600">
                  {similarCar.manufacturer}
                </p>
                <p className="text-lg font-semibold text-gray-800 mt-2">
                  {similarCar.price}
                </p>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </Layout>
  );
};

export default CarDetails;