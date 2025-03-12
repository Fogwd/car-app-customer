"use client";

import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";

const CarDetails = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [similarCarsIndex, setSimilarCarsIndex] = useState(0);

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

  const handleNavigation = (direction: "left" | "right") => {
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
      <div className="flex-col items-center justify-center px-4 py-12 md:flex">
        <div className="w-full max-w-6xl items-start justify-center md:flex">
          <Image
            className="w-full"
            alt={car.imageAlt}
            src={car.imageSrc}
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div className="mt-6 md:ml-6 md:mt-0 md:w-1/2 lg:ml-8 xl:w-2/5">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm text-gray-600">{car.manufacturer}</p>
            <h1 className="mt-2 text-xl font-semibold text-gray-800 lg:text-2xl">
              {car.name}
            </h1>
          </div>
          <div className="border-b border-gray-200 py-4">
            <p className="text-base text-gray-800">
              Fuel Type: {car.fuel_type}
            </p>
            <p className="mt-2 text-base text-gray-800">
              Transmission: {car.transmission}
            </p>
            <p className="mt-2 text-base text-gray-800">
              Mileage: {car.mileage} MPG
            </p>
            <p className="mt-2 text-base text-gray-800">
              Seating Capacity: {car.seating_capacity}
            </p>
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Price: {car.price}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button className="mt-4 w-4/5 rounded-md bg-blue-800 py-4 text-white hover:bg-blue-900">
              Contact seller
            </button>

            <button
              className="ml-8 mt-4 w-1/5 text-red-500 hover:text-red-700"
              onClick={toggleFavorite}
            >
              {isFavorited ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-12 text-orange-500"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="size-12 text-orange-500"
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

      <div className="flex items-center justify-between">
        <div className="mt-10 flex space-x-6 overflow-x-auto">
          {similarCars.map((similarCar, index) => (
            <div
              key={index}
              className="min-w-[250px] rounded-lg border bg-white p-4 shadow-md"
            >
              <Image
                className="h-40 w-full object-contain"
                alt={similarCar.imageAlt}
                src={similarCar.imageSrc}
                layout="responsive"
                width={250}
                height={160}
              />
              <p className="mt-2 text-lg font-semibold">{similarCar.name}</p>
              <p className="text-sm text-gray-600">{similarCar.manufacturer}</p>
              <p className="mt-2 text-lg font-semibold text-gray-800">
                {similarCar.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CarDetails;
