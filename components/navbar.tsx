"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener when the dropdown is open
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="flex w-full bg-blue-900 py-3 font-[sans-serif] text-white">
      <div className="mx-auto flex w-4/5 items-center justify-between">
        <h1
          className="cursor-pointer text-xl font-bold"
          onClick={() => router.push("/")}
        >
          CarDistributor
        </h1>

        <div className="mx-auto flex w-2/5 overflow-hidden rounded-md">
          <input
            type="text"
            placeholder="Search Something..."
            className="w-full bg-white px-4 py-3 text-sm text-gray-600 outline-none"
          />

          <button
            type="button"
            className="flex items-center justify-center bg-orange-600 px-5 hover:bg-orange-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-gray-100"
            >
              <path d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </button>

          <button
            type="button"
            className="flex items-center justify-center bg-yellow-500 px-5 hover:bg-yellow-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f3f4f6"
              height="16px"
              width="16px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 455 455"
            >
              <path d="M0,0v455h455V0H0z M259.405,80c17.949,0,32.5,14.551,32.5,32.5s-14.551,32.5-32.5,32.5s-32.5-14.551-32.5-32.5  S241.456,80,259.405,80z M375,375H80v-65.556l83.142-87.725l96.263,68.792l69.233-40.271L375,299.158V375z" />
            </svg>
          </button>
        </div>

        <ul className="flex items-center space-x-6">
          <li>
            <a
              href="/"
              className="relative text-white transition-colors duration-300 hover:text-yellow-400"
            >
              Home
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="relative text-white transition-colors duration-300 hover:text-yellow-400"
            >
              Categories
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="relative text-white transition-colors duration-300 hover:text-yellow-400"
            >
              Explore
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li className="ml-4">
            <Image
              alt="User Avatar"
              src={"/project-image/default-avatar.png"}
              width={40}
              height={40}
              className="cursor-pointer rounded-full"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-40 origin-top-right 
                    rounded-md bg-white shadow-lg focus:outline-none"
                role="menu"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
                    role="menuitem"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
