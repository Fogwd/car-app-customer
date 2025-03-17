"use client";

import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

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

        <div className="mb-6 grid w-9/10 grid-cols-2 gap-2 text-center">
          <Button className="border border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white">
            New
          </Button>
          <Button className="border border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white">
            Old
          </Button>
        </div>

        <Select>
          <SelectTrigger className="w-9/10">
            <SelectValue placeholder="Select a brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Toyota">Toyota</SelectItem>
              <SelectItem value="Ford">Ford</SelectItem>
              <SelectItem value="Honda">Honda</SelectItem>
              <SelectItem value="Nissan">Nissan</SelectItem>
              <SelectItem value="Volkswagen">Volkswagen</SelectItem>
              <SelectItem value="Chevrolet">Chevrolet</SelectItem>
              <SelectItem value="Hyundai">Hyundai</SelectItem>
              <SelectItem value="Kia">Kia</SelectItem>
              <SelectItem value="Subaru">Subaru</SelectItem>
              <SelectItem value="Mazda">Mazda</SelectItem>
              <SelectItem value="BMW">BMW</SelectItem>
              <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
              <SelectItem value="Audi">Audi</SelectItem>
              <SelectItem value="Lexus">Lexus</SelectItem>
              <SelectItem value="Porsche">Porsche</SelectItem>
              <SelectItem value="Tesla">Tesla</SelectItem>
              <SelectItem value="Jaguar">Jaguar</SelectItem>
              <SelectItem value="Land Rover">Land Rover</SelectItem>
              <SelectItem value="Volvo">Volvo</SelectItem>
              <SelectItem value="Mitsubishi">Mitsubishi</SelectItem>
              <SelectItem value="Chrysler">Chrysler</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="mt-5 bg-blue-600 hover:bg-blue-900">
          <Search /> Search
        </Button>
      </div>

      {/* Right Header */}
      <div className="relative col-span-3 flex h-60 rounded-lg bg-white">
        {/* Car Image */}
        <div className="relative h-full w-2/5 rounded-lg bg-gray-50">
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
