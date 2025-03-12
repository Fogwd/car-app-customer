"use client";

import React from "react";
import Image from "next/image";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { DropdownItem, Dropdown } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["dropdown"] = {};

interface Car {
  imageSrc: string;
  name: string;
  price: number;
}

interface HeaderProps {
  cars: Car[];
}

const Header: React.FC<HeaderProps> = ({ cars }) => {
  const currentCar = cars[0]; // Get the first car for display

  return (
    <div className="grid grid-cols-4 gap-4 rounded-lg text-black">
      {/* Left Header */}

      <div className="flex w-9/10 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md">
        <h1 className="mb-4 text-base font-bold">Find the car you want</h1>

        <div className="mb-6 grid w-full grid-cols-2 gap-2 text-center">
          <div className="cursor-pointer items-center rounded-md bg-blue-800 px-3 py-2 text-white transition duration-300 hover:bg-blue-900">
            New
          </div>
          <div className="cursor-pointer items-center rounded-md border border-blue-500 bg-white px-3 py-2 text-blue-500 transition duration-300 hover:bg-blue-100">
            Old
          </div>
        </div>

        <Dropdown label="Brand" theme={customTheme}>
          <DropdownItem>BMW</DropdownItem>
          <DropdownItem>Toyota</DropdownItem>
          <DropdownItem>Mercedes</DropdownItem>
          <DropdownItem>Audi</DropdownItem>
        </Dropdown>

        <div className="rounded-lg bg-white p-4">
          <div className="flex w-full flex-col items-center space-y-4">
            <button className="w-4/5 rounded bg-green-500 px-4 py-2 text-white transition duration-300 hover:bg-green-600">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Right Header */}
      <div className="relative col-span-3 flex h-60 rounded-lg bg-white">
        {/* Car Image */}
        <div className="relative h-full w-2/5 bg-gray-50">
          <Image
            src={currentCar.imageSrc}
            alt={currentCar.name}
            className="rounded-md p-10"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Car Details */}
        <div className="flex w-3/5 flex-col justify-between space-y-4 p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {currentCar.name}
          </h2>

          <div className="h-full space-y-4 text-sm">
            {[{ label: "Price", value: `$${currentCar.price}` }].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex justify-between py-1 text-gray-800"
                >
                  <span className="font-medium text-gray-600">
                    {item.label}:
                  </span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ),
            )}
          </div>

          {/* View Detail Button */}
          <a
            href="/product"
            className="mt-6 w-full rounded-lg bg-orange-600 py-3 text-center font-semibold text-white transition duration-300 hover:bg-orange-700"
          >
            View Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
