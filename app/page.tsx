"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout";
import Header from "@/main-page-components/header";
export default function HomePage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sectionIndices, setSectionIndices] = useState<{
    [key: string]: number;
  }>({
    cars: 0,
  });

  const cars = [
    {
      id: 1,
      href: "#",
      imageSrc: "/car-image/toyota-corolla-cross-2024.png",
      imageAlt: "Toyota Corolla Cross 2024",
      name: "Toyota Corolla Cross",
      manufacturer: "Toyota",
      fuel_type: "Gasoline",
      transmission: "Automatic",
      mileage: 30.5,
      seating_capacity: 5,
      price: "27,000",
    },
    {
      id: 2,
      href: "#",
      imageSrc: "/car-image/toyota-corolla-cross-2024.png",
      imageAlt: "Honda Civic 2024",
      name: "Honda Civic",
      manufacturer: "Honda",
      fuel_type: "Gasoline",
      transmission: "Automatic",
      mileage: 32.1,
      seating_capacity: 5,
      price: "25,500",
    },
    {
      id: 3,
      href: "#",
      imageSrc: "/car-image/toyota-corolla-cross-2024.png",
      imageAlt: "Mazda CX-5 2024",
      name: "Mazda CX-5",
      manufacturer: "Mazda",
      fuel_type: "Gasoline",
      transmission: "Automatic",
      mileage: 28.4,
      seating_capacity: 5,
      price: "29,000",
    },
    {
      id: 4,
      href: "#",
      imageSrc: "/car-image/toyota-corolla-cross-2024.png",
      imageAlt: "Ford Mustang 2024",
      name: "Ford Mustang",
      manufacturer: "Ford",
      fuel_type: "Gasoline",
      transmission: "Manual",
      mileage: 24.5,
      seating_capacity: 4,
      price: "42,000",
    },
    {
      id: 5,
      href: "#",
      imageSrc: "/car-image/toyota-corolla-cross-2024.png",
      imageAlt: "Tesla Model 3 2024",
      name: "Tesla Model 3",
      manufacturer: "Tesla",
      fuel_type: "Electric",
      transmission: "Automatic",
      mileage: 132.0,
      seating_capacity: 5,
      price: "39,990",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentCar = cars[currentIndex];

  const handleNavigation = (section: string, direction: "left" | "right") => {
    setSectionIndices((prev) => {
      const newIndex =
        direction === "left" ? prev[section] - 1 : prev[section] + 1;
      return {
        ...prev,
        [section]: Math.max(0, Math.min(newIndex, cars.length - 4)),
      };
    });
  };

  return (
    <Layout>
      <div className="flex flex-col items-center bg-[#efefff] text-black">
        <div className="container my-5 w-4/5">
          <Header cars={cars} />
        </div>
      </div>
    </Layout>
  );
}
